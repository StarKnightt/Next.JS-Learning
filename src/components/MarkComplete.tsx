"use client";

import { useProgress } from "@/lib/use-progress";

export function MarkComplete({ slug }: { slug: string }) {
  const { isCompleted, toggle, loaded } = useProgress();

  if (!loaded) return null;

  const done = isCompleted(slug);

  return (
    <button
      onClick={() => toggle(slug)}
      className={`brutal-border px-5 py-3 font-bold text-sm transition-colors ${
        done
          ? "bg-brutal-lime hover:bg-red-100"
          : "bg-white hover:bg-brutal-lime"
      } brutal-shadow brutal-hover`}
    >
      {done ? "✓ Completed - Click to undo" : "Mark as completed"}
    </button>
  );
}
