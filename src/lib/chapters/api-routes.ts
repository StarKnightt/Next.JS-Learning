import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Route Handlers: Your Backend in Next.js", level: 2 },
  {
    type: "text",
    content:
      "Sometimes you need actual API endpoints, for webhooks, third-party integrations, or when you want a REST API. Route Handlers let you create API routes using the Web Request/Response APIs.",
  },
  { type: "heading", content: "Basic Route Handler", level: 3 },
  {
    type: "code",
    code: `// src/app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({ message: "Hello from the API!" });
}

export async function POST(request: Request) {
const body = await request.json();

// Process the data...

return NextResponse.json(
  { success: true, data: body },
  { status: 201 }
);
}`,
    filename: "src/app/api/hello/route.ts",
    language: "tsx",
    highlight: [4, 8],
  },
  {
    type: "text",
    content:
      "The file is called 'route.ts' (not page.ts). You export functions named after HTTP methods: GET, POST, PUT, PATCH, DELETE.",
  },
  { type: "heading", content: "Dynamic API Routes", level: 2 },
  {
    type: "code",
    code: `// src/app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";

export async function GET(
request: Request,
{ params }: { params: Promise<{ id: string }> }
) {
const { id } = await params;

// Fetch from database
const post = await getPost(id);

if (!post) {
  return NextResponse.json(
    { error: "Post not found" },
    { status: 404 }
  );
}

return NextResponse.json(post);
}

export async function DELETE(
request: Request,
{ params }: { params: Promise<{ id: string }> }
) {
const { id } = await params;
await deletePost(id);
return new Response(null, { status: 204 });
}`,
    filename: "src/app/api/posts/[id]/route.ts",
    language: "tsx",
    highlight: [6, 8],
  },
  {
    type: "callout",
    calloutType: "warning",
    title: "Don't overuse API routes",
    content:
      "If you're just fetching data for your own pages, use Server Components directly. If you're mutating data from forms, use Server Actions. API routes are best for:\n• Webhooks\n• Third-party integrations\n• When you need a public REST API",
  },
  { type: "heading", content: "Reading Headers, Cookies & Query Params", level: 2 },
  {
    type: "code",
    code: `import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: Request) {
// Query params
const { searchParams } = new URL(request.url);
const query = searchParams.get("q");
const page = searchParams.get("page") ?? "1";

// Headers
const headersList = await headers();
const auth = headersList.get("authorization");

// Cookies
const cookieStore = await cookies();
const token = cookieStore.get("session-token");

return NextResponse.json({ query, page });
}`,
    filename: "src/app/api/search/route.ts",
    language: "tsx",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "KjlZEzWMbwc", title: "Route Handlers Explained", channel: "Stav" },
      { id: "RBM03RihZVs", title: "Route Handler Mistakes", channel: "Lee Robinson" },
    ],
  },
];
