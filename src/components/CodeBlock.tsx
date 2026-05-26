"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  highlight?: number[];
}

export function CodeBlock({ code, filename, language = "tsx", highlight = [] }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="my-6">
      {filename && (
        <div className="brutal-border border-b-0 bg-foreground text-background px-4 py-2 flex items-center justify-between">
          <span className="font-mono text-sm font-medium">{filename}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-60 uppercase">{language}</span>
            <button
              onClick={handleCopy}
              className="text-xs bg-brutal-yellow text-foreground px-2 py-0.5 font-bold brutal-hover"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
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
    </div>
  );
}
