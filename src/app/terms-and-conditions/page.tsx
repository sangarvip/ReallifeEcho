import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "StorySwipe Terms & Conditions: rules for using the site, content usage, intellectual property, and liability limits.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Welcome to {SITE.name}. By accessing and using this website, you
            agree to the following terms.
          </p>
        </header>

        <section className="mt-8 grid gap-4">
          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Use of content
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              All content on this website is provided for informational and
              entertainment purposes only. You may not copy, reproduce, or
              distribute our content without permission.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              User responsibility
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              You agree to use the website lawfully and not engage in activity
              that could harm the site, disrupt access, or negatively impact
              other users.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Intellectual property
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Unless otherwise stated, all content on this website—including
              text and design—belongs to {SITE.name}.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Limitation of liability
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We are not responsible for any losses or damages resulting from
              your use of the website.
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Changes to terms
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We may update these terms at any time without prior notice. Your
              continued use of the site indicates acceptance of any updates.
            </p>
          </Card>
        </section>
      </div>
    </main>
  );
}

