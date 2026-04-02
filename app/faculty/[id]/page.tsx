import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { fetchPublicStaffById } from "@/lib/api";
import { moduleCategoryLabel } from "@/lib/labels";
import { FadeIn } from "@/components/motion-reveal";
import { StaffAvatar } from "@/components/staff-avatar";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const staff = await fetchPublicStaffById(id);
  if (!staff) return { title: "Faculty member" };
  return {
    title: staff.fullName,
    description: staff.qualifications ?? `Faculty at Techna Technical Institute — ${staff.fullName}`,
  };
}

export default async function FacultyDetailPage({ params }: Props) {
  const { id } = await params;
  const staff = await fetchPublicStaffById(id);
  if (!staff) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/faculty"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to faculty
      </Link>

      <article className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div className="shrink-0 rounded-full bg-gradient-to-b from-primary/12 to-transparent p-1.5 ring-2 ring-primary/25 dark:from-primary/20 dark:ring-primary/35">
            <StaffAvatar name={staff.fullName} src={staff.imageUrl} size="lg" circular />
          </div>
          <div className="mt-6 sm:ml-8 sm:mt-0">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground">{staff.fullName}</h1>
            {staff.schoolName ? (
              <p className="mt-2 text-muted-foreground">{staff.schoolName}</p>
            ) : null}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Faculty profiles on this site are maintained from our administration system. For class schedules,
              office hours, or module-specific questions, please contact the institute—we will route your enquiry
              appropriately.
            </p>
          </div>
        </div>

        {staff.qualifications ? (
          <div className="mt-8 border-t border-border pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Qualifications &amp; background
            </h2>
            <p className="mt-3 whitespace-pre-wrap text-foreground leading-relaxed">{staff.qualifications}</p>
          </div>
        ) : null}

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Modules taught
          </h2>
          {staff.modules.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No module assignments listed.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {staff.modules.map((m) => (
                <li
                  key={m.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3"
                >
                  <span className="font-semibold text-foreground">{m.name}</span>
                  <span className="text-xs font-medium text-primary">{moduleCategoryLabel(m.category)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>

      <FadeIn className="mt-10 rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center dark:bg-muted/15">
        <p className="text-sm text-muted-foreground">
          Interested in a module this educator teaches?{" "}
          <Link href="/modules" className="font-semibold text-primary underline-offset-4 hover:underline">
            Browse programmes
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            contact admissions
          </Link>
          .
        </p>
      </FadeIn>
    </div>
  );
}
