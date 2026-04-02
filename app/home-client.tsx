"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap, Sparkles, Users } from "lucide-react";
import type { PublicModule, PublicStaff } from "@/lib/types";
import { moduleCategoryLabel } from "@/lib/labels";
import {
  FadeIn,
  FloatingOrb,
  MotionCard,
  ScaleReveal,
  SlideIn,
  Stagger,
  StaggerItem,
  easeSpring,
} from "@/components/motion-reveal";
import { ModuleDetailDialog } from "@/components/module-detail-dialog";
import { StaffAvatar } from "@/components/staff-avatar";
import { AnimatedButton } from "@/components/animated-button";

const HERO_LOGO_SRC = "/smart-tech-01.png";

export function HomePageClient({
  modules,
  staff,
}: {
  modules: PublicModule[];
  staff: PublicStaff[];
}) {
  const previewModules = modules.slice(0, 4);
  const previewStaff = staff.slice(0, 6);
  const [openModule, setOpenModule] = React.useState<PublicModule | null>(null);

  const programStreamLinks = React.useMemo(() => {
    const byName = new Map<string, PublicModule>();
    for (const m of modules) {
      const key = m.name.trim().toLowerCase();
      if (!key || byName.has(key)) continue;
      byName.set(key, m);
    }
    return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }, [modules]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/80">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.42] dark:opacity-[0.2]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_-20%,rgba(2,171,230,0.14),transparent)] dark:bg-[radial-gradient(ellipse_90%_70%_at_0%_-20%,rgba(2,171,230,0.12),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(77,200,245,0.1),transparent)] dark:bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgba(77,200,245,0.12),transparent)]" />
        <FloatingOrb className="right-[-8%] top-[10%] h-[min(420px,50vw)] w-[min(420px,50vw)] bg-brand/55 dark:bg-brand" delay={0} />
        <FloatingOrb className="bottom-[-15%] left-[5%] h-80 w-80 bg-brand-light/48 dark:bg-brand-deep/60" delay={2.5} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-32">
          <div>
            <motion.p
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...easeSpring, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/22 bg-primary/[0.07] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-foreground shadow-sm ring-1 ring-primary/10 dark:border-primary/40 dark:bg-primary/10 dark:ring-0"
            >
              <motion.span
                animate={{ rotate: [0, 12, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </motion.span>
              Working for your success
            </motion.p>

            <div className="mt-8 space-y-3 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-lg font-semibold tracking-tight text-muted-foreground sm:text-xl"
              >
                Techna Technical Institute
              </motion.p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[3.15rem] xl:text-6xl">
                <span className="block text-brand-gradient">The best quality education</span>
                <span className="mt-1 block text-brand-gradient">for technology</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 lg:text-left"
            >
              Empowering students today to shape a brighter tomorrow—success starts here at our institute, where
              knowledge meets opportunity, and every step is guided toward achieving dreams and making a meaningful
              impact on the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <AnimatedButton href="/modules" variant="primary">
                View programmes
              </AnimatedButton>
              <AnimatedButton href="/admissions" variant="outline">
                Admissions
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline" showArrow={false}>
                Get in touch
              </AnimatedButton>
            </motion.div>
          </div>

          <motion.div
            className="relative flex w-full justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeSpring, delay: 0.22 }}
          >
            <Image
              src={HERO_LOGO_SRC}
              alt="Techna Technical Institute"
              width={3401}
              height={2588}
              className="h-auto w-full max-w-[20rem] object-contain sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[min(100%,36rem)] xl:max-w-[min(100%,44rem)]"
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 480px, 640px"
            />
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </section>

      <section className="relative border-b border-primary/10 bg-gradient-to-b from-primary/[0.06] via-muted/50 to-muted/60 py-16 dark:border-border/80 dark:from-transparent dark:via-transparent dark:to-transparent dark:bg-muted/20 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1} delayChildren={0.02}>
            <StaggerItem>
              <MotionCard className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-md sm:p-8">
                <Sparkles className="mx-auto h-8 w-8 text-primary" />
                <p className="font-display mt-4 text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl">4+</p>
                <p className="mt-1 text-sm font-bold text-foreground">Years of excellence</p>
                <p className="mt-2 text-xs text-muted-foreground">Dedicated to quality education and innovation.</p>
              </MotionCard>
            </StaggerItem>
            <StaggerItem>
              <MotionCard className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-md sm:p-8">
                <Users className="mx-auto h-8 w-8 text-primary" />
                <p className="font-display mt-4 text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl">600+</p>
                <p className="mt-1 text-sm font-bold text-foreground">Ambitious students</p>
                <p className="mt-2 text-xs text-muted-foreground">Nurturing talent for the leaders of tomorrow.</p>
              </MotionCard>
            </StaggerItem>
            <StaggerItem>
              <MotionCard className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-md sm:p-8">
                <GraduationCap className="mx-auto h-8 w-8 text-primary" />
                <p className="font-display mt-4 text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl">85+</p>
                <p className="mt-1 text-sm font-bold text-foreground">University entrances</p>
                <p className="mt-2 text-xs text-muted-foreground">Guiding students toward higher study globally.</p>
              </MotionCard>
            </StaggerItem>
            <StaggerItem>
              <MotionCard className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-md sm:p-8">
                <Award className="mx-auto h-8 w-8 text-primary" />
                <p className="font-display mt-4 text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl">12+</p>
                <p className="mt-1 text-sm font-bold text-foreground">Esteemed teachers</p>
                <p className="mt-2 text-xs text-muted-foreground">Experienced educators and industry experts.</p>
              </MotionCard>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="border-b border-border/80 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SlideIn from="left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our programs</p>
            <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Subject areas &amp; streams
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              The tags below are pulled from our live module catalogue—open any pathway for full details and assigned
              faculty, or browse everything on the programmes page.
            </p>
          </SlideIn>
          <FadeIn delay={0.08} className="mt-8 flex flex-wrap gap-2.5">
            {programStreamLinks.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Programme data will appear here when modules are published.{" "}
                <Link href="/modules" className="font-semibold text-primary underline-offset-4 hover:underline">
                  View catalogue
                </Link>
              </p>
            ) : (
              programStreamLinks.map((m) => (
                <Link
                  key={m.id}
                  href={`/modules#module-${m.id}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/35 hover:bg-primary/[0.06]"
                >
                  {m.name}
                </Link>
              ))
            )}
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SlideIn from="left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Catalogue</p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Programme modules
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Live data from our academic system—module names, categories, and assigned faculty update automatically.
              </p>
            </SlideIn>
            <FadeIn delay={0.1}>
              <Link
                href="/modules"
                className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                See all modules
                <motion.span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/5 transition-colors group-hover:bg-primary/10"
                  whileHover={{ x: 4 }}
                  transition={easeSpring}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {previewModules.length === 0 ? (
              <FadeIn>
                <p className="text-sm text-muted-foreground">
                  Modules will appear here once published in the admin portal. Set{" "}
                  <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs">
                    NEXT_PUBLIC_API_URL
                  </code>{" "}
                  to your Laravel API.
                </p>
              </FadeIn>
            ) : (
              previewModules.map((m, i) => (
                <FadeIn key={m.id} delay={i * 0.07}>
                  <MotionCard className="group h-full">
                    <article
                      role="button"
                      tabIndex={0}
                      aria-haspopup="dialog"
                      aria-expanded={openModule?.id === m.id}
                      aria-label={`Open details for ${m.name}`}
                      className="relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-colors duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:shadow-black/25"
                      onClick={() => setOpenModule(m)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenModule(m);
                        }
                      }}
                    >
                      <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                      <p className="relative text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary">
                        {moduleCategoryLabel(m.category)}
                      </p>
                      <h3 className="relative mt-3 font-display text-xl font-bold text-foreground sm:text-2xl">
                        {m.name}
                      </h3>
                      <p className="relative mt-2 text-sm text-muted-foreground">
                        {m.subModulesCount} sub-module{m.subModulesCount === 1 ? "" : "s"}
                      </p>
                      {m.staff.length > 0 ? (
                        <div className="relative mt-5 flex -space-x-2 pt-2">
                          {m.staff.slice(0, 5).map((s, j) => (
                            <motion.div
                              key={s.id}
                              className="relative ring-2 ring-card"
                              title={s.fullName}
                              initial={{ opacity: 0, x: -8 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.15 + j * 0.05, ...easeSpring }}
                            >
                              <StaffAvatar name={s.fullName} src={s.imageUrl} size="sm" />
                            </motion.div>
                          ))}
                        </div>
                      ) : null}
                      <p className="relative mt-5 text-xs font-semibold text-primary">View full details →</p>
                    </article>
                  </MotionCard>
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>

      <ModuleDetailDialog module={openModule} onClose={() => setOpenModule(null)} />

      <section className="border-t border-primary/10 bg-gradient-to-b from-muted/55 via-primary/[0.04] to-background py-20 dark:border-border/80 dark:from-muted/15 dark:via-transparent sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SlideIn from="right">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">People</p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Meet our faculty
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Learn from experienced educators and industry experts guiding our technical programmes in Jaffna.
              </p>
            </SlideIn>
            <FadeIn delay={0.08}>
              <Link
                href="/faculty"
                className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Full directory
                <motion.span whileHover={{ x: 3 }} transition={easeSpring}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewStaff.length === 0 ? (
              <FadeIn>
                <p className="text-sm text-muted-foreground">
                  Faculty will list here when active staff exist in the API.
                </p>
              </FadeIn>
            ) : (
              previewStaff.map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.06}>
                  <MotionCard className="h-full">
                    <Link
                      href={`/faculty/${s.id}`}
                      className="flex h-full gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30 hover:shadow-md"
                    >
                      <motion.div whileHover={{ scale: 1.04 }} transition={easeSpring}>
                        <StaffAvatar name={s.fullName} src={s.imageUrl} size="md" />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-lg font-bold text-foreground">{s.fullName}</p>
                        {s.qualifications ? (
                          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{s.qualifications}</p>
                        ) : null}
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">
                          {s.modules.length} module{s.modules.length === 1 ? "" : "s"}
                        </p>
                      </div>
                    </Link>
                  </MotionCard>
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ScaleReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/[0.1] via-card to-muted/40 px-8 py-16 text-center shadow-sm shadow-brand-md dark:border-primary/30 dark:from-brand/10 dark:via-background dark:to-background dark:shadow-none sm:px-12">
              <motion.div
                className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl dark:bg-brand/10"
                animate={{ opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-brand-light/15 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <h2 className="relative font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Ready to take the next step?
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
                Enrolment, timetables, or the right module for your goals—we are here to help. Start with admissions
                guidance or send a message with your questions.
              </p>
              <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={easeSpring}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl shadow-brand"
                  >
                    Contact the institute
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={easeSpring}>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-8 py-4 text-sm font-bold text-foreground shadow-sm"
                  >
                    How to apply
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>
    </>
  );
}
