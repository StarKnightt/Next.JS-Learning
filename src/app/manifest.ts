import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js Learning by Prasen",
    short_name: "Next.js Learning",
    description:
      "Master Next.js from zero to production. 17 chapters covering everything from basics to advanced patterns.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF7",
    theme_color: "#FFE600",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
