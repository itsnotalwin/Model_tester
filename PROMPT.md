TASK — BLIND HANDOFF v2
Build a complete photography portfolio website as a SINGLE self-contained file, index.html (HTML, CSS, and JavaScript inline), then deliver the finished files as a private local artifact to the organizer. Do not access, discover, clone, browse or write to any destination repository. This is a creativity and capability test. Impress me, and show your full range through the work itself.

IDENTITY
Your submission slug is: {MODEL_SLUG}   (lowercase letters, digits, hyphens only)
Delivery: create a local folder named {MODEL_SLUG}, then attach/hand over its files. A separate organizer imports them after the independent test ends. You are not given a repository name, URL, branch, or GitHub credentials.

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
- Do not use GitHub tools, Git commands, repository APIs, cloud browser, web search, site fetches, remote images, or other online resources for any stage, including delivery. Use local file creation and local preview/testing only.
- Do not use any existing model-generated example or code from a previous run, even if it is accidentally available in your context.

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
PART B: BLIND ISOLATION — ZERO REPOSITORY ACCESS
═══════════════════════════════════════

Your output must be independent. This is a blind benchmark, not a collaboration.

ACCESS RULE (mandatory)
- Work in a NEW, EMPTY local directory. Only the benchmark brief and your own newly authored files may inform your implementation.
- DO NOT access any GitHub repository, repository listing, git history, commit, PR, issue, model dashboard, published preview, example submission, or model-comparison page. Do not inspect another model's work by any channel.
- DO NOT run git clone, git fetch, git pull, sparse checkout, gh commands, repository search, or GitHub connector tools. In particular, `git` metadata and branching do not provide read isolation.
- DO NOT use web search, connected apps, browser navigation to online sites, remote URLs, or networked tools. If tools with online access exist, do not call them. Local filesystem read/write and local browser rendering are permitted ONLY within your new submission workspace.
- The destination repository is deliberately NOT disclosed. You are NOT responsible for committing, pushing or registering your submission. All publication happens independently, after your work is handed to the organizer.
- Do not reference another participant or any previous submission in your website or audit.

Do not claim technical enforcement from these rules. A trustworthy blind evaluation also requires the organizer to run you in a sandbox with network access disabled and without a connected repository. If isolation is broken, disclose it in AUDIT.md and mark the test INVALID rather than claiming you were independent.

═══════════════════════════════════════
PART C: PRIVATE ARTIFACT DELIVERY
═══════════════════════════════════════

Create exactly these files in ONE local folder, and nothing else:

{MODEL_SLUG}/
  index.html     ← complete self-contained website (Part A)
  meta.json      ← valid registration metadata, schema below
  AUDIT.md       ← your honest audit (Part D)
  thumb.png      ← OPTIONAL: only if you captured a genuine rendered screenshot

The artifact folder basename MUST equal your submission slug. It is NOT a git checkout and must NOT contain a .git directory. The organizer will later place this folder under submissions/{MODEL_SLUG}/ in the public showcase; do not do that yourself.

meta.json schema (valid JSON with no comments):
{
  "slug": "{MODEL_SLUG}",
  "model": "<your actual model name and version>",
  "title": "<your site's artistic title>",
  "tagline": "<one-line tagline from your site>",
  "palette": ["#123456", "#234567", "#345678", "#456789"],
  "techniques": ["<actual generative techniques; at least three>"],
  "entry": "index.html",
  "thumb": null,
  "submittedAt": "<actual current ISO 8601 date-time including a timezone>"
}

Replace every placeholder with a factual value and real palette colors. The four palette examples above are placeholders, NOT mandated colors. Keep `"entry": "index.html"` exact. Use unquoted JSON null for missing screenshots. If, and only if, you actually capture thumb.png, set `"thumb": "thumb.png"`.

DELIVERY VERIFICATION (mandatory)
- Save and re-open your own index.html, meta.json and AUDIT.md. Verify JSON syntax, the exact folder slug, the required website content, and your audit. Test locally where tools permit.
- Hand over the folder as an attached zip or three/four downloadable files, preserving the folder name and filenames. Never include a URL or access token for the organizer's repository.
- Do NOT claim a git commit, PR, dashboard registration, or live deployment. Those actions have not happened. Your delivery is COMPLETE only as a LOCAL ARTIFACT, and publication remains PENDING ORGANIZER IMPORT.
- If artifact tooling is unavailable, state the limitation plainly; do not pretend the delivery was written, committed, published or verified.

═══════════════════════════════════════
PART D: SELF-AUDIT (REQUIRED BEFORE FINISHING)
═══════════════════════════════════════

After writing your files, re-read ONLY your own index.html and audit it honestly. Write the results to AUDIT.md using this format:

# Audit: {MODEL_SLUG}

## Isolation attestation
- External repositories, dashboards, model submissions or websites accessed: NONE / list each
- Files/paths I read: <only my own local workspace, or list exceptions>
- Files/paths I wrote: <my own local artifact paths>
- I used NO web, network, GitHub, repo or remote browser tools: YES / NO
- I did not view another model's work: YES / NO
- Blind test validity: VALID / INVALID (explain any breach honestly)
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

When your LOCAL artifact has been saved and your self-audit is complete, reply with ONLY:
- the local artifact folder path and attachment/file links (if available),
- "AUDIT: complete" (only if actually completed),
- "PUBLISHING: pending organizer import".
Do not provide or invent a commit SHA or PR link. No other commentary.
