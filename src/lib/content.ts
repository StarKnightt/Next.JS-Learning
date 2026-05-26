export interface ContentBlock {
  type: "text" | "code" | "callout" | "heading" | "diagram" | "comparison";
  content?: string;
  code?: string;
  filename?: string;
  language?: string;
  highlight?: number[];
  calloutType?: "info" | "warning" | "tip" | "danger";
  title?: string;
  level?: 2 | 3;
  items?: { left: string; right: string; label: string }[];
}

export interface ChapterContent {
  slug: string;
  blocks: ContentBlock[];
}

export const chapterContents: Record<string, ContentBlock[]> = {
  "getting-started": [
    { type: "heading", content: "Why Next.js?", level: 2 },
    {
      type: "text",
      content:
        "Look, React is amazing for building UIs. But when you try to build a full app with it (routing, server rendering, API endpoints, SEO) you end up duct-taping 15 different libraries together. Next.js gives you all of that out of the box.",
    },
    {
      type: "callout",
      calloutType: "info",
      title: "My honest take",
      content:
        "I switched from Create React App to Next.js and never looked back. The developer experience is just on another level. Hot reload is instant, file routing saves SO much boilerplate, and the build system handles everything.",
    },
    { type: "heading", content: "What Next.js Gives You", level: 3 },
    {
      type: "text",
      content:
        "Here's what you get for free when you choose Next.js over plain React:\n\n• **File-based routing** - create a file, get a URL. No react-router config needed.\n• **Server-side rendering (SSR)** - pages render on the server for fast load times and SEO.\n• **Static generation (SSG)** - pre-build pages at compile time for blazing speed.\n• **API routes** - full backend API without a separate server.\n• **Image optimization** - automatic WebP, lazy loading, responsive sizes.\n• **Zero-config TypeScript** - just rename .js to .tsx and go.\n• **Built-in CSS/Tailwind support** - no webpack config nightmares.",
    },
    { type: "heading", content: "Setting Up Your First Project", level: 2 },
    {
      type: "text",
      content: "Let's create a new Next.js project. Open your terminal and run:",
    },
    {
      type: "code",
      code: `npx create-next-app@latest my-app
# When prompted, select:
# ✔ TypeScript? → Yes
# ✔ ESLint? → Yes
# ✔ Tailwind CSS? → Yes
# ✔ src/ directory? → Yes
# ✔ App Router? → Yes (THIS IS IMPORTANT)
# ✔ Import alias? → @/* (default is fine)`,
      filename: "Terminal",
      language: "bash",
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "Always choose App Router",
      content:
        "Next.js has two routing systems: Pages Router (old) and App Router (new, default since v13). This entire guide uses the App Router. If some tutorial uses 'pages/' directory or 'getServerSideProps', that's the old way.",
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
├── tailwind.config.ts      ← Tailwind configuration
├── tsconfig.json           ← TypeScript configuration
└── package.json`,
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
  ],

  "file-routing": [
    { type: "heading", content: "How File Routing Works", level: 2 },
    {
      type: "text",
      content:
        "This is probably the most elegant thing about Next.js. Instead of writing route configurations (like you do with React Router), you just create folders and files. The file system IS your router.",
    },
    {
      type: "callout",
      calloutType: "info",
      title: "The rule is simple",
      content:
        "A folder = a route segment. A 'page.tsx' inside that folder = a publicly accessible page. No page.tsx? That folder is just for organization.",
    },
    { type: "heading", content: "Basic Routes", level: 3 },
    {
      type: "code",
      code: `src/app/
├── page.tsx              → yoursite.com/
├── about/
│   └── page.tsx          → yoursite.com/about
├── blog/
│   └── page.tsx          → yoursite.com/blog
└── contact/
    └── page.tsx          → yoursite.com/contact`,
      filename: "Folder → URL mapping",
      language: "text",
    },
    { type: "heading", content: "Your First Page", level: 2 },
    {
      type: "code",
      code: `// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm learning Next.js and it's awesome.</p>
    </div>
  );
}`,
      filename: "src/app/about/page.tsx",
      language: "tsx",
      highlight: [2],
    },
    {
      type: "text",
      content:
        "That's literally it. Create the folder 'about', put a 'page.tsx' in it, export a default React component. Visit '/about' and there it is.",
    },
    { type: "heading", content: "Nested Routes", level: 2 },
    {
      type: "text",
      content: "Need deeper paths? Just nest folders:",
    },
    {
      type: "code",
      code: `src/app/
└── blog/
    ├── page.tsx              → /blog
    └── tutorials/
        ├── page.tsx          → /blog/tutorials
        └── nextjs/
            └── page.tsx      → /blog/tutorials/nextjs`,
      filename: "Nested routes",
      language: "text",
    },
    { type: "heading", content: "Special Files", level: 2 },
    {
      type: "text",
      content: "Next.js has special filenames that do specific things. Here are the ones you'll use:",
    },
    {
      type: "comparison",
      items: [
        { label: "page.tsx", left: "The actual page content", right: "Required to make route accessible" },
        { label: "layout.tsx", left: "Wraps page + children", right: "Persists across navigations" },
        { label: "loading.tsx", left: "Loading UI (Suspense)", right: "Shown while page loads" },
        { label: "error.tsx", left: "Error boundary", right: "Catches errors gracefully" },
        { label: "not-found.tsx", left: "404 page", right: "Custom not found UI" },
      ],
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "Pro tip",
      content:
        "You DON'T need to create all these files. Start with just page.tsx. Add layout.tsx when you need shared UI, loading.tsx when you need loading states, etc. Keep it simple.",
    },
  ],

  "layouts-templates": [
    { type: "heading", content: "Layouts: Shared UI That Persists", level: 2 },
    {
      type: "text",
      content:
        "A layout wraps your pages. Think navbar, sidebar, footer. Stuff that stays the same across multiple pages. The beautiful thing? Layouts DON'T re-render when you navigate between their child pages. They persist state.",
    },
    { type: "heading", content: "Root Layout", level: 3 },
    {
      type: "text",
      content: "Every Next.js app needs a root layout. This is the top-level wrapper for your entire app:",
    },
    {
      type: "code",
      code: `// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>My Navbar</nav>
        {children}
        <footer>My Footer</footer>
      </body>
    </html>
  );
}`,
      filename: "src/app/layout.tsx",
      language: "tsx",
      highlight: [10, 17],
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "Important",
      content:
        "The root layout MUST contain <html> and <body> tags. It's the only layout that requires them. Nested layouts just return regular JSX.",
    },
    { type: "heading", content: "Nested Layouts", level: 2 },
    {
      type: "text",
      content:
        "Here's where it gets powerful. You can have layouts at ANY level. An admin section can have its own sidebar layout:",
    },
    {
      type: "code",
      code: `// src/app/admin/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
        <nav>
          <a href="/admin">Dashboard</a>
          <a href="/admin/users">Users</a>
          <a href="/admin/settings">Settings</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}`,
      filename: "src/app/admin/layout.tsx",
      language: "tsx",
    },
    {
      type: "text",
      content:
        "Now every page under '/admin/*' automatically gets this sidebar. Navigate between admin pages and the sidebar stays. No re-mount, no flash.",
    },
    { type: "heading", content: "Route Groups: Organization Without URLs", level: 2 },
    {
      type: "text",
      content:
        "Sometimes you want to organize routes without affecting the URL. Wrap folder names in parentheses:",
    },
    {
      type: "code",
      code: `src/app/
