"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "export default async function Home() {", delay: 0 },
  { text: "  // Fetches on the server", delay: 600 },
  { text: '  const posts = await fetch("/api/posts")', delay: 1200 },
  { text: "", delay: 1800 },
  { text: "  return (", delay: 2000 },
  { text: "    <main>", delay: 2300 },
  { text: "      <h1>My Blog</h1>", delay: 2600 },
  { text: "      // Zero client JS for this page", delay: 3000 },
  { text: "      {posts.map((p) => <Card key={p.id} />)}", delay: 3400 },
  { text: "    </main>", delay: 3800 },
  { text: "  )", delay: 4000 },
  { text: "}", delay: 4200 },
];

export function TypingCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setIsTyping(false);
      return;
    }

    const lineTimeout = setTimeout(() => {
      const line = lines[visibleLines].text;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setCurrentText(line.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setVisibleLines((v) => v + 1);
          setCurrentText("");
        }
      }, 20);

      return () => clearInterval(typeInterval);
    }, visibleLines === 0 ? 500 : 150);

    return () => clearTimeout(lineTimeout);
  }, [visibleLines]);

  return (
    <div className="brutal-border bg-[#1a1a1a] brutal-shadow-lg">
      <div className="flex items-center gap-2 px-4 py-3 border-b-3 border-[#1a1a1a] bg-[#2a2a2a]">
        <span className="w-3 h-3 rounded-full bg-brutal-red" />
        <span className="w-3 h-3 rounded-full bg-brutal-yellow" />
        <span className="w-3 h-3 rounded-full bg-brutal-lime" />
        <span className="ml-3 text-xs text-white/50 font-mono">app/page.tsx</span>
      </div>
      <pre className="p-5 text-sm font-mono leading-relaxed overflow-hidden border-0 shadow-none min-h-[280px]">
        <code>
          {lines.slice(0, visibleLines).map((line, i) => (
            <div key={i}>
              <span className="inline-block w-6 text-right mr-3 text-white/20 text-xs select-none">
                {i + 1}
              </span>
              <LineHighlight text={line.text} />
            </div>
          ))}
          {visibleLines < lines.length && (
            <div>
              <span className="inline-block w-6 text-right mr-3 text-white/20 text-xs select-none">
                {visibleLines + 1}
              </span>
              <LineHighlight text={currentText} />
              {isTyping && (
                <span className="inline-block w-[2px] h-4 bg-brutal-yellow ml-[1px] animate-pulse" />
              )}
            </div>
          )}
        </code>
      </pre>
    </div>
  );
}

function LineHighlight({ text }: { text: string }) {
  const highlighted = text
    .replace(
      /(export default|async|const|await|return)/g,
      '<span class="text-purple-400">$1</span>'
    )
    .replace(
      /(function)/g,
      '<span class="text-blue-400">$1</span>'
    )
    .replace(
      /(Home)/g,
      '<span class="text-yellow-300">$1</span>'
    )
    .replace(
      /("\/api\/posts")/g,
      '<span class="text-green-400">$1</span>'
    )
    .replace(
      /(\/\/.*)/g,
      '<span class="text-gray-500">$1</span>'
    )
    .replace(
      /(<\/?[a-zA-Z]+>?|<Card[^/]*\/>)/g,
      '<span class="text-blue-300">$1</span>'
    );

  return <span className="text-white" dangerouslySetInnerHTML={{ __html: highlighted }} />;
}
