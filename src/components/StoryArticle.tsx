import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { BookmarkButton } from "@/components/BookmarkButton";
import { ShareButtons } from "@/components/ShareButtons";
import { Card } from "@/components/ui/Card";
import { Story, getRelatedStories } from "@/lib/stories";

export function StoryArticle({ story }: { story: Story }) {
  const related = getRelatedStories(story.slug, 3);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <AdSlot label="Top Banner" />

        <Card className="p-6 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
                {story.category}
              </div>
              <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
                {story.title}
              </h1>
              <p className="mt-4 text-pretty text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {story.intro}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
              <BookmarkButton slug={story.slug} />
            </div>
          </div>

          <div className="mt-6 border-t border-zinc-200/70 pt-6 dark:border-white/10">
            <div className="space-y-8">
              <Section title="Story">{story.story}</Section>
              <AdSlot label="Mid Content" />
              <Section title="Analysis">{story.analysis}</Section>
              <Section title="Lesson / Takeaway">{story.lesson}</Section>
              <Section title="Reader Question">{story.question}</Section>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-zinc-200/70 pt-6 dark:border-white/10 sm:flex-row sm:items-center">
              <ShareButtons title={story.title} text={story.intro} />
              <Link
                href={`/read?slug=${story.slug}`}
                className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
              >
                Open in swipe reader →
              </Link>
            </div>
          </div>
        </Card>

        <AdSlot label="Bottom" />

        <div className="mt-10">
          <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            Related stories
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/stories/${s.slug}`} className="group">
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
      </div>
    </main>
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

