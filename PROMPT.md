TASK
Build a complete photography portfolio website as a SINGLE self-contained file, index.html (HTML, CSS, and JavaScript inline), then deliver it into a shared repository using the exact procedure below. This is a creativity and capability test. Impress me, and show your full range through the work itself.

IDENTITY
Your submission slug is: {MODEL_SLUG}   (lowercase letters, digits, hyphens only)
Target repository: {OWNER}/Model_tester, branch: {BRANCH}

═══════════════════════════════════════
PART A: THE WEBSITE
═══════════════════════════════════════

HARD RULES
- Vanilla HTML/CSS/JS only. No frameworks, libraries, CDNs, external fonts, or external images. Nothing may load from the network.
- There are no real photographs. Every "photo" must be generated in the browser using SVG, <canvas>, or CSS (gradients, filters, blend modes, noise, shapes). Use at least three different generation techniques across the 12 photos.
- The file must run correctly when opened directly in a browser (and when served from a subfolder path), with no console errors.
- Use only relative paths. The site will be served at /submissions/{MODEL_SLUG}/ and must not assume it lives at the domain root.
- Your page will be displayed inside a sandboxed iframe without same-origin access. Therefore: do not rely on localStorage, sessionStorage, cookies, or IndexedDB (if you touch them, wrap in try/catch and degrade gracefully); do not reference window.parent or window.top; do not open popups; internal links must be #hash links only; the contact form must be handled entirely in JS (preventDefault) with no real submission.
- Do not search the web, consult other models, browse other submissions, or import external code/assets while making the website. Work independently from the brief.
- EXCEPTION FOR DELIVERY ONLY: you may use an authorized GitHub connector/API to create, update, and verify files **inside your own submission folder**. This is required to deliver the work. It is not permission to browse the rest of the repository.

FIXED LAYOUT (identical for every submission; do not reorder or rename)
Use these exact section IDs, in this exact order:
1. #nav: fixed top bar, 64px tall. Logo/wordmark on the left, four links on the right: Work, Featured, About, Contact.
2. #hero: 100vh. Contains the photographer's name, a one-line tagline, and a scroll cue.
3. #featured: a pinned section where vertical scrolling drives a horizontal sequence of exactly 5 full-viewport panels (one per featured photo, using photos 1–5 below).
4. #gallery: a filter bar (All, Landscape, Portrait, Street, Abstract) above a grid of exactly 12 tiles. Grid is 3 columns on desktop, 2 on tablet, 1 on mobile. Every tile is 4:5 aspect ratio. Each tile shows the photo, title, and category.
5. #lightbox: a full-screen overlay opened by clicking any gallery tile. Shows the large photo, title, category, and fake EXIF line (camera, lens, aperture, shutter, ISO). Supports prev/next buttons, arrow keys, and Esc to close.
6. #about: two equal columns. Left: a generated portrait-style image. Right: a short bio and three animated stat counters.
7. #contact: a contact form (name, email, message) with animated validation feedback, followed by a footer.

FIXED CONTENT
Photographer: Mara Lindqvist. Based in Reykjavík. Use your own tagline and bio.
Photos (number, title, category):
1 Basalt Dawn, Landscape
2 The Quiet Hour, Portrait
3 Neon Tram, Street
4 Fractured Light, Abstract
5 Salt Flats Mirror, Landscape
6 Hands of the Baker, Portrait
7 Rain on Line 9, Street
8 Chromatic Drift, Abstract
9 Glacier Blue, Landscape
10 Vera, Portrait
11 Crosswalk Ballet, Street
12 Ink in Water, Abstract
Stats for #about: your choice of three numbers and labels.

FREEDOM (this is where you show who you are)
Everything not fixed above is yours: art direction, palette, typography (system font stacks only, so be inventive with weight, spacing, and scale), motion language, texture, microinteractions, how each photo is generated, and the overall personality of the site. Do not produce a generic template look. Make deliberate, distinctive choices and keep them consistent.

CAPABILITY SHOWCASE (required; how you implement each is up to you)
- Smooth scroll-triggered reveals and staggered entrances
- Scroll-linked parallax and at least one scroll-driven transformation (scale, rotate, clip-path, or color shift)
- The pinned horizontal scroll in #featured with progress indication
- Animated number counters triggered on view
- Gallery filtering with animated reflow (items move smoothly rather than snapping)
- A custom cursor or pointer-reactive effect (hover, tilt, magnetic, or lens)
- One looping ambient animation (e.g., marquee, drifting grain, floating shapes)
- Lightbox open/close transitions
- At least one canvas-based generative or interactive piece
- Respect prefers-reduced-motion
- Fully responsive, keyboard accessible, with sensible focus states and alt/aria text

QUALITY BAR
Everything must actually work, be polished, and feel intentional at 1440px and 390px widths. Performance matters: use IntersectionObserver and requestAnimationFrame appropriately, and avoid layout thrash. Finish the whole file; no placeholders, no TODOs, no "add more here" comments.

═══════════════════════════════════════
PART B: ISOLATION (STRICTLY ENFORCED)
═══════════════════════════════════════

This is a blind, independent test. Your result is only valid if it is entirely your own.

You MUST NOT:
- Read, open, list, search, clone, fetch, or view ANY file or folder in the repository other than your own folder. This includes other submissions, the root dashboard index.html, scripts/, .github/, PROMPT files, workflows, and git history of other paths.
- Look at other submissions' commits, diffs, pull requests, branches, or deployed pages.
- Use any existing site in the repo as a reference, template, or inspiration, even for structure or styling.

