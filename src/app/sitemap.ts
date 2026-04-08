import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CATEGORIES, STORIES } from "@/lib/stories";
import { categoryToSlug } from "@/lib/categorySlug";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/read",
    "/categories",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const storyRoutes = STORIES.map((s) => ({
    url: `${base}/stories/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${base}/categories/${categoryToSlug(c)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...storyRoutes, ...categoryRoutes];
}

