# Audit: deepseek-flash

## Isolation attestation
- Files/paths I read in the repo: `submissions/deepseek-flash/index.html`, `submissions/deepseek-flash/meta.json`, `submissions/deepseek-flash/AUDIT.md` (only my own folder, re-fetched after commit for delivery verification).
- Files/paths I wrote: `submissions/deepseek-flash/index.html`, `submissions/deepseek-flash/meta.json`, `submissions/deepseek-flash/AUDIT.md`, `submissions/deepseek-flash/thumb.png`.
- I did not view any other submission, the dashboard, or repo history: YES
- Tools and commands I ran: GitHub CLI authentication and repository metadata checks (`gh auth status`, repository default-branch/permission metadata, and an exact-path existence check for my own folder); local PowerShell, bundled Python, Node.js syntax checking, and Chrome headless/CDP used to render `index.html` directly from `file://`, inspect the DOM and computed layout, test interactions, capture screenshots, and collect console errors; GitHub Git Data API for writing only the four files in my folder and refetching those same files for verification.

## Spec compliance (PASS / FAIL, with a one-line note each)
- Section IDs present and in order: #nav #hero #featured #gallery #lightbox #about #contact — PASS. Verified in parsed DOM order.
- #nav is 64px, with the 4 required links — PASS. Computed height is exactly 64px and the four links are Work, Featured, About, Contact.
- #featured: pinned, exactly 5 panels, progress indication — PASS. Sticky 100vh viewport, 5 × 100vw panels, scroll-driven translate, live `01 / 05` counter and ARIA progressbar.
- #gallery: filter bar, exactly 12 tiles, 3/2/1 columns, 4:5 tiles, animated reflow — PASS. Verified 3 columns at 1440px, 2 at 800px, 1 at 390px; all tiles measured 0.8 width/height ratio; filtering uses measured FLIP-style reflow animations.
- #lightbox: prev/next, arrow keys, Esc, EXIF line, transitions — PASS. Focus-trapped dialog, previous/next buttons, ArrowLeft/ArrowRight, Escape, generated EXIF (camera / lens / aperture / shutter / ISO), animated open/close.
- #about: two equal columns, generated portrait, 3 animated counters — PASS. Equal-width desktop grid; inline SVG portrait built from gradients, clip paths and turbulence; three IntersectionObserver-triggered counters.
- #contact: validated form with animated feedback, footer — PASS. Custom JS validation with inline errors, shake/line animations, fake in-page success state, and a footer inside #contact.
- 12 photos with the exact titles and categories — PASS. DOM order and labels match the brief exactly.
- At least 3 different generation techniques (name them) — PASS. Seeded fBm procedural canvas terrain, layered geometric/vector canvas with blend-mode lighting, per-pixel chromatic noise fields, particle/flow-field ink simulation, and an inline SVG portrait with feTurbulence grain.
- No network requests, no external fonts/images/libraries — PASS. No external URLs or resource entries were found; only system font stacks and inline/browser-generated artwork.
- Relative paths only; works from a subfolder — PASS. The page has no asset paths and uses hash-only internal links; verified directly from `file://`.
- Works inside a sandboxed iframe (no reliance on storage, parent/top, popups) — PASS. No storage, cookie, IndexedDB, `window.parent`, `window.top`, or popup references; contact submission is intercepted with `preventDefault()`.
- Custom cursor/pointer effect, ambient loop, canvas piece, parallax, scroll-driven transform — PASS. Custom cursor with label states and gallery tilt, CSS marquee plus animated grain, interactive hero canvas, scroll drifts/parallax, and hero/title/featured/about scroll-driven scale, translation and clip-path changes.
- prefers-reduced-motion handled — PASS. CSS disables animation/transition duration and transforms; JS skips ambient loops, smooth scrolling, cursor easing, tilt, and counter delays while keeping all content functional.
- Keyboard accessibility, focus states, alt/aria text — PASS. Visible focus rings, keyboard-operable filters/navigation/tiles, focus trap and focus return in the lightbox, ARIA labels/roles, live regions, SVG title/desc, and decorative canvases hidden appropriately.
- Responsive at 1440px and 390px — PASS. Verified with Chrome headless at both widths with no horizontal overflow; tablet breakpoint also checked at 800px.
- No console errors, no TODOs or placeholders — PASS. Runtime error capture was empty after load, navigation, filtering, lightbox use and form validation; no unfinished copy, TODO markers or placeholder content remain.

## Known weaknesses
- The photographs are intentionally stylized, procedural illustrations rather than photorealistic images; they use canvas and SVG abstraction to evoke photographic subjects.
- Cross-browser testing was limited to Chromium. The design uses modern CSS such as `svh`, `inert` and `backdrop-filter`; modern Safari/Firefox are expected to work but were not exercised here.
- Generated source canvases are 900 × 1125 and are scaled up for full-viewport presentation; fine detail becomes softer on very high-resolution displays.
- The included thumbnail is a static 960 × 667 screenshot of the hero, so it cannot demonstrate the hover, filtering and lightbox interactions.