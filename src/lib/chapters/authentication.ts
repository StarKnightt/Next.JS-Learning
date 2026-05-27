import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Authentication with Auth.js (NextAuth v5)", level: 2 },
  {
    type: "text",
    content:
      "Auth is hard. Don't build it from scratch. Auth.js (the new name for NextAuth) handles OAuth, credentials, sessions, JWTs, and more. Here's how to set it up properly in Next.js 15.",
  },
  {
    type: "callout",
    calloutType: "warning",
    title: "NextAuth v4 vs Auth.js v5",
    content:
      "If you see tutorials using 'next-auth' with api/auth/[...nextauth]/route.ts, that's v4 (old). Auth.js v5 uses a different setup with auth.ts at the root. This guide covers v5.",
  },
  { type: "heading", content: "Installation", level: 3 },
  {
    type: "code",
    code: `npm install next-auth@beta`,
    filename: "Terminal",
    language: "bash",
  },
  { type: "heading", content: "Setup", level: 3 },
  {
    type: "code",
    code: `// src/auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
providers: [
  GitHub({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  }),
  Google({
    clientId: process.env.GOOGLE_ID!,
    clientSecret: process.env.GOOGLE_SECRET!,
  }),
],
});`,
    filename: "src/auth.ts",
    language: "tsx",
    highlight: [6],
  },
  {
    type: "code",
    code: `// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;`,
    filename: "src/app/api/auth/[...nextauth]/route.ts",
    language: "tsx",
  },
  { type: "heading", content: "Protecting Pages", level: 2 },
  {
    type: "code",
    code: `// src/app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
const session = await auth();

if (!session) {
  redirect("/login");
}

return (
  <div>
    <h1>Welcome, {session.user?.name}</h1>
    <img src={session.user?.image ?? ""} alt="Avatar" />
  </div>
);
}`,
    filename: "src/app/dashboard/page.tsx",
    language: "tsx",
    highlight: [6, 8, 9],
  },
  { type: "heading", content: "Sign In / Sign Out Buttons", level: 2 },
  {
    type: "code",
    code: `// src/components/AuthButtons.tsx
import { signIn, signOut, auth } from "@/auth";

export async function SignInButton() {
const session = await auth();

if (session) {
  return (
    <form action={async () => {
      "use server";
      await signOut();
    }}>
      <button type="submit">Sign Out</button>
    </form>
  );
}

return (
  <form action={async () => {
    "use server";
    await signIn("github");
  }}>
    <button type="submit">Sign in with GitHub</button>
  </form>
);
}`,
    filename: "src/components/AuthButtons.tsx",
    language: "tsx",
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "Middleware for auth",
    content:
      "For protecting multiple routes, combine Auth.js with middleware. Check the session in middleware and redirect unauthenticated users. This way you don't need auth checks in every individual page.",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "b0NMpaPsFww", title: "Auth Mistakes in Next.js", channel: "ByteGrad" },
      { id: "O4LhNvL5N28", title: "Protecting Routes in Next.js", channel: "Codevolution" },
    ],
  },
];
