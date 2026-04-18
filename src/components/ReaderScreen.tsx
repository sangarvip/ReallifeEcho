"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Story, getRelatedStories } from "@/lib/stories";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButtons } from "@/components/ShareButtons";
import { AdSlot } from "@/components/AdSlot";
import Link from "next/link";

export function ReaderScreen({
  stories,
  initialSlug,
}: {
  stories: Story[];
  initialSlug?: string;
}) {
  const router = useRouter();

  const initialSlugNormalized = React.useMemo(() => {
    if (!initialSlug) return undefined;
    try {
      return decodeURIComponent(initialSlug).trim().toLowerCase();
    } catch {
      return initialSlug.trim().toLowerCase();
    }
  }, [initialSlug]);

  const initialIndex = React.useMemo(() => {
    if (!initialSlugNormalized) return 0;
    const idx = stories.findIndex((s) => s.slug === initialSlugNormalized);
    return idx >= 0 ? idx : 0;
  }, [stories, initialSlugNormalized]);

  const [index, setIndex] = React.useState(initialIndex);
  const [direction, setDirection] = React.useState<1 | -1>(1);

  React.useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  const story = stories[index];
  const total = stories.length;
  const progress = total > 0 ? (index + 1) / total : 0;

  const go = React.useCallback(
    (nextIndex: number, dir: 1 | -1) => {
      if (nextIndex < 0 || nextIndex >= stories.length) return;
      setDirection(dir);
      setIndex(nextIndex);
      router.replace(`/read?slug=${encodeURIComponent(stories[nextIndex].slug)}`);
    },
    [router, stories],
  );

  const next = React.useCallback(() => go(index + 1, 1), [go, index]);
  const prev = React.useCallback(() => go(index - 1, -1), [go, index]);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    delta: 40,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const related = story ? getRelatedStories(story.slug, 3) : [];

  return (
    <div className="relative">
      <div className="sticky top-16 z-30 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {index + 1}/{total}
            </div>
            <div className="mt-1 h-1.5 w-40 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-zinc-950 transition-[width] duration-300 ease-out dark:bg-white"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="ghost" onClick={prev} disabled={index === 0}>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="ghost"
              onClick={next}
              disabled={index === total - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div
          {...handlers}
          className="relative mx-auto max-w-3xl touch-pan-y select-none"
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={story?.slug ?? "empty"}
              custom={direction}
              initial={{ opacity: 0, x: direction === 1 ? 26 : -26, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction === 1 ? -26 : 26, scale: 0.985 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            >
              {story ? (
                <Card className="p-6 sm:p-10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
                        {story.category}
                      </div>
                      <h1 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
                        {story.title}
                      </h1>
                      <p className="mt-4 text-pretty text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                        {story.intro}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <BookmarkButton slug={story.slug} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-8 border-t border-zinc-200/70 pt-6 dark:border-white/10">
                    <Section title="Story">{story.story}</Section>
                    <AdSlot label="Mid Content" />
                    <Section title="Analysis">{story.analysis}</Section>
                    <Section title="Lesson / Takeaway">{story.lesson}</Section>
                    <Section title="Reader Question">{story.question}</Section>
                  </div>

                  <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-zinc-200/70 pt-6 dark:border-white/10 sm:flex-row sm:items-center">
                    <ShareButtons title={story.title} text={story.intro} />
                    <Link
                      href={`/stories/${encodeURIComponent(story.slug)}`}
                      className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                    >
                      Open SEO story page →
                    </Link>
                  </div>
                </Card>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 sm:block" />
        </div>

        <div className="mx-auto mt-6 max-w-3xl space-y-6">
          <AdSlot label="Top Banner" className="hidden sm:block" />

          <div>
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Related stories
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.map((s) => (
                <Link key={s.slug} href={`/read?slug=${s.slug}`} className="group">
                  <Card className="h-full p-5 transition hover:-translate-y-0.5">
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {s.category}
                    </div>
                    <div className="mt-2 line-clamp-3 text-pretty text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {s.title}
                    </div>
                    <div className="mt-3 line-clamp-2 text-pretty text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                      {s.intro}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <AdSlot label="Bottom" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl sm:hidden">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" onClick={prev} disabled={index === 0}>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={next}
              disabled={index === total - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400">
            Swipe left/right to move through stories.
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-3 whitespace-pre-wrap text-pretty text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

