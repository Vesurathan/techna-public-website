import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppMotionConfig } from "@/components/motion-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooterWrapper } from "@/components/site-footer-wrapper";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Techna Technical Institute",
    template: "%s | Techna Technical Institute",
  },
  description:
    "Techna Technical Institute, Jaffna — the best quality technical education for technology. Modern labs, expert teachers, E-TECH & B-TECH practicals, Veerasingam Hall.",
  keywords: ["Techna", "technical institute", "education", "Sri Lanka", "modules", "training"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${syne.variable} min-h-screen font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AppMotionConfig>
            <SiteHeader />
            <main className="relative min-h-[calc(100vh-4rem)]">{children}</main>
            <SiteFooterWrapper />
          </AppMotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
