"use client";

import { Phone, ArrowRight } from "lucide-react";
import { company, sectionImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CtaBanner() {
  return (
    <section aria-label="Call to action" className="relative bg-paint-ink text-paint-cream overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-top opacity-60" style={{ backgroundImage: `url(${sectionImages.cta})` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-paint-ink via-paint-ink/80 to-paint-ink/40" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal><span className="stencil text-paint-clay">Ready When You Are</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 display-heavy uppercase text-paint-cream text-[48px] sm:text-[68px] md:text-[88px] lg:text-[112px] leading-[0.9]">
                Book your<br /><span className="text-paint-clay">free estimate.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-cream/80 text-lg leading-relaxed mb-8">Free on-site estimates. Fully insured. Written quote within 24 hours.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#estimate" className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust">
                  Book Estimate <ArrowRight className="w-4 h-4" />
                </a>
                <a href={`tel:${company.phoneRaw}`} className="btn-hard border border-paint-cream/40 text-paint-cream hover:bg-paint-cream hover:text-paint-ink">
                  <Phone className="w-4 h-4" /> {company.phone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
