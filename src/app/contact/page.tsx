import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Contact
        </h1>
        <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          For feedback, partnerships, or legal requests, use the placeholders below
          and replace them with your real contact info before launch.
        </p>

        <div className="mt-8 grid gap-4">
          <Card className="p-6 sm:p-8">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Email
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              contact@reallifeecho.com
            </p>
          </Card>
          <Card className="p-6 sm:p-8">
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Business address
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Replace with your business mailing address.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}

