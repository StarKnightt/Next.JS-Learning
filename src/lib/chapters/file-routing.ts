import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
      "You DON'T need to create all these files.\n• Start with just page.tsx\n• Add layout.tsx when you need shared UI\n• Add loading.tsx when you need loading states\n• Keep it simple, add files as needed",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "k7o9R6eaSes", title: "Next.js Routing Full Tutorial", channel: "Codevolution" },
      { id: "XF8cTYMDF9s", title: "Learn Next.js in 40 Minutes", channel: "Fireship" },
    ],
  },
];
