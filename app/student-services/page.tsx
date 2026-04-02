import type { Metadata } from "next";
import { Briefcase, Compass, HeartHandshake, Sprout } from "lucide-react";
import { FadeIn, SlideIn, Stagger, StaggerItem } from "@/components/motion-reveal";
import { AnimatedButton } from "@/components/animated-button";

export const metadata: Metadata = {
  title: "Student services",
  description:
    "Career guidance, internships, skills development, and counselling at Techna Technical Institute.",
};

const services = [
  {
    icon: Compass,
    title: "Career guidance",
    text: "One-to-one conversations about pathways after Techna—further study, employment, and how your module choices align with your goals.",
  },
  {
    icon: Briefcase,
    title: "Internship opportunities",
    text: "Where available, we connect serious learners with structured exposure to workplaces relevant to their technical stream.",
  },
  {
    icon: Sprout,
    title: "Skill development",
    text: "Workshops and practical intensives that go beyond the syllabus—communication, teamwork, and tools employers expect.",
  },
  {
    icon: HeartHandshake,
    title: "Counselling services",
    text: "A supportive environment for academic stress, personal challenges, and signposting to professional help when needed.",
  },
];

export default function StudentServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Support</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Student services
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Success is not only grades—it is clarity, wellbeing, and real options when you graduate. These services sit
          alongside your modules so you never navigate the journey alone.
        </p>
      </SlideIn>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.08} delayChildren={0.03}>
        {services.map((s) => (
          <StaggerItem key={s.title}>
            <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
              <s.icon className="h-9 w-9 text-primary" />
              <h2 className="font-display mt-4 text-xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn delay={0.12} className="mt-14 text-center">
        <p className="text-sm text-muted-foreground">
          Ask admissions how to access these services for your intake.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <AnimatedButton href="/contact" variant="primary">
            Contact us
          </AnimatedButton>
          <AnimatedButton href="/admissions" variant="outline" showArrow={false}>
            Admissions
          </AnimatedButton>
        </div>
      </FadeIn>
    </div>
  );
}
