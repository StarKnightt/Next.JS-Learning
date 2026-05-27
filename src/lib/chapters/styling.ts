import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Styling Options in Next.js", level: 2 },
  {
    type: "text",
    content:
      "Next.js supports multiple styling approaches out of the box. Here's my take on when to use what:",
  },
  {
    type: "comparison",
    items: [
      { label: "Tailwind CSS", left: "Utility-first, fast iteration", right: "Best for most projects" },
      { label: "CSS Modules", left: "Scoped .module.css files", right: "Good for component isolation" },
      { label: "Global CSS", left: "globals.css imported in layout", right: "For resets and base styles" },
      { label: "CSS-in-JS", left: "styled-components, etc.", right: "Only works in Client Components" },
    ],
  },
  { type: "heading", content: "Tailwind CSS (My Recommendation)", level: 2 },
  {
    type: "text",
    content: "If you chose Tailwind during setup (you should have), it's already configured. Just use utility classes:",
  },
  {
    type: "code",
    code: `export default function Card({ title, description }: {
title: string;
description: string;
}) {
return (
  <div className="border-2 border-black p-6 shadow-[4px_4px_0px_#000] 
                  hover:translate-x-[-2px] hover:translate-y-[-2px]
                  hover:shadow-[6px_6px_0px_#000] transition-all">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);
}`,
    filename: "src/components/Card.tsx",
    language: "tsx",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Tailwind v4 in Next.js 15",
    content:
      "Next.js 15 uses Tailwind v4 by default. The config file is simpler, just '@import \"tailwindcss\"' in your globals.css. No more tailwind.config.js needed for basic usage. Theming goes inline with @theme.",
  },
  { type: "heading", content: "CSS Modules", level: 2 },
  {
    type: "text",
    content: "If you prefer writing actual CSS with scoped class names:",
  },
  {
    type: "code",
    code: `.card {
border: 3px solid #1a1a1a;
padding: 1.5rem;
box-shadow: 4px 4px 0px #1a1a1a;
}

.card:hover {
transform: translate(-2px, -2px);
box-shadow: 6px 6px 0px #1a1a1a;
}

.title {
font-size: 1.5rem;
font-weight: 700;
}`,
    filename: "src/components/Card.module.css",
    language: "css",
  },
  {
    type: "code",
    code: `import styles from "./Card.module.css";

export default function Card({ title }: { title: string }) {
return (
  <div className={styles.card}>
    <h2 className={styles.title}>{title}</h2>
  </div>
);
}`,
    filename: "src/components/Card.tsx",
    language: "tsx",
  },
  {
    type: "text",
    content:
      "CSS Modules generate unique class names at build time, so you never get naming collisions. Good for teams who prefer traditional CSS.",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "obAB6nSVj1E", title: "Tailwind CSS v4 in Next.js", channel: "Smoljames" },
      { id: "6VvOibcAaE0", title: "CSS Styling in Next.js", channel: "Vercel" },
    ],
  },
];