├── (marketing)/
│   ├── layout.tsx         ← Marketing-specific layout
│   ├── about/page.tsx     → /about
│   └── pricing/page.tsx   → /pricing
├── (dashboard)/
│   ├── layout.tsx         ← Dashboard-specific layout
│   ├── settings/page.tsx  → /settings
│   └── profile/page.tsx   → /profile
└── layout.tsx             ← Root layout`,
      filename: "Route groups with (parentheses)",
      language: "text",
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "When I use route groups",
      content:
        "I use them when different sections of my app need different layouts but I don't want the group name in the URL. Marketing pages get a landing-page layout. Dashboard pages get an app layout. Same URL structure, different wrapping UI.",
    },
    { type: "heading", content: "Metadata & SEO", level: 2 },
    {
      type: "text",
      content: "Next.js handles your <head> tags. Export a 'metadata' object from any page or layout:",
    },
    {
      type: "code",
      code: `// src/app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | My Site",
  description: "Read my latest articles about web development.",
  openGraph: {
    title: "Blog | My Site",
    description: "Read my latest articles",
    images: ["/og-blog.png"],
  },
};

export default function BlogPage() {
  return <h1>Blog</h1>;
}`,
      filename: "src/app/blog/page.tsx",
      language: "tsx",
      highlight: [4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
      type: "text",
      content:
        "Child metadata merges with and overrides parent metadata. So your blog page gets the site-wide defaults PLUS its own title and description. No more manually managing <Head> components.",
    },
  ],

  "components": [
    { type: "heading", content: "Built-in Components That Save You Time", level: 2 },
    {
      type: "text",
      content:
        "Next.js ships three components you'll use constantly: Link, Image, and Script. They're not just wrappers, they provide real performance optimizations under the hood.",
    },
    { type: "heading", content: "Link: Client-Side Navigation", level: 2 },
    {
      type: "text",
      content:
        "Never use <a> tags for internal navigation. Use Link instead. It prefetches pages in the background and does client-side navigation (no full page reload).",
    },
    {
      type: "code",
      code: `import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      {/* Basic link */}
      <Link href="/about">About</Link>

      {/* Link with dynamic route */}
      <Link href={\`/blog/\${postSlug}\`}>Read Post</Link>

      {/* Disable prefetching for rarely visited pages */}
      <Link href="/admin" prefetch={false}>Admin</Link>

      {/* Replace history instead of push */}
      <Link href="/login" replace>Login</Link>
    </nav>
  );
}`,
      filename: "src/components/Navbar.tsx",
      language: "tsx",
      highlight: [7, 10, 13, 16],
    },
    {
      type: "callout",
      calloutType: "info",
      title: "Why Link over <a>?",
      content:
        "Link does client-side navigation (instant, no page reload). It prefetches linked pages in the viewport. It preserves client state. Using <a> causes a full server round-trip, which is slow and destroys state.",
    },
    { type: "heading", content: "Image: Optimized Images", level: 2 },
    {
      type: "text",
      content: "The Image component automatically optimizes your images: WebP conversion, lazy loading, responsive sizes, blur placeholder.",
    },
    {
      type: "code",
      code: `import Image from "next/image";

// Local image (automatic width/height detection)
import heroImage from "@/public/hero.jpg";

export default function Hero() {
  return (
    <div>
      {/* Local image (dimensions auto-detected) */}
      <Image
        src={heroImage}
        alt="Hero banner"
        placeholder="blur"
        priority
      />

      {/* Remote image (must specify dimensions) */}
      <Image
        src="https://example.com/photo.jpg"
        alt="Profile photo"
        width={400}
        height={400}
        className="rounded-full"
      />

      {/* Fill container (like background-size: cover) */}
      <div className="relative h-96 w-full">
        <Image
          src="/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}`,
      filename: "src/components/Hero.tsx",
      language: "tsx",
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "Remote images need config",
      content:
        "If you're loading images from external URLs, you need to whitelist the domains in next.config.ts under images.remotePatterns. Otherwise Next.js blocks them for security.",
    },
    {
      type: "code",
      code: `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;`,
      filename: "next.config.ts",
      language: "typescript",
      highlight: [5, 6, 7, 8, 9, 10, 11, 12],
    },
    { type: "heading", content: "Script: Third-Party Scripts", level: 2 },
    {
      type: "text",
      content:
        "Loading analytics, chat widgets, or other third-party scripts? Use the Script component to control loading strategy:",
    },
    {
      type: "code",
      code: `import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      {/* Load after page is interactive */}
      <Script
        src="https://analytics.example.com/script.js"
        strategy="afterInteractive"
      />

      {/* Load when browser is idle */}
      <Script
        src="https://chat-widget.example.com/widget.js"
        strategy="lazyOnload"
      />

      {/* Inline script */}
      <Script id="schema-org" type="application/ld+json">
        {\`{ "@context": "https://schema.org", "@type": "WebSite" }\`}
      </Script>

      {children}
    </>
  );
}`,
      filename: "src/app/layout.tsx",
      language: "tsx",
    },
  ],

  "styling": [
    { type: "heading", content: "Styling Options in Next.js", level: 2 },
    {
      type: "text",
      content:
        "Next.js supports multiple styling approaches out of the box. Here's my take on when to use what:",
    },
    {
      type: "comparison",
      items: [
        { label: "Tailwind CSS", left: "Utility-first, fast iteration", right: "Best for most projects" },
        { label: "CSS Modules", left: "Scoped .module.css files", right: "Good for component isolation" },
        { label: "Global CSS", left: "globals.css imported in layout", right: "For resets and base styles" },
        { label: "CSS-in-JS", left: "styled-components, etc.", right: "Only works in Client Components" },
      ],
    },
    { type: "heading", content: "Tailwind CSS (My Recommendation)", level: 2 },
    {
      type: "text",
      content: "If you chose Tailwind during setup (you should have), it's already configured. Just use utility classes:",
    },
    {
      type: "code",
      code: `export default function Card({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-2 border-black p-6 shadow-[4px_4px_0px_#000] 
                    hover:translate-x-[-2px] hover:translate-y-[-2px]
                    hover:shadow-[6px_6px_0px_#000] transition-all">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}`,
      filename: "src/components/Card.tsx",
      language: "tsx",
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "Tailwind v4 in Next.js 15",
      content:
        "Next.js 15 uses Tailwind v4 by default. The config file is simpler, just '@import \"tailwindcss\"' in your globals.css. No more tailwind.config.js needed for basic usage. Theming goes inline with @theme.",
    },
    { type: "heading", content: "CSS Modules", level: 2 },
    {
      type: "text",
      content: "If you prefer writing actual CSS with scoped class names:",
    },
    {
      type: "code",
      code: `.card {
  border: 3px solid #1a1a1a;
  padding: 1.5rem;
  box-shadow: 4px 4px 0px #1a1a1a;
}

.card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #1a1a1a;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
}`,
      filename: "src/components/Card.module.css",
      language: "css",
    },
    {
      type: "code",
      code: `import styles from "./Card.module.css";

export default function Card({ title }: { title: string }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}`,
      filename: "src/components/Card.tsx",
      language: "tsx",
    },
    {
      type: "text",
      content:
        "CSS Modules generate unique class names at build time, so you never get naming collisions. Good for teams who prefer traditional CSS.",
    },
  ],

  "dynamic-routes": [
    { type: "heading", content: "Dynamic Routes: URLs with Parameters", level: 2 },
    {
      type: "text",
      content:
        "Static routes are great, but real apps need dynamic URLs. Blog posts, user profiles, product pages. The URL contains a variable part. Next.js handles this with bracket notation [param].",
    },
    { type: "heading", content: "Basic Dynamic Route", level: 3 },
    {
      type: "code",
      code: `// src/app/blog/[slug]/page.tsx
// Matches: /blog/hello-world, /blog/nextjs-guide, etc.

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <article>
      <h1>Post: {slug}</h1>
    </article>
  );
}`,
      filename: "src/app/blog/[slug]/page.tsx",
      language: "tsx",
      highlight: [5, 7, 9],
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "Next.js 15 change",
      content:
        "In Next.js 15, params is now a Promise. You need to await it. This was a breaking change from v14 where params was a regular object. Don't forget the async/await!",
    },
    { type: "heading", content: "Catch-All Routes", level: 2 },
    {
      type: "text",
      content:
        "Need to catch multiple path segments? Use [...param] for catch-all or [[...param]] for optional catch-all:",
    },
    {
      type: "code",
      code: `// src/app/docs/[...slug]/page.tsx
// Matches: /docs/intro, /docs/api/auth, /docs/api/auth/oauth

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  // slug = ["api", "auth", "oauth"] for /docs/api/auth/oauth

  return (
    <div>
      <p>Path: {slug.join(" > ")}</p>
    </div>
  );
}`,
      filename: "src/app/docs/[...slug]/page.tsx",
      language: "tsx",
    },
    {
      type: "code",
      code: `// src/app/shop/[[...categories]]/page.tsx
// Matches: /shop, /shop/electronics, /shop/electronics/phones
// The [[...]] makes it OPTIONAL, so /shop alone also works

export default async function ShopPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>;
}) {
  const { categories } = await params;
  
  if (!categories) {
    return <h1>All Products</h1>;
  }

  return <h1>Category: {categories.join(" > ")}</h1>;
}`,
      filename: "src/app/shop/[[...categories]]/page.tsx",
      language: "tsx",
    },
    { type: "heading", content: "Route Groups (Parentheses)", level: 2 },
    {
      type: "text",
      content:
        "Remember from the layouts chapter, parentheses () create groups that don't affect the URL:",
    },
    {
      type: "code",
      code: `src/app/
├── (auth)/
│   ├── layout.tsx         ← Auth layout (centered card)
│   ├── login/page.tsx     → /login
│   └── register/page.tsx  → /register
├── (app)/
│   ├── layout.tsx         ← App layout (sidebar + header)
│   ├── dashboard/page.tsx → /dashboard
│   └── settings/page.tsx  → /settings`,
      filename: "Route groups for different layouts",
      language: "text",
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "Pattern I use often",
      content:
        "I group my routes by layout: (marketing) for landing pages with a simple header, (app) for the authenticated dashboard with a sidebar, and (auth) for login/register with a centered card layout. Clean separation, clean URLs.",
    },
  ],

  "server-client-components": [
    { type: "heading", content: "The Biggest Mental Shift in Next.js", level: 2 },
    {
      type: "text",
      content:
        "This is THE concept that confuses people coming from React. In Next.js (App Router), components are Server Components by default. They run on the server, never ship JavaScript to the browser, and can directly access databases/file systems.",
    },
    { type: "heading", content: "Server Components (Default)", level: 2 },
    {
      type: "code",
      code: `// This is a Server Component (no "use client" directive)
// It runs ONLY on the server

import { db } from "@/lib/database";

export default async function UsersPage() {
  // This runs on the server. The SQL never reaches the browser
  const users = await db.query("SELECT * FROM users");

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
      filename: "src/app/users/page.tsx",
      language: "tsx",
      highlight: [1, 2, 8],
    },
    {
      type: "callout",
      calloutType: "info",
      title: "Why this matters",
      content:
        "Server Components send ZERO JavaScript to the client for that component. A page that just displays data from a database? 0kb of client JS. This is massive for performance.",
    },
    { type: "heading", content: "Client Components", level: 2 },
    {
      type: "text",
      content:
        "Need interactivity? State? Event handlers? Browser APIs? Add 'use client' at the top:",
    },
    {
      type: "code",
      code: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
      filename: "src/components/Counter.tsx",
      language: "tsx",
      highlight: [1],
    },
    { type: "heading", content: "When to Use Which?", level: 2 },
    {
      type: "comparison",
      items: [
        { label: "Fetch data", left: "✅ Server Component", right: "Direct DB/API access" },
        { label: "onClick, onChange", left: "✅ Client Component", right: "Needs browser events" },
        { label: "useState, useEffect", left: "✅ Client Component", right: "Needs React hooks" },
        { label: "Access cookies/headers", left: "✅ Server Component", right: "Server-only APIs" },
        { label: "Static content", left: "✅ Server Component", right: "No JS shipped" },
        { label: "Forms with validation", left: "✅ Client Component", right: "Real-time feedback" },
      ],
    },
    { type: "heading", content: "The Composition Pattern", level: 2 },
    {
      type: "text",
      content:
        "The trick is: keep most things as Server Components and sprinkle Client Components only where needed:",
    },
    {
      type: "code",
      code: `// src/app/dashboard/page.tsx (Server Component)
import { db } from "@/lib/database";
import { LikeButton } from "@/components/LikeButton"; // Client

export default async function Dashboard() {
  const posts = await db.query("SELECT * FROM posts");

  return (
    <div>
      <h1>Dashboard</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          {/* Only this small button is a Client Component */}
          <LikeButton postId={post.id} />
        </article>
      ))}
    </div>
  );
}`,
      filename: "src/app/dashboard/page.tsx",
      language: "tsx",
      highlight: [3, 16],
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "My rule of thumb",
      content:
        "Start everything as a Server Component. Only add 'use client' when you literally can't, like when you need useState, useEffect, onClick, or browser APIs. Push client boundaries as low as possible in your component tree.",
    },
  ],

  "data-fetching": [
    { type: "heading", content: "Data Fetching in the App Router", level: 2 },
    {
      type: "text",
      content:
        "Forget getServerSideProps and getStaticProps. Those are Pages Router (old). In the App Router, you just... fetch data. In your component. Because Server Components can be async.",
    },
    { type: "heading", content: "Basic Fetching", level: 3 },
    {
      type: "code",
      code: `// src/app/posts/page.tsx
