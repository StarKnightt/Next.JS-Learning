import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
      "I group my routes by layout:\n• (marketing) for landing pages with a simple header\n• (app) for the authenticated dashboard with a sidebar\n• (auth) for login/register with a centered card layout\nClean separation, clean URLs.",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "edrJf0GKfAI", title: "Dynamic Routes in Next.js", channel: "Codevolution" },
      { id: "d46hLIg1B3Q", title: "Catch-All Segments", channel: "Codevolution" },
    ],
  },
];
