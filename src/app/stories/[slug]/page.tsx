import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryArticle } from "@/components/StoryArticle";
import { STORIES, getStoryBySlug } from "@/lib/stories";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const story = getStoryBySlug(params.slug);
  if (!story) return {};

  const metaTitle = story.title;
  const metaDescription = story.intro;
  const url = `/stories/${story.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: SITE.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = getStoryBySlug(params.slug);
  if (!story) return notFound();
  return <StoryArticle story={story} />;
}

