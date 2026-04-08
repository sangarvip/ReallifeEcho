import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {SITE.name}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {SITE.tagline}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-and-conditions">Terms &amp; Conditions</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

