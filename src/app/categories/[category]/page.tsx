import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { slugToCategory } from "@/lib/categorySlug";
import { STORIES } from "@/lib/stories";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = slugToCategory(params.category);
  if (!category) return {};
  return {
    title: category,
    description: `Read ${category} stories on RealLifeEcho.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = slugToCategory(params.category);
  if (!category) return notFound();

  const stories = STORIES.filter((s) => s.category === category);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
          Category
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {category}
        </h1>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/read?category=${encodeURIComponent(category)}`}
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Start reading {stories.length} →
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <Link
            key={s.slug}
            href={`/stories/${encodeURIComponent(s.slug)}`}
            className="group"
          >
            <Card className="h-full p-6 transition hover:-translate-y-0.5">
              <div className="line-clamp-3 text-pretty text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {s.title}
              </div>
              <div className="mt-3 line-clamp-3 text-pretty text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {s.intro}
              </div>
              <div className="mt-5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Read →
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}

