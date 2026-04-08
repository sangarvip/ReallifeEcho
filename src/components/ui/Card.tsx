import clsx from "clsx";
import * as React from "react";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-3xl bg-white/80 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.45)] ring-1 ring-zinc-200/70 backdrop-blur",
        "dark:bg-zinc-950/55 dark:ring-white/10",
        className,
      )}
      {...props}
    />
  );
}

