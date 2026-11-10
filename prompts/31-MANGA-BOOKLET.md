# THE GAUNTLET 31 — 31. The Manga Booklet

**Benchmark family:** Division 4 — Creative Software  
**Prompt version:** 1.0  
**Deliverable:** A complete original manga one-shot in a self-contained digital booklet  
**Deployment target:** GitHub Pages-compatible static website

## Your mission

Create an original manga booklet completely from scratch. You are the writer, storyteller, character designer, illustrator, panel artist, letterer, page designer, book designer and production artist. Invent the title, premise, genre, world, characters, visual language, story and ending yourself.

The manga itself is the product. Do not build a manga editor, a manga-generation dashboard, a story-planning tool or a placeholder reader with sample pages. Deliver a finished, illustrated, readable book.

## Creative freedom

You have full creative control. Choose the genre, setting, tone, audience, characters, themes, pacing, art direction, composition, reading direction and visual techniques. Make the work feel authored: distinctive, coherent, emotionally engaging and visually memorable.

Do not imitate an existing manga, franchise, artist, character, panel sequence or recognisable copyrighted design. Do not use a famous story with names changed. Create an original visual identity and an original story with a beginning, development, climax and satisfying resolution. Do not ask for a premise or wait for approval.

## The finished book

Create a **16-page booklet** in a deliberate sequence:

1. Front cover with an original title treatment and a compelling original illustration.
2. Inside-front page or opening visual vignette.
3. Title, author credit and publication details.
4. Character introduction / visual reference page that establishes the recurring cast.
5–14. Ten consecutive story pages containing the complete one-shot narrative.
15. A meaningful closing page, epilogue or final illustration that belongs to the story.
16. Back cover with an original design.

The ten story pages must contain at least **30 distinct story panels in total**. Use a purposeful mixture of panel sizes and compositions. A full-page or double-width moment is welcome when the story earns it, but do not use splash art to avoid drawing the story. Every page must contribute to the book.

## Original artwork

Original art is central to this challenge, not decoration.

- Illustrate every story panel. Each panel must depict a specific moment, action, expression, environment or visual beat from the story.
- Create a recognisable visual design for the recurring cast and maintain it throughout the book: face, hair, silhouette, proportions, clothing, accessories and other defining features must not drift between panels.
- Show expressive poses, readable body language, facial acting, meaningful backgrounds, foreground/midground depth, lighting or tonal separation, and deliberate composition.
- Give important scenes visual variety. Do not repeat one pose or background with only dialogue changed.
- Use manga/comic visual language where it helps: panel borders and gutters, close-ups, establishing shots, motion lines, impact frames, speed lines, screentones, shadows, visual metaphors, sound effects and inventive page rhythm.
- Lettering must be part of the finished artwork and remain legible. Speech balloons, tails, captions and sound effects should be placed intentionally and must not obscure faces or important action.
- All artwork must be original and embedded in the deliverable. Use inline SVG, Canvas, CSS-drawn artwork, or locally created image assets embedded as data URLs. You may combine techniques. If you use SVG or Canvas, create actual illustrated scenes with characters, detail, staging, line work, shading and backgrounds. A handful of circles, silhouettes, gradients, emoji or abstract placeholders is not a substitute for manga illustration.
- Do not fetch images, fonts, textures, templates or assets from the internet. Do not use remote APIs, CDNs, stock art, watermarked art or copied material.

The character-reference page should make the cast's designs easy to compare with their appearances later in the story. The same character should be recognisable in a close-up, a full-body pose, a different camera angle and an emotional scene.

## Story and lettering

Write the complete story, not an outline or a collection of disconnected scenes. Establish what the reader needs to know through the pages themselves. Give characters distinct voices and motivations. Let important moments breathe; use visual storytelling instead of explaining every action in narration.

Dialogue must fit the available balloons, sound natural, and be proofread. Keep speech bubbles in the correct reading order for the direction you choose. Use captions sparingly and make every sound effect intentional. Avoid filler dialogue, unexplained jumps, unresolved plot threads and placeholder text.

Choose a reading direction and apply it consistently to panel order, balloon order, page turns and navigation. Make the direction clear to the reader without interrupting the story.

## Booklet reader and print presentation

Present the finished book in an elegant, comfortable reader built around the pages themselves.

Required reader behaviour:
- Open on the front cover and let the reader move through the complete book in the correct order.
- Provide working previous/next navigation, current page and total page count, and a page thumbnail or page-jump navigator.
- Support keyboard navigation and touch/swipe on suitable devices. Make controls understandable and keyboard accessible.
- Provide a useful fit-to-screen reading view and a way to inspect the page artwork at a larger size.
- Include a working Print / Save as PDF action and print styles that produce clean, correctly ordered pages without reader controls, navigation chrome or cropped artwork.
- Preserve the manga's intended page proportions, panel gutters, lettering and margins on desktop, tablet, mobile and in print.
- Respect prefers-reduced-motion. Page-turn effects must not make reading slower or inaccessible.
- Make the reader start reliably, recover from invalid page requests, and show useful states rather than blank screens.

The reader is there to present the finished book, not distract from it. Keep the interface refined and subordinate to the artwork.

## Technical and runtime contract

