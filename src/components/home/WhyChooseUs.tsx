"use client";

import { sectionImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

const REASONS = [
  { n: "01", title: "Prep is the job.",           body: "Sanding, patching, masking, priming. The hours most painters skip — we don't." },
  { n: "02", title: "Written quotes, itemized.",  body: "Brand, finish, coats, timeline. Same price at the end as the start." },
  { n: "03", title: "Fully insured.",             body: "WSIB + liability. You're covered from the moment we walk in." },
  { n: "04", title: "Spotless worksite.",         body: "Drop cloths everywhere, furniture wrapped, tools packed daily." },
  { n: "05", title: "On-time, every time.",       body: "Start date set in writing. Daily updates. We finish when we say we'll finish." },
  { n: "06", title: "Premium paints only.",       body: "Benjamin Moore, Sherwin-Williams, Sico. Low-VOC, safe for kids and pets." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-paint-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — Vasyl-the-painter portrait photo */}
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] overflow-hidden photo-hover bg-paint-ink">
              <img
                src={sectionImages.whyUs}
                alt="Vasyl on the job in Ottawa"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/20 to-transparent" />

              {/* Photo caption / nameplate */}
              <div className="absolute left-5 right-5 bottom-5 text-paint-cream">
                <span className="stencil text-paint-clay">Foreman</span>
                <p className="mt-1.5 display-cond text-3xl md:text-4xl leading-[0.95]">
                  Vasyl Z.<br />
                  <span className="text-paint-cream/70">Founder · On every job</span>
                </p>
              </div>
              {/* Sticker badge */}
              <div className="absolute top-5 right-5 bg-paint-clay text-paint-cream px-3 py-2 rotate-[-4deg]">
                <span className="stencil">Fully Insured</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — reasons */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="stencil text-paint-clay">04 — Why Upgrade Pro</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9]">
                What you<br />
                <span className="text-paint-clay">actually get.</span>
              </h2>
            </ScrollReveal>

            <ul className="mt-10 divide-y divide-paint-ink/15 border-y border-paint-ink/15">
              {REASONS.map((r, i) => (
                <ScrollReveal key={r.n} delay={i * 0.05}>
                  <li className="grid grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 items-baseline">
                    <span className="col-span-2 md:col-span-1 display-heavy italic text-3xl md:text-4xl text-paint-clay">{r.n}</span>
                    <h3 className="col-span-10 md:col-span-4 display-cond text-2xl md:text-3xl text-paint-ink leading-tight">{r.title}</h3>
                    <p className="col-span-12 md:col-span-7 text-paint-ink/70 leading-relaxed text-base md:text-lg">{r.body}</p>
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
