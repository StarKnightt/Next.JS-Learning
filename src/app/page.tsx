import { ChapterCard } from "@/components/ChapterCard";
import { chapters } from "@/lib/chapters";
import Link from "next/link";

export default function Home() {
  const beginnerChapters = chapters.filter((c) => c.level === "beginner");
  const intermediateChapters = chapters.filter((c) => c.level === "intermediate");
  const advancedChapters = chapters.filter((c) => c.level === "advanced");

  return (
    <div>
      {/* Hero */}
      <section className="brutal-border-thin border-t-0 border-x-0 bg-brutal-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="brutal-border bg-white inline-block px-3 py-1 mb-6 brutal-shadow-sm">
                <span className="font-mono text-sm font-bold">v15 • App Router • 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Learn Next.js
                <br />
                <span className="bg-foreground text-brutal-yellow px-3 inline-block mt-2">
                  The Right Way
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl">
                Hey, I&apos;m <strong>Prasen</strong>. I built this guide while learning Next.js myself.
                No corporate docs language, just clear explanations, real examples, and the stuff I
                wish someone told me from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/chapters/getting-started"
                  className="brutal-border bg-foreground text-brutal-yellow px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-block"
                >
                  Start Chapter 1 →
                </Link>
                <Link
                  href="/roadmap"
                  className="brutal-border bg-white px-6 py-3 font-bold text-lg brutal-shadow brutal-hover inline-block"
                >
                  View Roadmap
                </Link>
              </div>
            </div>

            {/* Right side: Code preview */}
            <div className="hidden lg:block">
              <div className="brutal-border bg-[#1a1a1a] brutal-shadow-lg">
                <div className="flex items-center gap-2 px-4 py-3 border-b-3 border-[#1a1a1a] bg-[#2a2a2a]">
                  <span className="w-3 h-3 rounded-full bg-brutal-red" />
                  <span className="w-3 h-3 rounded-full bg-brutal-yellow" />
                  <span className="w-3 h-3 rounded-full bg-brutal-lime" />
                  <span className="ml-3 text-xs text-white/50 font-mono">app/page.tsx</span>
                </div>
                <pre className="p-5 text-sm font-mono leading-relaxed overflow-hidden border-0 shadow-none">
                  <code>
                    <span className="text-purple-400">export default</span>{" "}
                    <span className="text-blue-400">async function</span>{" "}
                    <span className="text-yellow-300">Home</span>
                    <span className="text-white">() {"{"}</span>{"\n"}
                    <span className="text-gray-500">  // Fetches on the server</span>{"\n"}
                    <span className="text-white">  </span>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-white">posts =</span>{" "}
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-blue-400">fetch</span>
                    <span className="text-white">(</span>
                    <span className="text-green-400">&quot;/api/posts&quot;</span>
                    <span className="text-white">)</span>{"\n"}
                    <span className="text-white">{"\n"}</span>
                    <span className="text-white">  </span>
                    <span className="text-purple-400">return</span>
                    <span className="text-white"> (</span>{"\n"}
                    <span className="text-white">    </span>
                    <span className="text-blue-300">&lt;main&gt;</span>{"\n"}
                    <span className="text-white">      {"  "}</span>
                    <span className="text-blue-300">&lt;h1&gt;</span>
                    <span className="text-white">My Blog</span>
                    <span className="text-blue-300">&lt;/h1&gt;</span>{"\n"}
                    <span className="text-white">      {"  "}</span>
                    <span className="text-gray-500">{"// Zero client JS for this page"}</span>{"\n"}
                    <span className="text-white">      {"  "}</span>
                    <span className="text-white">{"{"}</span>
                    <span className="text-white">posts.</span>
                    <span className="text-blue-400">map</span>
                    <span className="text-white">((p) =&gt; </span>
                    <span className="text-blue-300">&lt;Card</span>{" "}
                    <span className="text-green-400">key=</span>
                    <span className="text-white">{"{"}p.id{"}"}</span>{" "}
                    <span className="text-blue-300">/&gt;</span>
                    <span className="text-white">)</span>
                    <span className="text-white">{"}"}</span>{"\n"}
                    <span className="text-white">    </span>
                    <span className="text-blue-300">&lt;/main&gt;</span>{"\n"}
                    <span className="text-white">  )</span>{"\n"}
                    <span className="text-white">{"}"}</span>
                  </code>
                </pre>
              </div>
              <div className="mt-4 flex gap-3">
                <div className="brutal-border-thin bg-white px-3 py-1.5 text-xs font-bold">
                  Server Component
                </div>
                <div className="brutal-border-thin bg-white px-3 py-1.5 text-xs font-bold">
                  0kb Client JS
                </div>
                <div className="brutal-border-thin bg-white px-3 py-1.5 text-xs font-bold">
                  SEO Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard number="15" label="Chapters" color="bg-brutal-cyan/30" />
          <StatCard number="50+" label="Code Examples" color="bg-brutal-lime/30" />
          <StatCard number="3" label="Skill Levels" color="bg-brutal-pink/30" />
        </div>

        {/* Architecture Overview */}
        <div className="brutal-border bg-white p-8 brutal-shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">How Next.js Works - The Big Picture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ArchDiagram />
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                Next.js sits <strong>on top of React</strong>. It gives you routing, server-side
                rendering, API routes, and a build system. Stuff React alone doesn&apos;t provide.
              </p>
              <p className="text-sm leading-relaxed">
                Think of it like this: <strong>React is the engine</strong>, Next.js is the full car.
                You get steering (routing), fuel injection (data fetching), and a dashboard (dev tools)
                out of the box.
              </p>
              <div className="brutal-border-thin bg-brutal-yellow/20 p-4 mt-4">
                <p className="text-sm font-semibold">
                  💡 The App Router (introduced in v13) is the current standard.
                  Everything in this guide uses it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beginner */}
        <SectionHeader
          title="Beginner"
          subtitle="Start here. No prior Next.js knowledge needed."
          color="bg-brutal-lime"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beginnerChapters.map((chapter) => (
            <ChapterCard key={chapter.slug} {...chapter} />
          ))}
        </div>

        {/* Intermediate */}
        <SectionHeader
          title="Intermediate"
          subtitle="You know the basics. Time to build real things."
          color="bg-brutal-orange"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {intermediateChapters.map((chapter) => (
            <ChapterCard key={chapter.slug} {...chapter} />
          ))}
        </div>

        {/* Advanced */}
        <SectionHeader
          title="Advanced"
          subtitle="Production patterns, auth, and deployment."
          color="bg-brutal-pink"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advancedChapters.map((chapter) => (
            <ChapterCard key={chapter.slug} {...chapter} />
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <div className={`brutal-border ${color} p-6 brutal-shadow text-center`}>
      <div className="text-4xl font-bold">{number}</div>
      <div className="text-sm font-medium mt-1 uppercase">{label}</div>
    </div>
  );
}

