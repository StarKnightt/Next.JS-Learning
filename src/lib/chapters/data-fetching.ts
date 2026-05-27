import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
      "With Suspense, the page shell renders immediately, then each section pops in as its data arrives.\n• Users see content faster\n• Slow APIs don't block the entire page\n• Each section loads independently\nUse this everywhere.",
  },
  { type: "heading", content: "The 'use cache' Directive (Next.js 16)", level: 2 },
  {
    type: "text",
    content:
      "Next.js 16 introduces the 'use cache' directive. Instead of configuring caching per-fetch, you can mark entire functions or components as cacheable:",
  },
  {
    type: "code",
    code: `// Cache an entire async function
async function getProducts() {
"use cache";
const res = await fetch("https://api.example.com/products");
return res.json();
}

// Cache a component
async function ProductList() {
"use cache";
const products = await getProducts();
return (
  <ul>
    {products.map((p) => <li key={p.id}>{p.name}</li>)}
  </ul>
);
}`,
    filename: "use cache example",
    language: "tsx",
    highlight: [3, 10],
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "use cache vs fetch options",
    content:
      "The 'use cache' directive caches the entire function result, not just individual fetch calls.\n• Simpler than per-fetch config\n• Pair with cacheLife() for expiration control\n• Pair with cacheTag() for on-demand revalidation",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "VBlSe8tvg4U", title: "Next.js Caching Explained", channel: "Lee Robinson" },
      { id: "RBM03RihZVs", title: "10 Common Mistakes (Data Fetching)", channel: "Lee Robinson" },
    ],
  },
];
