import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "F6romq71KtI", title: "Partial Prerendering Pattern", channel: "Vercel" },
      { id: "RBM03RihZVs", title: "Advanced App Router Patterns", channel: "Lee Robinson" },
    ],
  },
];
