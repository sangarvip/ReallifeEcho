import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <div className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
        404
      </div>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        This page could not be found.
      </h1>
      <p className="mt-3 max-w-md text-pretty text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        The link may be broken, or the story may have moved. Try returning home or
        opening the reader.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Go home</Button>
        </Link>
        <Link href="/read" className="w-full sm:w-auto">
          <Button variant="secondary" className="w-full sm:w-auto">
            Start reading
          </Button>
        </Link>
      </div>
    </main>
  );
}
