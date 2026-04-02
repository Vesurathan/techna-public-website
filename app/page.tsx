import { fetchPublicModules, fetchPublicStaff } from "@/lib/api";
import { HomePageClient } from "./home-client";
import { HomeExtraSections } from "./home-extra-sections";

export default async function HomePage() {
  const [modules, staff] = await Promise.all([fetchPublicModules(), fetchPublicStaff()]);
  return (
    <>
      <HomePageClient modules={modules} staff={staff} />
      <HomeExtraSections />
    </>
  );
}
