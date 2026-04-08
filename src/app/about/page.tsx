import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about StorySwipe, our mission, and what makes our story format different.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            About Us
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Welcome to {SITE.name}.
          </p>
        </header>

        <section className="mt-8 grid gap-4">
          <Card className="p-6 sm:p-8">
            <div className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                {SITE.name} is a modern storytelling platform where real-life inspired
                stories are shared with deeper meaning. Our goal isn’t only to
                entertain—it’s to make you think.
              </p>
              <p className="mt-4">
                Every story on our platform is written in a structured format that
                includes the experience, analysis, and life lessons. We believe stories
                are powerful tools for reflection, learning, and emotional connection.
              </p>
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Our content focuses on
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              <li>Real-life situations</li>
              <li>Human behavior and psychology</li>
              <li>Relationships, trust, and personal growth</li>
            </ul>
          </Card>
          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              What makes us different
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              We don’t just tell stories—we break them down. Each post includes
              insights and takeaways that help you see situations from more than one
              perspective.
            </p>
          </Card>
          <Card className="p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Our mission
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              To create a space where readers can engage with meaningful content,
              reflect on real-life scenarios, and learn valuable lessons.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              If you have any questions or feedback, feel free to contact us.
            </p>
          </Card>
        </section>
      </div>
    </main>
  );
}

