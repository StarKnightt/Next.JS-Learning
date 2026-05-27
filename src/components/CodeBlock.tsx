"use client";

import { useState, useEffect, useCallback } from "react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  highlight?: number[];
}

export function CodeBlock({ code, filename, language = "tsx", highlight = [] }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const lines = code.split("\n");
  const isLong = lines.length > 10;

  const close = useCallback(() => setExpanded(false), []);

  useEffect(() => {
    if (!expanded) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [expanded, close]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeContent = (
    <pre className={`bg-[#1a1a1a] text-[#e0e0e0] p-4 overflow-x-auto ${filename ? "border-t-0" : ""}`}>
      <code className="text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${highlight.includes(i + 1) ? "bg-brutal-yellow/20 -mx-4 px-4" : ""}`}
          >
            <span className="inline-block w-8 text-right mr-4 opacity-40 select-none text-xs">
              {i + 1}
            </span>
            {line}
          </div>
        ))}
      </code>
    </pre>
  );

  return (
    <>
      <div className="my-6">
        {filename && (
          <div className="brutal-border border-b-0 bg-foreground text-background px-4 py-2 flex items-center justify-between">
            <span className="font-mono text-sm font-medium">{filename}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs opacity-60 uppercase">{language}</span>
              {isLong && (
                <button
                  onClick={() => setExpanded(true)}
                  className="text-xs bg-brutal-cyan text-foreground px-2 py-0.5 font-bold brutal-hover"
                >
                  Expand
                </button>
              )}
              <button
                onClick={handleCopy}
                className="text-xs bg-brutal-yellow text-foreground px-2 py-0.5 font-bold brutal-hover"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
        {!filename && isLong && (
          <div className="flex justify-end mb-1">
            <button
              onClick={() => setExpanded(true)}
              className="text-xs brutal-border-thin bg-white px-2 py-0.5 font-bold brutal-hover"
            >
              Expand
            </button>
          </div>
        )}
        {codeContent}
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-5xl max-h-[90vh] brutal-border bg-[#1a1a1a] overflow-auto animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-foreground text-background px-4 py-2 flex items-center justify-between border-b-2 border-brutal-yellow">
              <span className="font-mono text-sm font-medium">
                {filename || language}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="text-xs bg-brutal-yellow text-foreground px-2 py-0.5 font-bold"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={close}
                  className="text-xs bg-brutal-red text-white px-2 py-0.5 font-bold"
                >
                  Close ✕
                </button>
              </div>
            </div>
            <pre className="text-[#e0e0e0] p-4 overflow-x-auto">
              <code className="text-sm leading-relaxed">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`${highlight.includes(i + 1) ? "bg-brutal-yellow/20 -mx-4 px-4" : ""}`}
                  >
                    <span className="inline-block w-8 text-right mr-4 opacity-40 select-none text-xs">
                      {i + 1}
                    </span>
                    {line}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
