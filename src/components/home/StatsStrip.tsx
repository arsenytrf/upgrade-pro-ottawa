"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { value: "500+",    label: "Homes painted" },
  { value: "100%",    label: "Satisfaction" },
  { value: "EN · FR", label: "Bilingual crew" },
  { value: "Free",    label: "Written estimates" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-paint-mushroom/20 border-y border-paint-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-paint-ink/15">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-start gap-2 py-10 md:py-12 px-4 md:px-6 first:pl-0">
                <span className="editorial-display-upright text-4xl md:text-5xl lg:text-6xl text-paint-ink leading-none">
                  {s.value}
                </span>
                <span className="label-eyebrow text-paint-ink/60">{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
