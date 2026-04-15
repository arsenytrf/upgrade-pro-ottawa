import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyPhone from "@/components/layout/StickyPhone";
import BackToTop from "@/components/layout/BackToTop";
import LeadCollector from "@/components/ui/LeadCollector";

export const metadata: Metadata = {
  title: "Upgrade Pro | Interior, Exterior & Cabinet Painters in Ottawa",
  description:
    "Professional painting for Ottawa and Gatineau homes. Interior painting, " +
    "exterior painting, kitchen cabinet refinishing, trim, decks, drywall repair. " +
    "Fully insured, bilingual, and meticulous about prep. Free estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Clash Display + General Sans from Fontshare */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased bg-white text-slate-900 min-h-full flex flex-col noise-overlay">
        {/* Skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-sky-500 focus:text-white focus:px-4 focus:py-2 focus:font-body focus:font-semibold"
        >
          Skip to main content
        </a>

        <LenisProvider>
          <Navbar />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </LenisProvider>

        <StickyPhone />
        <BackToTop />
        <LeadCollector />
      </body>
    </html>
  );
}
