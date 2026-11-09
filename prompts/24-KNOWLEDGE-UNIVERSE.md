# THE GAUNTLET 30 — 24. The Knowledge Universe

**Benchmark family:** Division 5 — Data, Maps & Knowledge  
**Prompt version:** 1.0  
**Deployment target:** GitHub Pages-compatible static website

## Your mission and creative freedom

Act as an independent product team: strategist, designer, engineer, artist and QA tester. Build a complete, coherent, genuinely usable product, not a mockup or shallow demo. You have broad creative authority over the product name, identity, visual direction, interaction model, information architecture, content, mechanics and implementation. Make bold decisions and execute them consistently. Do not imitate a prescribed design or ask for approval. Satisfy the outcomes, but decide how the product should look and feel.

## Product brief

Create a knowledge-management environment that helps users capture information and discover connections. Invent a strong organising metaphor and workflow. It must make a personal knowledge collection usable, navigable and portable.

## Required capabilities

Create/edit/tag/link/archive/delete notes; graph/map/canvas or visual relationship browser based on real links; full-text search and backlinks; useful content editing; local persistence and reliable export/import.

## Acceptance criteria

Note edits update search/tags/relationships; links and backlinks are navigable and stay correct after rename/delete; graph reflects actual links; export/import preserves content and relationships; remains useful as collection grows.

## Technical contract

- The product must be a static website deployable under a GitHub Pages project subpath.
- The complete implementation must be in one self-contained `index.html`, with inline CSS/JS and embedded or procedurally generated assets. This is required by the existing importer and showcase.
- No custom backend, build step, secrets, API keys, paid services or runtime network access. No CDNs, remote fonts, libraries, images, scripts, APIs or analytics.
- Use browser-native HTML/CSS/JavaScript, Canvas, SVG, WebGL and native APIs as appropriate. You choose the architecture.
- Use relative paths only. Local persistence is encouraged where appropriate; handle unavailable storage gracefully.
- Every visible control must work. No fake buttons, placeholder panels, TODOs, dead links or fake live data. Explain limitations honestly.
- Make the experience responsive, keyboard usable, accessible, performant and considerate of reduced-motion preferences.
- Include sensible onboarding, empty/error states, validation, recovery and reset controls where relevant.
- Use original, generated or appropriately licensed assets. Do not copy other submissions or source code.
- Do not claim tests or features you did not verify.

## Blind-run integrity

Work in a new, empty local workspace containing only this brief and your own work. Do not access GitHub, repositories, previous runs, other submissions, websites, web search, remote browsers, network tools or connected apps. Do not publish, commit, push or register anything. If your environment makes isolation impossible, disclose that and mark the run INVALID.

## Exact artifact and ZIP contract

Create exactly one folder named `{MODEL_SLUG}` and ZIP it. The ZIP must contain exactly one top-level folder with that exact name, and that folder must contain only:

```text
{MODEL_SLUG}/
├── index.html
├── meta.json
├── AUDIT.md
└── thumb.png   (optional genuine PNG screenshot only)
```

The folder name must be the assigned lowercase slug, using letters, digits and single hyphens only. Do not add the challenge number or model name. Do not put files loose at ZIP root or add another wrapper folder. No extra files. Do not create a multi-file app: inline all code and embed assets in `index.html`.

Use this exact `meta.json` schema (replace every placeholder with factual values):

```json
{
  "slug": "{MODEL_SLUG}",
  "model": "<actual model name and version>",
  "title": "<chosen product name>",
  "tagline": "<accurate short tagline>",
  "palette": ["#123456", "#234567", "#345678", "#456789"],
  "techniques": ["<real technique>", "<real technique>", "<real technique>"],
  "entry": "index.html",
  "thumb": null,
  "submittedAt": "<actual timezone-aware ISO 8601 timestamp>"
}
```

Use exactly four real six-digit hex colours, at least three implementation techniques that genuinely appear in the product, exact entry `index.html`, and `thumb: null` unless you include a genuine `thumb.png`. Do not invent model identity or time.

## Required AUDIT.md

Report: (1) isolation status and any access breach; (2) tools/commands and runtime/viewports tested; (3) each required capability marked PASS/PARTIAL/FAIL with evidence; (4) navigation, controls, persistence, responsiveness, keyboard and reduced-motion checks; (5) known defects, shortcuts and unverified claims; (6) run validity. Mark VALID only if blind conditions were respected. Do not grade yourself generously or treat assertions as proof.

## Final verification and response

Re-open all three required files; validate JSON and slug/folder match; run the product locally and exercise core flows where possible; inspect console errors; verify subpath operation and no network dependencies; inspect the ZIP listing to confirm exactly one top-level `{MODEL_SLUG}/` folder and only permitted files. Never claim tests you did not perform.

Return only the ZIP artifact attachment/link and:
`AUDIT: complete` (only if completed; otherwise report honestly)  
`PUBLISHING: pending organizer import`

Do not include repository links, commit claims, PRs or deployment claims.