import type { Metadata } from "next";
import { ReaderScreen } from "@/components/ReaderScreen";
import { STORIES, StoryCategory } from "@/lib/stories";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Read",
  description: `Swipe through stories on ${SITE.name}.`,
};

export default function ReadPage({
  searchParams,
}: {
  searchParams: { slug?: string; category?: string };
}) {
  const category = searchParams.category as StoryCategory | undefined;
  const stories =
    category && STORIES.some((s) => s.category === category)
      ? STORIES.filter((s) => s.category === category)
      : STORIES;

  return <ReaderScreen stories={stories} initialSlug={searchParams.slug} />;
}

