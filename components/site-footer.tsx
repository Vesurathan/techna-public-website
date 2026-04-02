"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { PublicModule } from "@/lib/types";

const usefulLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/achievements", label: "Achievements" },
  { href: "/modules", label: "Modules" },
  { href: "/gallery", label: "Gallery" },
];

/** When the API returns no modules */
const programsFallback = [
  { href: "/modules", label: "Business Management" },
  { href: "/modules", label: "Computer Programming" },
  { href: "/modules", label: "Data Structures and Algorithms" },
  { href: "/modules", label: "Digital Systems Design" },
  { href: "/modules", label: "Electronics and Circuits" },
  { href: "/modules", label: "Engineering Science Innovation" },
  { href: "/modules", label: "Mathematics Fundamentals" },
  { href: "/modules", label: "Mechanical Systems" },
];

const studentServices = [
  { href: "/student-services", label: "Career guidance" },
  { href: "/student-services", label: "Internship opportunities" },
  { href: "/student-services", label: "Skill development" },
  { href: "/student-services", label: "Counselling services" },
];

const quickLinks = [
  { href: "/admissions", label: "Admissions" },
  { href: "/modules", label: "Course catalog" },
  { href: "/contact", label: "Library (enquire)" },
  { href: "/contact", label: "Events & workshops" },
  { href: "/contact", label: "Alumni network" },
];

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function SiteFooter({ modules = [] }: { modules?: PublicModule[] }) {
  const programLinks =
    modules.length > 0
      ? [...modules]
          .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }))
          .map((m) => ({
            key: `m-${m.id}`,
            href: `/modules#module-${m.id}`,
            label: m.name,
          }))
      : programsFallback.map((p) => ({ key: p.label, href: p.href, label: p.label }));

  return (
    <footer className="border-t border-border bg-muted/50 dark:bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">Visit</h3>
            <p className="mt-4 text-base font-bold tracking-tight text-foreground">TECHNA</p>
            <address className="mt-3 space-y-0.5 text-sm leading-relaxed text-muted-foreground not-italic">
              <p>3rd Floor, Veerasingam Hall</p>
              <p>Jaffna, Sri Lanka</p>
            </address>
            <div className="mt-5 space-y-1">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Phone</p>
              <a href="tel:+94771703549" className="block text-sm text-foreground hover:text-primary hover:underline">
                +94 77 170 3549
              </a>
              <a href="tel:+94771703559" className="block text-sm text-foreground hover:text-primary hover:underline">
                +94 77 170 3559
              </a>
            </div>
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</p>
              <a
                href="mailto:technatechnicalinstitute@gmail.com"
                className="mt-1 block break-all text-sm text-foreground hover:text-primary hover:underline"
              >
                technatechnicalinstitute@gmail.com
              </a>
            </div>
          </div>

          <FooterColumn title="Useful links">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {usefulLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Our programs">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {programLinks.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className="block break-words hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/modules" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
              Full catalogue →
            </Link>
          </FooterColumn>

          <FooterColumn title="Student services">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {studentServices.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Quick links">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p className="font-semibold text-foreground">© {new Date().getFullYear()} Ashura Corps. All rights reserved.</p>
          <p>Techna Technical Institute — excellence in technical education.</p>
        </div>
      </div>
    </footer>
  );
}
