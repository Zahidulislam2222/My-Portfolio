"""Typed configuration boundary for the local project synchronizer."""

from __future__ import annotations

import json
import os
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any


class SyncError(Exception):
    """An actionable error that is safe to display without credentials."""


@dataclass(frozen=True)
class Settings:
    root: Path
    registry: Path
    state: Path
    backups: Path
    public_docs: Path
    service_account: Path
    oauth_token: Path
    drive_version: str
    docs_version: str
    timeout_seconds: int
    retries: int
    windows_mount: str
    targets: dict[str, dict[str, str]]

    def path(self, value: str) -> Path:
        if os.name != "nt" and re.match(r"^[A-Za-z]:[\\/]", value):
            value = f"{self.windows_mount}/{value[0].lower()}/{value[3:]}".replace("\\", "/")
        elif os.name == "nt":
            prefix = "^" + re.escape(self.windows_mount) + r"/([a-z])/"
            value = re.sub(prefix, lambda m: m[1].upper() + ":/", value, count=1)
        result = Path(value).expanduser()
        return (self.root / result).resolve()

    @classmethod
    def load(cls) -> Settings:
        root = Path(__file__).resolve().parents[1]
        raw = json.loads((root / "scripts/project-sync.settings.json").read_text())
        registry = os.environ.get("PROJECT_SYNC_REGISTRY") or raw["registry"]
        service_account = os.environ.get("PROJECT_SYNC_SERVICE_ACCOUNT") or raw["service_account"]
        token = os.environ.get("PROJECT_SYNC_TOKEN_FILE") or raw["oauth_token"]

        def path(value: str) -> Path:
            return (root / Path(value).expanduser()).resolve()

        settings = cls(root, path(registry), path(raw["state"]), path(raw["backups"]),
                       path(raw["public_docs"]), path(service_account), path(token),
                       raw["drive_version"], raw["docs_version"], raw["timeout_seconds"],
                       raw["retries"], raw["windows_mount"], raw["targets"])
        if settings.timeout_seconds <= 0 or settings.retries < 0:
            raise SyncError("Invalid timeout/retry settings.")
        for private in [settings.registry, settings.state, settings.backups]:
            if not private.is_relative_to(root / "memory"):
                raise SyncError("Registry, state and backups must stay in project memory/.")
        if not settings.public_docs.is_relative_to(root / "public"):
            raise SyncError("Public PDFs must stay inside public/.")
        return settings


def read_json(path: Path, default: Any = None) -> Any:
    if not path.exists() and default is not None:
        return default
    return json.loads(path.read_text(encoding="utf-8"), object_pairs_hook=unique_object)


def unique_object(pairs: list[tuple[str, Any]]) -> dict[str, Any]:
    result = {}
    for key, value in pairs:
        if key in result:
            raise SyncError("Duplicate JSON keys are ambiguous; correct the content before syncing.")
        result[key] = value
    return result