You MUST:
- Write ONLY inside submissions/{MODEL_SLUG}/. Touch nothing else in the repo. Do not edit the dashboard, any index files (including submissions/index.json), scripts, workflows, or shared config.
- Access the repo in the narrowest way possible. Create files directly via the API/tool (write file to path), or use a sparse checkout limited to submissions/{MODEL_SLUG}. Never run a full clone. Never run commands like ls, find, tree, grep, or cat over the repo root or submissions/.
- If you are unsure whether an action would expose you to another submission, do not do it.

Violation = disqualification. Any evidence of you reading outside your folder (tool logs, commits, audit answers) fails the submission. Submissions are also checked automatically: any change outside your folder or outside the four allowed filenames is rejected.

═══════════════════════════════════════
PART C: DELIVERY (REQUIRED FOLDER STRUCTURE)
═══════════════════════════════════════

Create exactly these files, and nothing else:

submissions/{MODEL_SLUG}/
  index.html     ← the complete website (Part A)
  meta.json      ← registration data for the dashboard (schema below)
  AUDIT.md       ← your self-audit (Part D)
  thumb.png      ← OPTIONAL. Only if you can genuinely render a screenshot. Otherwise omit; the dashboard shows a live preview.

meta.json schema (valid JSON, no comments; "slug" must equal the folder name exactly):
{
  "slug": "{MODEL_SLUG}",
  "model": "<your model name and version>",
  "title": "<your site's title, e.g. the name you gave your art direction>",
  "tagline": "<your one-line tagline from the site>",
  "palette": ["#hex", "#hex", "#hex", "#hex"],
  "techniques": ["<generation techniques you used for the photos>"],
  "entry": "index.html",
  "thumb": null,
  "submittedAt": "<the actual current ISO 8601 timestamp with timezone>"
}

For `thumb`, use JSON `null` (WITHOUT quotes) when no real screenshot is available. Only use `"thumb.png"` if that file was actually generated and committed. Do not put `"null"`, `"thumb.png or null"`, or an unfilled placeholder in meta.json.

DELIVERY VERIFICATION (mandatory)
- Commit message: `submission: {MODEL_SLUG}`. Commit to `{BRANCH}` of `{OWNER}/Model_tester`. If direct push is not permitted, open a PR against `{BRANCH}`. A PR counts as **pending**, not live, until it is merged.
- Verify the actual GitHub write result (commit SHA or PR URL). Then re-fetch ONLY `submissions/{MODEL_SLUG}/index.html`, `meta.json`, and `AUDIT.md` from your own folder at the destination branch. Never report success merely because you generated the files locally.
- Verify that `meta.json` is valid JSON, `slug` matches your folder, `entry` is exactly `"index.html"`, `index.html` is not empty, and all required files were committed.
- Do not edit or register yourself in `submissions/index.json`: the repository's GitHub Action discovers valid `meta.json` files and rebuilds that manifest on `main`. The dashboard also checks the live repository manifest. Allow normal indexing/deployment delay. Do not alter shared scripts, workflows, or dashboard files.
- If your tool cannot write to the target branch or open a PR, say delivery is blocked rather than falsely reporting a commit or completed audit.

═══════════════════════════════════════
PART D: SELF-AUDIT (REQUIRED BEFORE FINISHING)
═══════════════════════════════════════

After writing your files, re-read ONLY your own index.html and audit it honestly. Write the results to AUDIT.md using this format:

# Audit: {MODEL_SLUG}

## Isolation attestation
- Files/paths I read in the repo: <list, should be only my own folder or "none">
- Files/paths I wrote: <list>
- I did not view any other submission, the dashboard, or repo history: YES / NO
- Tools and commands I ran: <list>

## Spec compliance (PASS / FAIL, with a one-line note each)
- Section IDs present and in order: #nav #hero #featured #gallery #lightbox #about #contact
- #nav is 64px, with the 4 required links
- #featured: pinned, exactly 5 panels, progress indication
- #gallery: filter bar, exactly 12 tiles, 3/2/1 columns, 4:5 tiles, animated reflow
- #lightbox: prev/next, arrow keys, Esc, EXIF line, transitions
- #about: two equal columns, generated portrait, 3 animated counters
- #contact: validated form with animated feedback, footer
- 12 photos with the exact titles and categories
- At least 3 different generation techniques (name them)
- No network requests, no external fonts/images/libraries
- Relative paths only; works from a subfolder
- Works inside a sandboxed iframe (no reliance on storage, parent/top, popups)
- Custom cursor/pointer effect, ambient loop, canvas piece, parallax, scroll-driven transform
- prefers-reduced-motion handled
- Keyboard accessibility, focus states, alt/aria text
- Responsive at 1440px and 390px
- No console errors, no TODOs or placeholders

## Known weaknesses
<anything that is not perfect, stated honestly>

If any item is FAIL, FIX it in index.html, then re-audit and update AUDIT.md before finishing. Do not claim PASS without verifying it in the code.

═══════════════════════════════════════
FINAL RESPONSE
═══════════════════════════════════════

When delivery and audit are complete AND your destination commit/PR has been verified, reply with ONLY:
- the path of the folder you created,
- the commit hash or PR link,
- "AUDIT: complete".
No other commentary.
