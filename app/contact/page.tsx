"use client";

import * as React from "react";
import { FadeIn, SlideIn } from "@/components/motion-reveal";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const enquiryTypes = [
  { label: "General enquiry", value: "general" },
  { label: "Admissions & applications", value: "admissions" },
  { label: "Fees & payments", value: "fees" },
  { label: "Industry / partnership", value: "partnership" },
];

export default function ContactPage() {
  const [sent, setSent] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <SlideIn from="left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Reach us</p>
        <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Contact us
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Compare programmes, book a visit to Veerasingam Hall, or ask about admissions and fees. We are here
          Monday–Sunday, 9:00 a.m.–6:00 p.m.—call, email, or use the form below.
        </p>
      </SlideIn>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-6">
          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-lg font-bold text-foreground">Campus</h2>
              <div className="mt-4 flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Techna Technical Institute</p>
                  <p className="mt-1">
                    3rd Floor, Veerasingam Hall
                    <br />
                    Jaffna
                    <br />
                    Sri Lanka
                  </p>
                  <p className="mt-3 text-xs">Landmark: Veerasingam Hall in the heart of Jaffna—ask for TECHNA on the 3rd floor.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-lg font-bold text-foreground">Phone &amp; email</h2>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Call us anytime</p>
                    <a href="tel:+94771703549" className="mt-1 block text-primary hover:underline">
                      +94 77 170 3549
                    </a>
                    <p className="mt-3 font-semibold text-foreground">Alternate line</p>
                    <a href="tel:+94771703559" className="mt-1 block text-primary hover:underline">
                      +94 77 170 3559
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:technatechnicalinstitute@gmail.com"
                      className="mt-1 block break-all text-primary hover:underline"
                    >
                      technatechnicalinstitute@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.11}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display flex items-center gap-2 text-lg font-bold text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                Office hours
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex flex-col gap-1 border-b border-border/60 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span>Monday – Sunday</span>
                  <span className="font-medium text-foreground">9:00 a.m. – 6:00 p.m.</span>
                </li>
                <li className="py-2 text-xs">Public holidays may follow a reduced schedule—check with us before visiting.</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-md"
          >
            <h2 className="font-display text-lg font-bold text-foreground">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We aim to respond within two working days for general mail; admissions queries are prioritised during
              intake windows.
            </p>
            {sent ? (
              <p className="mt-8 text-sm font-medium text-primary">
                Thank you. This demo form does not send email yet—connect it to your API, SMTP, or a form provider
                when you deploy.
              </p>
            ) : (
              <>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Topic
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm"
                      defaultValue="general"
                    >
                      {enquiryTypes.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us which programme you are interested in, or how we can help."
                      className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 sm:w-auto sm:px-10"
                >
                  Send message
                </button>
              </>
            )}
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
