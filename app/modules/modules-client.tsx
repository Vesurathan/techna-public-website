"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FadeIn, MotionCard, SlideIn } from "@/components/motion-reveal";
import { ModuleDetailDialog } from "@/components/module-detail-dialog";
import { StaffAvatar } from "@/components/staff-avatar";
import { moduleCategoryLabel } from "@/lib/labels";
import type { PublicModule } from "@/lib/types";

export function ModulesPageClient({ modules }: { modules: PublicModule[] }) {
  const [openModule, setOpenModule] = React.useState<PublicModule | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Catalogue</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Programmes &amp; modules
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Each card reflects live data from the institute administration system, including assigned faculty. Categories
          such as main, compulsory, and basket help you understand how a qualification is structured—combine modules
          according to your pathway and the rules of your programme.
        </p>
      </SlideIn>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {modules.length === 0 ? (
          <FadeIn>
            <p className="text-muted-foreground">
              No modules are available yet, or the API could not be reached. Check{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm">NEXT_PUBLIC_API_URL</code> and that
              Laravel is running.
            </p>
          </FadeIn>
        ) : (
          modules.map((m, i) => (
            <FadeIn key={m.id} delay={i * 0.05}>
              <MotionCard className="h-full">
                <article
                  id={`module-${m.id}`}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-expanded={openModule?.id === m.id}
                  aria-label={`Open details for ${m.name}`}
                  className="group relative flex h-full cursor-pointer scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-md transition-shadow hover:shadow-xl hover:shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:shadow-black/20"
                  onClick={() => setOpenModule(m)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenModule(m);
                    }
                  }}
                >
                  <motion.div
                    className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-primary/[0.06] transition-transform duration-500 group-hover:scale-125"
                    initial={false}
                  />
                <div className="relative z-[1] flex flex-wrap items-start gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {moduleCategoryLabel(m.category)}
                  </span>
                </div>
                <h2 className="relative z-[1] mt-4 font-display text-2xl font-bold text-foreground">{m.name}</h2>
                <p className="relative z-[1] mt-2 text-sm text-muted-foreground">
                  Includes {m.subModulesCount} sub-module{m.subModulesCount === 1 ? "" : "s"} in this
                  programme structure.
                </p>
                <div className="relative z-[1] mt-6 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Faculty on this module
                  </p>
                  {m.staff.length === 0 ? (
                    <p className="mt-2 text-sm text-muted-foreground">No staff assigned yet.</p>
                  ) : (
                    <ul className="mt-3 space-y-3">
                      {m.staff.map((s) => (
                        <li key={s.id} className="flex items-start gap-3">
                          <StaffAvatar name={s.fullName} src={s.imageUrl} size="sm" />
                          <div>
                            <p className="text-sm font-semibold text-foreground">{s.fullName}</p>
                            {s.qualifications ? (
                              <p className="text-xs text-muted-foreground line-clamp-2">{s.qualifications}</p>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="relative z-[1] mt-5 text-xs font-semibold text-primary">View full details →</p>
              </article>
              </MotionCard>
            </FadeIn>
          ))
        )}
      </div>

      <ModuleDetailDialog module={openModule} onClose={() => setOpenModule(null)} />
    </div>
  );
}
