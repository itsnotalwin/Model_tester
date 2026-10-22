# Model Tester: blind-run organizer guide

**Purpose:** Preserve independent coding/design results. Contestant agents must never be given the destination repository, a GitHub credential, or access to earlier model work.

## Why the delivery flow changed

The former workflow directed every contestant to the same public repository. That was **not a blind test**: GitHub permissions are repository-wide, the dashboard and prior entries are public, and a PR path check can prevent cross-folder **writes**, never cross-folder **reads**. A sparse checkout also is not a read-access boundary.

GitHub's workflows and the existing `check-scope.mjs` validate submitted changes only. They cannot attest that an agent never looked at another model's code, page, commits, or a public website. Do not represent an audit checkbox or successful Action as proof of read isolation.

## Running a fair blind batch

1. **Create an independent, clean workspace per model.** Use the same frozen text of [PROMPT.md](PROMPT.md), substituting only `{MODEL_SLUG}` and the model's identity. Never give contestants a GitHub URL, repo contents, screenshots, previous results, other sessions' transcripts, or access to shared folders.
2. **Disable network/search/browser/connector access for the contestant.** In particular, disconnect or deny GitHub, web search and any other mechanism that can retrieve earlier submissions. If the harness cannot enforce this, label the result **instruction-only isolation**, not strictly blind.
3. **Prefer a simultaneous cohort.** Collect every contestant's finished artifact before publishing *any* entry from the cohort. If submissions have already been published, isolation from that historical public material cannot be technically guaranteed for agents with internet access.
4. **Require local artifacts, never a git push.** Each model creates its own `{MODEL_SLUG}/index.html`, `meta.json`, `AUDIT.md`, and optionally `thumb.png`. Preserve the original output and the agent's tool/command log as evaluation evidence. If access violations are observed, mark the run invalid and rerun it with restricted tools.
5. **Publish only as organizer.** Use the verified import steps below after the model's run is sealed. The dashboard still automatically indexes newly pushed submissions.

## Organizer-only import

From an authenticated organizer checkout of this repository:

```sh
node publish-submission.mjs --check /path/to/model-slug
node publish-submission.mjs /path/to/model-slug
git diff --no-index /dev/null submissions/model-slug/meta.json   # optional review; returns 1 for differences
git add -- submissions/model-slug/
git commit -m "submission: model-slug"
git push origin main
```

Replace `model-slug` with the actual validated slug. On Windows, use an actual local path such as `"C:\\Users\\you\\Downloads\\model-slug"`, and review with a text editor rather than `/dev/null`.

The importer rejects extra files, mismatched slugs, malformed metadata, symlinks, missing audit/HTML, implausible artifacts and duplicate destinations. It never overwrites an existing submission, edits a rival's folder, commits, pushes, or exposes repository content to the contestant.

After the push, `.github/workflows/build-index.yml` rebuilds `submissions/index.json`; verify the new slug appears there and in the published dashboard. Existing submissions are preserved.

## Guardrails and limitations

- **Do not send the GitHub URL or this guide to contestants.** Send them only the text of `PROMPT.md`, in a tool-restricted test environment. Link-sharing the prompt from this public repo reveals the repository address.
- **Do not confuse write-scoping with read isolation.** PR checks are a useful backstop against unintended file changes, not an anti-peeking control. Direct pushes may bypass PR checks; use branch protection and required checks for non-organizer contributions.
- **Do not make the live public dashboard private casually.** GitHub Pages can be unpublished when a public repo is switched to private, depending on plan. Privacy for contestants comes from separate workspaces and denied network/repo access, not from changing the results site's visibility.
- **Preserve independent runs for reproducibility.** Keep model name/version, exact frozen prompt version, environment, tool permissions, run timestamps, outputs, and original tool logs outside the public submission files if necessary. Do not silently treat earlier shared-repo runs as verified blind.

If you need strong technical isolation across remote agents who must themselves push, provision a **separate private repository per contestant** with exclusive access, and have an organizer-only process import their completed artifacts. Merely creating a branch or folder inside one shared repository is not sufficient.
