# Armaan Chowdhury - Portfolio (redesign1)

A redesign of my developer portfolio. It keeps the pixel-art valley and green accent of the original site, and rebuilds the layout, typography, motion and code structure around them.

This folder is a self-contained app. The original site lives next to it in [`../armaan-react-portfolio`](../armaan-react-portfolio) and is still what is deployed at <https://armaancs.github.io/armaan-react-portfolio/>.

## What's in it

- **Hero** with a status line, a one-sentence summary, and a portrait in a stepped pixel frame. The name assembles from scrambled letters once on load.
- **About**, **Skills** (33 tools in five groups, plus concept tags), **Projects** (one featured, five more in an uneven grid), **Education and certifications**, **Experience** (five recent roles shown, five earlier ones behind a button), and **Contact** with a copy-email button.
- **A layered scene.** The landscape is split into three depths that move at different speeds as you scroll, so the page starts in the sky and ends on the valley path.
- **Ambient animation** on one small canvas: drifting clouds by day, twinkling stars by night, and a flock of birds that crosses every 20 seconds or so.
- **Day and night themes.** The choice is saved, falls back to the system setting, and cross-fades the scene when toggled.
- **Reduced motion support.** With that system setting on, the parallax, canvas, reveals and scramble are all switched off.

## Tech stack

| | |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4, with design tokens in `src/index.css` |
| Animation | Motion (`motion/react`, loaded through `LazyMotion`) |
| Icons | `react-icons` |
| Fonts | Pixelify Sans, Geist and Geist Mono, self-hosted through Fontsource |

## Running it

Requires Node.js 20.19 or newer (a Vite 7 requirement).

```bash
cd redesign1
npm install
npm run dev
```

The dev server runs at <http://localhost:5181/redesign1/>. The port is fixed so it does not collide with the original site's dev server on 5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Editing content

All text and lists live in `src/data/`. The components only render what is there, so most updates are a one-file change.

| File | Controls |
| --- | --- |
| `profile.js` | Name, status line, summary, bio, "Now building", stats, email and social links |
| `skills.js` | Skill groups, each skill's icon and descriptor, and the concept tags |
| `projects.js` | Projects, newest first. `featured: true` picks the large card; `repo: null` shows "Private" |
| `experience.js` | Roles, newest first. `featured: true` keeps a role in the always-visible list |
| `education.js` | Degree, dates and activities |
| `certifications.js` | Certificates, with courses, skills and a verification link |

## Project structure

```
redesign1/
├── index.html            # Page head, theme script, social-share tags
├── public/
│   ├── scene/            # Day and night landscape images (WebP)
│   ├── favicon.svg
│   └── og.jpg            # Social-share image
├── src/
│   ├── components/       # One component per section, plus Scene, AmbientCanvas, Reveal
│   ├── data/             # All site content (see above)
│   ├── hooks/            # useTheme, useActiveSection
│   ├── assets/           # Portrait, project images, organisation logos
│   ├── index.css         # Tailwind import, tokens, scene and component styles
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

## Deploying

The production build uses the base path `/armaan-react-portfolio/`, so it can replace the current site on GitHub Pages without further changes:

```bash
npm run deploy
```

This builds the app and publishes `dist/` to the `gh-pages` branch, which overwrites the live site. It has not been run for this design yet.

## Checks

Measured with Lighthouse against a production build in October 2026:

| | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 95 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

The layout was checked at 375, 768, 1280 and 1920 px wide in both themes. A few later changes (a larger portrait and an expanded skills section) were made after that Lighthouse run.

## Known limits

- The two landscapes are single flattened images, so the three scene depths are the same picture behind different masks. Near the bottom of the page the distant mountains show a faint second copy.
- The sun is painted into the day image, so on a theme change it fades with the sky; only the moon moves.

## Credits

Design brief and content by Armaan Chowdhury. Redesign built with Claude Code, following the brief in [`../Redesign_Brief.md`](../Redesign_Brief.md).
