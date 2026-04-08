import clsx from "clsx";

export function AdSlot({
  label,
  className,
}: {
  label: "Top Banner" | "Mid Content" | "Bottom";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-dashed border-zinc-300/80 bg-zinc-50/60 px-5 py-6 text-center text-xs text-zinc-500",
        "dark:border-white/10 dark:bg-white/5 dark:text-zinc-400",
        className,
      )}
      aria-label={`${label} ad slot`}
      role="note"
    >
      <div className="font-medium tracking-wide">{label} Ad Slot</div>
      <div className="mt-1">Reserved for Google AdSense (non-intrusive).</div>
    </div>
  );
}

