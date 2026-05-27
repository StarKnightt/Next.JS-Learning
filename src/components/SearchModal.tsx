"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { search, SearchEntry } from "@/lib/search-index";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const r = search(query, 12);
    setResults(r);
    setActiveIndex(0);
  }, [query]);

  const navigate = useCallback(
    (entry: SearchEntry) => {
      const hash = entry.headingSlug ? `#${entry.headingSlug}` : "";
      router.push(`/chapters/${entry.chapterSlug}${hash}`);
      onClose();
    },
    [router, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        navigate(results[activeIndex]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [results, activeIndex, navigate, onClose]
  );

  useEffect(() => {
    const el = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-xl mx-4 brutal-border bg-white shadow-[8px_8px_0px_#1a1a1a] animate-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b-3 border-foreground px-4 py-3 gap-3">
          <svg className="w-5 h-5 opacity-50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search chapters, topics..."
            className="flex-1 bg-transparent outline-none text-base font-medium placeholder:opacity-40"
          />
          <kbd className="hidden sm:inline-block text-xs font-mono bg-gray-100 border border-gray-300 px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[50vh] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center opacity-50 text-sm">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
          {results.map((entry, i) => (
            <button
              key={`${entry.chapterSlug}-${entry.headingSlug || ""}-${i}`}
              onClick={() => navigate(entry)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 border-b border-gray-100 transition-colors ${
                i === activeIndex ? "bg-brutal-yellow/40" : "hover:bg-gray-50"
              }`}
            >
              <span className="shrink-0 w-7 h-7 brutal-border-thin bg-brutal-lime flex items-center justify-center text-xs font-bold mt-0.5">
                {entry.chapterNumber.toString().padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">
                  {entry.type === "chapter" ? entry.chapterTitle : entry.heading || entry.chapterTitle}
                </p>
                {entry.type !== "chapter" && (
                  <p className="text-xs opacity-60 truncate mt-0.5">
                    {entry.chapterTitle}
                    {entry.type === "content" && entry.text
                      ? ` - ${entry.text.slice(0, 80)}...`
                      : ""}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>

        {!query && (
          <div className="px-4 py-6 text-center text-sm opacity-50">
            Start typing to search across all chapters
          </div>
        )}

        <div className="flex items-center justify-between px-4 py-2 border-t-2 border-foreground bg-gray-50 text-xs opacity-60">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
