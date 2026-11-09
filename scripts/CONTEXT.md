# Context: scripts

## Purpose
Organizer-side helper scripts for safely processing benchmark submissions.

## Key files
- `import-submission-zip.py` — validates archive paths, structure, sizes and metadata, safely extracts to a temporary handoff folder, then invokes the canonical Node publisher.

## Connections
Uses the root `publish-submission.mjs` importer and writes only to `submissions/`. The ZIP workflow in `.github/workflows/` calls this script.

## Change & verify
Keep archive validation strict and preserve the publisher as the final contract validator. Test malformed paths, extra files, duplicate slugs, invalid metadata and valid archives. Never extract untrusted paths directly into the repository.