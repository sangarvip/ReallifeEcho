import { CATEGORIES, StoryCategory } from "@/lib/stories";

export function categoryToSlug(category: StoryCategory): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug?: string | null): StoryCategory | undefined {
  const normalized = slug?.trim().toLowerCase();
  if (!normalized) return undefined;
  return CATEGORIES.find((c) => categoryToSlug(c) === normalized);
}

