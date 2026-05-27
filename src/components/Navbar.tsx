"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { SearchModal } from "./SearchModal";

const REPO = "StarKnightt/Next.JS-Learning";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count != null) setStars(data.stargazers_count);
      })
      .catch(() => {});
  }, []);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <nav className="brutal-border-thin border-t-0 border-x-0 bg-brutal-yellow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight">
                Next.js Learning
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/chapters/getting-started">Start Learning</NavLink>
              <NavLink href="/roadmap">Roadmap</NavLink>
              <button
                onClick={openSearch}
                className="flex items-center gap-2 ml-2 px-3 py-1.5 text-sm font-semibold bg-white border-2 border-foreground hover:bg-foreground hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <kbd className="text-[10px] font-mono bg-gray-200 group-hover:bg-white/20 group-hover:text-white border border-gray-300 group-hover:border-white/30 px-1 py-0.5 rounded transition-colors">
                  Ctrl K
                </kbd>
              </button>
              <a
                href={`https://github.com/${REPO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 ml-1 px-3 py-1.5 text-sm font-bold bg-foreground text-white border-2 border-foreground hover:bg-brutal-yellow hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                {stars !== null ? (
                  <span>{stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}</span>
                ) : (
                  <span>Star</span>
                )}
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={openSearch}
                className="brutal-border-thin bg-white w-10 h-10 flex items-center justify-center"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="brutal-border-thin bg-white w-10 h-10 flex items-center justify-center font-bold text-lg"
                aria-label="Toggle menu"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t-3 border-foreground bg-brutal-yellow pb-4 px-4">
            <div className="flex flex-col gap-1 pt-2">
              <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
              <MobileLink href="/chapters/getting-started" onClick={() => setMobileOpen(false)}>Start Learning</MobileLink>
              <MobileLink href="/roadmap" onClick={() => setMobileOpen(false)}>Roadmap</MobileLink>
              <a
                href={`https://github.com/${REPO}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>Star on GitHub</span>
                {stars !== null && (
                  <span className="brutal-border-thin bg-white px-1.5 py-0.5 text-xs font-bold">
                    {stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}
                  </span>
                )}
              </a>
            </div>
          </div>
        )}
      </nav>

      <SearchModal open={searchOpen} onClose={closeSearch} />
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-2.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
    >
      {children}
    </Link>
  );
}
