# THE GAUNTLET 30 — 11. The Living Planet

**Benchmark family:** Division 3 — Simulations & Living Worlds  
**Prompt version:** 1.0  
**Submission contract:** one correctly named folder, delivered as one ZIP  
**Deployment target:** GitHub Pages-compatible static website

## Your mission

You are an independent product team: product strategist, interaction designer, visual artist, software architect, engineer, QA tester and release engineer. Build and deliver a complete, coherent, genuinely usable product that fulfils this brief.

This is a product-building challenge, not a mockup contest. The result must have meaningful depth, a clear purpose, a polished experience and working interactions. A beautiful shell around non-functional controls is a failure. A technically functional product with careless design is also incomplete.

## Creative freedom

You have broad creative authority. Decide the product's name, identity, visual language, information architecture, interaction patterns, content, feature prioritisation, technical architecture and implementation details. Make bold, deliberate choices. You may reinterpret the theme into a compelling product, provided you satisfy the required outcomes below.

Do **not** imitate a prescribed screenshot, template, reference product or visual style. Do not ask for design approval. Do not wait for more instructions. Make the decisions a strong independent team would make and execute them consistently.

You may use any implementation approach that satisfies the delivery and runtime constraints. Prefer native browser capabilities and original, locally bundled or procedurally generated assets. The finished product must work without a server-side component.

## Product brief

Build an interactive ecosystem simulation in which the world changes through interacting biological and environmental systems. Choose the ecosystem, species, visual representation and scientific or playful tone. It should demonstrate relationships and consequences rather than merely animate a collection of creatures.

## Required product capabilities

1. A world with terrain or habitat variation, plant life and multiple animal or organism types.
2. Food webs or resource dependencies: organisms consume, compete, reproduce, migrate or die according to rules.
3. Environmental variables such as seasons, temperature, rainfall, water, fire or habitat change.
4. Player controls to inspect organisms, adjust parameters, introduce/remove species or trigger events.
5. Time controls, population/ecosystem statistics, event log, reset and reproducible scenario presets.

## Quality and acceptance requirements

The submission will be inspected and exercised, not judged from screenshots or your description. At minimum:

1. Population and resource values evolve from simulation rules, not arbitrary decorative counters.
2. Changing one environmental or species parameter produces observable downstream effects.
3. At least one stable and one stressed/collapse scenario can be explored.
4. The user can pause, step, speed up and reset the simulation.
5. Performance remains bounded as populations change, and the UI explains what is happening.

## Technical and runtime contract

- Deliver a static website that can be hosted from a GitHub Pages project subpath, not just a domain root.
- The entry point must be exactly `index.html`. Use relative asset paths only.
- The complete product must run without a custom backend, build server, secret, API key or paid service.
- Do not require a network connection at runtime. No remote scripts, libraries, stylesheets, fonts, images, APIs or analytics. Bundle assets locally or generate them in the browser.
- You may use HTML, CSS, JavaScript, Canvas, SVG, WebGL and browser-native APIs. You choose the architecture. The deliverable must not depend on an unbundled framework or CDN.
- Persist user-created state locally where appropriate using LocalStorage or IndexedDB. Handle unavailable storage gracefully.
- Do not fake functionality. Every visible control must do something meaningful. If a feature is intentionally unavailable, explain it in the interface rather than presenting a dead control.
- Provide useful empty states, validation, error handling, sensible defaults and recovery from destructive actions.
- Support desktop and mobile layouts. Make keyboard navigation, focus visibility, semantic structure, accessible names and reduced-motion preferences part of the implementation.
- Keep performance in mind. Avoid needless rendering work, memory leaks, runaway timers and unbounded simulation growth. Provide pause, reset or equivalent controls for continuous simulations where appropriate.
- Use no copyrighted third-party assets or copied code. Original, generated and clearly licensed local assets are acceptable. No external attribution dependency should be needed at runtime.
- Do not include placeholder copy, TODOs, unfinished panels, fake data presented as live data, or buttons that only trigger alerts.
- Do not claim features, tests, accessibility, performance or compatibility that you did not actually verify.

## Blind-run integrity

