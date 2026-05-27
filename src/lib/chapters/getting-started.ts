import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Why Next.js?", level: 2 },
  {
    type: "text",
    content:
      "Let me be real with you. When I started web development, I was using plain React with Create React App. It worked fine for small projects. But the moment I tried to build something serious, I hit walls everywhere:\n\n• How do I handle routing? Install react-router, configure it manually.\n• How do I do SEO? React renders on the client, so Google can't crawl it properly.\n• How do I fetch data on the server? You need a separate Express/Node backend.\n• How do I optimize images? Figure it out yourself.\n• How do I deploy? Eject CRA, configure webpack, pray.\n\nI was spending more time configuring tools than actually building features. That's when I found Next.js.",
  },
  { type: "heading", content: "The Problem Next.js Solves", level: 3 },
  {
    type: "text",
    content:
      "React is a **UI library**. It's incredible at rendering components. But it's JUST a library. It doesn't have opinions on routing, data fetching, server rendering, or deployment.\n\nNext.js is a **framework** built on top of React. It makes all those decisions for you, with smart defaults that work for 95% of use cases. Think of it this way:\n\n• **React** = engine\n• **Next.js** = the full car (engine + steering + fuel system + dashboard)\n\nYou don't need to assemble the car yourself anymore.",
  },
  {
    type: "callout",
    calloutType: "info",
    title: "My honest take",
    content:
      "I switched from Create React App to Next.js and never looked back. The developer experience is just on another level. Hot reload is instant, file routing saves SO much boilerplate, and the build system handles everything. If you're starting a new React project in 2025, there's no reason NOT to use Next.js.",
  },
  { type: "heading", content: "Next.js vs Plain React (Real Talk)", level: 2 },
  {
    type: "comparison",
    items: [
      { label: "Routing", left: "Install react-router, write config", right: "Create a folder. Done." },
      { label: "SEO", left: "Invisible to Google (client-rendered)", right: "Server-rendered, fully crawlable" },
      { label: "Performance", left: "Entire app loads as one bundle", right: "Code-split per page, lazy loaded" },
      { label: "Data fetching", left: "useEffect + useState + loading state", right: "Async component, fetch directly" },
      { label: "API backend", left: "Separate Express/Node server", right: "API routes inside same project" },
      { label: "Images", left: "Manual optimization, no lazy load", right: "Auto WebP, responsive, lazy loaded" },
      { label: "Deployment", left: "Build + configure server yourself", right: "Push to Vercel or Docker. Done." },
      { label: "TypeScript", left: "Manual tsconfig setup", right: "Zero-config, just rename to .tsx" },
    ],
  },
  { type: "heading", content: "Who Uses Next.js?", level: 3 },
  {
    type: "text",
    content:
      "This isn't some niche framework. Next.js is used by:\n\n• **Vercel** (they made it)\n• **Netflix** (their jobs portal)\n• **TikTok** (web app)\n• **Notion** (marketing site)\n• **Hulu**, **Nike**, **Twitch**, **Washington Post**\n• Thousands of startups and indie devs\n\nIt's the most popular React framework, period. Over 120k stars on GitHub. If you learn it, you're learning something companies actually hire for.",
  },
  { type: "heading", content: "When NOT to Use Next.js", level: 3 },
  {
    type: "text",
    content:
      "I'll be honest, Next.js isn't always the right choice:\n\n• **Tiny single-page apps** (a calculator, a todo list) - overkill, just use Vite + React.\n• **Mobile apps** - use React Native instead.\n• **Non-React projects** - if you prefer Vue, use Nuxt. If you prefer Svelte, use SvelteKit.\n• **Static sites with no dynamic content** - Astro might be lighter.\n\nBut for anything that involves multiple pages, needs SEO, has a backend, or will grow over time? Next.js is the move.",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Bottom line",
    content:
      "If you know React (even basics), you already know 70% of Next.js. The framework adds routing, server rendering, and tooling on top of what you already know. You're not learning a new language. You're upgrading your React skills.",
  },
  { type: "heading", content: "What Next.js Gives You (For Free)", level: 2 },
  {
    type: "text",
    content:
      "Here's the full list of what you get out of the box when you choose Next.js:\n\n• **File-based routing** - create a file, get a URL. No react-router config needed.\n• **Server-side rendering (SSR)** - pages render on the server for fast load times and SEO.\n• **Static generation (SSG)** - pre-build pages at compile time for blazing speed.\n• **API routes** - full backend API without a separate server.\n• **Image optimization** - automatic WebP, lazy loading, responsive sizes.\n• **Zero-config TypeScript** - just rename .js to .tsx and go.\n• **Built-in CSS/Tailwind support** - no webpack config nightmares.\n• **Middleware** - run code before requests hit your pages (auth, redirects).\n• **Server Actions** - mutate data from forms without writing API endpoints.\n• **Streaming & Suspense** - show parts of the page as they load.\n• **Edge Runtime** - run code at the CDN edge for ultra-low latency.",
  },
  { type: "heading", content: "Setting Up Your First Project", level: 2 },
  {
    type: "text",
    content: "Let's create a new Next.js project. Open your terminal and run:",
  },
  {
    type: "code",
    code: `npx create-next-app@latest my-app --yes
cd my-app
npm run dev

# The --yes flag uses recommended defaults:
# ✔ TypeScript
# ✔ ESLint
# ✔ Tailwind CSS
# ✔ App Router
# ✔ Turbopack (default bundler now!)
# ✔ Import alias @/*`,
    filename: "Terminal",
    language: "bash",
  },
  {
    type: "text",
    content: "Or if you want to customize, skip the --yes flag:",
  },
  {
    type: "code",
    code: `npx create-next-app@latest
# Prompts:
# What is your project named? → my-app
# Would you like to use the recommended defaults?
#   > Yes, use recommended defaults
#   > No, customize settings
#
# If you customize:
# TypeScript? → Yes
# Linter? → ESLint (or Biome)
# React Compiler? → No (experimental, skip for now)
# Tailwind CSS? → Yes
# src/ directory? → Yes
# App Router? → Yes (ALWAYS yes)`,
    filename: "Terminal (interactive)",
    language: "bash",
  },
  {
    type: "callout",
    calloutType: "warning",
    title: "Always choose App Router",
    content:
      "Next.js has two routing systems: Pages Router (old) and App Router (new, default since v13). This entire guide uses the App Router. If some tutorial uses 'pages/' directory or 'getServerSideProps', that's the old way.",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Turbopack is now the default",
    content:
      "Since Next.js 16, Turbopack (Rust-based bundler) is the default for both dev AND build. It's significantly faster than Webpack. If you somehow need Webpack, use 'next dev --webpack'. But honestly, just use Turbopack.",
  },
  { type: "heading", content: "System Requirements", level: 3 },
  {
    type: "text",
    content: "Before you start, make sure you have:\n\n• **Node.js 20.9+** (check with 'node -v')\n• **macOS, Windows, or Linux**\n• Any modern browser (Chrome 111+, Firefox 111+, Safari 16.4+)",
  },
  { type: "heading", content: "Project Structure", level: 2 },
  {
    type: "text",
    content: "After creation, here's what your project looks like:",
  },
  {
    type: "code",
    code: `my-app/
├── src/
│   └── app/
│       ├── layout.tsx      ← Root layout (wraps everything)
│       ├── page.tsx        ← Homepage (renders at /)
│       ├── globals.css     ← Global styles
│       └── favicon.ico
├── public/                 ← Static files (images, fonts)
├── next.config.ts          ← Next.js configuration
├── tsconfig.json           ← TypeScript configuration
├── postcss.config.mjs      ← PostCSS (for Tailwind)
├── eslint.config.mjs       ← ESLint configuration
└── package.json

# No tailwind.config needed! Tailwind v4 uses
# @import "tailwindcss" in globals.css directly.`,
    filename: "Project Structure",
    language: "text",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Key insight",
    content:
      "The 'src/app/' directory IS your router. Every folder you create inside it becomes a URL path. The 'page.tsx' file inside a folder makes that path accessible. This is the core concept of Next.js routing.",
  },
  { type: "heading", content: "Running Your App", level: 2 },
  {
    type: "code",
    code: `cd my-app
npm run dev

# Your app is now running at http://localhost:3000`,
    filename: "Terminal",
    language: "bash",
  },
  {
    type: "text",
    content:
      "That's it. You've got a full-stack React framework running with TypeScript, Tailwind, and hot reload. In the next chapter, we'll dive into how file routing actually works.",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "Sklc_fQBmcs", title: "Next.js in 100 Seconds", channel: "Fireship" },
      { id: "wm5gMKuwSYk", title: "Next.js Full Course 2024", channel: "JavaScript Mastery" },
      { id: "vCOSTG10Y4o", title: "Next.js 14 Complete Course", channel: "Lama Dev" },
      { id: "cVKB5NQPiFA", title: "Learn Next.js by Building a Project", channel: "Chai aur Code" },
    ],
  },
];
