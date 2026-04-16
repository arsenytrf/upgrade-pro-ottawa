"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CtaBanner() {
  return (
    <section
      aria-label="Call to action"
      className="relative bg-paint-clay text-paint-bone overflow-hidden"
    >
      {/* Subtle dot swatch pattern */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-paint-bone) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <span className="label-eyebrow text-paint-bone/70">Ready when you are</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-5 editorial-display-upright text-5xl sm:text-6xl md:text-7xl lg:text-[120px] leading-[0.95] text-paint-bone">
                Let&rsquo;s pick a <em className="editorial-display">colour</em>
                <br />and get to it.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-bone/80 text-lg leading-relaxed mb-8">
                Free on-site estimates across Ottawa and Gatineau. Bilingual,
                fully insured, quote in writing.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/contact" className="pill bg-paint-bone text-paint-ink hover:bg-paint-ink hover:text-paint-bone">
                  Book Estimate <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="pill border border-paint-bone/40 text-paint-bone hover:bg-paint-bone hover:text-paint-ink"
                >
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
