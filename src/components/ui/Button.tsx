"use client";

import * as React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15 dark:focus-visible:ring-white/20",
        "disabled:opacity-50 disabled:pointer-events-none",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-5 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        variant === "primary" &&
          "bg-zinc-950 text-white shadow-sm hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100",
        variant === "secondary" &&
          "bg-white text-zinc-950 shadow-sm ring-1 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-50 dark:ring-zinc-800 dark:hover:bg-zinc-800",
        variant === "ghost" &&
          "bg-transparent text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

