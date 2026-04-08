import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950">
            <span className="text-sm font-semibold tracking-tight">SS</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {SITE.name}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              One story at a time
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/categories"
            className="hidden rounded-full px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10 sm:inline-flex"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="hidden rounded-full px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10 sm:inline-flex"
          >
            About Us
          </Link>
          <Link
            href="/read"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Start Reading
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

