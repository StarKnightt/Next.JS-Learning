import Link from "next/link";
import { chapters } from "@/lib/chapters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Roadmap | Next.js Learning by Prasen",
  description: "Your visual guide to mastering Next.js, from zero to production.",
};

export default function RoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Roadmap</h1>
      <p className="text-lg opacity-70 mb-12 max-w-2xl">
        Follow this path from top to bottom. Each chapter builds on the previous one.
        Don&apos;t skip ahead. The foundations matter.
      </p>

      {/* Visual Roadmap */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-foreground hidden md:block" />

        <div className="space-y-6">
          {/* Beginner section */}
          <RoadmapSection title="Beginner" color="bg-brutal-lime" emoji="🌱" />
          {chapters.filter(c => c.level === "beginner").map((chapter) => (
            <RoadmapItem key={chapter.slug} chapter={chapter} />
          ))}

          {/* Intermediate section */}
          <RoadmapSection title="Intermediate" color="bg-brutal-orange" emoji="⚡" />
          {chapters.filter(c => c.level === "intermediate").map((chapter) => (
            <RoadmapItem key={chapter.slug} chapter={chapter} />
          ))}

          {/* Advanced section */}
          <RoadmapSection title="Advanced" color="bg-brutal-pink" emoji="🚀" />
          {chapters.filter(c => c.level === "advanced").map((chapter) => (
            <RoadmapItem key={chapter.slug} chapter={chapter} />
          ))}
        </div>
      </div>

      {/* Rendering Model Diagram */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-brutal-yellow pb-2">
          Next.js Rendering - At a Glance
        </h2>
        <RenderingDiagram />
      </div>

      {/* Data Flow Diagram */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-brutal-cyan pb-2">
          How Data Flows in Next.js
        </h2>
        <DataFlowDiagram />
      </div>
    </div>
  );
}

function RoadmapSection({ title, color, emoji }: { title: string; color: string; emoji: string }) {
  return (
    <div className="flex items-center gap-4 relative z-10">
      <div className={`w-16 h-16 brutal-border ${color} flex items-center justify-center text-2xl brutal-shadow`}>
        {emoji}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function RoadmapItem({ chapter }: { chapter: typeof chapters[number] }) {
  return (
    <Link href={`/chapters/${chapter.slug}`} className="block ml-4 md:ml-16 relative z-10">
      <div className="brutal-border bg-white p-4 brutal-shadow-sm brutal-hover flex items-center gap-4">
        <span className={`brutal-border ${chapter.color} w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0`}>
          {chapter.number.toString().padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold truncate">{chapter.title}</h3>
          <p className="text-sm opacity-60 truncate">{chapter.description}</p>
        </div>
        <span className="text-lg flex-shrink-0">→</span>
      </div>
    </Link>
  );
}

function RenderingDiagram() {
  return (
    <div className="brutal-border bg-white p-6 brutal-shadow-lg overflow-x-auto">
      <svg viewBox="0 0 700 350" className="w-full min-w-[600px] h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Title */}
        <text x="350" y="30" textAnchor="middle" fontWeight="bold" fontSize="16" fontFamily="system-ui">
          Rendering Strategies in Next.js 15
        </text>

        {/* SSG */}
        <rect x="30" y="60" width="180" height="100" fill="#AAFF00" stroke="#1a1a1a" strokeWidth="3" />
        <text x="120" y="85" textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="system-ui">Static (SSG)</text>
        <text x="120" y="105" textAnchor="middle" fontSize="10" fontFamily="system-ui">Built at compile time</text>
        <text x="120" y="125" textAnchor="middle" fontSize="10" fontFamily="system-ui">Served from CDN</text>
        <text x="120" y="145" textAnchor="middle" fontSize="10" fontFamily="system-ui">Fastest possible</text>

        {/* SSR */}
        <rect x="260" y="60" width="180" height="100" fill="#00D4FF" stroke="#1a1a1a" strokeWidth="3" />
        <text x="350" y="85" textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="system-ui">Server (SSR)</text>
        <text x="350" y="105" textAnchor="middle" fontSize="10" fontFamily="system-ui">Rendered per request</text>
        <text x="350" y="125" textAnchor="middle" fontSize="10" fontFamily="system-ui">Always fresh data</text>
        <text x="350" y="145" textAnchor="middle" fontSize="10" fontFamily="system-ui">Slightly slower</text>

        {/* Streaming */}
        <rect x="490" y="60" width="180" height="100" fill="#FFE600" stroke="#1a1a1a" strokeWidth="3" />
        <text x="580" y="85" textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="system-ui">Streaming</text>
        <text x="580" y="105" textAnchor="middle" fontSize="10" fontFamily="system-ui">Progressive rendering</text>
        <text x="580" y="125" textAnchor="middle" fontSize="10" fontFamily="system-ui">Shell loads first</text>
        <text x="580" y="145" textAnchor="middle" fontSize="10" fontFamily="system-ui">Parts stream in</text>

        {/* ISR */}
        <rect x="145" y="200" width="180" height="100" fill="#FF6B9D" stroke="#1a1a1a" strokeWidth="3" />
        <text x="235" y="225" textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="system-ui">ISR (Revalidation)</text>
        <text x="235" y="245" textAnchor="middle" fontSize="10" fontFamily="system-ui">Static + timed refresh</text>
        <text x="235" y="265" textAnchor="middle" fontSize="10" fontFamily="system-ui">Best of both worlds</text>
        <text x="235" y="285" textAnchor="middle" fontSize="10" fontFamily="system-ui">revalidate: 60</text>

        {/* PPR */}
        <rect x="375" y="200" width="180" height="100" fill="#B388FF" stroke="#1a1a1a" strokeWidth="3" />
        <text x="465" y="225" textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="system-ui">PPR (Partial)</text>
        <text x="465" y="245" textAnchor="middle" fontSize="10" fontFamily="system-ui">Static shell + dynamic parts</text>
        <text x="465" y="265" textAnchor="middle" fontSize="10" fontFamily="system-ui">Future of Next.js</text>
        <text x="465" y="285" textAnchor="middle" fontSize="10" fontFamily="system-ui">Suspense boundaries</text>

        {/* Arrows */}
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#1a1a1a" />
          </marker>
        </defs>
        <line x1="120" y1="160" x2="200" y2="200" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="350" y1="160" x2="270" y2="200" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="350" y1="160" x2="430" y2="200" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="580" y1="160" x2="500" y2="200" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Legend */}
        <text x="350" y="335" textAnchor="middle" fontSize="11" fontFamily="system-ui" opacity="0.6">
          All strategies are available simultaneously. Choose per-route based on your data needs
        </text>
      </svg>
    </div>
  );
}

function DataFlowDiagram() {
  return (
    <div className="brutal-border bg-white p-6 brutal-shadow-lg overflow-x-auto">
      <svg viewBox="0 0 700 280" className="w-full min-w-[600px] h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#1a1a1a" />
          </marker>
        </defs>

        {/* User */}
        <rect x="20" y="100" width="100" height="60" fill="#FFE600" stroke="#1a1a1a" strokeWidth="3" />
        <text x="70" y="125" textAnchor="middle" fontWeight="bold" fontSize="12" fontFamily="system-ui">User</text>
        <text x="70" y="145" textAnchor="middle" fontSize="10" fontFamily="system-ui">Browser</text>

        {/* Arrow */}
        <line x1="120" y1="130" x2="170" y2="130" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead2)" />
        <text x="145" y="120" textAnchor="middle" fontSize="9" fontFamily="system-ui">Request</text>

        {/* Middleware */}
        <rect x="175" y="100" width="100" height="60" fill="#B388FF" stroke="#1a1a1a" strokeWidth="3" />
        <text x="225" y="125" textAnchor="middle" fontWeight="bold" fontSize="11" fontFamily="system-ui">Middleware</text>
        <text x="225" y="145" textAnchor="middle" fontSize="9" fontFamily="system-ui">Auth/Redirect</text>

        {/* Arrow */}
        <line x1="275" y1="130" x2="325" y2="130" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead2)" />

        {/* Route Handler or Page */}
        <rect x="330" y="70" width="120" height="50" fill="#AAFF00" stroke="#1a1a1a" strokeWidth="3" />
        <text x="390" y="95" textAnchor="middle" fontWeight="bold" fontSize="11" fontFamily="system-ui">Server Component</text>
        <text x="390" y="110" textAnchor="middle" fontSize="9" fontFamily="system-ui">(Page)</text>

        <rect x="330" y="140" width="120" height="50" fill="#00D4FF" stroke="#1a1a1a" strokeWidth="3" />
        <text x="390" y="165" textAnchor="middle" fontWeight="bold" fontSize="11" fontFamily="system-ui">Route Handler</text>
        <text x="390" y="180" textAnchor="middle" fontSize="9" fontFamily="system-ui">(API)</text>

        {/* Arrow to DB */}
        <line x1="450" y1="95" x2="530" y2="95" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead2)" />
        <line x1="450" y1="165" x2="530" y2="165" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead2)" />
        <text x="490" y="85" textAnchor="middle" fontSize="9" fontFamily="system-ui">fetch/db</text>

        {/* Database */}
        <rect x="535" y="95" width="120" height="60" fill="#FF6B9D" stroke="#1a1a1a" strokeWidth="3" />
        <text x="595" y="120" textAnchor="middle" fontWeight="bold" fontSize="11" fontFamily="system-ui">Database</text>
        <text x="595" y="140" textAnchor="middle" fontSize="9" fontFamily="system-ui">/ External API</text>

        {/* Response back */}
        <path d="M 390 190 L 390 240 L 70 240 L 70 160" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead2)" />
        <text x="230" y="255" textAnchor="middle" fontSize="9" fontFamily="system-ui">HTML / JSON Response</text>

        {/* Server Actions */}
        <rect x="175" y="20" width="120" height="45" fill="#FF8A00" stroke="#1a1a1a" strokeWidth="3" />
        <text x="235" y="40" textAnchor="middle" fontWeight="bold" fontSize="11" fontFamily="system-ui">Server Action</text>
        <text x="235" y="55" textAnchor="middle" fontSize="9" fontFamily="system-ui">(Form mutation)</text>

        <line x1="235" y1="65" x2="235" y2="100" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead2)" />
      </svg>
    </div>
  );
}
