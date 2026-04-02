import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileText, GraduationCap, Mail, Phone } from "lucide-react";
import { FadeIn, SlideIn, Stagger, StaggerItem } from "@/components/motion-reveal";
import { AnimatedButton } from "@/components/animated-button";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to apply to Techna Technical Institute—entry guidance, documents, intake periods, and fees overview.",
};

const documents = [
  "Completed application form (online or in person)",
  "Certified copies of national ID or passport",
  "Academic transcripts or certificates relevant to your chosen pathway",
  "Two recent passport-size photographs (where required by programme)",
  "Any programme-specific prerequisites stated in the module catalogue",
];

const eligibility = [
  "Meet the minimum academic or experience bar for the module(s) you select—details are listed per programme.",
  "Demonstrate English proficiency where the medium of instruction requires it (we will advise per cohort).",
  "Agree to institute policies on attendance, assessment integrity, and respectful conduct.",
  "Pay applicable registration and tuition fees according to the published schedule for your intake.",
];

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Join Techna</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Admissions
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          We keep the process transparent: you should always know what we need from you, what it costs, and what
          happens after you apply. The steps below apply to most pathways; your offer letter may include extra notes
          for specialist programmes.
        </p>
      </SlideIn>

      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08} delayChildren={0.03}>
        {[
          { t: "1. Choose", d: "Pick a module or stack of modules that matches your goals. Explore categories and structure on the Modules page." },
          { t: "2. Check", d: "Confirm you meet prerequisites and can commit to the timetable for your intake." },
          { t: "3. Apply", d: "Submit your form and documents. We acknowledge receipt and may request clarifications." },
          { t: "4. Enrol", d: "If offered a place, complete registration, pay fees as agreed, and start on day one prepared." },
        ].map((s) => (
          <StaggerItem key={s.t}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="font-display text-sm font-black text-primary/80">{s.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-foreground">Documents to prepare</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Bring originals for verification where we ask; certified copies are usually kept on file.
          </p>
          <ul className="mt-6 space-y-3">
            {documents.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="font-display text-2xl font-bold text-foreground">Eligibility &amp; expectations</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fair access matters to us—if you are close to meeting a requirement, ask: we may suggest a preparatory
            route.
          </p>
          <ul className="mt-6 space-y-3">
            {eligibility.map((e) => (
              <li key={e} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <FadeIn delay={0.08} className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 dark:bg-muted/20 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold text-foreground">
              <GraduationCap className="h-7 w-7 text-primary" />
              Fees &amp; funding
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Tuition and schedules are confirmed for your intake when you apply or receive an offer. Your offer
              states the exact amount, payment due dates, and any registration fee. Scholarships or bursaries, when
              advertised, will list separate criteria—we never hide mandatory charges in the small print.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              For current fee information,{" "}
              <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                contact admissions
              </Link>{" "}
              or refer to the materials provided with your application.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-16">
        <h2 className="font-display text-2xl font-bold text-foreground">Intake periods</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Main intakes typically align with the academic calendar (e.g. January and July)—exact dates depend on
          programme capacity and resource scheduling. Waiting lists may open when a cohort is full.{" "}
          <strong className="text-foreground">Contact us</strong> to confirm the next start for your chosen module
          and to reserve a guidance appointment.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <AnimatedButton href="/contact" variant="primary">
            Talk to admissions
          </AnimatedButton>
          <AnimatedButton href="/modules" variant="outline">
            Browse modules
          </AnimatedButton>
        </div>
      </FadeIn>

      <FadeIn delay={0.12} className="mt-14 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 sm:p-8">
        <h3 className="font-display text-lg font-bold text-foreground">International &amp; transfer applicants</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          If you are applying from outside Sri Lanka or wish to credit prior study, please email a short summary of
          your background. We will explain visa-related documentation we can support, recognition of prior learning
          (where policy allows), and any extra evidence we need before we can confirm equivalency.
        </p>
        <p className="mt-4 flex flex-wrap gap-4 text-sm font-medium text-foreground">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            admissions@techna.example
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            Replace with your institute line
          </span>
        </p>
      </FadeIn>
    </div>
  );
}
