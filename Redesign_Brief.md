# Portfolio Redesign Brief (for Claude Code)

Repo: `armaancs/armaan-react-portfolio` (app lives in `armaan-react-portfolio/armaan-react-portfolio/`)
Live: https://armaancs.github.io/armaan-react-portfolio/
Stack to keep: React 19 + Vite 7 + Tailwind CSS v4 (`@tailwindcss/vite`), deployed to GitHub Pages via `gh-pages`.

## 0. Setup: load the taste skills first

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "redesign-existing-projects"
```

Follow `design-taste-frontend` Section 11 (Redesign Protocol) and `redesign-existing-projects` (Scan, Diagnose, Fix). Before writing code, output the one-line Design Read and the audit, then wait for my OK.

**Design Read (expected):** Reading this as: student developer portfolio for recruiters and hiring managers in data engineering / data science / SWE, with a retro pixel-art game language, leaning toward native Tailwind v4 + Motion (Framer Motion) + layered parallax scenes.

**Mode:** Redesign - Preserve. Keep the pixel / retro-game identity and the green accent. Overhaul layout, motion, typography hierarchy, and code structure.

**Dials:** `DESIGN_VARIANCE: 7` / `MOTION_INTENSITY: 6` / `VISUAL_DENSITY: 4`

---

## 1. What the current site is (audit summary)

### Visual identity (preserve)
- **Theme:** pixel-art landscape. Light mode = sunny valley (blue sky, big glowing sun, orange cliffs, green fields, dirt path, 4 birds). Dark mode = the same valley at night (purple sky, stars, violet cliffs, green bushes). Both are 1536x1024 PNGs in `src/assets/lightMode.png` / `darkMode.png`, used as a fixed full-screen background with a scroll-linked `background-position` parallax (50% to 100% Y).
- **Accent:** green `#63A54D` with a brighter `#3EC232` used for glows. Neon "synth-glow" text-shadow on almost every heading.
- **Type:** `Pixelify Sans` for nearly everything, `Play` for card body text.
- **Personality touches:** "based in canada" eyebrow with "canada" in red, retro LOADING screen, pixel-ish toggle labelled Light/Dark floating bottom-right, Press-Start style footer.
- **Other recognisable details:** "PORTFOLIO" wordmark as a black-on-white block in the navbar; green outer glow on tile and card hover; green themed scrollbar on the project carousel; organisations without a logo file shown as initials badges on a brand-coloured disc (QM `#3B1F5C`, AH `#1B3A2B`, QDA `#00274D`, QR `#5C0A0A`, QH `#3B1F5C`, QU `#00274D`, ML `#5C0A0A`); skills without a logo shown the same way (MB, PD, TF, SK, SQL, BI).

### Information architecture (preserve section order and anchor intent)
Updated to match the code as of Oct 2026. The code is the source of truth for content.
1. Sticky navbar: PORTFOLIO logo, About (modal), Technologies, Projects, Developing (modal), Certifications, Experience, Get in Touch (modal)
2. Hero: "based in canada", ARMAAN / CHOWDHURY, tagline "Machine Learning | Data Engineering | Data Science | Software", GitHub / Instagram / LinkedIn icons, "scroll down" prompt, circular profile photo sliding in from the right
3. Current Technologies: 4 rigid columns of 255x81px tiles, 16 in total (Python, React, AWS, Mapbox GL JS / JavaScript, Figma, Git, pandas / HTML, Node.js, Turf.js, scikit-learn / CSS, Tailwind CSS, SQL, Power BI). Each tile has a name and a one-line descriptor (e.g. "Geospatial Mapping", "Machine Learning Library").
4. Developed Projects: horizontal scroll carousel of 6 cards, newest first (Hotel Revenue Dashboard Aug 2026, SolarAIDE Jul 2026, Dev Portfolio Jul 2025, Maze Generation Algorithm Jun 2025, LogozAI Jan 2025, Pokemon Demo Jun 2022); hover grows card height and reveals description + tech tags. Hotel Revenue Dashboard and SolarAIDE have no public repo.
5. Education: Queen's University, Bachelor of Computing (Hons.), Minor in Statistics, Sep 2024 - May 2028 (Expected), plus a line listing QMIND, QDAA and Queen's Racing involvement
6. Certifications: credential cards driven by a data array. One entry so far: Machine Learning Specialization (DeepLearning.AI & Stanford Online, Coursera, Andrew Ng, Oct 2026) with 3 courses, 8 skill tags, credential ID and a "Verify Credential" link.
7. Experience: vertical timeline of 10 roles (QMIND, ABEN HUB, Queen's Data Analytics Association, Queen's Racing FSAE, Outlier, MSA, QHacks, Rick Hansen Administrative Coordinator, Muslim Welfare Centre, Rick Hansen Mathematics Tutor)
8. Footer: name, copyright, GitHub / LinkedIn / Email icons, back-to-top

