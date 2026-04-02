"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { StaffAvatar } from "@/components/staff-avatar";
import { easeSpring } from "@/components/motion-reveal";
import { moduleCategoryLabel } from "@/lib/labels";
import type { PublicModule } from "@/lib/types";

type Props = {
  module: PublicModule | null;
  onClose: () => void;
};

export function ModuleDetailDialog({ module, onClose }: Props) {
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!module) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(id);
    };
  }, [module]);

  React.useEffect(() => {
    if (!module) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [module, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {module ? (
        <motion.div
          key={module.id}
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close module details"
            className="absolute inset-0 bg-foreground/35 backdrop-blur-sm dark:bg-black/55"
            onClick={onClose}
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-3 sm:items-center sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="module-dialog-title"
              className="pointer-events-auto flex max-h-[min(90vh,760px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-brand dark:shadow-black/40"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={easeSpring}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border bg-muted/30 px-5 py-4 dark:bg-muted/15">
                <div className="min-w-0 pt-0.5">
                  <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                    {moduleCategoryLabel(module.category)}
                  </span>
                  <h2 id="module-dialog-title" className="font-display mt-3 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    {module.name}
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="shrink-0 rounded-xl border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Programme structure</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    This module includes{" "}
                    <strong>
                      {module.subModulesCount} sub-module{module.subModulesCount === 1 ? "" : "s"}
                    </strong>{" "}
                    in the published structure. How it fits your pathway depends on your qualification rules—admissions
                    can confirm combinations and prerequisites.
                  </p>
                </section>

                <section className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Faculty</h3>
                  {module.staff.length === 0 ? (
                    <p className="mt-2 text-sm text-muted-foreground">No staff assigned to this module yet.</p>
                  ) : (
                    <ul className="mt-3 space-y-4">
                      {module.staff.map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/faculty/${s.id}`}
                            className="flex gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-border hover:bg-muted/40"
                            onClick={onClose}
                          >
                            <StaffAvatar name={s.fullName} src={s.imageUrl} size="md" />
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-foreground">{s.fullName}</p>
                              {s.qualifications ? (
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.qualifications}</p>
                              ) : null}
                              <p className="mt-2 text-xs font-medium text-primary">View profile →</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>

                <p className="mt-8 rounded-xl border border-dashed border-primary/20 bg-primary/[0.04] px-4 py-3 text-xs leading-relaxed text-muted-foreground dark:bg-primary/10">
                  For intake dates, fees, and how this module fits your plan, contact{" "}
                  <Link href="/admissions" className="font-semibold text-primary underline-offset-2 hover:underline" onClick={onClose}>
                    Admissions
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="font-semibold text-primary underline-offset-2 hover:underline" onClick={onClose}>
                    get in touch
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
