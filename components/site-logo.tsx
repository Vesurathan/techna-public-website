"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/smart-tech-01.png";

export function SiteLogo({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <motion.span
        className="flex h-16 shrink-0 items-center"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      >
        <Image
          src={LOGO_SRC}
          alt=""
          width={3401}
          height={2588}
          className="h-16 w-auto max-h-16 max-w-[min(16rem,58vw)] object-contain object-left"
          priority
          sizes="(max-width: 640px) 240px, 260px"
        />
      </motion.span>
      <span className={cn("min-w-0 flex flex-col leading-tight", compact && "hidden sm:flex")}>
        <span className="font-display text-lg font-extrabold tracking-tight text-foreground">Techna</span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Technical Institute
        </span>
      </span>
    </Link>
  );
}