### Modal content (must move on-page, not be lost)
- **About:** "A Computer Science + Statistics student at Queen's University currently working as a Machine Learning Engineer at QMIND and a Data Engineer Intern at ABEN HUB, focused on machine learning, data engineering, and data science. Always open to new opportunities and collaborations, feel free to contact me!"
- **Developing:** "A clinical RAG benchmark at QMIND, comparing 4 retrieval methods (including GraphRAG) across 200 patient-timeline questions over ~4K clinical notes."
- **Get in Touch:** email `armchow312@gmail.com`, LinkedIn `linkedin.com/in/armaan-chowdhury-2075a1337/`, Instagram `armaan.cxx`. GitHub is `github.com/armaancs`.

### Problems to fix (diagnosis)
**Bugs / fragility**
- Loader: `window.addEventListener('load')` is registered inside `useEffect`, which often runs after `load` already fired, so `#main-content` can stay at `opacity-0` forever. Plus an artificial 1.5s delay. Remove the blocking loader.
- Nav uses hard-coded `window.scrollTo(650 / 1230 / 2000)`. Breaks on every screen size. Use section `id`s + `scrollIntoView` / `scroll-margin-top`.
- Import casing mismatches (`./assets/github.png` vs `Github.png`, `mazeAlgorithm.png` vs `MazeAlgorithm.png`, `portfolio.png` vs `Portfolio.png`). Works on macOS, breaks on Linux builds. Fix all paths to match real filenames.
- `class=` used instead of `className` in `CurrTech.jsx`.
- Dark mode uses `dark:text-black` on headings that sit on a dark night background, which kills contrast. Theme is also not persisted and ignores `prefers-color-scheme`.
- Footer uses `'Press Start 2P'` but that font is never loaded. Four other Google fonts are loaded but unused (Coral Pixels, Rubik Pixels, Jersey 10, Google Sans Code).
- Instagram icon is not a link. Duplicate `id="card"` on every project card.
- `index.html` references a non-existent `./output.css`; favicon is still `vite.svg`; no meta description / OG tags.
- Only Technologies and Projects still use hard-coded scroll offsets; Certifications and Experience already scroll by `id`. Section ids contain spaces (`"Current Technologies"`, `"Developed Projects"`), so they cannot be used as URL anchors.
- `base` in `vite.config.js` is `"/armaan-react-portfolio"` with no trailing slash.
- `Certifications.jsx` and `HotelRevenue.svg` were never committed, so the deployed site and the repo disagree.
- En-dashes as well as em-dashes in copy ("1–4 per run", "QDAA–QRET", "Jan 2023 – May 2023", the AWS tile).
- Alt text is copy-pasted and wrong in places (Figma is "Javascript Logo", Node.js is "HTML Logo", Tailwind is "CSS Logo").

