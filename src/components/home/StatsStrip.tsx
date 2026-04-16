"use client";

import { sectionImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { n: "500+",    l: "Homes Painted",      sub: "Across Ottawa and Gatineau" },
  { n: "EN & FR", l: "Bilingual Service",  sub: "English or French — whichever works" },
  { n: "24 hrs",  l: "Quote Turnaround",   sub: "Written estimate within a day of our visit" },
  { n: "Free",    l: "Written Quotes",     sub: "Itemized: brand, coats, timeline" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-paint-ink text-paint-cream overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${sectionImages.stats})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paint-ink via-paint-ink/85 to-paint-ink" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.l} delay={i * 0.08}>
              <div className="flex flex-col gap-2 border-l-2 border-paint-clay pl-5">
                <span className="display-heavy text-paint-cream text-5xl md:text-6xl lg:text-7xl leading-none">
                  {s.n}
                </span>
                <span className="stencil text-paint-cream/85">{s.l}</span>
                <span className="text-sm text-paint-cream/55 leading-relaxed max-w-[26ch]">{s.sub}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
