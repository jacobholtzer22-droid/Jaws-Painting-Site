import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import "./globals.css";

/* Display: Bricolage Grotesque — an expressive, slightly characterful grotesque.
 * Loaded variable (wght axis) so headings can run extra-bold. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap",
});

/* Body: Figtree — a warm, round, highly legible humanist sans. Not Inter. */
const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Default metadata = home page. Each route can override via its own pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  robots: { index: true, follow: true },
  ...pageMetadata("home"),
};

export const viewport: Viewport = {
  themeColor: "#0A1F44",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink font-body text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-chrome focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
