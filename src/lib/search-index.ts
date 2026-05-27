import { chapters } from "./chapters";
import { chapterContents, ContentBlock } from "./content";

export interface SearchEntry {
  chapterSlug: string;
  chapterTitle: string;
  chapterNumber: number;
  heading?: string;
  headingSlug?: string;
  text: string;
  type: "chapter" | "heading" | "content";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .replace(/\n•/g, " ")
    .replace(/\n/g, " ");
}

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const chapter of chapters) {
    entries.push({
      chapterSlug: chapter.slug,
      chapterTitle: chapter.title,
      chapterNumber: chapter.number,
      text: `${chapter.title} ${chapter.description}`,
      type: "chapter",
    });

    const blocks = chapterContents[chapter.slug];
    if (!blocks) continue;

    let currentHeading: string | undefined;
    let currentHeadingSlug: string | undefined;

    for (const block of blocks) {
      if (block.type === "heading" && block.content) {
        currentHeading = block.content;
        currentHeadingSlug = slugify(block.content);
        entries.push({
          chapterSlug: chapter.slug,
          chapterTitle: chapter.title,
          chapterNumber: chapter.number,
          heading: currentHeading,
          headingSlug: currentHeadingSlug,
          text: block.content,
          type: "heading",
        });
      } else if (block.type === "text" && block.content) {
        entries.push({
          chapterSlug: chapter.slug,
          chapterTitle: chapter.title,
          chapterNumber: chapter.number,
          heading: currentHeading,
          headingSlug: currentHeadingSlug,
          text: stripMarkdown(block.content).slice(0, 200),
          type: "content",
        });
      } else if (block.type === "callout" && (block.title || block.content)) {
        entries.push({
          chapterSlug: chapter.slug,
          chapterTitle: chapter.title,
          chapterNumber: chapter.number,
          heading: currentHeading,
          headingSlug: currentHeadingSlug,
          text: `${block.title || ""} ${stripMarkdown(block.content || "").slice(0, 150)}`,
          type: "content",
        });
      }
    }
  }

  return entries;
}

export const searchIndex = buildIndex();

export function search(query: string, limit = 10): SearchEntry[] {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  const scored = searchIndex
    .map((entry) => {
      const haystack = entry.text.toLowerCase();
      let score = 0;

      for (const term of terms) {
        if (haystack.includes(term)) {
          score += 1;
          if (entry.type === "chapter") score += 2;
          if (entry.type === "heading") score += 1;
          if (haystack.startsWith(term)) score += 1;
        }
      }

      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);

  return scored;
}
