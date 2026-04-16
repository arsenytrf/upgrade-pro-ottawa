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
    "Professional painting for Ottawa and Gatineau homes. Interior, exterior, " +
    "kitchen cabinet refinishing, trim, decks, drywall repair. Fully insured, " +
    "bilingual, and obsessive about prep. Free estimates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased min-h-full flex flex-col paper-grain">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-paint-ink focus:text-paint-bone focus:px-4 focus:py-2 focus:font-body focus:font-medium"
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
