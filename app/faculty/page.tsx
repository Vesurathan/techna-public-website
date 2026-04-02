import type { Metadata } from "next";
import { fetchPublicStaff } from "@/lib/api";
import { FacultyPageClient } from "./faculty-client";

export const metadata: Metadata = {
  title: "Faculty",
  description: "Meet the educators and specialists at Techna Technical Institute.",
};

export default async function FacultyPage() {
  const staff = await fetchPublicStaff();
  return <FacultyPageClient initialStaff={staff} />;
}
