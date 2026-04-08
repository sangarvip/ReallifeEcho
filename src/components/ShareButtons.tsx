"use client";

import * as React from "react";
import { Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ShareButtons({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const [copied, setCopied] = React.useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  async function share() {
    const url = window.location.href;
    // Prefer native share on mobile.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nav: any = navigator;
    if (typeof nav?.share === "function") {
      try {
        await nav.share({ title, text, url });
        return;
      } catch {
        // user cancelled or unsupported
      }
    }
    await copyLink();
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="ghost" onClick={share}>
        <Share2 className="h-4 w-4" />
        Share
      </Button>
      <Button type="button" variant="ghost" onClick={copyLink}>
        <Copy className="h-4 w-4" />
        {copied ? "Copied" : "Copy link"}
      </Button>
    </div>
  );
}

