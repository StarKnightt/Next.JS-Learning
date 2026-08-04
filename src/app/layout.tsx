import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Learning | by Prasen",
    template: "%s | Next.js Learning by Prasen",
  },
  description:
    "A complete guide to mastering Next.js, from basics to production. Learn App Router, Server Components, data fetching, authentication, and deployment patterns. Taught by Prasen.",
  keywords: [
    "Next.js",
    "Next.js tutorial",
    "Next.js learning",
    "React",
    "App Router",
    "Server Components",
    "web development",
    "full stack",
    "TypeScript",
    "Prasen",
  ],
  authors: [{ name: "Prasen", url: "https://prasen.dev" }],
  creator: "Prasen",
  publisher: "Prasen",
  metadataBase: new URL("https://learn.prasen.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learn.prasen.dev",
    siteName: "Next.js Learning by Prasen",
    title: "Next.js Learning | by Prasen",
    description:
      "Master Next.js from zero to production. 17 chapters covering routing, components, data fetching, auth, deployment and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Learning | by Prasen",
    description:
      "Master Next.js from zero to production. 17 chapters, neo-brutalism design, curated YouTube videos.",
    creator: "@prasenx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://learn.prasen.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Next.js Learning by Prasen",
    url: "https://learn.prasen.dev",
    description:
      "A complete guide to mastering Next.js, from basics to production.",
    author: {
      "@type": "Person",
      name: "Prasenjit",
      url: "https://prasen.dev",
      sameAs: [
        "https://github.com/StarKnightt",
        "https://x.com/prasenx",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Prasenjit",
      url: "https://prasen.dev",
    },
    inLanguage: "en",
    isAccessibleForFree: true,
    educationalLevel: ["Beginner", "Intermediate", "Advanced"],
    about: {
      "@type": "SoftwareApplication",
      name: "Next.js",
      applicationCategory: "WebFramework",
    },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "wxk7sassyd");`}
        </Script>
      </body>
    </html>
  );
}
