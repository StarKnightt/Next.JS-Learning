"use client";

import { useState, useCallback } from "react";

interface ShareHeadingProps {
  id: string;
  level: 2 | 3;
  children: React.ReactNode;
}

export function ShareHeading({ id, level, children }: ShareHeadingProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = useCallback(() => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [id]);

  const Tag = level === 2 ? "h2" : "h3";
  const className =
    level === 2
      ? "text-2xl md:text-3xl font-bold mt-10 mb-4 border-b-4 border-brutal-yellow pb-2"
      : "text-xl md:text-2xl font-bold mt-8 mb-3";

  return (
    <Tag id={id} className={`${className} group relative scroll-mt-20`}>
      {children}
      <button
        onClick={copyLink}
        className="inline-flex items-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity align-middle"
        aria-label="Copy link to section"
        title="Copy link"
      >
        {copied ? (
          <span className="text-xs font-mono bg-brutal-lime px-1.5 py-0.5 brutal-border-thin">
            Copied!
          </span>
        ) : (
          <svg className="w-5 h-5 opacity-40 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </button>
    </Tag>
  );
}
