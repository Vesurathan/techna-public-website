import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle2, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { FadeIn, ScaleReveal, SlideIn, Stagger, StaggerItem } from "@/components/motion-reveal";
import { AnimatedButton } from "@/components/animated-button";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Techna Technical Institute, Jaffna—excellence in technical education, modern labs, expert faculty, and pathways for every learner.",
};

const institutionPoints = [
  "Modern technology labs and practical facilities",
  "Expert teachers with industry experience",
  "Hands-on training in module practicals (E-TECH, B-TECH)",
  "Comprehensive curriculum aligned to real-world skills",
  "Strong industry connections",
  "100% focus on student success",
];

const values = [
  { title: "Integrity", text: "Honest communication about outcomes and what we can deliver for each learner." },
  { title: "Rigour", text: "Clear standards and assessment—no shortcuts that fail you after graduation." },
  { title: "Partnership", text: "We work with students, families, and employers as allies in building skills." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About our institution</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Excellence in technical education
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Techna Technical Institute is committed to empowering students with exceptional learning experiences,
          innovative teaching methods, and a supportive environment. Our mission is to inspire excellence and foster the
          leaders of tomorrow—right here in Jaffna, with pathways that respect both local context and global standards.
        </p>
      </SlideIn>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-foreground">What defines Techna</h2>
          <ul className="mt-6 space-y-4">
            {institutionPoints.map((text) => (
              <li key={text} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/[0.08] via-card to-card p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h2 className="font-display mt-3 text-2xl font-bold text-foreground">CEO profile</h2>
            <p className="mt-6 font-display text-xl font-extrabold text-foreground">S. Sivashakthikaran</p>
            <p className="mt-1 text-sm font-semibold text-primary">Director &amp; Founder</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Under his direction, Techna has focused on quality technical education, disciplined operations, and
              student-centred growth—building an institute where ambition meets structured support.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm dark:bg-muted/20">
              <p className="font-semibold text-foreground">Techna Technical Institute</p>
              <p className="mt-1 text-muted-foreground">
                3rd Floor, Veerasingam Hall, Jaffna
                <br />
                <a href="tel:+94771703559" className="text-primary hover:underline">
                  +94 77 170 3559
                </a>
                <br />
                <a href="mailto:technatechnicalinstitute@gmail.com" className="break-all text-primary hover:underline">
                  technatechnicalinstitute@gmail.com
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-3">
        <FadeIn delay={0.05}>
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-foreground">Our mission</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Deliver accessible, high-quality technical education that responds to real needs and empowers students
                to succeed—with honest career conversations and measurable progress.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Lightbulb className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-foreground">How we teach</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Modular programmes, practicals in E-TECH and B-TECH streams, and assessment that mirrors workplace
                tasks—supported by digital resources and faculty guidance.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HeartHandshake className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-foreground">Who we serve</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                School leavers, career changers, and professionals who want credible technical skills—with{" "}
                <Link href="/student-services" className="font-semibold text-primary hover:underline">
                  student services
                </Link>{" "}
                that back the whole journey.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <section className="mt-24">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold text-foreground">Values in practice</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            These guide hiring, policy, and how we support learners when challenges arise.
          </p>
        </FadeIn>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-3" stagger={0.07} delayChildren={0.02}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mt-24 rounded-2xl border border-border bg-muted/30 p-8 dark:bg-muted/15 sm:p-10">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4">
            <Building2 className="h-10 w-10 text-primary" />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Visit TECHNA</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                3rd Floor, Veerasingam Hall, Jaffna ·{" "}
                <a href="tel:+94771703549" className="font-semibold text-primary hover:underline">
                  +94 77 170 3549
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <ScaleReveal className="mt-24">
        <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center sm:p-14">
          <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">Plan your next step</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Explore modules, read admissions guidance, or message us—Monday–Sunday, 9:00 a.m.–6:00 p.m.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <AnimatedButton href="/admissions" variant="primary">
              Admissions
            </AnimatedButton>
            <AnimatedButton href="/contact" variant="outline" showArrow={false}>
              Contact
            </AnimatedButton>
          </div>
        </div>
      </ScaleReveal>
    </div>
  );
}
