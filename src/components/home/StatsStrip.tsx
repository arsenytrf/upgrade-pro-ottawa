"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { value: "500+", label: "Homes Painted" },
  { value: "100%", label: "Satisfaction" },
  { value: "EN / FR", label: "Bilingual" },
  { value: "FREE", label: "Estimates" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-sky-950 overflow-hidden">
      {/* Geometric accent */}
      <div
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-1 py-7 md:py-9">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">
                  {stat.value}
                </span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
