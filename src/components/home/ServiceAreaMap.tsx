"use client";

import { company } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServiceAreaMap() {
  return (
    <section
      className="bg-paint-cloud py-24 md:py-32 lg:py-40 border-t border-paint-ink/10"
      aria-labelledby="area-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="label-eyebrow text-paint-ink/60">§ 04 — Where we work</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 id="area-heading" className="mt-4 editorial-display-upright text-5xl md:text-6xl lg:text-7xl text-paint-ink leading-[0.95]">
                Ottawa, Gatineau, <em className="editorial-display">and everything in between.</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:pb-3">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-ink/70 leading-relaxed">
                Based in Ottawa, serving the National Capital Region on both sides of the
                river. Don&rsquo;t see your neighbourhood? We likely still cover it — give us a ring.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-paint-ink/15 border-t border-paint-ink/15">
            {company.cities.map((city, i) => (
              <li
                key={city}
                className={[
                  "border-b border-paint-ink/15 py-6 px-4",
                  i % 5 !== 0 ? "sm:border-l sm:border-l-paint-ink/15" : "",
                ].join(" ")}
              >
                <span className="label-eyebrow text-paint-ink/45">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 editorial-display-upright text-2xl md:text-3xl text-paint-ink">
                  {city}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
