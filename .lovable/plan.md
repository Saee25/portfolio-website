# Saee Nalawade — Galaxy Portfolio

A single-codebase React + TypeScript + Tailwind portfolio with a deep purple/blue galaxy aesthetic, neon accents, and continuous (not just hover) animations. Fully responsive, light + dark theme, easily deployable on Vercel.

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (only styling tool, as requested)
- React Router for multi-page routing
- Framer Motion for scroll/entrance animations
- lucide-react + react-icons (for tech-stack logos)
- shadcn primitives already in project (buttons, cards) — restyled to galaxy theme

## Theme & Visual Language

**Dark (default):** Deep space navy `#0A0A1F` → indigo `#1A1240` background, neon violet `#A855F7`, electric blue `#3B82F6`, cyan accents `#22D3EE`. Glassmorphism cards with subtle purple borders, neon glow shadows.

**Light:** Soft lavender `#F5F3FF` background, periwinkle surfaces, muted purple `#7C3AED` text, pastel blue accents. Same galaxy ornaments rendered with reduced opacity / lighter palette.

**Persistent background layer (every page):**
- Animated starfield canvas (twinkling stars, drifting)
- 2–3 orbiting planet SVGs with slow rotation
- Soft radial nebula gradients
- Shooting star occasionally crossing the screen
- All built as reusable React components — no external image assets required

Theme toggle in the navbar (sun/moon) with smooth color transitions.

## Site Structure

```text
/                    Home (all main sections, single scroll)
/experience          Full experience details page
/projects            All projects, alternating layout
*                    NotFound
```

### Home page sections (in order)

1. **Hero**
   - Centered: "Hi, I'm" then **Saee Nalawade** rendered with a typewriter animation (typing → blinking caret → looping between "Saee Nalawade" / "Software Developer" / "Full Stack Developer")
   - Subtitle: short tagline
   - Two neon CTA buttons: "View Work" (scrolls to projects) and "Download Resume"
   - Floating planet + orbit ring graphic on the side
   - Scroll-down indicator with bouncing animation

2. **About Me**
   - Short formal paragraph (B.E. IT student, full-stack focus)
   - Placeholder square `div` for profile photo (clearly marked, neon-bordered)
   - Stats row: CGPA 9.04 · 2+ Internships · Hackathon Winner · 4+ Projects (count-up animation on scroll)

3. **Education**
   - Vertical timeline with glowing node
   - University of Mumbai — B.E. IT (9.04 CGPA), May 2023 – May 2027
   - Slide-in from left on scroll

4. **Technical Skills**
   - Three grouped orbits / constellation layout: Languages, Technologies, Developer Tools
   - Each skill = logo chip (react-icons) inside a glowing pill that floats with a gentle continuous bob animation
   - On scroll: chips fade + scale in staggered
   - Skills pulled directly from resume (C, Java, JS, TS, Python, SQL, Flutter / React, Node, Express, Mongo, GenAI, ML, Firebase, NumPy, Pandas, Matplotlib, MERN, OOP / AWS, Amplify, SES, DynamoDB, Git, GitHub, Jenkins, Docker, Kubernetes, Vite, Vercel, ShadCN)

5. **Experience**
   - Alternating timeline cards with neon connecting line
   - Unstitched — SDE Intern (Nov 2025 – Feb 2026)
   - TechThree — Full Stack Intern (Dec 2024 – Feb 2025)
   - GSSoC '25 — Contributor (Jul – Oct 2025)
   - Each card: placeholder image div + role + bullets
   - "Read more →" button → `/experience`

6. **Projects** (top 4 from resume)
   - FrontWaves, Pramaan, Aarohan Credit, ScarpHappens
   - Cards slide in from alternating sides with parallax tilt
   - Each: placeholder image div, name, short description, tech tags, GitHub/Live link
   - "View all projects →" button → `/projects`

7. **Achievements**
   - Quasar 3.0 — Track Winners (March 2025), 600+ teams
   - Trophy SVG with neon glow + placeholder image div for hackathon photo
   - Reveal-on-scroll animation

8. **Extracurricular**
   - Three cards in a row (stack on mobile):
     - TSEC CodeCell — Senior Committee Member
     - Rotaract Club of TSEC — Joint Secretary
     - Mentor & Judge — Newbiethon 2026
   - Each with placeholder image div

9. **Contact**
   - Glass card with email, phone, LinkedIn, GitHub, LeetCode (icons + neon hover)
   - Simple non-functional contact form (name, email, message) — frontend only as requested
   - Floating astronaut/planet SVG beside the form

10. **Footer** — copyright, social row, "Back to top" with smooth scroll.

### `/experience` page

- Same animated background + navbar
- Header "My Experience"
- Each internship as a large detailed section with extended description, responsibilities, tech used, placeholder for screenshots/logos
- Back-to-home button

### `/projects` page

- Header "All Projects"
- Alternating left/right layout per project (image div on one side, content on the other)
- All 4 resume projects + room to add more easily
- Each shows: title, full description, tech badges, GitHub link, live link
- Animated entrance on scroll

## Animations (visible, not just hover)

- Typewriter on hero name
- Continuous starfield twinkle + drift
- Planet rotation + orbit paths
- Floating skill chips (gentle bob)
- Scroll-triggered fade/slide/scale via Framer Motion
- Stat counters count up
- Neon pulse on CTA buttons
- Shooting stars at random intervals
- Page transitions between routes (fade + slight scale)

## Folder Structure

```text
src/
  components/
    layout/        Navbar, Footer, ThemeToggle, PageTransition
    background/    Starfield, Planets, Nebula, ShootingStar
    sections/      Hero, About, Education, Skills, Experience,
                   Projects, Achievements, Extracurricular, Contact
    ui/            (existing shadcn) + NeonButton, GlassCard, TimelineItem
  pages/           Index, ExperiencePage, ProjectsPage, NotFound
  data/            skills.ts, experience.ts, projects.ts, education.ts
                   (all content centralized so Saee can edit easily)
  hooks/           useTheme, useTypewriter, useInView
  lib/             utils
  styles/          index.css (galaxy tokens, light + dark)
README.md          Setup, scripts, deploy, how to edit content/images
```

## Content Editing

All text/links/skills live in `src/data/*.ts` files with TypeScript types — Saee can swap copy without touching components. Image placeholders are clearly labeled `<div data-placeholder="hackathon-photo">` so they're easy to find and replace.

## Deliverables

- Fully responsive (mobile, tablet, desktop)
- Light + dark theme with toggle, persisted in localStorage
- Smooth routing between Home / Experience / Projects
- README.md with: project intro, stack, `npm install` / `npm run dev` / `npm run build`, deploy-to-Vercel steps, where to edit content and replace images
- Clean, typed, lint-clean code
