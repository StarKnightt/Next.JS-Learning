"use client";

import { useProgress } from "@/lib/use-progress";

export function ChapterCheck({ slug }: { slug: string }) {
  const { isCompleted, loaded } = useProgress();

  if (!loaded || !isCompleted(slug)) return null;

  return (
    <span className="absolute top-2 right-2 w-6 h-6 bg-brutal-lime brutal-border-thin flex items-center justify-center text-xs font-bold">
      ✓
    </span>
  );
}
