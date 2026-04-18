import { notFound } from 'next/navigation';
import { StoryArticle } from '@/components/StoryArticle';
import { getStoryBySlug } from '@/lib/stories';

type StoryParams = { slug?: string };

export default async function StoryPage({
  params,
}: {
  params: StoryParams | Promise<StoryParams>;
}) {
  const p = await Promise.resolve(params);
  if (process.env.NODE_ENV !== 'production') console.log('[story-page] slug param:', p?.slug);
  const story = getStoryBySlug(p?.slug);
  if (!story) return notFound();
  return <StoryArticle story={story} />;
}