# Uploading benchmark submissions

Upload model submission ZIP files to this folder.

## How to submit

1. Keep the ZIP filename in the assigned model-slug format, for example `model-name.zip`.
2. The ZIP must contain exactly one top-level folder named with that same model slug.
3. That folder must contain:
   - `index.html`
   - `meta.json`
   - `AUDIT.md`
   - `thumb.png` (optional)
4. Upload or commit the ZIP into `incoming/` on the `main` branch.

The GitHub Actions workflow validates the archive, imports valid submissions into `submissions/<model-slug>/`, rebuilds the submission index, and removes successfully imported ZIP files from this folder.

Invalid ZIPs are left in place and reported in the workflow run. They are never allowed to overwrite an existing submission.

## Archive limits

- Maximum compressed ZIP size: 30 MB.
- Maximum total extracted size: 25 MB.
- Maximum individual file sizes are enforced by the submission importer.
- No nested folders, extra files, symbolic links, encrypted entries, or path traversal.
