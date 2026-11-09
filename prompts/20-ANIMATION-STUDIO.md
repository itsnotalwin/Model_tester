# THE GAUNTLET 30 — 20. The Animation Studio

**Benchmark family:** Division 4 — Creative Software  
**Prompt version:** 1.0  
**Deployment target:** GitHub Pages-compatible static website

## Your mission and creative freedom

Build a complete 2D animation studio that supports making, previewing and exporting a short animation. Invent the product identity, creative workflow, visual language and interaction model. You decide how animation should be authored and represented. The result must be a real editing tool, not a decorative animation player or static mockup.

## Product brief

Create an approachable but capable environment where a user can create visual elements, arrange them on a stage, animate them over time and export the result. Choose a sensible scope and make the entire workflow coherent, discoverable and satisfying.

## Required capabilities

1. A stage/canvas and a way to create or import editable visual elements.
2. A timeline with frames or keyframes, layers/tracks and a visible playhead.
3. Real editing of properties such as position, scale, rotation, opacity or frame artwork over time.
4. Playback controls, frame rate, loop/preview and onion-skin or another useful animation aid.
5. Multiple layers/elements that can be independently selected and edited.
6. Project save/load and export as an animated format or a documented frame sequence.
7. Useful keyboard shortcuts, clear selection feedback, undo/redo or equivalent recovery, and a responsive layout.

## Acceptance criteria

- A user can create an element, animate it over time and preview the result.
- Timeline/keyframe edits change the rendered animation, not just labels or metadata.
- Multiple layers/elements can be independently edited and reordered.
- Playback controls, frame rate and looping work correctly.
- Export produces a usable result and the interface handles empty and single-frame projects.
- The product explains any export limitations honestly and never presents a fake export as complete.

## Technical contract

- The product must be a static website deployable under a GitHub Pages project subpath.
- The complete implementation must be in one self-contained `index.html`, with inline CSS/JS and embedded or procedurally generated assets. This is required by the existing importer and showcase.
- No custom backend, build step, secrets, API keys, paid services or runtime network access. No CDNs, remote fonts, libraries, images, scripts, APIs or analytics.
- Use browser-native HTML/CSS/JavaScript, Canvas, SVG, WebGL and native APIs as appropriate. You choose the architecture.
- Use relative paths only. Local persistence is encouraged; handle unavailable storage gracefully.
- Every visible control must work. No fake buttons, placeholder panels, TODOs, dead links or fake progress.
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

Use this exact `meta.json` schema:

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

Report isolation status and any breach; tools/commands and runtime/viewports tested; every required capability marked PASS/PARTIAL/FAIL with evidence; navigation, controls, persistence, responsiveness, keyboard and reduced-motion checks; known defects and unverified claims; and run validity. Mark VALID only if blind-run conditions were respected. Do not treat your own assertions as independent proof.

## Final verification and response

Re-open all three required files; validate JSON and slug/folder match; run the product locally and exercise core flows where possible; inspect console errors; verify subpath operation and no network dependencies; inspect the ZIP listing to confirm exactly one top-level `{MODEL_SLUG}/` folder and only permitted files. Never claim tests you did not perform.

Return only the ZIP artifact attachment/link and:
`AUDIT: complete` (only if completed; otherwise report honestly)  
`PUBLISHING: pending organizer import`

Do not include repository links, commit claims, PRs or deployment claims.