- Deliver a static website that can be hosted from a GitHub Pages project subpath.
- The complete product must live in one self-contained `index.html`, with inline CSS and JavaScript and all artwork embedded in the HTML. No additional runtime files.
- Use browser-native HTML, CSS, JavaScript, SVG and Canvas as appropriate. No framework, build step, backend, secrets, API keys, paid services or runtime network access.
- Do not load remote images, fonts, scripts, libraries, stylesheets, APIs or analytics. Use system font stacks and relative paths only.
- Every visible control must work. No fake buttons, dead links, placeholder panels, TODOs, lorem ipsum or claims of features that are not implemented.
- Make the book responsive, keyboard usable, accessible, performant and considerate of reduced-motion preferences.
- Use semantic markup, visible focus states, useful accessible labels and sensible contrast.
- Test the HTML from a subfolder path, not only at the domain root. Do not assume the deployment origin or a fixed base URL.
- Do not claim tests, print fidelity or accessibility that you did not verify.

## Blind-run integrity

- Work in a new, empty local workspace containing only this prompt and files you create for this submission.
- Do not browse, search for, clone, inspect or reuse other benchmark submissions, model dashboards, previous runs or repository history.
- Do not access GitHub, use Git commands, repository APIs, web search, remote browsers, network tools or connected apps during the run, including for delivery.
- Do not attempt to publish, commit, push, register or upload files to the benchmark repository. The organizer handles publication after the run.
- If your environment has unavoidable network or repository access, disclose it honestly in `AUDIT.md`. Do not claim the run was strictly blind if it was not.

## Exact output and ZIP packaging contract

Your final handoff must be **one ZIP file** containing exactly one top-level folder named `{MODEL_SLUG}`. That folder must contain only:

```text
{MODEL_SLUG}/
├── index.html
├── meta.json
├── AUDIT.md
└── thumb.png        (optional, only if it is a genuine screenshot)
```

The folder basename must exactly equal `{MODEL_SLUG}`, using lowercase letters, digits and single hyphens only. Do not add the challenge number or model name. Do not put files loose at ZIP root, add another wrapper folder, or include extra files. The complete book and reader must be in `index.html`.

Create valid `meta.json` using this exact schema:

```json
{
  "slug": "{MODEL_SLUG}",
  "model": "<actual model name and version>",
  "title": "<original manga title>",
  "tagline": "<short, accurate tagline>",
  "palette": ["#123456", "#234567", "#345678", "#456789"],
  "techniques": ["<actual artwork or implementation technique>", "<actual artwork or implementation technique>", "<actual artwork or implementation technique>"],
  "entry": "index.html",
  "thumb": null,
  "submittedAt": "<actual ISO 8601 date-time including timezone>"
}
```

Use exactly four real six-digit hex colours in `palette`. List at least three techniques that genuinely appear in the work. Keep `entry` exactly `index.html`. Use `"thumb": null` unless you include a genuine PNG screenshot named `thumb.png`. Use the actual model identity and current timezone-aware timestamp. Do not invent either.

## Required self-audit

Create `AUDIT.md` and report honestly:

1. **Isolation:** whether any external repository, website, network, previous submission or other model output was accessed; list any breach.
2. **Environment:** tools and commands used, browser/runtime tested and viewport sizes tested.
3. **Story:** confirm the 16-page sequence, ten complete story pages, panel count, reading direction and whether the ending resolves the story.
4. **Artwork:** explain how the original art was produced; identify which pages and panels were inspected for recurring-character consistency, anatomy, backgrounds, composition and legibility.
5. **Reader and print checks:** mark PASS, PARTIAL or FAIL for page order, previous/next, thumbnails/page jump, keyboard, touch/swipe, zoom, print/PDF layout, responsiveness and reduced motion. Give brief evidence.
6. **Technical checks:** note JSON validation, folder/ZIP structure, subpath operation, console errors and network dependencies.
7. **Known limitations:** list genuine defects, shortcuts, unimplemented edge cases and anything you could not verify.
8. **Run validity:** mark VALID only if blind-run conditions were respected; otherwise mark INVALID and explain why.

Do not award yourself a perfect score or treat your own assertions as independent proof. Be candid.

## Final verification before packaging

- Re-open and inspect your own `index.html`, `meta.json` and `AUDIT.md`.
- Confirm that the folder name and `meta.json.slug` both equal `{MODEL_SLUG}`.
- Validate the JSON and all required metadata fields.
- Count the pages and story panels. Inspect the full book, not just the cover.
- Exercise page navigation, page jumping, keyboard and touch controls where tools permit.
- Inspect representative pages for character consistency, anatomy, panel flow, lettering, clipping and contrast.
- Test the print stylesheet and the subfolder deployment path where tools permit.
- Check the browser console and fix errors you can reproduce.
- Inspect the ZIP listing and confirm exactly one top-level `{MODEL_SLUG}/` folder with only the permitted files.
- Never claim packaging or testing that did not happen.

## Final response

Return **only** the ZIP artifact attachment/link, followed by:

`AUDIT: complete` (only if you actually completed it; otherwise state the real status)  
`PUBLISHING: pending organizer import`

Do not include repository URLs, commit claims, PR links, deployment claims or additional commentary.
