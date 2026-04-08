"use client";

import * as React from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "reallifeecho.bookmarks.v1";

function loadBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function saveBookmarks(slugs: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // ignore
  }
}

export function BookmarkButton({ slug }: { slug: string }) {
  const [bookmarked, setBookmarked] = React.useState(false);

  React.useEffect(() => {
    const list = loadBookmarks();
    setBookmarked(list.includes(slug));
  }, [slug]);

  return (
    <Button
      type="button"
      variant={bookmarked ? "secondary" : "ghost"}
      onClick={() => {
        const list = loadBookmarks();
        const next = list.includes(slug) ? list.filter((s) => s !== slug) : [slug, ...list];
        saveBookmarks(next);
        setBookmarked(next.includes(slug));
      }}
      aria-pressed={bookmarked}
    >
      <Bookmark className="h-4 w-4" />
      {bookmarked ? "Saved" : "Save"}
    </Button>
  );
}

