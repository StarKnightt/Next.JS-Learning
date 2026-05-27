import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Middleware: Intercept Every Request", level: 2 },
  {
    type: "text",
    content:
      "Middleware runs BEFORE your route handles the request. It's perfect for auth checks, redirects, A/B testing, geolocation-based routing, and request/response modification. It runs on the Edge runtime (fast, everywhere).",
  },
  { type: "heading", content: "Creating Middleware", level: 3 },
  {
    type: "code",
    code: `// src/middleware.ts (must be at src root, not in app/)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
// Check if user is authenticated
const token = request.cookies.get("session-token");

// Protect dashboard routes
if (request.nextUrl.pathname.startsWith("/dashboard")) {
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Add custom headers
const response = NextResponse.next();
response.headers.set("x-custom-header", "hello");
return response;
}

// Only run middleware on these paths
export const config = {
matcher: ["/dashboard/:path*", "/api/:path*"],
};`,
    filename: "src/middleware.ts",
    language: "tsx",
    highlight: [1, 10, 11, 12, 23, 24],
  },
  {
    type: "callout",
    calloutType: "warning",
    title: "File location matters",
    content:
      "middleware.ts MUST be at the root of your src/ directory (or project root if no src/). NOT inside app/. If you put it in the wrong place, it won't run.",
  },
  { type: "heading", content: "Common Middleware Patterns", level: 2 },
  {
    type: "code",
    code: `import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
const { pathname } = request.nextUrl;

// 1. Redirect old URLs
if (pathname === "/old-blog") {
  return NextResponse.redirect(new URL("/blog", request.url));
}

// 2. Rewrite (URL stays same, content changes)
if (pathname === "/docs") {
  return NextResponse.rewrite(new URL("/docs/introduction", request.url));
}

// 3. Geolocation-based routing
const country = request.geo?.country ?? "US";
if (country === "IN" && !pathname.startsWith("/in")) {
  return NextResponse.redirect(new URL(\`/in\${pathname}\`, request.url));
}

// 4. Rate limiting headers
const response = NextResponse.next();
response.headers.set("X-RateLimit-Remaining", "99");
return response;
}

export const config = {
matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};`,
    filename: "src/middleware.ts",
    language: "tsx",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Keep middleware lean",
    content:
      "Middleware runs on EVERY matched request. Keep it fast.\n• Don't do database queries here\n• Don't do heavy computation\n• Use it for quick checks: is there a cookie? redirect? rewrite?\n• Heavy auth logic belongs in your route/page",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "t1KTTZbqCm0", title: "Middleware in Next.js", channel: "Codevolution" },
      { id: "sIVL4JMqRfc", title: "Middleware & Self-Hosting", channel: "Lee Robinson" },
    ],
  },
];