**Performance**
- `Profile.png` is 10.5 MB and is the largest asset on the page. `lightMode.png` and `darkMode.png` are about 2 MB each, `LogozAI.png` 1 MB.
- Five skill logos are hotlinked from Wikimedia and git-scm.com, so they depend on third-party uptime. Bundle them locally.
- Three separate `window` scroll listeners (parallax in `App.jsx`, navbar reveal, hero scroll prompt), two of which set React state on every scroll event.

**Art constraints**
- Both landscapes are single flattened images. Sun, clouds and birds are baked into the sky, and clouds overlap the cliffs, so layers cut from them are approximate and the sun and birds cannot move on their own.
- The art is soft-edged rather than on a true pixel grid, so `image-rendering: pixelated` has little effect on it.

**Code structure**
- Six project cards are copy-pasted JSX indexing `projects[5]`, `projects[4]`... with `madeWith[0..3]` hand-unrolled. Same for 16 tech tiles and 10 timeline items. `Certifications.jsx` is already data-driven and is the pattern to follow. Move all content into `src/data/` arrays and `.map()` over them.
- Fixed pixel widths everywhere (`255px`, `375px`, `665px` carousel height). Tech grid does not reflow on mobile.
- Card hover animates `height` (layout thrash). Animate only `transform` / `opacity` / `clip-path`.

**Design weaknesses (taste-skill tells)**
- Glow on everything means nothing stands out. The name runs `animate-pulse` forever.
- Everything centered and symmetrical; every section is the same translucent black box (`bg-[rgba(0,0,0,0.5)] rounded-lg`).
- The landscape art is the best asset on the site but sits behind 50% black panels for most of the scroll.
- About / Developing / Contact are modals. "About" is core content and should be on the page. Contact intent appears as "Get in Touch" in nav plus icons in hero plus footer with no single clear CTA.
- Experience shows 9 equal-weight entries; high-school roles get the same space as the current internship.
- Rocket and robot emoji-style PNGs next to the tagline read as clip art.
- Em-dashes in copy (taste-skill 9.G bans them). Replace with hyphens or rewrite.

---

## 2. Target design

### 2.1 Concept: "The valley is the page"
The landscape stops being wallpaper and becomes the stage. As you scroll, you travel down the dirt path into the valley. Content sits on calmer, more opaque surfaces so it stays readable, and the scenery shows through in the gaps between sections.

