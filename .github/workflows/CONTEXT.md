# Context: GitHub workflows

## Purpose
Automated repository validation, ZIP submission intake and benchmark index publication.

## Key files
- `import-submissions.yml` — imports valid ZIPs committed under `incoming/`, rebuilds the index and commits accepted submissions.
- `build-index.yml` — rebuilds the public submission manifest.
- `check-publisher.yml` — tests the canonical submission importer.
- `scope-check.yml` — checks pull-request change scope.

## Connections
Workflows use root scripts and publish to the append-only `submissions/` tree. The ZIP importer runs with repository contents write permission to publish validated artifacts.

## Change & verify
Keep permissions least-privilege, serialize writes to `main`, and inspect workflow runs after changes. Remember that pushes made with `GITHUB_TOKEN` do not trigger other workflows, so the ZIP workflow rebuilds the index itself before committing.