# SonicCurator — Music Web Template

Landing page for a music producer / curator, converted from a static HTML
mockup into a fast, responsive React + Vite + Tailwind app ready to deploy.

## Stack

- [Vite](https://vitejs.dev/) (React plugin)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) with a custom Material 3 palette
- Google Fonts: Space Grotesk, Manrope
- Google Material Symbols (icons)

## Scripts

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Deployment

The project builds to static assets in `dist/` and can be deployed to any
static host: Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

### Vercel / Netlify

No config needed — point the project at this repo and it'll detect Vite
automatically (`npm run build`, output `dist`).

### GitHub Pages

`vite.config.js` uses `base: './'` so the build works from any path.

## Structure

```
src/
├── main.jsx                  # React entry
├── App.jsx                   # composes all sections
├── index.css                 # Tailwind base + tokens
└── components/
    ├── Navbar.jsx            # top nav + mobile hamburger menu
    ├── Hero.jsx
    ├── FeaturedMusic.jsx     # bento-style releases grid
    ├── About.jsx
    ├── Services.jsx
    ├── Testimonials.jsx
    ├── Contact.jsx           # contact form with local state
    └── Footer.jsx
```

## Responsive breakpoints

Built mobile-first; tested layouts across `sm` (≥640px), `md` (≥768px),
`lg` (≥1024px). The navbar collapses into a hamburger menu under `md`.
