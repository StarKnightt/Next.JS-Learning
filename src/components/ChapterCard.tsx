import Link from "next/link";
import { ChapterCheck } from "./ChapterCheck";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  slug: string;
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

const levelBadge = {
  beginner: { bg: "bg-brutal-lime", label: "Beginner" },
  intermediate: { bg: "bg-brutal-orange", label: "Intermediate" },
  advanced: { bg: "bg-brutal-pink", label: "Advanced" },
};

export function ChapterCard({ number, title, description, slug, level, color }: ChapterCardProps) {
  const badge = levelBadge[level];

  return (
    <Link href={`/chapters/${slug}`}>
      <div className={`brutal-border ${color} p-5 brutal-shadow brutal-hover cursor-pointer h-full flex flex-col relative`}>
        <ChapterCheck slug={slug} />
        <div className="flex items-center justify-between mb-3">
          <span className="brutal-border bg-white w-10 h-10 flex items-center justify-center font-bold text-lg">
            {number.toString().padStart(2, "0")}
          </span>
          <span className={`${badge.bg} brutal-border-thin px-2 py-0.5 text-xs font-bold uppercase`}>
            {badge.label}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm opacity-75 flex-1">{description}</p>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold">
          Start reading <span className="ml-1">→</span>
        </div>
      </div>
    </Link>
  );
}
