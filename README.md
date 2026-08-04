# Next.js Learning

A comprehensive, free, and open-source guide to mastering Next.js - from zero to production. Built as a fully interactive teaching website with neo-brutalism design.

**Live:** [learn.prasen.dev](https://learn.prasen.dev)

![Hero Section](https://learn.prasen.dev/opengraph-image)

---

## What's Inside

17 chapters. 50+ code examples. Curated YouTube videos. Interactive diagrams. All free, all open source.

| Level | Chapters | Topics |
|-------|----------|--------|
| Beginner | 01-05 | What is Next.js, File Routing, Layouts & Metadata, Link/Image/Script, Styling |
| Intermediate | 06-12 | Dynamic Routes, Server vs Client Components, Data Fetching & Caching, Server Actions, Route Handlers, Middleware, Loading & Error States |
| Advanced | 13-17 | Authentication, Advanced Patterns, Deployment, Metadata & SEO, Performance & Optimization |

---

## Features

| Feature | Description |
|---------|-------------|
| Ctrl+K Search | Command palette to instantly search all chapters and sections |
| In-site Video Player | Curated YouTube videos play in a modal without leaving the site |
| Shareable Deep Links | Every section heading has a copy-link button for sharing |
| Interactive Diagrams | Clickable architecture and data flow diagrams with fullscreen preview |
| Expandable Code Blocks | Syntax highlighted with copy button and fullscreen mode |
| Neo-brutalism UI | Bold, modern design with chunky borders and vibrant colors |
| SEO Optimized | Dynamic OG images, sitemap, robots.txt, JSON-LD, llms.txt |
| Fully Responsive | Works on mobile, tablet, and desktop |

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | Framework (App Router, Turbopack) |
| React | 19 | UI (Server Components, useActionState) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling (utility-first) |
| Framer Motion | latest | Animations |
| Vercel Analytics | latest | Traffic insights |
| Microsoft Clarity | latest | Heatmaps and session replay |

---

## Quick Start

```bash
git clone https://github.com/StarKnightt/Next.JS-Learning.git
cd Next.JS-Learning
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    Homepage with chapter grid
│   ├── layout.tsx                  Root layout (SEO, analytics, fonts)
│   ├── opengraph-image.tsx         Dynamic OG image generation
│   ├── sitemap.ts                  Auto-generated sitemap
│   ├── robots.ts                   Robots.txt configuration
│   ├── manifest.ts                 PWA manifest
│   ├── roadmap/page.tsx            Visual learning roadmap
│   └── chapters/[slug]/page.tsx    Dynamic chapter renderer
├── components/
│   ├── Navbar.tsx                  Navigation + GitHub stars + search trigger
│   ├── SearchModal.tsx             Ctrl+K command palette
│   ├── ShareHeading.tsx            Section link copy buttons
│   ├── VideoGrid.tsx               YouTube video modal player
│   ├── DiagramPreview.tsx          Expandable diagram modal
│   ├── CodeBlock.tsx               Syntax highlighting + expand
│   └── TypingCode.tsx              Animated code preview
└── lib/
    ├── chapters.ts                 Chapter metadata
    ├── content.ts                  Content block types + registry
    ├── search-index.ts             Client-side search index
    └── chapters/                   Per-chapter content (17 files)
```

---

## Adding Content

1. Create a new file in `src/lib/chapters/your-topic.ts`
2. Add chapter metadata to `src/lib/chapters.ts`
3. Import and register in `src/lib/content.ts`

Content block types: `text`, `code`, `callout`, `heading`, `comparison`, `video`

---

## Contributing

PRs are welcome. Whether it's fixing a typo, adding a chapter, or improving the UI - all contributions help.

1. Fork the repo
2. Create your branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a PR

[Open a Pull Request](https://github.com/StarKnightt/Next.JS-Learning/pulls)

---

## Deployment

Push to GitHub, import on [vercel.com](https://vercel.com), deploy. Zero config needed. The site is configured for `learn.prasen.dev` as the canonical domain.

---

## License

MIT

---

Built by [Prasenjit](https://prasen.dev) | [GitHub](https://github.com/StarKnightt) | [Twitter/X](https://x.com/prasenx)
