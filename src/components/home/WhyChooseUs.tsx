"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

const REASONS = [
  { num: "01", title: "Prep is the job.",       body: "Sanding, patching, masking, priming. The unglamorous hours most painters skip — we don't." },
  { num: "02", title: "Written, itemized quotes.",body: "Brand, finish, number of coats, timeline. Same price at the end as at the start." },
  { num: "03", title: "Fully insured.",         body: "Liability + WSIB coverage. You're protected the moment we walk in the door." },
  { num: "04", title: "Spotless site.",         body: "Drop cloths everywhere, furniture wrapped, tools packed away daily. Left cleaner than found." },
  { num: "05", title: "Bilingual — EN / FR.",   body: "Service in whichever language feels natural. Ottawa and Gatineau treated the same." },
  { num: "06", title: "Low-VOC paints.",        body: "Benjamin Moore, Sherwin-Williams, Sico. Low-odour, family- and pet-safe from day one." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-paint-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="label-eyebrow text-paint-ink/60">§ 05 — Why Upgrade Pro</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 editorial-display-upright text-5xl md:text-6xl text-paint-ink leading-[0.95]">
                Six habits <em className="editorial-display">that outlast the paint.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-paint-ink/70 leading-relaxed">
                A few non-negotiables on every job — the kind of things you only notice
                when they&rsquo;re missing.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-paint-ink/15 border-y border-paint-ink/15">
              {REASONS.map((r, i) => (
                <ScrollReveal key={r.num} delay={i * 0.06}>
                  <li className="grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-9 items-baseline">
                    <span className="col-span-2 md:col-span-1 serif-numeral italic text-3xl md:text-4xl text-paint-ink/50">
                      {r.num}
                    </span>
                    <h3 className="col-span-10 md:col-span-4 editorial-display-upright text-2xl md:text-3xl text-paint-ink leading-tight">
                      {r.title}
                    </h3>
                    <p className="col-span-12 md:col-span-7 text-paint-ink/70 leading-relaxed text-base md:text-lg">
                      {r.body}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
