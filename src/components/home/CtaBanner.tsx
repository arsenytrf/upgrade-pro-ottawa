"use client";

import { Phone } from "lucide-react";
import { company } from "@/data/company";
import Button from "@/components/shared/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden" aria-label="Call to action">
      <div
        className="relative bg-gradient-to-br from-sky-500 via-sky-500 to-sky-600 py-16 md:py-20 lg:py-24"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        {/* Geometric dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Geometric angular shapes */}
        <div
          className="absolute top-8 left-[10%] w-20 h-20 border-2 border-white/10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-8 right-[15%] w-16 h-16 border-2 border-white/10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white/70 mb-3">
              Ready to Start?
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Let&rsquo;s Repaint That.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-4 md:mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Free on-site estimates across Ottawa and Gatineau. Interior, exterior,
              or cabinets — one crew, bilingual, fully insured.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:mt-10">
              <Button variant="white" size="lg" href="/contact" geometric>
                Get Free Estimate
              </Button>
              <Button variant="white" size="lg" href={`tel:${company.phoneRaw}`} className="!bg-transparent !text-white !shadow-none border-2 border-white hover:!bg-white hover:!text-slate-900">
                <Phone className="w-4 h-4" />
                {company.phone}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[6%] bg-sky-950" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[6%] bg-slate-900" aria-hidden="true" />
    </section>
  );
}
