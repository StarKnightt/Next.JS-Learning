import { ChapterCard } from "@/components/ChapterCard";
import { chapters } from "@/lib/chapters";
import { TypingCode } from "@/components/TypingCode";
import { HeroAnimations, FadeInUp, StaggerContainer, StaggerItem } from "@/components/HeroAnimations";
import { ProgressBar } from "@/components/ProgressBar";
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
            <HeroAnimations>
              <div className="brutal-border bg-white inline-block px-3 py-1 mb-6 brutal-shadow-sm">
                <span className="font-mono text-sm font-bold">v16 • App Router • Turbopack</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Learn Next.js
                <br />
                <span className="bg-foreground text-brutal-yellow px-3 inline-block mt-2">
                  The Right Way
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl">
                Hey, I&apos;m <strong>Prasenjit</strong>. I built this guide while learning Next.js myself.
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
            </HeroAnimations>

            {/* Right side: Code preview */}
            <div className="hidden lg:block">
              <TypingCode />
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
        <ProgressBar />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StaggerItem><StatCard number="17" label="Chapters" color="bg-brutal-cyan/30" /></StaggerItem>
          <StaggerItem><StatCard number="50+" label="Code Examples" color="bg-brutal-lime/30" /></StaggerItem>
          <StaggerItem><StatCard number="3" label="Skill Levels" color="bg-brutal-pink/30" /></StaggerItem>
        </StaggerContainer>

        {/* Architecture Overview */}
        <FadeInUp>
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
        </FadeInUp>

        {/* Beginner */}
        <FadeInUp>
        <SectionHeader
          title="Beginner"
          subtitle="Start here. No prior Next.js knowledge needed."
          color="bg-brutal-lime"
        />
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beginnerChapters.map((chapter) => (
            <StaggerItem key={chapter.slug}><ChapterCard {...chapter} /></StaggerItem>
          ))}
        </StaggerContainer>

        {/* Intermediate */}
        <FadeInUp>
        <SectionHeader
          title="Intermediate"
          subtitle="You know the basics. Time to build real things."
          color="bg-brutal-orange"
        />
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {intermediateChapters.map((chapter) => (
            <StaggerItem key={chapter.slug}><ChapterCard {...chapter} /></StaggerItem>
          ))}
        </StaggerContainer>

        {/* Advanced */}
        <FadeInUp>
        <SectionHeader
          title="Advanced"
          subtitle="Production patterns, auth, and deployment."
          color="bg-brutal-pink"
        />
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advancedChapters.map((chapter) => (
            <StaggerItem key={chapter.slug}><ChapterCard {...chapter} /></StaggerItem>
          ))}
        </StaggerContainer>
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
