import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Loading & Error UI: Built Into the Router", level: 2 },
  {
    type: "text",
    content:
      "Next.js has special files that automatically create loading states, error boundaries, and 404 pages. No manual Suspense or ErrorBoundary setup needed (though you can still use those too).",
  },
  { type: "heading", content: "loading.tsx: Instant Loading UI", level: 2 },
  {
    type: "code",
    code: `// src/app/dashboard/loading.tsx
// Automatically shown while dashboard/page.tsx is loading

export default function DashboardLoading() {
return (
  <div className="animate-pulse space-y-4 p-8">
    <div className="h-8 bg-gray-200 rounded w-1/3" />
    <div className="h-4 bg-gray-200 rounded w-2/3" />
    <div className="h-4 bg-gray-200 rounded w-1/2" />
    <div className="grid grid-cols-3 gap-4 mt-8">
      <div className="h-32 bg-gray-200 rounded" />
      <div className="h-32 bg-gray-200 rounded" />
      <div className="h-32 bg-gray-200 rounded" />
    </div>
  </div>
);
}`,
    filename: "src/app/dashboard/loading.tsx",
    language: "tsx",
  },
  {
    type: "text",
    content:
      "This creates a Suspense boundary automatically. When the page is fetching data, this loading UI shows. When data arrives, it swaps to the actual page. No useState, no isLoading. Just works.",
  },
  { type: "heading", content: "error.tsx: Graceful Error Handling", level: 2 },
  {
    type: "code",
    code: `"use client"; // Error components MUST be Client Components

import { useEffect } from "react";

export default function DashboardError({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
useEffect(() => {
  console.error("Dashboard error:", error);
}, [error]);

return (
  <div className="p-8 text-center">
    <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
    <p className="mt-2 text-gray-600">{error.message}</p>
    <button
      onClick={reset}
      className="mt-4 px-4 py-2 bg-black text-white font-bold"
    >
      Try Again
    </button>
  </div>
);
}`,
    filename: "src/app/dashboard/error.tsx",
    language: "tsx",
    highlight: [1, 10],
  },
  {
    type: "callout",
    calloutType: "info",
    title: "Error boundaries are scoped",
    content:
      "An error.tsx catches errors in its segment and children. So an error in /dashboard/settings won't crash the entire app. Only the dashboard section shows the error UI. The rest of the app stays interactive.",
  },
  { type: "heading", content: "not-found.tsx: Custom 404", level: 2 },
  {
    type: "code",
    code: `// src/app/not-found.tsx (global 404)
import Link from "next/link";

export default function NotFound() {
return (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Page not found</p>
      <Link href="/" className="mt-6 inline-block px-6 py-3 bg-black text-white font-bold">
        Go Home
      </Link>
    </div>
  </div>
);
}`,
    filename: "src/app/not-found.tsx",
    language: "tsx",
  },
  {
    type: "text",
    content:
      "You can also trigger 404 programmatically with 'notFound()' from next/navigation. Useful when a dynamic route's data doesn't exist.",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "0OVg4ikUaz0", title: "Loading UI in Next.js", channel: "Codevolution" },
      { id: "pj5N-Khihgc", title: "Streaming & Suspense", channel: "Vercel" },
    ],
  },
];
