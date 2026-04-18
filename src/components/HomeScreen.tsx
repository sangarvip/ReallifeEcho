"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { CATEGORIES, Story, StoryCategory } from "@/lib/stories";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import clsx from "clsx";

export function HomeScreen({ stories }: { stories: Story[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<StoryCategory | "All">("All");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      if (category !== "All" && s.category !== category) return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.intro.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    });
  }, [stories, query, category]);

  const featured = stories[0];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.10),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(250,250,250,0.10),transparent_55%)]" />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Viral, human stories—built for the swipe.
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Read one story at a time. Save your favorites. Share the moments that
            hit hardest.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/read" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Start Reading
              </Button>
            </Link>
            <Link
              href={`/stories/${encodeURIComponent(featured.slug)}`}
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Read Featured
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Card className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
                  Featured story
                </div>
                <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {featured.title}
                </h2>
                <p className="mt-3 text-pretty text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {featured.intro}
                </p>
              </div>
              <div className="hidden shrink-0 sm:block">
                <div className="rounded-2xl bg-zinc-950 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-zinc-950">
                  {featured.category}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`/read?slug=${featured.slug}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">Open in Reader</Button>
              </Link>
              <Link
                href={`/stories/${encodeURIComponent(featured.slug)}`}
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" className="w-full sm:w-auto">
                  Open Story Page
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Find a story
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search titles, categories, vibes…"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Chip
                active={category === "All"}
                onClick={() => setCategory("All")}
              >
                All
              </Chip>
              {CATEGORIES.map((c) => (
                <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Browse stories
            </h3>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {filtered.length} found
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${encodeURIComponent(s.slug)}`}
                className="group"
              >
                <Card className="h-full p-6 transition hover:-translate-y-0.5 hover:shadow-[0_22px_65px_-38px_rgba(0,0,0,0.55)]">
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {s.category}
                  </div>
                  <div className="mt-2 line-clamp-3 text-pretty text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
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
        </div>
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded-full px-3 py-1.5 text-xs font-medium transition",
        "ring-1 ring-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
        "dark:ring-white/10 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10",
        active &&
          "bg-zinc-950 text-white ring-zinc-950 hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:ring-white dark:hover:bg-zinc-100",
      )}
    >
      {children}
    </button>
  );
}

