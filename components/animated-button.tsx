"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeSpring } from "@/components/motion-reveal";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  showArrow?: boolean;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-shadow";

  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-lg shadow-brand-md ring-1 ring-white/15 hover:shadow-xl hover:shadow-brand dark:shadow-brand-md"
      : "border border-border bg-card/90 text-foreground shadow-sm backdrop-blur-sm hover:border-primary/30 hover:bg-card";

  return (
    <motion.div className="inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={easeSpring}>
      <Link href={href} className={cn(base, styles, className)}>
        <span>{children}</span>
        {showArrow ? (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        ) : null}
      </Link>
    </motion.div>
  );
}
