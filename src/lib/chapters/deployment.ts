import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
      "Automatic HTTPS, global CDN, serverless functions, edge middleware:\n• Preview deployments for every PR\n• Built-in analytics\n• Zero-config setup\n• Free tier is generous for personal projects",
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
      "Before deploying:\n1) Run 'npm run build' locally to catch errors\n2) Check bundle size with @next/bundle-analyzer\n3) Test with Lighthouse\n4) Ensure all images use next/image\n5) Set up error monitoring (Sentry)\n6) Add proper metadata for SEO",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "sPmat30SE4k", title: "Vercel Product Walkthrough", channel: "Lee Robinson" },
      { id: "sIVL4JMqRfc", title: "Self-Hosting Next.js", channel: "Lee Robinson" },
    ],
  },
];