// This component runs on the server, fetch happens server-side

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}`,
      filename: "src/app/posts/page.tsx",
      language: "tsx",
      highlight: [10, 11, 12],
    },
    {
      type: "callout",
      calloutType: "info",
      title: "No useEffect needed",
      content:
        "In Server Components, you just await your data directly. No loading states to manage, no useEffect + useState dance. The component waits for data, renders HTML, and sends it to the client. Clean.",
    },
    { type: "heading", content: "Caching Behavior", level: 2 },
    {
      type: "text",
      content:
        "Next.js 15 changed the caching defaults. Fetch requests are NOT cached by default anymore (they were in v14). You now opt-in to caching:",
    },
    {
      type: "code",
      code: `// No caching (default in Next.js 15)
const data = await fetch("https://api.example.com/data");

// Cache indefinitely (like static generation)
const data = await fetch("https://api.example.com/data", {
  cache: "force-cache",
});

// Revalidate every 60 seconds
const data = await fetch("https://api.example.com/data", {
  next: { revalidate: 60 },
});

// Revalidate based on tags (for on-demand revalidation)
const data = await fetch("https://api.example.com/posts", {
  next: { tags: ["posts"] },
});`,
      filename: "Caching strategies",
      language: "tsx",
      highlight: [1, 5, 10, 15],
    },
    { type: "heading", content: "Streaming with Suspense", level: 2 },
    {
      type: "text",
      content:
        "Don't want the entire page to wait for slow data? Use Suspense to stream parts independently:",
    },
    {
      type: "code",
      code: `import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* This loads instantly */}
      <WelcomeMessage />
      
      {/* This streams in when ready */}
      <Suspense fallback={<p>Loading stats...</p>}>
        <SlowStats />
      </Suspense>
      
      {/* This streams independently */}
      <Suspense fallback={<p>Loading feed...</p>}>
        <ActivityFeed />
      </Suspense>
    </div>
  );
}

