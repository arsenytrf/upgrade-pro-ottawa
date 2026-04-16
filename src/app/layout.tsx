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
    "Fully insured, obsessive about prep. Free estimates.",
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
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased min-h-full flex flex-col grain">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-paint-ink focus:text-paint-cream focus:px-4 focus:py-2"
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
