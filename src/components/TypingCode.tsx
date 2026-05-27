"use client";

import { useEffect, useState } from "react";

interface Token {
  text: string;
  color: string;
}

const tokenize = (line: string): Token[] => {
  const tokens: Token[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    let matched = false;

    const patterns: [RegExp, string][] = [
      [/^(export default|async|const|await|return)/, "#c084fc"],
      [/^(function)/, "#60a5fa"],
      [/^(Home)/, "#fde047"],
      [/^("[^"]*")/, "#4ade80"],
      [/^(\/\/.*)/, "#6b7280"],
      [/^(<\/?[a-zA-Z][a-zA-Z0-9]*\s*\/?>)/, "#93c5fd"],
      [/^(\{[^}]*\})/, "#e0e0e0"],
    ];

    for (const [pattern, color] of patterns) {
      const match = remaining.match(pattern);
      if (match) {
        tokens.push({ text: match[0], color });
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      const nextSpecial = remaining.slice(1).search(/export|async|const|await|return|function|Home|"|\/\/|<|{/);
      if (nextSpecial === -1) {
        tokens.push({ text: remaining, color: "#e0e0e0" });
        remaining = "";
      } else {
        tokens.push({ text: remaining.slice(0, nextSpecial + 1), color: "#e0e0e0" });
        remaining = remaining.slice(nextSpecial + 1);
      }
    }
  }

  return tokens;
};

const lines = [
  "export default async function Home() {",
  "  // Fetches on the server",
  '  const posts = await fetch("/api/posts")',
  "",
  "  return (",
  "    <main>",
  "      <h1>My Blog</h1>",
  "      // Zero client JS for this page",
  "      {posts.map((p) => <Card />)}",
  "    </main>",
  "  )",
  "}",
];

export function TypingCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "resetting">("typing");

  useEffect(() => {
    if (phase === "pausing") {
      const pause = setTimeout(() => {
        setPhase("resetting");
      }, 2000);
      return () => clearTimeout(pause);
    }

    if (phase === "resetting") {
      setVisibleLines(0);
      setCharCount(0);
      setPhase("typing");
      return;
    }

    const timer = setTimeout(() => {
      if (visibleLines >= lines.length) {
        setPhase("pausing");
        return;
      }

      const currentLine = lines[visibleLines];
      if (charCount >= currentLine.length) {
        setVisibleLines((v) => v + 1);
        setCharCount(0);
      } else {
        setCharCount((c) => c + 1);
      }
    }, charCount === 0 && visibleLines > 0 ? 80 : 25);

    return () => clearTimeout(timer);
  }, [visibleLines, charCount, phase]);

  return (
    <div className="brutal-border bg-[#1a1a1a] brutal-shadow-lg">
      <div className="flex items-center gap-2 px-4 py-3 border-b-3 border-[#1a1a1a] bg-[#2a2a2a]">
        <span className="w-3 h-3 rounded-full bg-brutal-red" />
        <span className="w-3 h-3 rounded-full bg-brutal-yellow" />
        <span className="w-3 h-3 rounded-full bg-brutal-lime" />
        <span className="ml-3 text-xs text-white/50 font-mono">app/page.tsx</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px] overflow-hidden">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="w-6 text-right mr-3 text-white/20 text-xs select-none shrink-0 pt-[2px]">
              {i + 1}
            </span>
            <span className="whitespace-pre">
              {tokenize(line).map((token, j) => (
                <span key={j} style={{ color: token.color }}>{token.text}</span>
              ))}
            </span>
          </div>
        ))}
        {phase === "typing" && visibleLines < lines.length && (
          <div className="flex">
            <span className="w-6 text-right mr-3 text-white/20 text-xs select-none shrink-0 pt-[2px]">
              {visibleLines + 1}
            </span>
            <span className="whitespace-pre">
              {tokenize(lines[visibleLines].slice(0, charCount)).map((token, j) => (
                <span key={j} style={{ color: token.color }}>{token.text}</span>
              ))}
              <span className="inline-block w-[2px] h-[14px] bg-brutal-yellow animate-pulse align-middle" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
