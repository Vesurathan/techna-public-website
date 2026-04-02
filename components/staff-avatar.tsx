"use client";

import { cn } from "@/lib/utils";

export function StaffAvatar({
  name,
  src,
  size = "md",
  circular = false,
  className,
}: {
  name: string;
  src: string | null | undefined;
  size?: "sm" | "md" | "lg";
  /** Full circle crop (e.g. faculty directory); default is rounded square. */
  circular?: boolean;
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const dim = size === "sm" ? 40 : size === "lg" ? 112 : 72;

  const shape = circular ? "rounded-full" : "rounded-2xl";

  if (src) {
    return (
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-muted ring-2 ring-primary/15 dark:ring-primary/25",
          shape,
          className
        )}
        style={{ width: dim, height: dim }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- dynamic API URLs */}
        <img src={src} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center bg-gradient-to-br from-brand-light/90 to-brand-deep text-white ring-2 ring-primary/15 dark:ring-primary/25",
        shape,
        size === "sm" ? "text-xs font-bold" : size === "lg" ? "text-2xl font-extrabold" : "text-lg font-bold",
        className
      )}
      style={{ width: dim, height: dim }}
      aria-hidden
    >
      {initials || "?"}
    </div>
  );
}
