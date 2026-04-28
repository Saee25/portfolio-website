# Saee Nalawade — Portfolio

A galaxy-themed personal portfolio for **Saee Nalawade**, Full Stack Developer.

Built with **React + TypeScript + Vite + Tailwind CSS** and powered by **Framer Motion** animations. Deep purple / electric blue neon aesthetic with an animated starfield background, drifting nebulae, orbiting planets, and shooting stars. Fully responsive with **light & dark themes**.

## ✨ Features

- Animated starfield + nebula + shooting stars (every page)
- Typewriter hero, count-up stats, scroll reveals, alternating slide-ins
- Light/Dark theme toggle (persisted in `localStorage`)
- Multi-page routing: `/`, `/experience`, `/projects`
- Centralized content in `src/data/portfolio.ts` — edit copy without touching components
- Image placeholders clearly marked with `data-placeholder` attributes
- 100% Tailwind, no external CSS frameworks
- Accessible, semantic HTML, SEO-friendly meta tags

## 🚀 Local Development

```bash
# install
npm install        # or: bun install / pnpm install

# run dev server
npm run dev        # http://localhost:8080

# production build
npm run build
npm run preview
```

## 📁 Folder Structure

```
src/
├── components/
│   ├── background/     # Starfield, Nebula, ShootingStars, GalaxyBackground
│   ├── layout/         # Navbar, Footer, ThemeToggle, PageLayout
│   ├── sections/       # Hero, About, Education, Skills, Experience,
│   │                   # Projects, Achievements, Extracurricular, Contact
│   └── ui/             # shadcn primitives
├── data/
│   └── portfolio.ts    # ALL editable content lives here
├── hooks/
│   ├── useTheme.ts
│   └── useTypewriter.ts
├── pages/
│   ├── Index.tsx       # Home (all sections)
│   ├── ExperiencePage.tsx
│   ├── ProjectsPage.tsx
│   └── NotFound.tsx
├── index.css           # Galaxy design tokens (light + dark)
└── main.tsx
```

## ✏️ Editing Content

All copy, links, skills, experience, projects, achievements live in:

```
src/data/portfolio.ts
```

Edit values in that single file — nothing else needs to change.

## 🖼️ Adding Images

Image slots throughout the site are rendered as labeled placeholder `<div>`s with a `data-placeholder` attribute. Examples:

- `data-placeholder="profile-photo"` (About section)
- `data-placeholder="experience-image-Unstitched"` (each experience card)
- `data-placeholder="achievement-image-0"` (hackathon photo)
- `data-placeholder="extra-image-0"` (extracurricular)
- `data-placeholder="project-image-FrontWaves"` (project card)

Replace each placeholder `<div>` with an `<img>` tag, e.g.:

```tsx
<img src="/images/quasar-team.jpg" alt="Quasar 3.0 winning team" className="aspect-video rounded-xl object-cover" />
```

Place static images in `public/images/` and reference them as `/images/your-file.jpg`, or import from `src/assets/`.

For the resume download button, drop your PDF at `public/resume.pdf`.

## 🎨 Theming

Design tokens (HSL) are defined in `src/index.css` under `:root` (light) and `.dark` (dark). Colors are exposed as Tailwind classes (`bg-primary`, `text-neon-purple`, etc.) via `tailwind.config.ts`.

Toggle is persisted via `useTheme()` hook → `localStorage["portfolio-theme"]`.

## 🌐 Deployment

This is a pure static SPA. Deploy to any static host:

- **Vercel:** push to GitHub → import → done.
- **Netlify:** `npm run build`, deploy `dist/`.
- **Lovable:** click **Publish** in the editor.

SPA routing is handled by `BrowserRouter`. No additional config needed on Vercel/Netlify/Lovable.

## 📝 License

MIT — Saee Nalawade