async function SlowStats() {
  const stats = await fetch("https://api.example.com/stats");
  // ... render stats
}`,
      filename: "src/app/dashboard/page.tsx",
      language: "tsx",
      highlight: [12, 13, 14, 17, 18, 19],
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "Streaming is a superpower",
      content:
        "With Suspense, the page shell renders immediately, then each section pops in as its data arrives. Users see content faster, and slow APIs don't block the entire page. Use this everywhere.",
    },
  ],

  "server-actions": [
    { type: "heading", content: "Server Actions: Mutations Without API Routes", level: 2 },
    {
      type: "text",
      content:
        "Server Actions let you run server-side code directly from your components. No API route needed. Just mark a function with 'use server' and call it from a form or button. It's like magic, but it's actually just an RPC call.",
    },
    { type: "heading", content: "Basic Server Action", level: 3 },
    {
      type: "code",
      code: `// src/app/contact/actions.ts
"use server";

import { db } from "@/lib/database";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  await db.insert("messages", { name, email, message });

  // You can also revalidate cached data
  // revalidatePath("/messages");
}`,
      filename: "src/app/contact/actions.ts",
      language: "tsx",
      highlight: [1, 6],
    },
    {
      type: "code",
      code: `// src/app/contact/page.tsx
import { submitContact } from "./actions";

