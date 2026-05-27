import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Performance: Make Your App Fly", level: 2 },
  {
    type: "text",
    content:
      "A fast website isn't a luxury. It's a requirement. Google ranks faster sites higher, users bounce from slow ones, and nobody waits 5 seconds for a page to load anymore. Here's how to squeeze every millisecond out of Next.js.",
  },
  { type: "heading", content: "Core Web Vitals", level: 3 },
  {
    type: "text",
    content:
      "Google measures your site's user experience with three metrics. Hit green on all three and you'll rank better.",
  },
  {
    type: "comparison",
    items: [
      { label: "LCP", left: "Largest Contentful Paint", right: "< 2.5s (how fast content appears)" },
      { label: "INP", left: "Interaction to Next Paint", right: "< 200ms (how snappy interactions feel)" },
      { label: "CLS", left: "Cumulative Layout Shift", right: "< 0.1 (how stable the layout is)" },
    ],
  },
  { type: "heading", content: "Image Optimization", level: 3 },
  {
    type: "text",
    content:
      "Images are usually the biggest performance bottleneck. The `next/image` component handles this automatically: lazy loading, responsive sizing, modern formats (WebP/AVIF), and no layout shift.",
  },
  {
    type: "code",
    code: `import Image from "next/image"

// Local image (auto width/height from import)
import heroImage from "@/public/hero.jpg"

export function Hero() {
return (
  <Image
    src={heroImage}
    alt="Hero banner"
    placeholder="blur" // Shows blurred version while loading
    priority // Loads immediately (for above-the-fold images)
  />
)
}

// Remote image (must specify dimensions)
export function Avatar({ user }) {
return (
  <Image
    src={user.avatarUrl}
    alt={user.name}
    width={48}
    height={48}
    className="rounded-full"
  />
)
}`,
    filename: "src/components/images.tsx",
    language: "tsx",
    highlight: [9, 10],
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Image rules I follow",
    content:
      "• Always use next/image, never raw <img> tags\n• Add priority to your hero/banner image (first thing users see)\n• Use placeholder='blur' for large images\n• Set sizes prop for responsive images to avoid serving oversized files\n• Configure remotePatterns in next.config.ts for external images",
  },
  { type: "heading", content: "Font Optimization", level: 3 },
  {
    type: "text",
    content:
      "next/font downloads fonts at build time and self-hosts them. No external requests, no layout shift from font swapping, and automatic subsetting.",
  },
  {
    type: "code",
    code: `import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
subsets: ["latin"],
display: "swap",
variable: "--font-inter",
})

const mono = JetBrains_Mono({
subsets: ["latin"],
display: "swap",
variable: "--font-mono",
})

export default function RootLayout({ children }) {
return (
  <html className={\`\${inter.variable} \${mono.variable}\`}>
    <body className="font-sans">{children}</body>
  </html>
)
}`,
    filename: "src/app/layout.tsx",
    language: "tsx",
  },
  { type: "heading", content: "Bundle Size", level: 3 },
  {
    type: "text",
    content:
      "Less JavaScript = faster load. Next.js does code splitting automatically (each route gets its own bundle), but you can make it even better.",
  },
  {
    type: "code",
    code: `// Lazy load heavy components
import dynamic from "next/dynamic"

const HeavyChart = dynamic(() => import("@/components/Chart"), {
loading: () => <div className="h-64 animate-pulse bg-gray-200" />,
ssr: false, // Don't render on server (for browser-only libs)
})

// Only loads Chart.js when this component renders
export function Dashboard() {
return (
  <div>
    <h1>Analytics</h1>
    <HeavyChart data={data} />
  </div>
)
}`,
    filename: "src/app/dashboard/page.tsx",
    language: "tsx",
    highlight: [3, 4, 5, 6],
  },
  {
    type: "callout",
    calloutType: "info",
    title: "Analyze your bundle",
    content:
      "Install @next/bundle-analyzer to see exactly what's bloating your bundle:\n• npm install @next/bundle-analyzer\n• Wrap your next.config.ts with the analyzer\n• Run ANALYZE=true npm run build\n• A visual treemap opens showing every package and its size",
  },
  { type: "heading", content: "Server Components = Free Performance", level: 3 },
  {
    type: "text",
    content:
      "This is the single biggest performance win in modern Next.js. Server Components send zero JavaScript to the browser. The component runs on the server, sends HTML, done. Only add 'use client' when you genuinely need interactivity (onClick, useState, useEffect).",
  },
  { type: "heading", content: "Caching Strategies", level: 3 },
  {
    type: "text",
    content:
      "Next.js caches aggressively by default. Understanding what's cached and when it refreshes is key to both performance and correctness.",
  },
  {
    type: "comparison",
    items: [
      { label: "Static", left: "Cached at build time", right: "Blog posts, marketing pages" },
      { label: "ISR", left: "Cached + revalidates on timer", right: "Product pages, feeds" },
      { label: "Dynamic", left: "Fresh on every request", right: "User dashboards, search results" },
      { label: "use cache", left: "Cache any function result", right: "Expensive computations, DB queries" },
    ],
  },
  { type: "heading", content: "Lighthouse Checklist", level: 3 },
  {
    type: "callout",
    calloutType: "tip",
    title: "My 100/100 Lighthouse formula",
    content:
      "• Use Server Components by default (less JS shipped)\n• next/image with priority on hero image\n• next/font for zero-flash font loading\n• Lazy load below-the-fold components with dynamic()\n• Avoid layout shift: always set width/height on images\n• Minimize third-party scripts (analytics, chat widgets)\n• Use Suspense boundaries to stream slow content\n• Run 'next build' and check the output sizes",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "IU_qq_c_lKA", title: "Image Optimization in Next.js", channel: "Lee Robinson" },
      { id: "sIVL4JMqRfc", title: "Performance & Self-Hosting", channel: "Lee Robinson" },
    ],
  },
];
