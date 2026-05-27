"use client";

import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = document.querySelectorAll("article h2[id], article h3[id]");
    const items: TocItem[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    const elements = document.querySelectorAll("article h2[id], article h3[id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav className="hidden xl:block fixed right-[max(1rem,calc((100vw-56rem)/2-16rem))] top-24 w-56">
      <div className="brutal-border-thin bg-white p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="text-xs font-bold uppercase opacity-50 mb-3">On this page</p>
        <ul className="space-y-1.5">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block text-xs leading-snug transition-colors py-0.5 ${
                  h.level === 3 ? "pl-3" : ""
                } ${
                  activeId === h.id
                    ? "font-bold text-foreground border-l-2 border-brutal-yellow pl-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
