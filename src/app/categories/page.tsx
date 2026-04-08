import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { CATEGORIES, STORIES } from "@/lib/stories";
import { categoryToSlug } from "@/lib/categorySlug";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse story categories on RealLifeEcho.",
};

export default function CategoriesPage() {
  const counts = new Map<string, number>();
  for (const s of STORIES) counts.set(s.category, (counts.get(s.category) ?? 0) + 1);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Categories
        </h1>
        <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Explore by theme—then read in the swipe-first viewer.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <Link key={c} href={`/categories/${categoryToSlug(c)}`} className="group">
            <Card className="h-full p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {counts.get(c) ?? 0} stories
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {c}
              </div>
              <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Explore →{" "}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

