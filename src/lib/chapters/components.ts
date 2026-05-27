import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
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
      "Link does client-side navigation (instant, no full page reload).\n• Prefetches linked pages in the viewport\n• Preserves client state across navigations\n• Using <a> causes a full server round-trip, which is slow and destroys state",
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
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "IU_qq_c_lKA", title: "Using Images in Next.js", channel: "Lee Robinson" },
      { id: "Gtc5okZWeHA", title: "Component Composition in Next.js", channel: "Hamed Bahram" },
    ],
  },
];
