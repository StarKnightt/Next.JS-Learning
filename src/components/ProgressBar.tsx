"use client";

import { useProgress } from "@/lib/use-progress";
import { chapters } from "@/lib/chapters";

export function ProgressBar() {
  const { count, loaded } = useProgress();
  const total = chapters.length;
  const percent = Math.round((count / total) * 100);

  if (!loaded) return null;
  if (count === 0) return null;

  return (
    <div className="brutal-border bg-white p-4 brutal-shadow mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-sm">Your Progress</span>
        <span className="text-sm font-mono">
          {count}/{total} chapters completed
        </span>
      </div>
      <div className="h-4 brutal-border-thin bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-brutal-lime transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      {count === total && (
        <p className="text-sm font-bold mt-2 text-center">
          You&apos;ve completed everything. You&apos;re a Next.js pro now.
        </p>
      )}
    </div>
  );
}
