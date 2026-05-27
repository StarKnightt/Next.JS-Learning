import type { MetadataRoute } from "next";
import { chapters } from "@/lib/chapters";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://learn.prasen.dev";

  const chapterRoutes = chapters.map((chapter) => ({
    url: `${baseUrl}/chapters/${chapter.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...chapterRoutes,
  ];
}
