import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Techna Technical Institute for admissions and enquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
