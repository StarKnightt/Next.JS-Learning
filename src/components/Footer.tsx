export function Footer() {
  return (
    <footer className="brutal-border-thin border-b-0 border-x-0 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Next.js Learning</h3>
            <p className="text-sm opacity-80">
              Built by Prasen to help developers master Next.js, from absolute
              basics to production-ready patterns. No fluff, just real knowledge.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-brutal-yellow">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/chapters/getting-started" className="hover:text-brutal-yellow transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="/roadmap" className="hover:text-brutal-yellow transition-colors">
                  Learning Roadmap
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-yellow transition-colors">
                  Official Docs ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-brutal-cyan">More by Prasen</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="https://dateup.in" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-cyan transition-colors">
                  DateUp ↗
                </a>
              </li>
              <li>
                <a href="https://wallpaperz.in" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-cyan transition-colors">
                  Wallpaperz ↗
                </a>
              </li>
              <li>
                <a href="https://cleantype.software" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-cyan transition-colors">
                  CleanType ↗
                </a>
              </li>
              <li>
                <a href="https://buddy-find.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-cyan transition-colors">
                  Buddy Finder ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-brutal-lime">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="https://github.com/StarKnightt" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-lime transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://prasen.dev" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-lime transition-colors">
                  prasen.dev ↗
                </a>
              </li>
              <li>
                <a href="https://x.com/Star_Knight12" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-lime transition-colors">
                  Twitter/X ↗
                </a>
              </li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-lime transition-colors">
                  Deploy on Vercel ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <span>
            Made with care by <a href="https://prasen.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-brutal-yellow transition-colors">Prasen</a>. Keep building, keep learning.
          </span>
          <a
            href="https://github.com/StarKnightt/Next.JS-Learning/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brutal-lime hover:text-brutal-yellow transition-colors font-medium"
          >
            PRs are welcome &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