function SectionHeader({ title, subtitle, color }: { title: string; subtitle: string; color: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className={`brutal-border ${color} px-4 py-2 font-bold text-lg`}>{title}</span>
      <span className="text-sm opacity-60">{subtitle}</span>
    </div>
  );
}

function ArchDiagram() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Browser */}
      <rect x="120" y="10" width="160" height="50" fill="#FFE600" stroke="#1a1a1a" strokeWidth="3" />
      <text x="200" y="40" textAnchor="middle" fontWeight="bold" fontSize="14" fontFamily="system-ui">Browser (Client)</text>

      {/* Arrow down */}
      <line x1="200" y1="60" x2="200" y2="90" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Next.js Server */}
      <rect x="80" y="90" width="240" height="120" fill="#AAFF00" stroke="#1a1a1a" strokeWidth="3" rx="0" />
      <text x="200" y="115" textAnchor="middle" fontWeight="bold" fontSize="14" fontFamily="system-ui">Next.js Server</text>

      {/* Inner boxes */}
      <rect x="95" y="125" width="100" height="35" fill="white" stroke="#1a1a1a" strokeWidth="2" />
      <text x="145" y="147" textAnchor="middle" fontSize="11" fontFamily="system-ui">App Router</text>

      <rect x="205" y="125" width="100" height="35" fill="white" stroke="#1a1a1a" strokeWidth="2" />
      <text x="255" y="147" textAnchor="middle" fontSize="11" fontFamily="system-ui">API Routes</text>

      <rect x="95" y="170" width="100" height="30" fill="white" stroke="#1a1a1a" strokeWidth="2" />
      <text x="145" y="189" textAnchor="middle" fontSize="10" fontFamily="system-ui">Server Components</text>

      <rect x="205" y="170" width="100" height="30" fill="white" stroke="#1a1a1a" strokeWidth="2" />
      <text x="255" y="189" textAnchor="middle" fontSize="10" fontFamily="system-ui">Middleware</text>

      {/* Arrow down */}
      <line x1="200" y1="210" x2="200" y2="240" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Database */}
      <rect x="120" y="240" width="160" height="45" fill="#FF6B9D" stroke="#1a1a1a" strokeWidth="3" />
      <text x="200" y="267" textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="system-ui">Database / APIs</text>

      {/* Arrow marker */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#1a1a1a" />
        </marker>
      </defs>
    </svg>
  );
}
