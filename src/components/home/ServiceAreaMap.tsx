"use client";

import { company, sectionImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServiceAreaMap() {
  return (
    <section className="relative bg-paint-ink text-paint-cream py-24 md:py-32 overflow-hidden" aria-labelledby="area-heading">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${sectionImages.area})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paint-ink via-paint-ink/90 to-paint-ink" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <span className="stencil text-paint-clay">§ 05 — Where We Work</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 id="area-heading" className="mt-4 display-heavy uppercase text-paint-cream text-[48px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.9]">
                Both sides<br /><span className="text-paint-clay">of the river.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-cream/75 leading-relaxed">
                Based in Ottawa, serving the National Capital Region. Don&rsquo;t see
                your neighbourhood? We probably still cover it — give us a ring.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-paint-cream/15">
            {company.cities.map((city, i) => (
              <li
                key={city}
                className={[
                  "border-b border-paint-cream/15 py-6 px-4",
                  (i % 5 !== 0) ? "sm:border-l sm:border-l-paint-cream/15" : "",
                ].join(" ")}
              >
                <span className="stencil text-paint-clay">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 display-cond text-2xl md:text-3xl text-paint-cream">{city}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
