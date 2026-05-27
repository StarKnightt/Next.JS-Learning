import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Metadata & SEO: Get Found on Google", level: 2 },
  {
    type: "text",
    content:
      "Your app could be the best in the world, but if Google can't understand it, nobody finds it. Next.js gives you powerful tools to control exactly how your pages appear in search results, social media shares, and browser tabs.",
  },
  { type: "heading", content: "Static Metadata", level: 3 },
  {
    type: "text",
    content:
      "The simplest approach. Export a `metadata` object from any layout or page. It gets merged with parent metadata automatically.",
  },
  {
    type: "code",
    code: `import type { Metadata } from "next"

export const metadata: Metadata = {
title: "My Blog | Prasen",
description: "Thoughts on web development, React, and Next.js",
keywords: ["blog", "react", "nextjs", "web development"],
authors: [{ name: "Prasen", url: "https://prasen.dev" }],
openGraph: {
  title: "My Blog | Prasen",
  description: "Thoughts on web development",
  url: "https://prasen.dev/blog",
  siteName: "Prasen's Blog",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Blog preview image",
    },
  ],
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "My Blog | Prasen",
  description: "Thoughts on web development",
  images: ["/og-image.png"],
},
}

export default function BlogPage() {
return <main>...</main>
}`,
    filename: "src/app/blog/page.tsx",
    language: "tsx",
  },
  { type: "heading", content: "Dynamic Metadata", level: 3 },
  {
    type: "text",
    content:
      "For pages with dynamic content (blog posts, products), use `generateMetadata`. It receives the same params as your page component.",
  },
  {
    type: "code",
    code: `import type { Metadata } from "next"

interface Props {
params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
const { slug } = await params
const post = await getPost(slug)

return {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [post.coverImage],
  },
}
}

export default async function PostPage({ params }: Props) {
const { slug } = await params
const post = await getPost(slug)
return <article>{post.content}</article>
}`,
    filename: "src/app/blog/[slug]/page.tsx",
    language: "tsx",
  },
  { type: "heading", content: "Metadata Merging Rules", level: 3 },
  {
    type: "text",
    content:
      "Next.js automatically merges metadata from parent layouts to child pages. Child values override parent values. This means you set defaults in your root layout and override per-page as needed.",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Template titles",
    content:
      "Use the title template pattern for consistent page titles:\n• Root layout: title: { template: '%s | My Site', default: 'My Site' }\n• Child page: title: 'About' renders as 'About | My Site'\n• Keeps your brand consistent without repeating the suffix everywhere",
  },
  { type: "heading", content: "Sitemaps & robots.txt", level: 3 },
  {
    type: "text",
    content:
      "Next.js can generate these automatically. Create a `sitemap.ts` and `robots.ts` file in your app directory.",
  },
  {
    type: "code",
    code: `import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
const posts = await getAllPosts()

return [
  { url: "https://prasen.dev", lastModified: new Date() },
  { url: "https://prasen.dev/blog", lastModified: new Date() },
  ...posts.map((post) => ({
    url: \`https://prasen.dev/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
  })),
]
}`,
    filename: "src/app/sitemap.ts",
    language: "tsx",
  },
  {
    type: "code",
    code: `import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
return {
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/admin/"],
  },
  sitemap: "https://prasen.dev/sitemap.xml",
}
}`,
    filename: "src/app/robots.ts",
    language: "tsx",
  },
  { type: "heading", content: "JSON-LD Structured Data", level: 3 },
  {
    type: "text",
    content:
      "For rich search results (star ratings, FAQ snippets, breadcrumbs), add JSON-LD structured data to your pages.",
  },
  {
    type: "code",
    code: `export default function BlogPost({ post }) {
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  author: {
    "@type": "Person",
    name: "Prasen",
    url: "https://prasen.dev",
  },
  datePublished: post.publishedAt,
  image: post.coverImage,
}

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <article>{post.content}</article>
  </>
)
}`,
    filename: "src/app/blog/[slug]/page.tsx",
    language: "tsx",
  },
  {
    type: "callout",
    calloutType: "info",
    title: "SEO checklist for every page",
    content:
      "Before shipping:\n• Unique title and description\n• Open Graph image (1200x630px)\n• Proper heading hierarchy (h1 > h2 > h3)\n• Alt text on all images\n• Fast load time (LCP < 2.5s)\n• Mobile-friendly layout\n• Canonical URL if content is duplicated",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "sPmat30SE4k", title: "Vercel Product Walkthrough (SEO)", channel: "Lee Robinson" },
      { id: "wm5gMKuwSYk", title: "SEO & Metadata in Next.js", channel: "JavaScript Mastery" },
    ],
  },
];
