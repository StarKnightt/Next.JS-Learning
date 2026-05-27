import type { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Server Actions: Mutations Without API Routes", level: 2 },
  {
    type: "text",
    content:
      "Server Actions let you run server-side code directly from your components. No API route needed. Just mark a function with 'use server' and call it from a form or button. It's like magic, but it's actually just an RPC call.",
  },
  { type: "heading", content: "Basic Server Action", level: 3 },
  {
    type: "code",
    code: `// src/app/contact/actions.ts
"use server";

import { db } from "@/lib/database";

export async function submitContact(formData: FormData) {
const name = formData.get("name") as string;
const email = formData.get("email") as string;
const message = formData.get("message") as string;

await db.insert("messages", { name, email, message });

// You can also revalidate cached data
// revalidatePath("/messages");
}`,
    filename: "src/app/contact/actions.ts",
    language: "tsx",
    highlight: [1, 6],
  },
  {
    type: "code",
    code: `// src/app/contact/page.tsx
import { submitContact } from "./actions";

export default function ContactPage() {
return (
  <form action={submitContact}>
    <input name="name" placeholder="Name" required />
    <input name="email" type="email" placeholder="Email" required />
    <textarea name="message" placeholder="Message" required />
    <button type="submit">Send Message</button>
  </form>
);
}`,
    filename: "src/app/contact/page.tsx",
    language: "tsx",
    highlight: [6],
  },
  {
    type: "callout",
    calloutType: "info",
    title: "How it works under the hood",
    content:
      "When the form submits, Next.js sends a POST request to the server, executes your function, and returns the result. No fetch calls, no API routes, no CORS. It works even with JavaScript disabled (progressive enhancement!).",
  },
  { type: "heading", content: "With Validation & Feedback", level: 2 },
  {
    type: "code",
    code: `// src/app/contact/actions.ts
"use server";

interface ActionState {
success: boolean;
message: string;
}

export async function submitContact(
prevState: ActionState,
formData: FormData
): Promise<ActionState> {
const email = formData.get("email") as string;

if (!email.includes("@")) {
  return { success: false, message: "Invalid email address" };
}

// Save to database...

return { success: true, message: "Message sent!" };
}`,
    filename: "src/app/contact/actions.ts",
    language: "tsx",
  },
  {
    type: "code",
    code: `"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";

export default function ContactForm() {
const [state, action, isPending] = useActionState(submitContact, {
  success: false,
  message: "",
});

return (
  <form action={action}>
    <input name="email" type="email" placeholder="Email" required />
    <button type="submit" disabled={isPending}>
      {isPending ? "Sending..." : "Send"}
    </button>
    {state.message && (
      <p className={state.success ? "text-green-600" : "text-red-600"}>
        {state.message}
      </p>
    )}
  </form>
);
}`,
    filename: "src/app/contact/ContactForm.tsx",
    language: "tsx",
    highlight: [3, 7, 15],
  },
  {
    type: "callout",
    calloutType: "tip",
    title: "useActionState is the new way",
    content:
      "React 19 introduced useActionState (replacing useFormState). It gives you:\n• The previous state\n• The action function to pass to your form\n• An isPending boolean for loading states\nUse it for any form that needs loading states or server validation.",
  },
  {
    type: "video",
    title: "Watch and Learn",
    videos: [
      { id: "dDpZfOQBMaU", title: "Server Actions & Forms", channel: "Lee Robinson" },
      { id: "vCOSTG10Y4o", title: "Server Actions in Practice", channel: "Lama Dev" },
    ],
  },
];