export default function ContactPage() {
  return (
    <form action={submitContact}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
}`,
      filename: "src/app/contact/page.tsx",
      language: "tsx",
      highlight: [6],
    },
    {
      type: "callout",
      calloutType: "info",
      title: "How it works under the hood",
      content:
        "When the form submits, Next.js sends a POST request to the server, executes your function, and returns the result. No fetch calls, no API routes, no CORS. It works even with JavaScript disabled (progressive enhancement!).",
    },
    { type: "heading", content: "With Validation & Feedback", level: 2 },
    {
      type: "code",
      code: `// src/app/contact/actions.ts
"use server";

interface ActionState {
  success: boolean;
  message: string;
}

export async function submitContact(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = formData.get("email") as string;

  if (!email.includes("@")) {
    return { success: false, message: "Invalid email address" };
  }

  // Save to database...
  
  return { success: true, message: "Message sent!" };
}`,
      filename: "src/app/contact/actions.ts",
      language: "tsx",
    },
    {
      type: "code",
      code: `"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, {
    success: false,
    message: "",
  });

  return (
    <form action={action}>
      <input name="email" type="email" placeholder="Email" required />
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </button>
      {state.message && (
        <p className={state.success ? "text-green-600" : "text-red-600"}>
          {state.message}
        </p>
      )}
    </form>
  );
}`,
      filename: "src/app/contact/ContactForm.tsx",
      language: "tsx",
      highlight: [3, 7, 15],
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "useActionState is the new way",
      content:
        "React 19 introduced useActionState (replacing useFormState). It gives you the previous state, the action to pass to form, and isPending boolean. Use it for any form that needs loading states or server validation.",
    },
  ],

  "api-routes": [
    { type: "heading", content: "Route Handlers: Your Backend in Next.js", level: 2 },
    {
      type: "text",
      content:
        "Sometimes you need actual API endpoints, for webhooks, third-party integrations, or when you want a REST API. Route Handlers let you create API routes using the Web Request/Response APIs.",
    },
    { type: "heading", content: "Basic Route Handler", level: 3 },
    {
      type: "code",
      code: `// src/app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  // Process the data...
  
  return NextResponse.json(
    { success: true, data: body },
    { status: 201 }
  );
}`,
      filename: "src/app/api/hello/route.ts",
      language: "tsx",
      highlight: [4, 8],
    },
    {
      type: "text",
      content:
        "The file is called 'route.ts' (not page.ts). You export functions named after HTTP methods: GET, POST, PUT, PATCH, DELETE.",
    },
    { type: "heading", content: "Dynamic API Routes", level: 2 },
    {
      type: "code",
      code: `// src/app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  // Fetch from database
  const post = await getPost(id);
  
  if (!post) {
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await deletePost(id);
  return new Response(null, { status: 204 });
}`,
      filename: "src/app/api/posts/[id]/route.ts",
      language: "tsx",
      highlight: [6, 8],
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "Don't overuse API routes",
      content:
        "If you're just fetching data for your own pages, use Server Components directly. If you're mutating data from forms, use Server Actions. API routes are best for: webhooks, third-party integrations, and when you need a public REST API.",
    },
    { type: "heading", content: "Reading Headers, Cookies & Query Params", level: 2 },
    {
      type: "code",
      code: `import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: Request) {
  // Query params
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const page = searchParams.get("page") ?? "1";

  // Headers
  const headersList = await headers();
  const auth = headersList.get("authorization");

  // Cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("session-token");

  return NextResponse.json({ query, page });
}`,
      filename: "src/app/api/search/route.ts",
      language: "tsx",
    },
  ],

  "middleware": [
    { type: "heading", content: "Middleware: Intercept Every Request", level: 2 },
    {
      type: "text",
      content:
        "Middleware runs BEFORE your route handles the request. It's perfect for auth checks, redirects, A/B testing, geolocation-based routing, and request/response modification. It runs on the Edge runtime (fast, everywhere).",
    },
    { type: "heading", content: "Creating Middleware", level: 3 },
    {
      type: "code",
      code: `// src/middleware.ts (must be at src root, not in app/)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const token = request.cookies.get("session-token");

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Add custom headers
  const response = NextResponse.next();
  response.headers.set("x-custom-header", "hello");
  return response;
}

