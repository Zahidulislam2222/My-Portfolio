"""Google protocol adapter. Credentials never enter public bundles or logs."""

from __future__ import annotations

from typing import Any

from project_sync_settings import Settings, SyncError

DOC_MIME = "application/vnd.google-apps.document"
PDF_MIME = "application/pdf"
READ_SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]
WRITE_SCOPES = ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/documents"]


class Google:
    def __init__(self, settings: Settings, write: bool = False):
        import httplib2
        from google.auth.transport.requests import Request
        from google.oauth2 import credentials, service_account
        from google_auth_httplib2 import AuthorizedHttp
        from googleapiclient.discovery import build

        scopes = WRITE_SCOPES if write else READ_SCOPES
        if settings.service_account.is_file():
            creds = service_account.Credentials.from_service_account_file(
                str(settings.service_account), scopes=scopes)
        elif settings.oauth_token.is_file():
            creds = credentials.Credentials.from_authorized_user_file(str(settings.oauth_token))
            if not creds.valid:
                creds.refresh(Request())
        else:
            raise SyncError("Google credentials missing. Configure PROJECT_SYNC_SERVICE_ACCOUNT or PROJECT_SYNC_TOKEN_FILE.")
        http = AuthorizedHttp(creds, http=httplib2.Http(timeout=settings.timeout_seconds))
        self.drive = build("drive", settings.drive_version, http=http, cache_discovery=False)
        self.docs = build("docs", settings.docs_version, http=http, cache_discovery=False) if write else None
        self.retries = settings.retries

    def metadata(self, doc_id: str) -> dict[str, Any]:
        result: dict[str, Any] = self.drive.files().get(
            fileId=doc_id, fields="id,name,mimeType,version,modifiedTime,trashed,capabilities(canDownload)"
        ).execute(num_retries=self.retries)
        if result.get("trashed") or result.get("mimeType") != DOC_MIME:
            raise SyncError("The registered source must be an existing, active native Google Doc.")
        if not result.get("capabilities", {}).get("canDownload"):
            raise SyncError("Google Doc export permission is missing.")
        return result

    def export(self, doc_id: str) -> bytes:
        result: bytes = self.drive.files().export_media(fileId=doc_id, mimeType=PDF_MIME).execute(
            num_retries=self.retries)
        return result

    def update(self, doc_id: str, body: dict[str, Any]) -> None:
        if self.docs is None:
            raise SyncError("Doc update requires write credentials.")
        current = self.docs.documents().get(documentId=doc_id).execute(num_retries=self.retries)
        revision = body.get("writeControl", {}).get("requiredRevisionId")
        if not revision or revision != current.get("revisionId"):
            raise SyncError("Doc revision changed or is missing. Prepare fresh guarded requests.")
        # Never retry a potentially committed remote mutation after a lost response.
        self.docs.documents().batchUpdate(documentId=doc_id, body=body).execute(num_retries=0)
