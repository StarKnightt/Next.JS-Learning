export function Footer() {
  return (
    <footer className="brutal-border-thin border-b-0 border-x-0 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">⚡ Next.js Learning</h3>
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
            <h4 className="font-bold mb-3 text-brutal-cyan">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-cyan transition-colors">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-cyan transition-colors">
                  Deploy on Vercel ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm opacity-60">
          Made with 🖤 by Prasen. Keep building, keep learning.
        </div>
      </div>
    </footer>
  );
}
