"use client";

import * as React from "react";
import clsx from "clsx";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "h-11 w-full rounded-2xl bg-white px-4 text-sm text-zinc-950 shadow-sm ring-1 ring-zinc-200/80",
        "placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950/10",
        "dark:bg-zinc-950 dark:text-zinc-50 dark:ring-white/10 dark:placeholder:text-zinc-500 dark:focus:ring-white/15",
        className,
      )}
      {...props}
    />
  );
}

