export interface Chapter {
  slug: string;
  number: number;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

export const chapters: Chapter[] = [
  {
    slug: "getting-started",
    number: 1,
    title: "What is Next.js & Getting Started",
    description: "Why Next.js exists, what problems it solves, and how to set up your first project.",
    level: "beginner",
    color: "bg-brutal-yellow",
  },
  {
    slug: "file-routing",
    number: 2,
    title: "File-Based Routing (App Router)",
    description: "How folders become URLs. Pages, nested routes, and the app directory structure.",
    level: "beginner",
    color: "bg-brutal-cyan/40",
  },
  {
    slug: "layouts-templates",
    number: 3,
    title: "Layouts, Templates & Metadata",
    description: "Shared UI across pages, nested layouts, route groups, and SEO metadata.",
    level: "beginner",
    color: "bg-brutal-lime/40",
  },
  {
    slug: "components",
    number: 4,
    title: "Link, Image & Script Components",
    description: "Next.js built-in components for navigation, optimized images, and third-party scripts.",
    level: "beginner",
    color: "bg-brutal-pink/40",
  },
  {
    slug: "styling",
    number: 5,
    title: "Styling in Next.js",
    description: "CSS Modules, Tailwind CSS, CSS-in-JS, and global styles. Pick your weapon.",
    level: "beginner",
    color: "bg-brutal-purple/40",
  },
  {
    slug: "dynamic-routes",
    number: 6,
    title: "Dynamic Routes & Route Groups",
    description: "Params, catch-all routes, optional segments, and organizing routes with groups.",
    level: "intermediate",
    color: "bg-brutal-orange/40",
  },
  {
    slug: "server-client-components",
    number: 7,
    title: "Server vs Client Components",
    description: "The React Server Components mental model. When to use 'use client' and why.",
    level: "intermediate",
    color: "bg-brutal-cyan/40",
  },
  {
    slug: "data-fetching",
    number: 8,
    title: "Data Fetching & Caching",
    description: "Fetching data in Server Components, caching strategies, revalidation, and streaming.",
    level: "intermediate",
    color: "bg-brutal-yellow/40",
  },
  {
    slug: "server-actions",
    number: 9,
    title: "Server Actions & Forms",
    description: "Mutate data without API routes. Forms, validation, optimistic updates, and revalidation.",
    level: "intermediate",
    color: "bg-brutal-lime/40",
  },
  {
    slug: "api-routes",
    number: 10,
    title: "API Routes (Route Handlers)",
    description: "Build your backend inside Next.js. GET, POST, dynamic routes, and middleware.",
    level: "intermediate",
    color: "bg-brutal-pink/40",
  },
  {
    slug: "middleware",
    number: 11,
    title: "Middleware",
    description: "Run code before a request completes. Auth checks, redirects, rewrites, and geolocation.",
    level: "intermediate",
    color: "bg-brutal-purple/40",
  },
  {
    slug: "loading-error-states",
    number: 12,
    title: "Loading & Error Handling",
    description: "loading.tsx, error.tsx, not-found.tsx, and Suspense boundaries for better UX.",
    level: "intermediate",
    color: "bg-brutal-orange/40",
  },
  {
    slug: "authentication",
    number: 13,
    title: "Authentication (Auth.js)",
    description: "Protect your app with Auth.js (NextAuth v5). OAuth, credentials, sessions, and guards.",
    level: "advanced",
    color: "bg-brutal-red/30",
  },
  {
    slug: "advanced-patterns",
    number: 14,
    title: "Advanced Patterns",
    description: "Parallel routes, intercepting routes, streaming with Suspense, and partial prerendering.",
    level: "advanced",
    color: "bg-brutal-cyan/40",
  },
  {
    slug: "deployment",
    number: 15,
    title: "Deployment & Production",
    description: "Deploy to Vercel, self-host, bundle analysis, performance tips, and production checklist.",
    level: "advanced",
    color: "bg-brutal-yellow/40",
  },
  {
    slug: "metadata-seo",
    number: 16,
    title: "Metadata & SEO",
    description: "Page titles, Open Graph images, structured data, sitemaps, and robots.txt for discoverability.",
    level: "advanced",
    color: "bg-brutal-lime/40",
  },
  {
    slug: "performance",
    number: 17,
    title: "Performance & Optimization",
    description: "Bundle splitting, image optimization, font loading, Core Web Vitals, and Lighthouse scores.",
    level: "advanced",
    color: "bg-brutal-purple/40",
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug: string) {
  const index = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
