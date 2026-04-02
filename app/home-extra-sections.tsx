"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookMarked,
  Building2,
  Clock,
  Compass,
  Headphones,
  Layers,
  ShieldCheck,
  UsersRound,
  Wrench,
} from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { FadeIn, MotionCard, SlideIn, Stagger, StaggerItem, easeSpring } from "@/components/motion-reveal";

const whyItems = [
  {
    icon: Layers,
    title: "Modular pathways",
    body: "Build skills step by step—from foundation units through specialist topics—so you always know what comes next and why it matters.",
  },
  {
    icon: UsersRound,
    title: "Faculty who teach & mentor",
    body: "Learn from educators with real subject depth. Office hours, structured feedback, and small-group support are part of how we work.",
  },
  {
    icon: Wrench,
    title: "Practice, not just theory",
    body: "Labs, projects, and scenario-based tasks mirror workplace expectations so you graduate ready to apply what you know.",
  },
  {
    icon: ShieldCheck,
    title: "Clear standards",
    body: "Published learning outcomes, fair assessment, and transparent fee structures. You deserve to understand the rules of the road up front.",
  },
];

const journeySteps = [
  { step: "01", title: "Explore", text: "Review modules, categories, and faculty profiles on this site or visit us for a campus conversation." },
  { step: "02", title: "Apply", text: "Submit an application with the documents we list on our Admissions page. Our team will guide you through any questions." },
  { step: "03", title: "Enrol", text: "Complete registration, confirm your timetable, and access your learner portal and resources." },
  { step: "04", title: "Grow", text: "Attend classes, complete assessments, earn certifications, and tap into careers guidance as you plan your next move." },
];

const faqItems = [
  {
    q: "Who can study at Techna Technical Institute?",
    a: "We welcome school leavers, career changers, and working professionals who meet the entry notes for each programme. Specific prerequisites vary by module—check the module catalogue or speak to admissions.",
  },
  {
    q: "How are fees structured?",
    a: "Fee schedules depend on your intake and programme. Contact admissions or visit us at TECHNA, 3rd Floor, Veerasingam Hall, Jaffna—we will share current amounts, due dates, and any instalment options when you apply.",
  },
  {
    q: "Do you offer evening or weekend classes?",
    a: "Timetables depend on intake and resource availability. Contact us with your preferred programme and we will share the current schedule options.",
  },
  {
    q: "What support is available outside class?",
    a: "Learners can access academic advising, catch-up sessions where offered, and digital learning materials. We also signpost wellbeing and study-skills resources.",
  },
  {
    q: "Can employers partner with Techna?",
    a: "Yes. We are open to industry visits, guest lectures, and tailored upskilling for teams. Use the contact form and mention “Industry partnership” in your message.",
  },
];

const testimonials = [
  {
    quote:
      "The structure of the programme made it easy to balance work and study. Instructors were approachable and the hands-on sessions were the highlight.",
    name: "Past learner",
    role: "Technical graduate pathway",
  },
  {
    quote:
      "I appreciated knowing exactly what each module cost and what I would learn. The admin team answered my questions before I committed.",
    name: "Recent enrollee",
    role: "Career switcher",
  },
  {
    quote:
      "Faculty pushed us to think like professionals, not just pass exams. Group projects felt relevant to real job tasks.",
    name: "Alumni representative",
    role: "Skills programme",
  },
];

export function HomeExtraSections() {
  return (
    <>
      <section className="border-b border-border/80 bg-gradient-to-b from-background to-muted/30 py-20 dark:to-muted/10 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SlideIn from="left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why Techna</p>
            <h2 className="font-display mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Built for serious learners and real careers
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We combine rigorous technical content with human support—so you are never guessing whether you belong
              or where you are headed.
            </p>
          </SlideIn>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.1} delayChildren={0.04}>
            {whyItems.map((item) => (
              <StaggerItem key={item.title}>
                <MotionCard className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </MotionCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Your journey</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              From first enquiry to graduation
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A straightforward path—whether you are planning months ahead or ready to start this term.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-border bg-card p-6 pt-10 shadow-sm">
                  <span className="font-display absolute left-6 top-4 text-3xl font-black text-primary/25">{s.step}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2} className="mt-10">
            <AnimatedButton href="/admissions" variant="primary">
              Admissions &amp; how to apply
            </AnimatedButton>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border/80 bg-muted/35 py-20 dark:bg-muted/15 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <SlideIn from="left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Campus &amp; learning</p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                A place to focus and collaborate
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Techna is designed as a calm, purposeful learning environment. Classrooms and lab spaces support both
                instructor-led sessions and team work. Digital resources extend what happens on campus so you can
                revise and prepare on your own time.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "Structured timetables with clear attendance expectations",
                  "Access to core readings and supplementary materials online",
                  "Safe, inclusive conduct standards for staff and students",
                  "Regular feedback cycles so you know how you are progressing",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <BookMarked className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </SlideIn>
            <SlideIn from="right">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Building2, t: "Study spaces", d: "Rooms configured for theory, demos, and group tasks." },
                  { icon: Clock, t: "Predictable rhythm", d: "Term dates and key deadlines communicated early." },
                  { icon: Compass, t: "Guidance", d: "Help choosing modules that match your goals." },
                  { icon: Headphones, t: "Communication", d: "Clear channels for academic and admin queries." },
                ].map((box) => (
                  <MotionCard key={box.t}>
                    <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <box.icon className="h-6 w-6 text-primary" />
                      <p className="mt-3 font-semibold text-foreground">{box.t}</p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{box.d}</p>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Voices</p>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              What learners tell us
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Experiences vary by programme and cohort—these themes come up often in feedback and exit conversations.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name + i} delay={i * 0.07}>
                <MotionCard className="h-full">
                  <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <Award className="h-6 w-6 text-primary/80" />
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-6 border-t border-border pt-4">
                      <cite className="not-italic">
                        <span className="font-semibold text-foreground">{t.name}</span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{t.role}</span>
                      </cite>
                    </footer>
                  </blockquote>
                </MotionCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/80 bg-muted/25 py-20 dark:bg-muted/10 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Still unsure? Our admissions and front-desk teams are happy to talk through your situation—no
                obligation.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                Ask us directly
                <motion.span whileHover={{ x: 3 }} transition={easeSpring}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.08}>
              <FaqAccordion items={faqItems} />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
