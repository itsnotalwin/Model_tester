# PROJECT.md — Model_tester

## Purpose
A reproducible benchmark for comparing AI models on substantial software-building and creative-production challenges. It includes 31 standalone Markdown prompts, a public results showcase, an organizer-only artifact importer, and automated ZIP intake.

## Architecture
- `index.html` — public benchmark and submission showcase.
- `prompts/` — 31 challenge prompts and their index.
- `incoming/` — organizer upload drop for model ZIP artifacts.
- `scripts/` — safe ZIP validation and handoff to the existing publisher.
- `.github/workflows/` — ZIP intake, index rebuild and repository checks.
- `publish-submission.mjs` — validates and imports one extracted submission folder.
- `build-index.mjs` — rebuilds `submissions/index.json`.
- `submissions/` — append-only published artifacts and generated index.

## Run / test / deploy
- Local publisher validation: `node publish-submission.mjs --check /path/to/model-slug`.
- ZIP intake: upload `model-slug.zip` to `incoming/` on `main`; GitHub Actions validates, imports, rebuilds the index and removes a successfully processed ZIP.
- ZIP validator: `python scripts/import-submission-zip.py incoming/model-slug.zip` (organizer workflow).
- Index generation: `node build-index.mjs`.
- GitHub Pages publishes the showcase from the repository's configured Pages source.

## Current state
Verified on 10 November 2026: 31 standalone Markdown challenges exist, including a new original manga-booklet production challenge; automatic ZIP intake has been added. The ZIP workflow is committed, but a real uploaded model ZIP has not yet completed an end-to-end test.

## Decisions and constraints
- Keep submission folders append-only. Existing slugs are never overwritten.
- Each ZIP must be named `{MODEL_SLUG}.zip` and contain exactly one top-level folder with that slug.
- Required files: `index.html`, `meta.json`, `AUDIT.md`; optional: `thumb.png`.
- The importer remains the source of truth for submission metadata and file validation.
- Contestant agents run in isolated workspaces and must not access this repository.

## Next action
Upload the first real model artifact to `incoming/`, then inspect the ZIP workflow run and verify the new entry appears in `submissions/index.json` and the live showcase.
