# Audit: deepseek-flash-max

## Isolation attestation
- Files/paths I read in the repo: none before delivery. After committing, I fetched only submissions/deepseek-flash-max/index.html, meta.json, AUDIT.md and thumb.png to verify the write.
- Files/paths I wrote: submissions/deepseek-flash-max/index.html, meta.json, AUDIT.md, thumb.png.
- I did not view any other submission, the dashboard, or repo history: YES
- Tools and commands I ran: local PowerShell for workspace/tooling setup (no submission, dashboard, script or history content opened); Python 3.12 for assembly, HTML/ID/reference checks and thumbnail resizing; Node 24 driving headless Chrome 155 over the DevTools Protocol for screenshots and responsive, keyboard, reduced-motion and offline-file tests; GitHub CLI/API for repository metadata, the main ref, one git-data commit limited to my folder, and own-folder verification.

## Spec compliance (PASS / FAIL, with a one-line note each)
- Section IDs present and in order: PASS — #nav #hero #featured #gallery #lightbox #about #contact appear in exactly that DOM order.
- #nav is 64px, with the 4 required links: PASS — fixed 64px bar; Work, Featured, About and Contact are the four links at the right.
- #featured: pinned, exactly 5 panels, progress indication: PASS — sticky 520vh pin, five 100vw×100vh panels; bar, count, labels and mobile hint. At the midpoint the track transform is -2880px and aria-valuenow is 3.
- #gallery: filter bar, exactly 12 tiles, 3/2/1 columns, 4:5 tiles, animated reflow: PASS — 12 tiles at 1.25 ratio; 3 columns at 1440, 2 at 900, 1 at 390; WAAPI FLIP animations observed during filtering.
- #lightbox: prev/next, arrow keys, Esc, EXIF line, transitions: PASS — both buttons, arrow keys and Esc tested; focus trap and focus restore tested; six EXIF fields update per plate; fade/scale transition.
- #about: two equal columns, generated portrait, 3 animated counters: PASS — 616.33px / 616.34px columns; SVG double-exposure portrait; counters reach 14 / 38 / 09 on view.
- #contact: validated form with animated feedback, footer: PASS — preventDefault-only form, live aria-invalid/error feedback, demo success state, full-bleed footer.
- 12 photos with the exact titles and categories: PASS — exact titles and category order verified from the gallery markup.
- At least 3 different generation techniques: PASS — layered SVG gradients/masks; SVG clip-path geometry and blend modes; feTurbulence displacement; canvas flow-field ink; CSS grain, vignette and glow.
- No network requests, no external fonts/images/libraries: PASS — the performance resource list contains only the document; offline file load succeeds; the only http strings are SVG XML namespaces.
- Relative paths only; works from a subfolder: PASS — no external paths; verified at /submissions/deepseek-flash-max/ and from file://.
- Works inside a sandboxed iframe (no reliance on storage, parent/top, popups): PASS — no storage, cookie, parent/top, popup or fetch calls; the form is local-only.
- Custom cursor/pointer effect, ambient loop, canvas piece, parallax, scroll-driven transform: PASS — custom lens cursor and tile tilt; looping ticker; interactive hero canvas plus canvas ink plate; hero parallax and pinned horizontal transform.
- prefers-reduced-motion handled: PASS — pin becomes relative, track becomes an x-snap scroller, animations/canvas/cursor stop, counters resolve immediately.
- Keyboard accessibility, focus states, alt/aria text: PASS — skip link, focus-visible outlines, button filters, dialog focus trap, labelled SVG artworks and form errors.
- Responsive at 1440px and 390px: PASS — no horizontal overflow at 1440, 900 or 390; mobile nav and all five filters fit; lightbox stacks.
- No console errors, no TODOs or placeholders: PASS — DevTools console/runtime/log empty; no TODO or unfinished text; the only placeholder attributes are blank strings used to anchor floating labels.

## Known weaknesses
- The photographs are deliberately stylised vector/canvas illustrations, not photorealistic imagery; Hands of the Baker and Vera are the most illustrative plates.
- The pinned featured section consumes 5.2 screens of vertical scroll; reduced-motion users get a horizontal swipe rail instead.
- All EXIF data and photo descriptions are invented for the fictional photographer; they are not real capture records.
- The contact form is a local demo and does not transmit or persist anything (stated in the UI).
- The custom cursor is only enabled for fine pointers; touch and reduced-motion users get native pointers.
- thumb.png is a 1200×750 hero screenshot, not a full-page capture.
- The artwork uses SVG filters and a canvas piece; very old or low-power devices may render it less smoothly, though layout and content remain intact.
