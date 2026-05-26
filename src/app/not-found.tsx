import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="brutal-border bg-brutal-yellow inline-block px-8 py-4 brutal-shadow-lg mb-8">
          <span className="text-8xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg opacity-70 mb-8 max-w-md mx-auto">
          Looks like this page doesn&apos;t exist. Maybe you mistyped the URL, or
          this chapter hasn&apos;t been written yet.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="brutal-border bg-foreground text-background px-6 py-3 font-bold brutal-shadow brutal-hover"
          >
            ← Go Home
          </Link>
          <Link
            href="/roadmap"
            className="brutal-border bg-white px-6 py-3 font-bold brutal-shadow brutal-hover"
          >
            View Roadmap
          </Link>
        </div>
      </div>
    </div>
  );
}