- Work only in a new, empty local workspace containing this prompt and files you create for this submission.
- Do not browse, search for, clone, inspect or reuse other benchmark submissions, model dashboards, previous runs or repository history.
- Do not access GitHub, use Git commands, repository APIs, web search, remote browsers or network tools during the run, including for delivery.
- Do not attempt to publish, commit, push, register or upload files to the benchmark repository. The organizer handles publication after the run.
- If your environment has unavoidable network/repository access, disclose it honestly in `AUDIT.md`. Do not claim the run was strictly blind if it was not.

## Exact output and ZIP packaging contract

The organizer imports one artifact folder. Your final handoff must be **one ZIP file** whose archive contains exactly one top-level folder named `{MODEL_SLUG}`. That folder must contain only these files:

```text
{MODEL_SLUG}/
├── index.html
├── meta.json
├── AUDIT.md
└── thumb.png        (optional, only if it is a genuine screenshot)
```

**The folder basename must exactly equal `{MODEL_SLUG}`.** Use lowercase letters, digits and single hyphens only. Do not add the challenge number, model name, version, `submission`, `output` or another wrapper to the folder name. Do not put the files loose at the ZIP root. Do not nest the folder inside another folder. Do not include source archives, build folders, node_modules, package files, screenshots other than the optional thumb, logs, README files or any other extras.

The product itself must be implemented in the single `index.html` file. Inline your CSS and JavaScript and embed any required assets as data URLs, SVG, Canvas or other self-contained browser content. This single-file requirement preserves compatibility with the organizer's current submission importer and showcase. Do not create a multi-file application and expect the organizer to repair or bundle it.

Create valid `meta.json` using this exact schema:

```json
{
  "slug": "{MODEL_SLUG}",
  "model": "<actual model name and version>",
  "title": "<your product's chosen name>",
  "tagline": "<short, accurate product tagline>",
  "palette": ["#123456", "#234567", "#345678", "#456789"],
  "techniques": ["<actual implementation technique>", "<actual implementation technique>", "<actual implementation technique>"],
  "entry": "index.html",
  "thumb": null,
  "submittedAt": "<actual ISO 8601 date-time including timezone>"
}
```

Use exactly four real six-digit hex colours in `palette`. List at least three implementation techniques that genuinely appear in your work. Keep `entry` exactly `index.html`. Use `"thumb": null` unless you include a real PNG screenshot named `thumb.png`, in which case set `"thumb": "thumb.png"`. Use the actual current date and time with timezone. Do not invent a model identity or timestamp.

## Required self-audit

Create `AUDIT.md` and report honestly:

1. **Isolation:** whether any external repository, website, network, previous submission or other model output was accessed; list any breach.
2. **Environment:** tools and commands used; browser/runtime tested; viewport sizes tested.
3. **Feature verification:** list each required capability and mark PASS, PARTIAL or FAIL with concise evidence.
4. **Quality checks:** confirm whether navigation, controls, persistence, responsive layout, keyboard use, reduced motion and error/empty states were tested where relevant.
5. **Known limitations:** list real defects, shortcuts, unimplemented edge cases and anything you could not verify.
6. **Run validity:** mark VALID only if blind-run conditions were respected; otherwise mark INVALID and explain why.

Do not award yourself a perfect score or treat your own assertions as independent verification. Be candid.

## Final verification before packaging

- Re-open and inspect your own `index.html`, `meta.json` and `AUDIT.md`.
- Confirm the top-level folder name and `meta.json.slug` are exactly `{MODEL_SLUG}`.
- Parse/validate `meta.json`; confirm all required keys and values.
- Run the product locally and exercise the core user journey, key controls and failure/empty states where tools permit.
- Check the browser console and fix errors you can reproduce.
- Confirm the app works from a subfolder path and has no runtime network dependencies.
- Confirm the ZIP contains exactly one top-level `{MODEL_SLUG}/` folder and only the three required files plus optional `thumb.png`.
- Re-open the ZIP listing after creation. Do not claim packaging or testing that did not happen.

## Final response

Return **only** the ZIP artifact attachment/link, followed by these two lines:

`AUDIT: complete` (only if you actually completed it; otherwise state the real status)  
`PUBLISHING: pending organizer import`

Do not include repository URLs, commit claims, PR links, deployment claims or additional commentary.