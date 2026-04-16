"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

const STEPS = [
  {
    num: "i.",
    title: "Call & visit",
    body: "Tell us what you're thinking. We come by, measure, and listen. No pressure, no pitch.",
    hue: "#1E2E4A",
  },
  {
    num: "ii.",
    title: "Written quote",
    body: "Itemized: paint brand, finish, number of coats, timeline. Same price at the end as the start.",
    hue: "#3F5A3B",
  },
  {
    num: "iii.",
    title: "Prep & paint",
    body: "Furniture wrapped, floors fully covered, walls prepped properly. Then the brushwork begins.",
    hue: "#8B5E34",
  },
  {
    num: "iv.",
    title: "Walk-through",
    body: "We inspect every wall with you. Touch-ups happen on the spot. You sign off when it's right.",
    hue: "#B8533F",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative bg-paint-ink py-24 md:py-32 lg:py-40 text-paint-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="label-eyebrow text-paint-bone/50">§ 03 — The Method</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 editorial-display-upright text-5xl md:text-6xl lg:text-7xl text-paint-bone leading-[0.95]">
                Four steps, <em className="editorial-display">every single job.</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:pb-3">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-bone/70 leading-relaxed">
                Same method on a hallway as on a whole exterior. Repeatable, explainable,
                documented in writing before we start.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Editorial step list — horizontal rule-separated */}
        <div className="divide-y divide-paint-bone/15 border-y border-paint-bone/15">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 items-start group cursor-default">
                {/* Italic numeral */}
                <div className="col-span-12 md:col-span-2">
                  <span
                    className="serif-numeral italic text-6xl md:text-7xl lg:text-8xl leading-none block"
                    style={{ color: s.hue }}
                  >
                    {s.num}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-4">
                  <h3 className="editorial-display-upright text-3xl md:text-4xl text-paint-bone leading-[1.05]">
                    {s.title.split(" ")[0]} <em className="editorial-display">{s.title.split(" ").slice(1).join(" ")}</em>
                  </h3>
                </div>

                {/* Body */}
                <div className="col-span-12 md:col-span-5 md:col-start-7">
                  <p className="text-paint-bone/75 text-lg leading-relaxed max-w-xl">
                    {s.body}
                  </p>
                </div>

                {/* Color anchor column */}
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <span
                    className="block w-6 h-6 rounded-full transition-transform duration-700 group-hover:scale-125"
                    style={{ backgroundColor: s.hue }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
