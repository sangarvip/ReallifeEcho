import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "StorySwipe Privacy Policy: what we collect, how we use it, cookies, and third-party services like Google AdSense.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            At {SITE.name}, we value your privacy. This policy explains how we
            collect, use, and protect information when you use our website.
          </p>
        </header>

        <section className="mt-8 grid gap-4">
          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Information we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Basic usage data (pages visited, time spent)</li>
              <li>Device and browser information</li>
              <li>Cookies used to improve user experience</li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              How we use information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              <li>To improve website performance and reliability</li>
              <li>To understand how readers engage with our content</li>
              <li>To refine the experience and make content easier to discover</li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Cookies
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We use cookies to personalize content, remember preferences, and
              analyze traffic. By using our website, you agree to our use of
              cookies as described here.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Third-party services
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We may use third-party services such as Google AdSense to display
              ads. These providers may use cookies or similar technologies to
              show relevant advertisements and measure performance.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We do not sell, trade, or share personal information with
              unauthorized parties.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Your consent
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              By using our website, you consent to this Privacy Policy.
            </p>
          </Card>
        </section>
      </div>
    </main>
  );
}

