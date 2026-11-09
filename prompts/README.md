# THE GAUNTLET 30 — Prompt Suite

Thirty independent, self-contained product-build challenges for comparing AI models on substantial software creation.

## How to run

1. Choose one challenge prompt from this directory.
2. Give the contestant only that prompt, replacing `{MODEL_SLUG}` with the unique, lowercase slug assigned to that model/run.
3. Run each contestant in an independent empty workspace with network, GitHub, repository and prior-submission access disabled.
4. Collect the one ZIP artifact before publishing any submission in the cohort.
5. The ZIP must contain exactly one top-level folder named `{MODEL_SLUG}`, containing `index.html`, `meta.json`, `AUDIT.md`, and optionally `thumb.png`.
6. The organizer extracts the folder and uses the existing `publish-submission.mjs` importer, then commits/pushes the imported folder. The existing index workflow registers it in the showcase.

## Important compatibility note

The current importer deliberately accepts a single self-contained `index.html`, `meta.json`, `AUDIT.md`, and optional `thumb.png`. Prompts preserve that contract. All app code and assets must therefore be embedded in the HTML. Do not loosen the importer or change existing submissions just to accommodate contestant output.

## Fairness

Use the same prompt version, model-specific slug substitution policy, runtime restrictions, time/tool budget and evaluation rubric for every model in a given comparison. Keep blind runs sealed until all entries in the comparison cohort are collected. Preserve original ZIPs and run logs outside the public submission folders.

## Challenge index

- **01. The Digital Showcase** — Websites & Applications — `prompts/01-DIGITAL-SHOWCASE.md`
- **02. The Browser Operating System** — Websites & Applications — `prompts/02-BROWSER-OS.md`
- **03. The Productivity Suite** — Websites & Applications — `prompts/03-PRODUCTIVITY-SUITE.md`
- **04. The E-Commerce Empire** — Websites & Applications — `prompts/04-ECOMMERCE-EMPIRE.md`
- **05. The Social Network** — Websites & Applications — `prompts/05-SOCIAL-NETWORK.md`
- **06. The 2D Adventure** — Games — `prompts/06-2D-ADVENTURE.md`
- **07. The 3D Adventure** — Games — `prompts/07-3D-ADVENTURE.md`
- **08. The Colony Builder** — Games — `prompts/08-COLONY-BUILDER.md`
- **09. The Strategy War** — Games — `prompts/09-RTS-STRATEGY.md`
- **10. The Survival Experience** — Games — `prompts/10-SURVIVAL-EXPERIENCE.md`
- **11. The Living Planet** — Simulations & Living Worlds — `prompts/11-LIVING-PLANET.md`
- **12. The Human Simulation** — Simulations & Living Worlds — `prompts/12-HUMAN-SIMULATION.md`
- **13. The City Simulator** — Simulations & Living Worlds — `prompts/13-CITY-SIMULATOR.md`
- **14. The Space Simulator** — Simulations & Living Worlds — `prompts/14-SPACE-SIMULATOR.md`
- **15. The Physics Lab** — Simulations & Living Worlds — `prompts/15-PHYSICS-LAB.md`
- **16. The Creative Studio** — Creative Software — `prompts/16-CREATIVE-STUDIO.md`
- **17. The Video Workshop** — Creative Software — `prompts/17-VIDEO-WORKSHOP.md`
- **18. The Music Laboratory** — Creative Software — `prompts/18-MUSIC-LABORATORY.md`
- **19. The 3D Workshop** — Creative Software — `prompts/19-3D-WORKSHOP.md`
- **20. The Animation Studio** — Creative Software — `prompts/20-ANIMATION-STUDIO.md`
- **21. The Command Centre** — Data, Maps & Knowledge — `prompts/21-COMMAND-CENTRE.md`
- **22. The Living Atlas** — Data, Maps & Knowledge — `prompts/22-LIVING-ATLAS.md`
- **23. The Scientific Explorer** — Data, Maps & Knowledge — `prompts/23-SCIENTIFIC-EXPLORER.md`
- **24. The Knowledge Universe** — Data, Maps & Knowledge — `prompts/24-KNOWLEDGE-UNIVERSE.md`
- **25. The Financial Empire** — Data, Maps & Knowledge — `prompts/25-FINANCIAL-EMPIRE.md`
- **26. The Multiplayer Arena** — Advanced Engineering — `prompts/26-MULTIPLAYER-ARENA.md`
- **27. The Digital Twin** — Advanced Engineering — `prompts/27-DIGITAL-TWIN.md`
- **28. The Logistics Empire** — Advanced Engineering — `prompts/28-LOGISTICS-EMPIRE.md`
- **29. The Autonomous Civilization** — Advanced Engineering — `prompts/29-AUTONOMOUS-CIVILIZATION.md`
- **30. The Living World** — Advanced Engineering — `prompts/30-LIVING-WORLD.md`

## Common judging rubric (100 points)

- Functional completeness and acceptance tests: 30
- Product quality, UX and visual craft: 20
- Technical quality and architecture: 15
- Depth and challenge-specific systems: 15
- Reliability, performance and error handling: 10
- Accessibility, responsive behaviour and deployment readiness: 10

Score challenge-specific acceptance criteria separately as evidence. Do not rely on the model's self-audit as proof. Record defects and reproduction steps. A feature that is claimed but cannot be exercised does not earn credit.

## Submission naming

The output folder is named only by the assigned model slug, not by the challenge number. Use a unique slug per model/run to avoid collisions in the existing append-only submissions importer. Record challenge ID, prompt version and run metadata in the organizer's private evaluation log, not by changing the public importer contract.