### 2.2 Background (biggest upgrade)
- **Layered parallax scene.** Build a `<Scene />` component with stacked absolutely-positioned layers, each moving at a different `translateY` speed tied to scroll (use `motion`'s `useScroll` + `useTransform`, or CSS scroll-driven animations with a JS fallback):
  1. Sky (slowest)
  2. Sun / moon + stars
  3. Far mountains
  4. Near cliffs
  5. Foreground bushes (fastest, can overlap bottom of hero)
  If I cannot supply separate layer PNGs, cut the existing PNGs into horizontal bands with `clip-path`/`mask-image` as a first pass, and tell me which layers you would want re-exported. Keep `image-rendering: pixelated` on all pixel art.
- **Ambient life (cheap, on canvas or CSS):** clouds drifting slowly in light mode; stars twinkling at staggered intervals in dark mode; the 4 birds as a small sprite that flaps and crosses the sky every ~20s. One `<canvas>` max, pause it when the tab is hidden or when `prefers-reduced-motion` is set.
- **Theme transition as time of day.** Toggling theme cross-fades sky color and swaps sun for moon with a short arc animation (sun sinks, moon rises) over ~700ms instead of an instant image swap.
- **Grain overlay:** fixed `pointer-events-none` noise layer at very low opacity to unify the pixel art and UI.
- **Readability:** sections get a solid tinted surface (night: deep indigo `~#14122b` at ~85%; day: warm parchment or deep forest green at ~85%) instead of flat 50% black. Tint shadows to the scene hue, not pure black.

### 2.3 Typography
- **Display:** keep `Pixelify Sans`, but only for the name, section titles, and small labels. Headlines big and tight (`tracking-tight`, `leading-[0.9]`).
- **Body:** switch to a clean readable face (e.g. `Geist` for body, `Geist Mono` or `JetBrains Mono` for dates, tags, stats). Drop `Play` and all unused pixel fonts. Max body width ~65ch, `text-wrap: pretty` on paragraphs, `balance` on headings.
- **Glow:** reserve `synth-glow` for 1-2 moments (the name, maybe the hero CTA hover). Remove it from body headings.
- Sentence case for section titles ("Developed projects", not Title Case).

### 2.4 Color tokens (Tailwind v4 `@theme`)
Define tokens once, switch them under `.dark`:
- `--color-accent: #63A54D` (single accent; `#3EC232` only for glow)
- `--color-surface`, `--color-surface-raised`, `--color-ink`, `--color-ink-muted`, `--color-line`
- Day palette pulls from the art: sky blue, sun yellow, clay orange (use sparingly as a secondary highlight only if it does not fight the green). Night palette: indigo, violet, star white.
- Fix every `dark:text-black` contrast issue. Target WCAG AA.

### 2.5 Section-by-section layout

**Navbar**
- Visible from the start (not hidden until 600px). Floating pill bar, top center, glass with 1px inner border.
- Links: About, Skills, Projects, Experience. Certifications has no nav link of its own; it sits with Education. Active section highlighted via `IntersectionObserver`.
- Right side: theme toggle + one primary CTA "Contact". No modals.
- Mobile: compact bar with a slide-down sheet.

**Hero** (asymmetric, `min-h-[100dvh]`)
- Left: small status chip "Currently: ML Engineer @ QMIND + Data Engineer Intern @ ABEN HUB" with a pulsing green dot. Eyebrow "Based in Canada". Huge ARMAAN / CHOWDHURY (CHOWDHURY in accent). One-line positioning statement instead of the pipe list, e.g. "CS + Stats at Queen's. I build ML systems, data pipelines, and geospatial tools."
- Primary CTA "Contact", secondary text link "See projects". Socials as small icon buttons (react-icons, all real links including Instagram).
- Right: portrait in a pixel-stepped frame (stepped corners via `clip-path`, accent border) instead of a plain circle, slightly overlapping the foreground bush layer for depth.
- Name intro: letters assemble with a short pixel/scramble reveal on first load (once, ~600ms), not an infinite pulse.
- Scroll cue: small animated pixel arrow, fades out after first scroll.

**About** (new inline section, replaces the modal)
- Two-column: short bio paragraph left (the About modal copy); right side a "Now building" card for the clinical RAG benchmark at QMIND (the Developing modal copy) plus 3 quick stats in mono, all taken from existing copy (e.g. "99% fewer upstream API calls", "+/-0.1 m elevation precision", "4 retrieval methods benchmarked").

**Skills** (replaces 4 rigid columns)
- Grouped bento grid by category, 16 skills: Data & ML (Python, SQL, pandas, scikit-learn, Power BI), Geospatial (Mapbox GL JS, Turf.js), Web (React, JavaScript, Node.js, HTML, CSS, Tailwind CSS), Cloud & Tools (AWS, Git, Figma). Group tiles vary in size. Keep each skill's existing one-line descriptor.
- Each skill = icon + name + one-line context. Hover: spotlight border that follows the cursor.
- Optional: a slow infinite marquee strip of logos as a divider above the grid.
- Fully responsive via CSS Grid (`auto-fit, minmax(...)`).

**Projects** (replaces the carousel)
- Featured project first: SolarAIDE as a wide card (image left, story right: problem, what I built, result, stack tags).
- All 6 projects are shown. The remaining 5 (Hotel Revenue Dashboard, Dev Portfolio, Maze Generation Algorithm, LogozAI, Pokemon Demo) go in a 2-column asymmetric grid, newest first, generated from `src/data/projects.js`.
- Card: image with subtle zoom on hover, title, date, tags always visible, short description always visible (no hidden-until-hover text, which fails on mobile). GitHub link button; if `githubLink` is null show "Private" label instead of nothing.
- Entrance: staggered fade + 24px rise as the grid enters the viewport.

**Experience**
- Timeline with a vertical line that draws itself as you scroll (scaleY tied to scroll progress) and dots that light up in accent when reached.
- Show top 5 roles expanded (QMIND, ABEN HUB, QDAA, Queen's Racing, Outlier). Collapse the other 5 under "Earlier experience" with an inline expand (no modal).
- Logos in rounded-square badges (not circles), consistent size. Keep the initials-on-brand-colour badge for organisations with no logo file.

**Education and certifications**
- Education: compact single row card, can sit beside or directly above Experience. Keep content as is, including the Minor in Statistics.
- Certifications: compact card beside Education, generated from `src/data/certifications.js`. Keep title, issuer, date, platform, instructor, course list, skill tags, credential ID and the "Verify Credential" link. Must scale to more entries without a layout change.

**Contact / Footer**
- Big closing section: "Let's build something." with the email as a large copy-to-clipboard button (toast "Copied") plus LinkedIn and GitHub.
- Footer row: name, year, back-to-top. Background shows the valley foreground so the page "lands" on the ground.

### 2.6 Motion rules
- Library: add `motion` (Framer Motion) only after checking `package.json`. No GSAP unless needed.
- Entrance: staggered reveal (opacity 0 to 1, y 24 to 0, 60-80ms stagger), once per element.
- Springs for hover / press (`scale 0.98` on press). 200-300ms transitions on all interactive elements.
- Animate only `transform`, `opacity`, `clip-path`, `filter`.
- Respect `prefers-reduced-motion`: disable parallax, canvas, and reveals; keep instant theme swap.
- No infinite loops on text. Ambient loops only in the background scene.

### 2.7 Loader
Remove the blocking loader. If any intro remains, it is the hero name reveal, triggered on mount, under 800ms, never gating content. Preload the active theme's background with `<link rel="preload">`.

---

## 3. Engineering requirements
- Content lives in `src/data/` (`projects.js`, `experience.js`, `skills.js`, `profile.js`, `education.js`, `certifications.js`). Components are presentational and `.map()` over data.
- Components in `src/components/` (`Navbar`, `Scene`, `Hero`, `About`, `Skills`, `Projects`, `ProjectCard`, `Experience`, `Education`, `Certifications`, `Contact`, `Footer`, `ThemeToggle`). Delete per-component CSS files that re-import Tailwind; keep one global `index.css` with `@theme` tokens.
- Theme: `useTheme` hook, reads `localStorage` then `prefers-color-scheme`, sets `.dark` on `<html>` before paint (inline script in `index.html` to avoid flash).
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section id>`, `<footer>`), skip-to-content link, visible focus rings, real `alt` text, `aria-label` on icon buttons.
- Fix all asset import casing. Set `base` in `vite.config.js` correctly for GitHub Pages.
- `index.html`: proper title, meta description, OG image, pixel-art favicon, remove `output.css` and unused font families.
- No em-dashes anywhere in copy. Keep all my existing text content and dates; tighten wording only where noted.
- Lighthouse targets: Performance 90+, Accessibility 95+. Convert large PNGs to WebP/AVIF where it does not blur the pixel art.

## 4. Process
Each design is built in its own directory beside `armaan-react-portfolio/`, which stays untouched as the live site. This design lives in `redesign1/`. Further designs get `redesign2/`, `redesign3/` and so on, created only when asked for.

1. Output Design Read + audit + a short plan. Wait for approval. (Done, approved Oct 6 2026.)
2. Phase 1: refactor to data-driven components, fix bugs above, no visual change yet. Verify `npm run build` passes.
3. Phase 2: tokens, typography, layout per section.
4. Phase 3: Scene parallax, ambient animation, motion layer, theme transition.
5. Phase 4: a11y + performance pass, test both themes at 375px, 768px, 1280px, 1920px. Run the taste-skill pre-flight check and report results.