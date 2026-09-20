import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import MobileStickyCallBar from "@/components/MobileStickyCallBar";
import Analytics from "@/components/Analytics";
import { siteConfig } from "@/config/site.config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1528" },
    { media: "(prefers-color-scheme: dark)", color: "#070C18" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Certified Dryer Vent Cleaning & Fire Safety Network`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "America's direct network of CDET-certified dryer vent cleaning technicians across all 50 states. Same-day dispatch, rapid lint removal, rooftop service, and fire prevention.",
  keywords: [
    "dryer vent cleaning direct",
    "dryer vent cleaner near me",
    "certified dryer exhaust technician",
    "rooftop dryer vent cleaning",
    "dryer fire prevention service",
    "clogged dryer vent same day",
    "air duct and dryer vent cleaning",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "gsc-verification-code",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Certified Dryer Vent Cleaning Nationwide`,
    description:
      "America's direct network of CDET-certified dryer vent specialists. Same-day emergency clog removal, rooftop cleaning, and USFA fire prevention across all 50 states.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Certified Dryer Vent Cleaning Nationwide`,
    description: "Same-day certified dryer vent cleaning, rapid lint removal, and fire prevention across 50 states.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#070c18] text-slate-100 selection:bg-orange-500 selection:text-white">
        <EmergencyBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCallBar />
        <Analytics />
      </body>
    </html>
  );
}
