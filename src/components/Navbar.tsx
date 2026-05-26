import Link from "next/link";

export function Navbar() {
  return (
    <nav className="brutal-border-thin border-t-0 border-x-0 bg-brutal-yellow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              ⚡ Next.js
            </span>
            <span className="brutal-border-thin bg-white px-2 py-0.5 text-sm font-bold brutal-shadow-sm">
              by Prasen
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/chapters/getting-started">Start Learning</NavLink>
            <NavLink href="/roadmap">Roadmap</NavLink>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
            >
              Docs ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 font-semibold text-sm hover:bg-black hover:text-brutal-yellow transition-colors"
    >
      {children}
    </Link>
  );
}
