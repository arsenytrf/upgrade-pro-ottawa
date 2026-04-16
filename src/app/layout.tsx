import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";
import StickyPhone from "@/components/layout/StickyPhone";
import BackToTop from "@/components/layout/BackToTop";
import LeadCollector from "@/components/ui/LeadCollector";
import JsonLd from "@/components/seo/JsonLd";
import { siteUrl } from "@/data/company";

const title = "Upgrade Pro | Interior, Exterior & Cabinet Painters in Ottawa";
const description =
  "Professional painting for Ottawa and Gatineau homes. Interior, exterior, " +
  "kitchen cabinet refinishing, accent walls, trim work. Fully insured, " +
  "obsessive about prep. Free estimates.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Upgrade Pro Ottawa",
  },
  description,
  keywords: [
    "Ottawa painter",
    "Gatineau painter",
    "interior painting Ottawa",
    "exterior painting Ottawa",
    "kitchen cabinet painting Ottawa",
    "cabinet refinishing Ottawa",
    "accent wall painting",
    "trim painting Ottawa",
    "house painter Ottawa",
    "residential painting Ottawa",
    "Ottawa painting contractor",
    "Benjamin Moore Ottawa",
    "Sherwin-Williams Ottawa",
    "fully insured painter Ottawa",
    "free painting estimate Ottawa",
  ],
  authors: [{ name: "Upgrade Pro" }],
  creator: "Upgrade Pro",
  publisher: "Upgrade Pro",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Upgrade Pro",
    title,
    description,
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Upgrade Pro — Interior, Exterior & Cabinet Painters in Ottawa",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-home.png"],
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
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Ottawa",
  },
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
        <JsonLd />
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
