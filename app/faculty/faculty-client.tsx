"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, MotionCard, SlideIn } from "@/components/motion-reveal";
import { StaffAvatar } from "@/components/staff-avatar";
import { moduleCategoryLabel } from "@/lib/labels";
import type { PublicStaff } from "@/lib/types";

export function FacultyPageClient({ initialStaff }: { initialStaff: PublicStaff[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">People</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Faculty
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Active staff profiles and teaching assignments, maintained in the admin portal.
        </p>
      </SlideIn>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {initialStaff.length === 0 ? (
          <p className="text-muted-foreground">
            No faculty listed yet. Add active staff in the admin portal to populate this page.
          </p>
        ) : (
          initialStaff.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.04}>
              <MotionCard className="h-full">
                <Link
                  href={`/faculty/${s.id}`}
                  className="block h-full rounded-2xl border border-border bg-card p-7 shadow-md transition-colors hover:border-primary/35 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="mb-1 rounded-full bg-gradient-to-b from-primary/12 to-transparent p-1.5 ring-2 ring-primary/25 dark:from-primary/20 dark:ring-primary/35"
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    >
                      <StaffAvatar name={s.fullName} src={s.imageUrl} size="lg" circular />
                    </motion.div>
                    <h2 className="font-display mt-4 text-lg font-bold text-foreground">{s.fullName}</h2>
                    {s.schoolName ? (
                      <p className="mt-1 text-sm text-muted-foreground">{s.schoolName}</p>
                    ) : null}
                    {s.qualifications ? (
                      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{s.qualifications}</p>
                    ) : null}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {s.modules.map((m) => (
                        <span
                          key={m.id}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
                          title={moduleCategoryLabel(m.category)}
                        >
                          {m.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </MotionCard>
            </FadeIn>
          ))
        )}
      </div>
    </div>
  );
}
