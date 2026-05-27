import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "The Biggest Mental Shift in Next.js", level: 2 },
  {
    type: "text",
    content:
      "This is THE concept that confuses people coming from React. In Next.js (App Router), components are Server Components by default. They run on the server, never ship JavaScript to the browser, and can directly access databases/file systems.",
  },
  {
    type: "callout",
    calloutType: "info",
    title: "How it works under the hood (RSC Payload)",
    content:
      "When Next.js renders Server Components, it creates the RSC Payload:\n• A compact binary format of rendered Server Components\n• Contains placeholders for where Client Components go\n• Includes props being passed between server and client\nThe browser uses this to stitch the full page together.",
  },
  { type: "heading", content: "Server Components (Default)", level: 2 },
  {
    type: "code",
    code: `// This is a Server Component (no "use client" directive)
// It runs ONLY on the server

import { db } from "@/lib/database";

export default async function UsersPage() {
// This runs on the server. The SQL never reaches the browser
const users = await db.query("SELECT * FROM users");

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
}`,
    filename: "src/app/users/page.tsx",
    language: "tsx",
    highlight: [1, 2, 8],
  },
  {
    type: "callout",
    calloutType: "info",
    title: "Why this matters",
    content:
      "Server Components send ZERO JavaScript to the client for that component. A page that just displays data from a database? 0kb of client JS. This is massive for performance.",
  },
  { type: "heading", content: "Client Components", level: 2 },
  {
    type: "text",
    content:
      "Need interactivity? State? Event handlers? Browser APIs? Add 'use client' at the top:",
  },
  {
    type: "code",
    code: `"use client";

import { useState } from "react";

export default function Counter() {
const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
);
}`,
    filename: "src/components/Counter.tsx",
    language: "tsx",
    highlight: [1],
  },
  { type: "heading", content: "When to Use Which?", level: 2 },
  {
    type: "comparison",
    items: [
      { label: "Fetch data", left: "✅ Server Component", right: "Direct DB/API access" },
      { label: "onClick, onChange", left: "✅ Client Component", right: "Needs browser events" },
      { label: "useState, useEffect", left: "✅ Client Component", right: "Needs React hooks" },
      { label: "Access cookies/headers", left: "✅ Server Component", right: "Server-only APIs" },
      { label: "Static content", left: "✅ Server Component", right: "No JS shipped" },
      { label: "Forms with validation", left: "✅ Client Component", right: "Real-time feedback" },
    ],
  },
  { type: "heading", content: "The Composition Pattern", level: 2 },
  {
    type: "text",
    content:
      "The trick is: keep most things as Server Components and sprinkle Client Components only where needed:",
  },
  {
    type: "code",
    code: `// src/app/dashboard/page.tsx (Server Component)
import { db } from "@/lib/database";
import { LikeButton } from "@/components/LikeButton"; // Client

export default async function Dashboard() {
const posts = await db.query("SELECT * FROM posts");

return (
  <div>
    <h1>Dashboard</h1>
    {posts.map((post) => (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {/* Only this small button is a Client Component */}
        <LikeButton postId={post.id} />
      </article>
    ))}
  </div>
);
}`,
    filename: "src/app/dashboard/page.tsx",
    language: "tsx",
    highlight: [3, 16],
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "My rule of thumb",
    content:
      "Start everything as a Server Component. Only add 'use client' when you literally can't:\n• You need useState or useEffect\n• You need onClick, onChange, or other event handlers\n• You need browser APIs (localStorage, window)\n• You need custom hooks\nPush client boundaries as low as possible in your component tree.",
  },
  { type: "heading", content: "Context Providers Pattern", level: 2 },
  {
    type: "text",
    content:
      "React Context doesn't work in Server Components. But you still need things like theme providers. The trick: make the provider a Client Component, import it in your layout (Server Component), and pass children through it:",
  },
  {
    type: "code",
    code: `// src/providers/theme-provider.tsx
"use client";

import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({
children,
}: {
children: React.ReactNode;
}) {
return (
  <ThemeContext.Provider value="dark">
    {children}
  </ThemeContext.Provider>
);
}`,
    filename: "src/providers/theme-provider.tsx",
    language: "tsx",
    highlight: [1],
  },
  {
    type: "code",
    code: `// src/app/layout.tsx (Server Component!)
import ThemeProvider from "@/providers/theme-provider";

export default function RootLayout({ children }) {
return (
  <html>
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);
}`,
    filename: "src/app/layout.tsx",
    language: "tsx",
    highlight: [8],
  },
  {
    type: "text",
    content:
      "Server Components that are passed as children render on the server first, then get slotted into the Client Component. Best of both worlds.",
  },
  { type: "heading", content: "Wrapping Third-Party Components", level: 3 },
  {
    type: "text",
    content:
      "Some npm packages use client-only features but don't have 'use client' in their code. You'll get an error using them in Server Components. The fix is dead simple:",
  },
  {
    type: "code",
    code: `// src/components/carousel.tsx
"use client";

// Just re-export with the directive
import { Carousel } from "acme-carousel";
export default Carousel;

// Now you can use <Carousel /> in any Server Component`,
    filename: "src/components/carousel.tsx",
    language: "tsx",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "RBM03RihZVs", title: "10 Common Mistakes with App Router", channel: "Lee Robinson" },
      { id: "Gtc5okZWeHA", title: "Server & Client Component Patterns", channel: "Hamed Bahram" },
      { id: "pj5N-Khihgc", title: "Streaming with Suspense", channel: "Vercel" },
    ],
  },
];
