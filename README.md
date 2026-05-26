# ⚡ Next.js Learning — by Prasen

A complete, opinionated guide to mastering Next.js — from absolute basics to production-ready patterns. Built as a **neo-brutalism styled website** that teaches through clear explanations, real code examples, and visual diagrams.

## What's Inside

| Level | Topics |
|-------|--------|
| **Beginner** | What is Next.js, File Routing, Layouts, Link/Image/Script, Styling |
| **Intermediate** | Dynamic Routes, Server vs Client Components, Data Fetching, Server Actions, API Routes, Middleware, Loading/Error States |
| **Advanced** | Authentication (Auth.js v5), Parallel/Intercepting Routes, Streaming, PPR, Deployment |

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** (Server Components, useActionState)
- **TypeScript**
- **Tailwind CSS v4**
- **Neo-Brutalism Design** (bold borders, offset shadows, bright colors)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with chapter listing
│   ├── layout.tsx            # Root layout (nav + footer)
│   ├── roadmap/page.tsx      # Visual learning roadmap with diagrams
│   └── chapters/[slug]/      # Dynamic chapter pages
│       └── page.tsx
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer
│   ├── CodeBlock.tsx         # Syntax-highlighted code blocks
│   ├── Callout.tsx           # Info/warning/tip callout boxes
│   └── ChapterCard.tsx       # Chapter listing cards
└── lib/
    ├── chapters.ts           # Chapter metadata & navigation
    └── content.ts            # All chapter teaching content
```

## Design Philosophy

- **Teach by doing** — every concept has runnable code examples
- **Progressive difficulty** — beginner → intermediate → advanced
- **No fluff** — straight to the point, honest opinions included
- **Visual learning** — SVG diagrams for architecture, data flow, and rendering strategies
- **Neo-brutalism** — bold, playful, high-contrast design that makes learning fun

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) for instant deployment.

---

Made with 🖤 by Prasen
