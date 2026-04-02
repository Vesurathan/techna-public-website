import type { Metadata } from "next";
import { fetchPublicModules } from "@/lib/api";
import { ModulesPageClient } from "./modules-client";

export const metadata: Metadata = {
  title: "Programmes & modules",
  description: "Browse technical modules and programmes offered at Techna Technical Institute.",
};

export default async function ModulesPage() {
  const modules = await fetchPublicModules();
  return <ModulesPageClient modules={modules} />;
}
