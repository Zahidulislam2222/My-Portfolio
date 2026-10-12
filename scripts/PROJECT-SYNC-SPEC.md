# Project sync acceptance criteria

Written before implementation. Existing unrelated working-tree changes are preserved.

1. One private registry covers the existing selected studio projects and AdRevora AI,
   retaining verified Google Doc IDs and stable public PDF filenames. Local folder
   mappings are recorded only where verified. Missing mappings are explicit.
2. `status` works offline; online checks compare Google versions. Default `sync`
   previews without editing Docs, portfolio files, PDFs or synchronization state.
3. Explicit `sync ID --apply --reviewed` refreshes selected artifacts. Native Doc
   updates use optional reviewed requests guarded by the current revision ID, never
   create a replacement Doc, and attempt same-ID PDF export after successful edits.
4. Validate PDF structure, page count and text before replacing anything. Stage all
   local destinations first, preserve backups, roll back local writes on failure,
   and retain failure evidence when a remote edit cannot be rolled back. Recheck
   remote version before installation; detect concurrent command runs.
5. Private dossiers are fingerprint inputs only. Never upload their text. Preserve
   curated public case studies rather than replacing them with older Google Docs.
   Detect changed dossiers, edited PDFs/bundles and remote versions as stale.
6. A reviewed public bundle updates the selected project in all three existing
   config blocks, merges unrelated fields, preserves unrelated project entries and
   supports adding a new project. Reject duplicate IDs, path escapes, secret-like
   public content and inconsistent PDF filenames before writes.
7. Add AdRevora AI locally from exact Career Knowledge sections, with current
   website/local-engine/integration boundaries and its existing validated PDF.
   Update the selected-project count without altering the design or animation.
8. Document simple commands and adding projects. Keep secrets and machine paths in
   ignored files, variable behavior in typed settings, and add regression coverage
   for failure safety, previews, stale detection and content/configuration hygiene.
9. Run CLI real read/export flow, browser project/PDF flow, full tests, types, lint,
   security and build. Obtain a separate-session review. If deploying, verify the
   existing hosting plan, drift and exact local/deployed artifact hashes first.
