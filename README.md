# portfolio-3d

Personal cybersecurity portfolio for Ronan Kongala, live at https://ronankongala.github.io/portfolio-3d/. React + TypeScript + Tailwind CSS + Framer Motion, built with Vite.

Dark editorial theme (Kanit display type, IBM Plex Mono for terminal and data), a magnetic terminal centerpiece, a scroll-driven index of every case file, a character-reveal about section, and sticky scale-stacking project cards.

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build` then `npm run preview`.

## Deploy to GitHub Pages

This repo (`portfolio-3d`) is a project page served from `/portfolio-3d/`, so `vite.config.ts` sets `base: '/portfolio-3d/'`. Keep that value in sync if the repo is ever renamed.

An Actions workflow is already included at `.github/workflows/deploy.yml`. To use it:

1. In the repo, open Settings, then Pages.
2. Under "Build and deployment", set Source to "GitHub Actions".
3. Push to `main`. The workflow builds the site and publishes `dist/`.

Manual alternative: run `npm run build` and serve the contents of `dist/` however you prefer.

## Where to edit content

Everything you would change day to day lives in one file:

```
src/data/profile.ts
```

- `PROFILE` and `NAV_LINKS`: name, tagline, email, phone, links.
- `CASE_FILES`: the scrolling index (add a new case, it appears in the strip and links to its repo).
- `WORK`: the four flagship cards, including the stat lines shown in each signal panel.


## Hero avatar

The hero centerpiece is your 3D avatar at `public/ronan-hero.png`, a transparent
cutout floated frameless over the name with a soft drop shadow (the original
template look). To change it, drop a new transparent PNG over
`public/ronan-hero.png` (keep that filename) and rebuild.

Alternative photos are kept out of the repo (`extra-photos/` is gitignored).

## Structure

```
src/
  App.tsx                 section order + MotionConfig (respects reduced motion)
  index.css               reset, fonts, .hero-heading gradient
  data/profile.ts         all content and copy
  components/
    FadeIn.tsx            whileInView wrapper on motion.create()
    Magnet.tsx            mouse-following magnetic hover (disabled under reduced motion)
    AnimatedText.tsx      per-character scroll-driven opacity reveal
    SignalPanel.tsx       terminal-style stat readout (replaces project screenshots)
    Tag.tsx               tech tag pill
    ContactButton.tsx     gradient pill CTA
    GhostButton.tsx       outline pill (repo links, contact links)
  sections/
    HeroSection.tsx       nav, giant gradient name, magnetic terminal, tagline
    CaseStripSection.tsx  two-row draggable, looping index of every case file
    AboutSection.tsx      corner glyphs + character-reveal bio
    WorkSection.tsx       sticky scale-stacking flagship cards
    ContactSection.tsx    contact + footer
```
