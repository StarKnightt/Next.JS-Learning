import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
      "I use them when different sections of my app need different layouts but I don't want the group name in the URL.\n• Marketing pages get a landing-page layout\n• Dashboard pages get an app layout\n• Same URL structure, different wrapping UI",
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
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "wm5gMKuwSYk", title: "Layouts & Routing Deep Dive", channel: "JavaScript Mastery" },
      { id: "vCOSTG10Y4o", title: "Next.js Layouts & Templates", channel: "Lama Dev" },
    ],
  },
];
