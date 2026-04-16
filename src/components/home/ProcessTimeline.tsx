"use client";

import { sectionImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

const STEPS = [
  { n: "01", title: "Call & Walk-Through", body: "Tell us what you want painted. We come by, measure, take notes. No pressure, no pitch." },
  { n: "02", title: "Written Quote",       body: "Itemized estimate — paint brand, number of coats, timeline. Same price at the end as at the start." },
  { n: "03", title: "Prep & Paint",        body: "Furniture wrapped, floors covered, walls prepped properly. Then clean brushwork and crisp lines." },
  { n: "04", title: "Final Walk-Through",  body: "We walk every room with you. Touch-ups on the spot. You sign off only when it's right." },
];

export default function ProcessTimeline() {
  return (
    <section className="relative bg-paint-ink text-paint-cream py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-top opacity-20" style={{ backgroundImage: `url(${sectionImages.parallax})` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-paint-ink via-paint-ink/95 to-paint-ink" aria-hidden="true" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <div className="lg:col-span-8">
            <ScrollReveal><span className="stencil text-paint-clay">03 — The Method</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 display-heavy uppercase text-paint-cream text-[48px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.9]">
                Same four steps.<br /><span className="text-paint-clay">Every job.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-cream/75 leading-relaxed">Repeatable, explainable, documented in writing before we start.</p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.08}>
              <article className="relative overflow-hidden photo-hover group bg-paint-charcoal">
                <div className="relative aspect-[4/5]">
                  <img src={sectionImages.process[i]} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-paint-ink/85 via-paint-ink/25 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="display-heavy italic text-5xl md:text-6xl text-paint-clay">{s.n}</span>
                  </div>
                  <div className="absolute left-5 right-5 bottom-5 text-paint-cream">
                    <h3 className="display-cond text-2xl md:text-3xl leading-[0.95]">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-paint-cream/80">{s.body}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="tick-tape absolute bottom-0 left-0 right-0 opacity-40" />
    </section>
  );
}
