# Context: incoming

## Purpose
Organizer upload drop for ZIP artifacts produced by benchmark contestants.

## Key files
- `README.md` — upload instructions and archive contract.
- `*.zip` — temporary uploaded artifacts awaiting automatic processing.

## Connections
The `.github/workflows/import-submissions.yml` workflow watches ZIP files committed here on `main`. Valid archives are imported into `submissions/`, indexed and removed; rejected archives remain for inspection.

## Change & verify
Use one `{MODEL_SLUG}.zip` per submission. Keep ZIP contents to one matching top-level folder with the three required files and optional thumbnail. Do not store unrelated files or secrets here.