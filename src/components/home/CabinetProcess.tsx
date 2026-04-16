"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { servicePhotos } from "@/data/company";

const STEPS = [
  { n: "01", title: "Remove Doors",           body: "Every door and drawer front comes off. Hardware gets labeled and bagged so nothing goes back in the wrong spot." },
  { n: "02", title: "Degrease",               body: "Full degrease to strip years of cooking residue. Paint won't bond to grease — this step is non-negotiable." },
  { n: "03", title: "Sand & Smooth",          body: "Hand-sanded and inspected for rough spots, dings, and grain raise. Surface has to be perfectly smooth before primer." },
  { n: "04", title: "Dust Removal",           body: "Every particle wiped and tacked off. Dust under primer means texture in the finish — we don't let that happen." },
  { n: "05", title: "Prime — Two Coats",      body: "Two full coats of bonding primer, sprayed for an even film. Each coat cured before the next goes on." },
  { n: "06", title: "Paint — Three Coats",    body: "Three sprayed finish coats of Benjamin Moore or Sherwin-Williams. Spray only — no brush marks, no roller texture." },
  { n: "07", title: "Cure",                   body: "Proper cure time between every coat and after the final layer. Rushing this step is how cabinets chip in month one." },
  { n: "08", title: "Reinstall",              body: "Doors and hardware go back exactly where they came from. Final inspection with you before we call it done." },
];

export default function CabinetProcess() {
  return (
    <section className="relative bg-paint-ink text-paint-cream py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — sticky header + photo */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal>
              <span className="stencil text-paint-clay">Our Specialty</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 display-heavy uppercase text-paint-cream text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.9]">
                Cabinet<br />
                <span className="text-paint-clay">process.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-paint-cream/75 leading-relaxed">
                Eight steps, spray only, zero shortcuts. Two coats of primer and three coats of paint — every layer cured before the next one goes on.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="mt-8 relative aspect-[4/3] overflow-hidden photo-hover bg-paint-charcoal hidden lg:block">
                <img
                  src={servicePhotos[2]}
                  alt="Kitchen cabinet painting process"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paint-ink/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — steps list */}
          <div className="lg:col-span-7">
            <ul className="divide-y divide-paint-cream/15 border-y border-paint-cream/15">
              {STEPS.map((s, i) => (
                <ScrollReveal key={s.n} delay={i * 0.05}>
                  <li className="grid grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 items-baseline">
                    <span className="col-span-2 md:col-span-1 display-heavy italic text-3xl md:text-4xl text-paint-clay">{s.n}</span>
                    <h3 className="col-span-10 md:col-span-4 display-cond text-2xl md:text-3xl text-paint-cream leading-tight">{s.title}</h3>
                    <p className="col-span-12 md:col-span-7 text-paint-cream/70 leading-relaxed text-base md:text-lg">{s.body}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="tick-tape absolute bottom-0 left-0 right-0 opacity-40" />
    </section>
  );
}
