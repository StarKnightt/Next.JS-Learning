import { notFound } from "next/navigation";
import Link from "next/link";
import { chapters, getChapter, getAdjacentChapters } from "@/lib/chapters";
import { chapterContents } from "@/lib/content";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { VideoGrid } from "@/components/VideoGrid";
import { ShareHeading } from "@/components/ShareHeading";
import { MarkComplete } from "@/components/MarkComplete";
import { TableOfContents } from "@/components/TableOfContents";
import { slugify } from "@/lib/search-index";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return {};
  const url = `https://learn.prasen.dev/chapters/${slug}`;
  return {
    title: chapter.title,
    description: chapter.description,
    keywords: [
      "Next.js",
      "Next.js tutorial",
      chapter.title,
      `Next.js ${chapter.level}`,
      "App Router",
      "React",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: `${chapter.title} | Next.js Learning`,
      description: chapter.description,
      siteName: "Next.js Learning by Prasen",
    },
    twitter: {
      card: "summary_large_image",
      title: `${chapter.title} | Next.js Learning`,
      description: chapter.description,
      creator: "@prasenx",
    },
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  const content = chapterContents[slug];

  if (!chapter || !content) {
    notFound();
  }

  const { prev, next } = getAdjacentChapters(slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: chapter.title,
      description: chapter.description,
      url: `https://learn.prasen.dev/chapters/${slug}`,
      author: {
        "@type": "Person",
        name: "Prasenjit",
        url: "https://prasen.dev",
      },
      publisher: {
        "@type": "Person",
        name: "Prasenjit",
        url: "https://prasen.dev",
      },
      isAccessibleForFree: true,
      inLanguage: "en",
      proficiencyLevel:
        chapter.level === "beginner" ? "Beginner" : "Expert",
      about: {
        "@type": "SoftwareApplication",
        name: "Next.js",
        applicationCategory: "WebFramework",
      },
      isPartOf: {
        "@type": "Course",
        name: "Next.js Learning by Prasen",
        url: "https://learn.prasen.dev",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://learn.prasen.dev",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `Chapter ${chapter.number}: ${chapter.title}`,
          item: `https://learn.prasen.dev/chapters/${slug}`,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TableOfContents />
      {/* Chapter header */}
      <div className="mb-10">
        <Link
          href="/"
          className="text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back to chapters
        </Link>
        <div className="flex items-center gap-3 mt-4 mb-2">
          <span className={`brutal-border ${chapter.color} w-12 h-12 flex items-center justify-center font-bold text-xl`}>
            {chapter.number.toString().padStart(2, "0")}
          </span>
          <span className="brutal-border-thin bg-brutal-lime px-2 py-0.5 text-xs font-bold uppercase">
            {chapter.level}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4">{chapter.title}</h1>
        <p className="text-lg opacity-70 mt-3">{chapter.description}</p>
      </div>

      {/* Chapter content */}
      <article className="space-y-6">
        {content.map((block, i) => (
          <ContentRenderer key={i} block={block} />
        ))}
      </article>

      {/* Mark complete */}
      <div className="mt-12 flex justify-center">
        <MarkComplete slug={slug} />
      </div>

      {/* Navigation */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
        {prev && (
          <Link
            href={`/chapters/${prev.slug}`}
            className="brutal-border bg-white p-4 brutal-shadow brutal-hover"
          >
            <span className="text-sm opacity-60">← Previous</span>
            <p className="font-bold mt-1">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link
            href={`/chapters/${next.slug}`}
            className="brutal-border bg-white p-4 brutal-shadow brutal-hover md:text-right md:ml-auto"
          >
            <span className="text-sm opacity-60">Next →</span>
            <p className="font-bold mt-1">{next.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
}

function ContentRenderer({ block }: { block: (typeof chapterContents)[string][number] }) {
  switch (block.type) {
    case "heading": {
      const headingId = slugify(block.content || "");
      if (block.level === 2) {
        return (
          <ShareHeading id={headingId} level={2}>
            {block.content}
          </ShareHeading>
        );
      }
      return (
        <ShareHeading id={headingId} level={3}>
          {block.content}
        </ShareHeading>
      );
    }

    case "text":
      return (
        <div className="prose-custom text-base leading-relaxed space-y-3">
          {block.content!.split("\n\n").map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: formatText(para) }} />
          ))}
        </div>
      );

    case "code":
      return (
        <CodeBlock
          code={block.code!}
          filename={block.filename}
          language={block.language}
          highlight={block.highlight}
        />
      );

    case "callout":
      return (
        <Callout type={block.calloutType!} title={block.title}>
          <div
            className="space-y-1"
            dangerouslySetInnerHTML={{
              __html: formatText(block.content!).replace(/\n/g, "<br/>"),
            }}
          />
        </Callout>
      );

    case "comparison":
      return (
        <div className="brutal-border bg-white overflow-hidden my-6 overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="grid grid-cols-3 bg-foreground text-background p-3 font-bold text-sm">
              <span>Feature</span>
              <span>What it does</span>
              <span>When to use</span>
            </div>
            {block.items!.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 p-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t-2 border-foreground`}
              >
                <span className="font-bold font-mono">{item.label}</span>
                <span>{item.left}</span>
                <span className="opacity-75">{item.right}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "video":
      return <VideoGrid videos={block.videos!} title={block.title!} />;

    default:
      return null;
  }
}

function formatText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-brutal-yellow/30 px-1.5 py-0.5 font-mono text-sm brutal-border-thin">$1</code>')
    .replace(/\n•/g, '<br/>•');
}
