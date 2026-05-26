# Next.js Learning

A hands-on guide to mastering Next.js, from fundamentals to production patterns. Built as a fully functional teaching website with neo-brutalism design, interactive code examples, and visual architecture diagrams.

**Live site:** [localhost:3000](http://localhost:3000) (run locally) | Deploy to [Vercel](https://vercel.com) with one click

---

## Curriculum

| Level | Chapters | Topics |
|-------|----------|--------|
| Beginner | 01-05 | What is Next.js, File Routing, Layouts & Metadata, Link/Image/Script, Styling |
| Intermediate | 06-12 | Dynamic Routes, Server vs Client Components, Data Fetching & Caching, Server Actions, Route Handlers, Middleware, Loading & Error States |
| Advanced | 13-15 | Authentication (Auth.js v5), Parallel & Intercepting Routes, PPR, Deployment |

15 chapters. 50+ code examples. 3 skill levels.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | Framework (App Router, Turbopack) |
| React | 19 | UI (Server Components, useActionState) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling (utility-first, no config file) |
| Framer Motion | latest | Animations (typing effect, scroll reveals) |

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production build:

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  Homepage with chapter listing
│   ├── layout.tsx                Root layout (navbar, footer)
│   ├── not-found.tsx             Custom 404 page
│   ├── globals.css               Neo-brutalism design tokens
│   ├── roadmap/
│   │   └── page.tsx              Visual learning roadmap + diagrams
│   └── chapters/[slug]/
│       └── page.tsx              Dynamic chapter renderer
├── components/
│   ├── Navbar.tsx                Top navigation
│   ├── Footer.tsx                Site footer
│   ├── CodeBlock.tsx             Syntax-highlighted code with copy
│   ├── Callout.tsx               Info/warning/tip boxes
│   ├── ChapterCard.tsx           Chapter listing cards
│   ├── TypingCode.tsx            Animated typing code preview
│   └── HeroAnimations.tsx        Framer Motion entrance animations
└── lib/
    ├── chapters.ts               Chapter metadata and navigation
    └── content.ts                All teaching content (data-driven)
```

---

## Design

Neo-brutalism aesthetic: thick black borders, offset box shadows, high-contrast colors (yellow, cyan, lime, pink), chunky typography (Space Grotesk + JetBrains Mono). Animations are subtle and scroll-triggered.

The site is content-driven. All chapter text, code examples, callouts, and comparison tables live in `src/lib/content.ts`. Adding or editing a chapter requires no component changes.

---

## Adding Content

To add a new chapter:

1. Add metadata to `src/lib/chapters.ts`
2. Add content blocks to `src/lib/content.ts`
3. The dynamic route at `/chapters/[slug]` handles rendering automatically

Content block types: `text`, `code`, `callout`, `heading`, `comparison`, `diagram`

---

## Deployment

**Vercel (recommended):**
Push to GitHub, import on [vercel.com](https://vercel.com), deploy. Zero config.

**Docker / Self-hosted:**
Set `output: "standalone"` in `next.config.ts`, build, and run the standalone server.

---

## License

MIT

---

Built by [Prasenjit](https://github.com/StarKnightt) | [prasen.dev](https://prasen.dev) | [Twitter/X](https://x.com/Star_Knight12)
