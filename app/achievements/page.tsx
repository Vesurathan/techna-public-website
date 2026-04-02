import type { Metadata } from "next";
import { Award, Calendar, GraduationCap, Users } from "lucide-react";
import { FadeIn, SlideIn, Stagger, StaggerItem } from "@/components/motion-reveal";
import { AnimatedButton } from "@/components/animated-button";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Techna Technical Institute—years of excellence, student success, university pathways, and an experienced teaching team in Jaffna.",
};

const highlights = [
  {
    icon: Calendar,
    value: "4+",
    label: "Years of excellence",
    text: "Dedicated to delivering quality education and innovation.",
  },
  {
    icon: Users,
    value: "600+",
    label: "Ambitious students",
    text: "Nurturing talent to create the leaders of tomorrow.",
  },
  {
    icon: GraduationCap,
    value: "85+",
    label: "University entrances",
    text: "Guiding students toward top academic institutions globally.",
  },
  {
    icon: Award,
    value: "12+",
    label: "Esteemed teachers",
    text: "Learn from experienced educators and industry experts.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our impact</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Achievements
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Techna Technical Institute has grown alongside our students—combining practical technical training with
          ambition, discipline, and pathways toward higher study and meaningful careers.
        </p>
      </SlideIn>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08} delayChildren={0.03}>
        {highlights.map((h) => (
          <StaggerItem key={h.label}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <h.icon className="mx-auto h-8 w-8 text-primary" />
              <p className="font-display mt-4 text-3xl font-extrabold tabular-nums text-foreground">{h.value}</p>
              <p className="mt-1 text-sm font-bold text-foreground">{h.label}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn delay={0.12} className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 dark:bg-muted/20 sm:p-10">
        <h2 className="font-display text-xl font-bold text-foreground">Working for your success</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Every cohort adds to our story—whether through examination results, university placements, or the confidence
          students take into the workplace. We celebrate progress at every level and continue to invest in labs,
          faculty development, and industry connections so that tomorrow&apos;s learners benefit even more than
          today&apos;s.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 flex flex-wrap justify-center gap-4">
        <AnimatedButton href="/modules" variant="primary">
          Explore modules
        </AnimatedButton>
        <AnimatedButton href="/contact" variant="outline" showArrow={false}>
          Talk to us
        </AnimatedButton>
      </FadeIn>
    </div>
  );
}
