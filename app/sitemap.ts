import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://learshy.github.io/learshy-portfolio/",
      lastModified: new Date("2026-06-06T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
