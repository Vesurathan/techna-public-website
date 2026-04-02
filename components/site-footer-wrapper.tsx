import { fetchPublicModules } from "@/lib/api";
import { SiteFooter } from "@/components/site-footer";

export async function SiteFooterWrapper() {
  const modules = await fetchPublicModules();
  return <SiteFooter modules={modules} />;
}
