import { HomeScreen } from "@/components/HomeScreen";
import { STORIES } from "@/lib/stories";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export default function Home() {
  return <HomeScreen stories={STORIES} />;
}

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
  },
};