// Only run middleware on these paths
export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};`,
      filename: "src/middleware.ts",
      language: "tsx",
      highlight: [1, 10, 11, 12, 23, 24],
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "File location matters",
      content:
        "middleware.ts MUST be at the root of your src/ directory (or project root if no src/). NOT inside app/. If you put it in the wrong place, it won't run.",
    },
    { type: "heading", content: "Common Middleware Patterns", level: 2 },
    {
      type: "code",
      code: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Redirect old URLs
  if (pathname === "/old-blog") {
    return NextResponse.redirect(new URL("/blog", request.url));
  }

  // 2. Rewrite (URL stays same, content changes)
  if (pathname === "/docs") {
    return NextResponse.rewrite(new URL("/docs/introduction", request.url));
  }

  // 3. Geolocation-based routing
  const country = request.geo?.country ?? "US";
  if (country === "IN" && !pathname.startsWith("/in")) {
    return NextResponse.redirect(new URL(\`/in\${pathname}\`, request.url));
  }

  // 4. Rate limiting headers
  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Remaining", "99");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};`,
      filename: "src/middleware.ts",
      language: "tsx",
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "Keep middleware lean",
      content:
        "Middleware runs on EVERY matched request. Keep it fast. Don't do database queries or heavy computation here. Use it for quick checks: is there a cookie? redirect? rewrite? That's it. Heavy auth logic belongs in your route/page.",
    },
  ],

  "loading-error-states": [
    { type: "heading", content: "Loading & Error UI: Built Into the Router", level: 2 },
    {
      type: "text",
      content:
        "Next.js has special files that automatically create loading states, error boundaries, and 404 pages. No manual Suspense or ErrorBoundary setup needed (though you can still use those too).",
    },
    { type: "heading", content: "loading.tsx: Instant Loading UI", level: 2 },
    {
      type: "code",
      code: `// src/app/dashboard/loading.tsx
// Automatically shown while dashboard/page.tsx is loading

export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-4 p-8">
      <div className="h-8 bg-gray-200 rounded w-1/3" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="h-32 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
      </div>
    </div>
  );
}`,
      filename: "src/app/dashboard/loading.tsx",
      language: "tsx",
    },
    {
      type: "text",
      content:
        "This creates a Suspense boundary automatically. When the page is fetching data, this loading UI shows. When data arrives, it swaps to the actual page. No useState, no isLoading. Just works.",
    },
    { type: "heading", content: "error.tsx: Graceful Error Handling", level: 2 },
    {
      type: "code",
      code: `"use client"; // Error components MUST be Client Components

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-black text-white font-bold"
      >
        Try Again
      </button>
    </div>
  );
}`,
      filename: "src/app/dashboard/error.tsx",
      language: "tsx",
      highlight: [1, 10],
    },
    {
      type: "callout",
      calloutType: "info",
      title: "Error boundaries are scoped",
      content:
        "An error.tsx catches errors in its segment and children. So an error in /dashboard/settings won't crash the entire app. Only the dashboard section shows the error UI. The rest of the app stays interactive.",
    },
    { type: "heading", content: "not-found.tsx: Custom 404", level: 2 },
    {
      type: "code",
      code: `// src/app/not-found.tsx (global 404)
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl">Page not found</p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 bg-black text-white font-bold">
          Go Home
        </Link>
      </div>
    </div>
  );
}`,
      filename: "src/app/not-found.tsx",
      language: "tsx",
    },
    {
      type: "text",
      content:
        "You can also trigger 404 programmatically with 'notFound()' from next/navigation. Useful when a dynamic route's data doesn't exist.",
    },
  ],

  "authentication": [
    { type: "heading", content: "Authentication with Auth.js (NextAuth v5)", level: 2 },
    {
      type: "text",
      content:
        "Auth is hard. Don't build it from scratch. Auth.js (the new name for NextAuth) handles OAuth, credentials, sessions, JWTs, and more. Here's how to set it up properly in Next.js 15.",
    },
    {
      type: "callout",
      calloutType: "warning",
      title: "NextAuth v4 vs Auth.js v5",
      content:
        "If you see tutorials using 'next-auth' with api/auth/[...nextauth]/route.ts, that's v4 (old). Auth.js v5 uses a different setup with auth.ts at the root. This guide covers v5.",
    },
    { type: "heading", content: "Installation", level: 3 },
    {
      type: "code",
      code: `npm install next-auth@beta`,
      filename: "Terminal",
      language: "bash",
    },
    { type: "heading", content: "Setup", level: 3 },
    {
      type: "code",
      code: `// src/auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
});`,
      filename: "src/auth.ts",
      language: "tsx",
      highlight: [6],
    },
    {
      type: "code",
      code: `// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;`,
      filename: "src/app/api/auth/[...nextauth]/route.ts",
      language: "tsx",
    },
    { type: "heading", content: "Protecting Pages", level: 2 },
    {
      type: "code",
      code: `// src/app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <img src={session.user?.image ?? ""} alt="Avatar" />
    </div>
  );
}`,
      filename: "src/app/dashboard/page.tsx",
      language: "tsx",
      highlight: [6, 8, 9],
    },
    { type: "heading", content: "Sign In / Sign Out Buttons", level: 2 },
    {
      type: "code",
      code: `// src/components/AuthButtons.tsx
import { signIn, signOut, auth } from "@/auth";

export async function SignInButton() {
  const session = await auth();

  if (session) {
    return (
      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type="submit">Sign Out</button>
      </form>
    );
  }

  return (
    <form action={async () => {
      "use server";
      await signIn("github");
    }}>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}`,
      filename: "src/components/AuthButtons.tsx",
      language: "tsx",
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "Middleware for auth",
      content:
        "For protecting multiple routes, combine Auth.js with middleware. Check the session in middleware and redirect unauthenticated users. This way you don't need auth checks in every individual page.",
    },
  ],

  "advanced-patterns": [
    { type: "heading", content: "Parallel Routes", level: 2 },
    {
      type: "text",
      content:
        "Parallel routes let you render multiple pages in the same layout simultaneously. Think: a dashboard with independently loading panels, or a modal that overlays the page.",
    },
    {
      type: "code",
      code: `// Folder structure for parallel routes:
src/app/
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    ├── @analytics/
    │   └── page.tsx      ← Renders in "analytics" slot
    ├── @notifications/
    │   └── page.tsx      ← Renders in "notifications" slot
    └── @team/
        └── page.tsx      ← Renders in "team" slot`,
      filename: "Parallel route structure",
      language: "text",
    },
    {
      type: "code",
      code: `// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics,
  notifications,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">{children}</div>
      <aside>
        {analytics}
        {notifications}
        {team}
      </aside>
    </div>
  );
}`,
      filename: "src/app/dashboard/layout.tsx",
      language: "tsx",
      highlight: [4, 5, 6],
    },
    {
      type: "callout",
      calloutType: "info",
      title: "Why parallel routes?",
      content:
        "Each slot loads independently. If @analytics is slow, it doesn't block @notifications. Each can have its own loading.tsx and error.tsx. They also enable modals that work with the URL (intercepting routes).",
    },
    { type: "heading", content: "Intercepting Routes", level: 2 },
    {
      type: "text",
      content:
        "Intercepting routes let you show a route as a modal on the current page, while keeping the full page accessible via direct URL. Instagram-style photo modals:",
    },
    {
      type: "code",
      code: `src/app/
├── feed/
│   ├── page.tsx           ← Feed page
│   └── (..)photo/[id]/
│       └── page.tsx       ← Shows photo as MODAL on feed
└── photo/[id]/
    └── page.tsx           ← Full photo page (direct URL)`,
      filename: "Intercepting route structure",
      language: "text",
    },
    {
      type: "text",
      content:
        "Convention: (.) intercepts same level, (..) one level up, (..)(..) two levels up, (...) from root.",
    },
    { type: "heading", content: "Partial Prerendering (Experimental)", level: 2 },
    {
      type: "text",
      content:
        "PPR combines static and dynamic rendering in a single route. The static shell is served instantly from CDN, then dynamic parts stream in. It's the future of Next.js rendering.",
    },
    {
      type: "code",
      code: `// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true, // Enable Partial Prerendering
  },
};

export default nextConfig;`,
      filename: "next.config.ts",
      language: "tsx",
      highlight: [6],
    },
    {
      type: "code",
      code: `import { Suspense } from "react";

// Static shell (pre-rendered at build time)
export default function ProductPage() {
  return (
    <div>
      <h1>Product Details</h1>  {/* Static */}
      <ProductInfo />            {/* Static */}
      
      <Suspense fallback={<p>Loading price...</p>}>
        <DynamicPrice />         {/* Dynamic, streams in */}
      </Suspense>
      
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />              {/* Dynamic, streams in */}
      </Suspense>
    </div>
  );
}`,
      filename: "src/app/product/page.tsx",
      language: "tsx",
      highlight: [10, 11, 14, 15],
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "This is where Next.js is heading",
      content:
        "PPR gives you the speed of static sites with the flexibility of dynamic rendering. Static parts load in <50ms from CDN, dynamic parts stream in as they're ready. Best of both worlds.",
    },
  ],

  "deployment": [
    { type: "heading", content: "Taking Your App to Production", level: 2 },
    {
      type: "text",
      content:
        "You've built something great. Now let's get it live. I'll cover Vercel (easiest), self-hosting, and optimization tips that actually matter.",
    },
    { type: "heading", content: "Deploy to Vercel (Recommended)", level: 2 },
    {
      type: "text",
      content:
        "Vercel made Next.js, so deployment is literally push to git and done:",
    },
    {
      type: "code",
      code: `# 1. Push your code to GitHub/GitLab/Bitbucket
git add .
git commit -m "Ready for production"
git push origin main

# 2. Go to vercel.com, import your repo
# 3. Click Deploy
# That's it. Seriously.`,
      filename: "Terminal",
      language: "bash",
    },
    {
      type: "callout",
      calloutType: "info",
      title: "What Vercel gives you",
      content:
        "Automatic HTTPS, global CDN, serverless functions, edge middleware, preview deployments for every PR, analytics, and zero-config. The free tier is generous for personal projects.",
    },
    { type: "heading", content: "Self-Hosting with Docker", level: 2 },
    {
      type: "code",
      code: `# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]`,
      filename: "Dockerfile",
      language: "dockerfile",
    },
    {
      type: "code",
      code: `// next.config.ts - enable standalone output for Docker
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;`,
      filename: "next.config.ts",
      language: "tsx",
      highlight: [5],
    },
    { type: "heading", content: "Performance Checklist", level: 2 },
    {
      type: "comparison",
      items: [
        { label: "Images", left: "Use next/image everywhere", right: "Auto WebP + lazy load" },
        { label: "Fonts", left: "Use next/font", right: "Zero layout shift" },
        { label: "Bundle", left: "Dynamic imports for heavy libs", right: "Smaller initial JS" },
        { label: "Caching", left: "Set revalidation on fetches", right: "Faster repeat visits" },
        { label: "Components", left: "Server Components by default", right: "Less client JS" },
        { label: "3rd party", left: "Use next/script with strategy", right: "Don't block render" },
      ],
    },
    {
      type: "code",
      code: `// Dynamic import, only loads when needed
import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("@/components/Chart"), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Don't render on server if it uses window/document
});

export default function AnalyticsPage() {
  return (
    <div>
      <h1>Analytics</h1>
      <HeavyChart />
    </div>
  );
}`,
      filename: "Dynamic import example",
      language: "tsx",
      highlight: [4, 5, 6],
    },
    {
      type: "callout",
      calloutType: "tip",
      title: "My production checklist",
      content:
        "Before deploying: 1) Run 'npm run build' locally to catch errors. 2) Check bundle size with @next/bundle-analyzer. 3) Test with Lighthouse. 4) Ensure all images use next/image. 5) Set up error monitoring (Sentry). 6) Add proper metadata for SEO.",
    },
  ],
};
