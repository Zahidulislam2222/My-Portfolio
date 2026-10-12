"""Preview or synchronize one registered project's Docs, PDF and portfolio bundle.

Examples: python scripts/project_sync.py status --online
          python scripts/project_sync.py sync adrevora-ai --apply --reviewed
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import tempfile
import uuid
from collections.abc import Callable, Iterator
from contextlib import contextmanager
from datetime import datetime, timezone
from functools import partial
from pathlib import Path
from typing import Any

from project_sync_google import Google
from project_sync_settings import Settings, SyncError, read_json, unique_object


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def file_digest(path: Path | None) -> str | None:
    return digest(path.read_bytes()) if path is not None and path.is_file() else None


def json_bytes(value: Any) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode("utf-8")


def safe_call(callback: Callable[[], Any]) -> Any:
    try:
        return callback()
    except SyncError:
        raise
    except Exception as exc:
        raise SyncError(f"{type(exc).__name__}: operation failed. Check configuration, credentials, network and saved backups.") from exc


def public_check(text: str) -> None:
    # Inspect decoded JSON values too: quoted keys and escaped Windows paths
    # must not evade the same checks applied to plain document text.
    credential_field = re.compile(r"(?i)(?:[\w-]*password|api[_ -]?key|client_secret|[\w-]*token|[\w-]*secret|signing[_ -]?key|private[_ -]?key|authorization)")

    def values(value: Any) -> list[str]:
        if isinstance(value, dict):
            if any(credential_field.fullmatch(str(key)) and val not in (None, "", [], {}) for key, val in value.items()):
                raise SyncError("Public JSON contains a credential-labelled field. Review it before publishing.")
            return [item for key, val in value.items() for item in [str(key) + "=" + str(val), *values(val)]]
        if isinstance(value, list):
            return [item for val in value for item in values(val)]
        return [str(value)]

    try:
        decoded = json.loads(text)
    except json.JSONDecodeError:
        decoded = None
    if decoded is not None:
        text += "\n" + "\n".join(values(decoded))
    patterns = [r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----",
                r"\b(?:sk|ghp|github_pat)[-_][A-Za-z0-9_-]{16,}",
                r"\bAKIA[0-9A-Z]{16}\b", r"\bAIza[\w-]{30,}",
                r"(?i)\b(?:[\w-]*password|api[_ -]?key|client_secret|[\w-]*token|[\w-]*secret|signing[_ -]?key|private[_ -]?key)\s*[\"']?\s*[=:]\s*[\"']?[^\s\"']+",
                r"(?i)\bauthorization\s*[:=]\s*[\"']?Bearer\s+\S+",
                r"(?i)(?:[a-z]:[\\/](?:users|website)|/home/|/mnt/[a-z]/|/var/www/)",
                r"https?://[^/\s]+:[^/@\s]+@"]
    if any(re.search(pattern, text) for pattern in patterns):
        raise SyncError("Public content contains secret-like material or private filesystem paths. Review it before publishing.")


def validate_pdf(data: bytes) -> dict[str, Any]:
    import pymupdf as fitz

    if not data.startswith(b"%PDF-"):
        raise SyncError("Export is not a PDF; previous files preserved.")
    with fitz.open(stream=data, filetype="pdf") as pdf:
        if pdf.needs_pass or pdf.is_repaired or len(pdf) == 0:
            raise SyncError("PDF is encrypted, damaged or empty; previous files preserved.")
        text = "\n".join(page.get_text() for page in pdf)
        if not text.strip():
            raise SyncError("PDF has no readable text; previous files preserved.")
        public_check(text)
        return {"pages": len(pdf), "bytes": len(data), "sha256": digest(data)}


def prepare_pdf(data: bytes, entry: dict[str, Any]) -> bytes:
    """Apply explicitly reviewed project redactions before public validation."""
    if not entry.get("public_redactions"):
        return data
    import pymupdf as fitz

    if not data.startswith(b"%PDF-"):
        raise SyncError("Export is not a PDF; previous files preserved.")
    patterns = [re.compile(pattern) for pattern in entry["public_redactions"]]
    with fitz.open(stream=data, filetype="pdf") as pdf:
        if pdf.needs_pass or pdf.is_repaired or len(pdf) == 0:
            raise SyncError("PDF is encrypted, damaged or empty; previous files preserved.")
        changed = False
        for page in pdf:
            # Character coordinates tie each regex span to its exact occurrence;
            # searching by text would also redact identical text elsewhere.
            for block_data in page.get_text("rawdict", flags=fitz.TEXTFLAGS_TEXT)["blocks"]:
                for line in block_data.get("lines", []):
                    characters = [char for span in line["spans"] for char in span["chars"]]
                    text = "".join(char["c"] for char in characters)
                    boxes = [char["bbox"] for char in characters for _ in char["c"]]
                    for pattern in patterns:
                        for match in pattern.finditer(text):
                            if match.start() == match.end():
                                raise SyncError("Reviewed PDF redactions must match non-empty text.")
                            rectangle = fitz.Rect(boxes[match.start()])
                            for box in boxes[match.start() + 1:match.end()]:
                                rectangle |= fitz.Rect(box)
                            page.add_redact_annot(rectangle, text=entry["public_redaction_label"], fill=(1, 1, 1))
                            changed = True
            page.apply_redactions(images=0, graphics=0)
        return pdf.tobytes(garbage=4, deflate=True) if changed else data


def block(path: Path, marker: str) -> tuple[str, int, int, Any]:
    text = path.read_text(encoding="utf-8")
    if text.count(marker) != 1:
        raise SyncError("Portfolio block marker is missing or ambiguous.")
    start = text.index(marker) + len(marker)
    try:
        value, length = json.JSONDecoder(object_pairs_hook=unique_object).raw_decode(text[start:])
    except json.JSONDecodeError as exc:
        raise SyncError("Portfolio data block is not JSON. Review its format first.") from exc
    return text, start, start + length, value


def merge(old: dict[str, Any], patch: dict[str, Any]) -> dict[str, Any]:
    result = dict(old)
    for key, value in patch.items():
        result[key] = merge(result[key], value) if isinstance(result.get(key), dict) and isinstance(value, dict) else value
    return result


def bundle_changes(settings: Settings, entry: dict[str, Any]) -> dict[Path, bytes]:
    if not entry.get("bundle"):
        return {}
    bundle = read_json(settings.path(entry["bundle"]))
    if set(bundle) != set(settings.targets):
        raise SyncError("Bundle must include portfolio, studio and evidence sections.")
    project_id = entry["id"]
    if (bundle["portfolio"] is not None and bundle["portfolio"].get("id") != project_id) or bundle["studio"].get("id") != project_id:
        raise SyncError("Bundle project IDs do not match the registry.")
    if bundle["evidence"].get("document", {}).get("file") != entry["pdf"]:
        raise SyncError("Bundle PDF filename does not match the stable registry filename.")
    public_check(json.dumps(bundle))
    changes = {}
    for name, target in settings.targets.items():
        if bundle[name] is None:
            continue
        path = settings.path(target["file"])
        if not path.is_relative_to(settings.root / "src/config"):
            raise SyncError("Portfolio target escaped src/config/.")
        text, start, end, value = block(path, target["marker"])
        if name != "evidence":
            ids = [item["id"] for item in value]
            if len(ids) != len(set(ids)):
                raise SyncError("Duplicate project IDs in existing portfolio data.")
        # Decode individual members so other projects keep their exact text.
        decoder = json.JSONDecoder(object_pairs_hook=unique_object)
        cursor = start + 1
        match_span = None
        old = {}
        while cursor < end - 1:
            while cursor < end - 1 and text[cursor] in " \r\n\t,":
                cursor += 1
            if cursor >= end - 1:
                break
            member_start = cursor
            member, length = decoder.raw_decode(text[cursor:])
            cursor += length
            if name == "evidence":
                key = member
                while text[cursor] in " \r\n\t:":
                    cursor += 1
                member_start = cursor
                member, length = decoder.raw_decode(text[cursor:])
                cursor += length
            else:
                key = member["id"]
            if key == project_id:
                match_span = (member_start, cursor)
                old = member
        merged = merge(old, bundle[name])
        if name == "portfolio":
            pdf_url = "/" + str(settings.public_docs.relative_to(settings.root / "public")).replace("\\", "/") + "/" + entry["pdf"]
            if merged.get("pdfUrl") and merged["pdfUrl"] != pdf_url:
                raise SyncError("Portfolio PDF URL differs from the registered stable filename.")
            if merged.get("pdfLinks") and any(link.get("url") != pdf_url for link in merged["pdfLinks"]):
                raise SyncError("Portfolio PDF links differ from the registered stable filename. Register other documents separately.")
        if match_span and merged == old:
            continue
        encoded = json.dumps(merged, ensure_ascii=False, indent=2)
        if match_span:
            line_start = text.rfind("\n", 0, match_span[0]) + 1
            indentation = re.match(r"[ \t]*", text[line_start:])
            leading = indentation[0] if indentation else ""
        else:
            leading = "  "
        encoded = encoded.replace("\n", "\n" + leading)
        if match_span:
            left, right = match_span
            updated = text[:left] + encoded + text[right:]
        else:
            prefix = "," if value else ""
            member_text = f'{json.dumps(project_id)}: {encoded}' if name == "evidence" else encoded
            updated = text[:end - 1].rstrip() + prefix + "\n  " + member_text + "\n" + text[end - 1:]
        if updated != text:
            changes[path] = updated.encode("utf-8")
    studio_target = settings.targets["studio"]
    studio_path = settings.path(studio_target["file"])
    studio_text, studio_start, _, _ = block(studio_path, studio_target["marker"])
    studio_text = changes.get(studio_path, studio_text.encode()).decode()
    studio_data = json.JSONDecoder().raw_decode(studio_text[studio_start:])[0]
    portfolio_path = settings.path(settings.targets["portfolio"]["file"])
    portfolio_text = changes.get(portfolio_path, portfolio_path.read_bytes()).decode()
    updated, count_matches = re.subn(r'(label: "Selected Projects", value: )\d+', r"\g<1>" + str(len(studio_data)), portfolio_text)
    if count_matches != 1:
        raise SyncError("Selected Projects counter missing or ambiguous.")
    if updated != portfolio_path.read_text(encoding="utf-8"):
        changes[portfolio_path] = updated.encode()
    return changes


def entries(settings: Settings) -> list[dict[str, Any]]:
    registry = read_json(settings.registry)
    result: list[dict[str, Any]] = registry["projects"]
    ids = [entry["id"] for entry in result]
    filenames = [entry["pdf"] for entry in result]
    if len(ids) != len(set(ids)) or len(filenames) != len(set(filenames)):
        raise SyncError("Duplicate project ID or PDF filename in registry.")
    for entry in result:
        if not re.fullmatch(r"[a-z0-9-]+", entry["id"]):
            raise SyncError("Invalid project ID.")
        if not re.fullmatch(r"[a-z0-9-]+\.pdf", entry["pdf"]):
            raise SyncError("PDF filename must be a stable lowercase basename.")
        if not re.fullmatch(r"[A-Za-z0-9_-]+", entry["doc_id"]):
            raise SyncError("Invalid existing Google Doc ID.")
        if entry["source"] not in ("google", "curated"):
            raise SyncError("Source must be google or curated.")
        if entry["source"] == "curated" and not entry.get("curated_pdf"):
            raise SyncError("Curated source PDF missing from registry.")
        for key in ["bundle", "curated_pdf"]:
            if entry.get(key) and not settings.path(entry[key]).is_relative_to(settings.root / "memory"):
                raise SyncError("Reviewed bundles and curated PDFs must stay in project memory/.")
    legacy_ids = {entry["id"] for entry in registry.get("legacy_projects", [])}
    if legacy_ids & set(ids):
        raise SyncError("A project cannot be both registered and explicitly unmapped legacy data.")
    for name in ["portfolio", "studio"]:
        target = settings.targets[name]
        content = block(settings.path(target["file"]), target["marker"])[3]
        expected_ids = {item["id"] for item in content}
        covered = set(ids) | (legacy_ids if name == "portfolio" else set())
        if expected_ids - covered:
            raise SyncError("Project registry coverage is incomplete. Map every selected project and explicitly record unmapped legacy entries.")
    return result


def fingerprint(settings: Settings, entry: dict[str, Any]) -> dict[str, Any]:
    dossier = settings.path(entry["dossier"]) if entry.get("dossier") else None
    bundle = settings.path(entry["bundle"]) if entry.get("bundle") else None
    curated = settings.path(entry["curated_pdf"]) if entry.get("curated_pdf") else None
    policy = {"redactions": digest(json_bytes([entry["public_redactions"], entry["public_redaction_label"]]))} if entry.get("public_redactions") else {}
    return {"doc_id": entry["doc_id"], "source": entry["source"], **policy,
            "dossier": file_digest(dossier), "bundle": file_digest(bundle),
            "curated_pdf": file_digest(curated), "pdf": entry["pdf"]}


def status(settings: Settings, entry: dict[str, Any], saved: dict[str, Any], google: Any = None) -> dict[str, Any]:
    current = fingerprint(settings, entry)
    previous = saved.get(entry["id"], {})
    reasons = []
    pending = read_json(settings.state.parent / f'{entry["id"]}-pending.json', {})
    if pending and pending.get("run_id") != previous.get("remote_attempt"):
        reasons.append("native Doc update unresolved; inspect Doc and sync again")
    if not previous:
        reasons.append("not yet verified by sync")
    elif current != previous.get("inputs"):
        reasons.append("source, dossier or reviewed bundle changed")
    target = settings.public_docs / entry["pdf"]
    if not target.is_file():
        reasons.append("portfolio PDF missing")
    elif previous and file_digest(target) != previous.get("pdf", {}).get("sha256"):
        reasons.append("portfolio PDF changed outside sync")
    if entry.get("dossier") and current["dossier"] is None:
        reasons.append("registered dossier missing")
    if entry.get("bundle") and bundle_changes(settings, entry):
        reasons.append("portfolio text differs from reviewed bundle")
    if google is not None:
        metadata = google.metadata(entry["doc_id"])
        if previous and metadata["version"] != previous.get("doc_version"):
            reasons.append("Google Doc changed")
    return {"id": entry["id"], "status": "REVIEW" if reasons else "CURRENT",
            "reasons": reasons, "dossier_mapped": bool(entry.get("dossier")),
            "checked_google": google is not None, "source": entry["source"]}


@contextmanager
def locked(settings: Settings) -> Iterator[None]:
    lock = settings.state.with_suffix(".lock")
    lock.parent.mkdir(parents=True, exist_ok=True)
    try:
        with lock.open("x", encoding="utf-8") as handle:
            handle.write(str(os.getpid()))
    except FileExistsError as exc:
        raise SyncError("Another sync may be running. Inspect the memory/project-sync lock before retrying.") from exc
    try:
        yield
    finally:
        lock.unlink()


def install(changes: dict[Path, bytes], backup: Path, expected: dict[Path, bytes | None] | None = None) -> None:
    """Stage all files before installation; restore originals on local failure."""
    staged: dict[Path, Path] = {}
    originals: dict[Path, bytes | None] = {}
    installed = []
    backup.mkdir(parents=True, exist_ok=False)
    try:
        for index, (path, data) in enumerate(changes.items()):
            path.parent.mkdir(parents=True, exist_ok=True)
            originals[path] = path.read_bytes() if path.exists() else None
            if expected is not None and originals[path] != expected[path]:
                raise SyncError("A destination changed after preview preparation. Local installation cancelled.")
            if originals[path] is not None:
                (backup / f"{index}-{path.name}").write_bytes(originals[path] or b"")
            with tempfile.NamedTemporaryFile(dir=path.parent, prefix=".project-sync-", delete=False) as handle:
                staged[path] = Path(handle.name)
                handle.write(data)
                handle.flush()
                os.fsync(handle.fileno())
        (backup / "destinations.json").write_bytes(json_bytes([str(p) for p in changes]))
        for path, tmp in staged.items():
            if (path.read_bytes() if path.exists() else None) != originals[path]:
                raise SyncError("A destination changed during sync. Local installation cancelled.")
            tmp.replace(path)
            installed.append(path)
            if digest(path.read_bytes()) != digest(changes[path]):
                raise SyncError("Installed file hash differs from the staged file.")
    except Exception as exc:
        conflicts = []
        restore_errors = []
        for path in reversed(installed):
            try:
                if (path.read_bytes() if path.exists() else None) != changes[path]:
                    conflicts.append(path)
                    continue
                original = originals[path]
                if original is None:
                    path.unlink(missing_ok=True)
                else:
                    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
                        restore = Path(handle.name)
                        handle.write(original)
                    restore.replace(path)
            except OSError:
                restore_errors.append(path)
        if conflicts:
            raise SyncError("Rollback preserved concurrent edits; other restoration failures may exist. Inspect saved backups before retrying.") from exc
        if restore_errors:
            raise SyncError("Rollback incomplete after filesystem errors; inspect saved backups before retrying.") from exc
        raise
    finally:
        for tmp in staged.values():
            tmp.unlink(missing_ok=True)


def sync(settings: Settings, entry: dict[str, Any], google: Any, apply: bool,
         reviewed: bool, requests_file: Path | None = None) -> dict[str, Any]:
    if apply and not reviewed:
        raise SyncError("Apply requires --reviewed: confirm public content and source freshness first.")
    initial = fingerprint(settings, entry)
    if entry.get("dossier") and initial["dossier"] is None:
        raise SyncError("Registered dossier missing. Correct the mapping before syncing.")
    watched = [settings.path(target["file"]) for target in settings.targets.values()]
    watched += [settings.public_docs / entry["pdf"], settings.state]
    expected = {path: path.read_bytes() if path.exists() else None for path in watched}
    changes = bundle_changes(settings, entry)
    if any((p.read_bytes() if p.exists() else None) != data for p, data in expected.items()):
        raise SyncError("A destination changed during bundle preparation. Retry the preview.")
    metadata = google.metadata(entry["doc_id"])
    batch = read_json(requests_file) if requests_file else None
    previous = read_json(settings.state, {}).get(entry["id"], {})
    pending_path = settings.state.parent / f'{entry["id"]}-pending.json'
    pending = read_json(pending_path, {})
    unresolved = pending and pending.get("run_id") != previous.get("remote_attempt")
    view_target = None
    if batch is not None:
        if entry["source"] != "google":
            raise SyncError("Curated projects require reconciling their public case study before a Doc update.")
        if not batch.get("requests") or not batch.get("writeControl", {}).get("requiredRevisionId"):
            raise SyncError("Doc requests require a non-empty batch and requiredRevisionId.")
        public_check(json.dumps(batch))
        if not entry.get("project_view_pdf") or not entry.get("project_root"):
            raise SyncError("Doc update needs a verified canonical my-project-view PDF mapping.")
    if batch is not None or (unresolved and pending.get("refresh_project_view")):
        if entry["source"] != "google":
            raise SyncError("Canonical recovery requires the same native Google source; reconcile the changed source mapping first.")
        if pending.get("refresh_project_view") and pending.get("doc_id") != entry["doc_id"]:
            raise SyncError("Pending native update belongs to a different Doc; inspect its recovery receipt.")
        if not entry.get("project_root") or not entry.get("project_view_pdf"):
            raise SyncError("Canonical PDF recovery needs its original verified project mapping.")
        if unresolved and pending.get("project_view_pdf") != entry["project_view_pdf"]:
            raise SyncError("Canonical PDF mapping changed during recovery; inspect its recovery receipt.")
        project_root = settings.path(entry["project_root"])
        view_target = settings.path(entry["project_view_pdf"])
        if view_target.parent != project_root / "my-project-view" or view_target.suffix != ".pdf":
            raise SyncError("Canonical PDF must be directly inside the registered project's my-project-view/.")
        if not view_target.is_file():
            raise SyncError("Existing canonical project-view PDF missing; verify the mapping.")
        expected[view_target] = view_target.read_bytes()
    plan = {"id": entry["id"], "doc_id": entry["doc_id"], "doc_version": metadata["version"],
            "source": entry["source"], "pdf_path": str(settings.public_docs / entry["pdf"]),
            "portfolio_files": [str(p.relative_to(settings.root)) for p in changes],
            "update_google_doc": batch is not None, "refresh_project_view": view_target is not None}
    if not apply:
        return {**plan, "result": "PREVIEW; no artifacts changed"}
    if batch is not None and pending and pending.get("run_id") != previous.get("remote_attempt"):
        raise SyncError("Previous native Doc write is unresolved. Inspect that Doc, then sync without --requests before a new edit.")
    if (batch is None and not changes and previous.get("inputs") == initial
            and previous.get("doc_version") == metadata["version"]
            and (not pending or pending.get("run_id") == previous.get("remote_attempt"))
            and file_digest(settings.public_docs / entry["pdf"]) == previous.get("pdf", {}).get("sha256")):
        return {**previous, "result": "ALREADY CURRENT; no artifacts changed"}
    run_id = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ") + "-" + uuid.uuid4().hex
    doc_updated = False
    try:
        if batch is not None:
            # Set before the call: a timeout may conceal a successful write.
            pending = {"id": entry["id"], "run_id": run_id, "doc_id": entry["doc_id"],
                       "refresh_project_view": True, "project_view_pdf": entry["project_view_pdf"]}
            pending_path.write_bytes(json_bytes(pending))
            doc_updated = True
            google.update(entry["doc_id"], batch)
            try:
                metadata = google.metadata(entry["doc_id"])
            finally:
                # Attempt the required same-ID PDF export even if metadata fails.
                data = google.export(entry["doc_id"])
        elif entry["source"] == "curated":
            data = settings.path(entry["curated_pdf"]).read_bytes()
        else:
            target = settings.public_docs / entry["pdf"]
            if (previous.get("doc_version") == metadata["version"]
                    and previous.get("inputs", {}).get("doc_id") == entry["doc_id"]
                    and previous.get("inputs", {}).get("source") == "google"
                    and previous.get("inputs", {}).get("redactions") == initial.get("redactions")
                    and file_digest(target) == previous.get("pdf", {}).get("sha256")
                    and not (pending and pending.get("run_id") != previous.get("remote_attempt"))):
                data = target.read_bytes()
            else:
                data = google.export(entry["doc_id"])
        data = prepare_pdf(data, entry)
        proof = validate_pdf(data)
        after = google.metadata(entry["doc_id"])
        if after["version"] != metadata["version"] or fingerprint(settings, entry) != initial:
            raise SyncError("Source changed during export. Retry with freshly reviewed content.")
        changes[settings.public_docs / entry["pdf"]] = data
        if view_target is not None:
            changes[view_target] = data
        state = read_json(settings.state, {})
        receipt = {**plan, "inputs": initial, "doc_version": after["version"],
                   "synced_at": datetime.now(timezone.utc).isoformat(), "pdf": proof,
                   "remote_attempt": pending.get("run_id"),
                   "result": "SYNCED LOCALLY; deployment is separate"}
        state[entry["id"]] = receipt
        changes[settings.state] = json_bytes(state)
        install(changes, settings.backups / run_id, expected)
        return receipt
    except Exception as exc:
        if doc_updated:
            settings.state.parent.mkdir(parents=True, exist_ok=True)
            failure = settings.state.parent / f"{run_id}-failure.json"
            failure.write_bytes(json_bytes({"id": entry["id"], "doc_id": entry["doc_id"],
                                           "remote_write_may_have_succeeded": True,
                                           "pdf_refresh_incomplete": True, "error_type": type(exc).__name__}))
            raise SyncError("Doc update was attempted; PDF synchronization failed. Prior local files preserved. Inspect the same Doc before retrying; failure receipt saved.") from exc
        raise


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["status", "sync"])
    parser.add_argument("project", nargs="?", default="all")
    parser.add_argument("--online", action="store_true", help="Check Google versions during status")
    parser.add_argument("--apply", action="store_true", help="Write selected artifacts after review")
    parser.add_argument("--reviewed", action="store_true", help="Public content and source precedence reviewed")
    parser.add_argument("--requests", type=Path, help="Optional revision-guarded native Doc batchUpdate JSON")
    parser.add_argument("--json", action="store_true", help="Machine-readable receipts instead of the concise display")
    args = parser.parse_args()
    try:
        settings = Settings.load()
        legacy = read_json(settings.registry).get("legacy_projects", [])
        selected = [e for e in entries(settings) if args.project in ("all", e["id"])]
        selected_legacy = [e for e in legacy if args.project in ("all", e["id"])]
        if not selected and not (args.command == "status" and selected_legacy):
            raise SyncError("Unknown project ID. Run status to list registered projects.")
        if args.command == "status" and (args.apply or args.requests):
            raise SyncError("Status is read-only; use sync for updates.")
        if args.requests and len(selected) != 1:
            raise SyncError("Native Doc update requests must select exactly one project.")
        if args.apply and not args.reviewed:
            raise SyncError("Apply requires --reviewed; run a preview first.")
        google = safe_call(lambda: Google(settings, write=bool(args.requests))) if args.online or args.command == "sync" else None
        saved = read_json(settings.state, {})

        def perform(entry: dict[str, Any]) -> dict[str, Any]:
            return status(settings, entry, saved, google) if args.command == "status" else sync(
                settings, entry, google, args.apply, args.reviewed, args.requests)

        def run() -> int:
            failures = 0
            for entry in selected:
                try:
                    result = safe_call(partial(perform, entry))
                    if args.json:
                        print(json.dumps(result, ensure_ascii=False))
                    elif args.command == "status":
                        notes = "; ".join(result["reasons"]) or "Registered artifacts match the last sync"
                        if not result["dossier_mapped"]:
                            notes += "; dossier not mapped"
                        if result["source"] == "curated":
                            notes += "; curated PDF preserved"
                        print(f'{result["id"]:<30} {result["status"]:<8} {notes}')
                    elif args.apply:
                        print(f'{entry["id"]}: {result["result"]} — {result["pdf"]["pages"]} pages, {result["pdf"]["bytes"]} bytes')
                    else:
                        print(f'{entry["id"]}: preview — {result["source"]} PDF, {len(result["portfolio_files"])} portfolio files; no artifacts changed')
                except SyncError as exc:
                    failures += 1
                    message = str(exc) if isinstance(exc, SyncError) else f"{type(exc).__name__}: operation failed; prior files preserved. Check credentials, permissions and network."
                    print(json.dumps({"id": entry["id"], "result": "FAILED", "message": message}), file=sys.stderr)
            for entry in selected_legacy:
                result = {"id": entry["id"], "status": "UNMAPPED LEGACY", "reasons": [entry["reason"]]}
                print(json.dumps(result) if args.json else f'{entry["id"]:<30} UNMAPPED LEGACY  {entry["reason"]}')
            return 1 if failures else 0

        if args.command == "sync" and args.apply:
            with locked(settings):
                return run()
        return run()
    except (SyncError, OSError, ValueError, KeyError, ImportError, TypeError) as exc:
        message = str(exc) if isinstance(exc, SyncError) else f"{type(exc).__name__}: setup failed. Verify configuration and Google authentication."
        print(message, file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
