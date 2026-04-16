"use client";

import { Plus } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need to move my furniture before you arrive?",
    a: "No — we handle it. Furniture gets moved to the middle of the room and fully wrapped in plastic. Floors get drop-clothed edge-to-edge. When we're done, everything goes back exactly where it was.",
  },
  {
    q: "How many coats of paint do you do?",
    a: "Minimum two finish coats on walls and ceilings. Kitchen cabinets get two coats of primer and three sprayed finish coats — all cured properly between layers. Dark-to-light colour changes may need an extra coat — we'll tell you upfront in the quote.",
  },
  {
    q: "How long does an interior paint job take?",
    a: "Rough ballpark: a single room is usually a day, a whole 3-bedroom home is 3–5 days, a full interior repaint runs closer to a week. Your written quote spells out the exact timeline before we start.",
  },
  {
    q: "Do you stand behind your work?",
    a: "Yes. If something fails because of our workmanship — peeling, bleed-through, missed spot — tell us and we come back and fix it. No hoops, no extra invoice.",
  },
  {
    q: "What paint brands do you use?",
    a: "Benjamin Moore and Sherwin-Williams. All low-VOC, safe for kids and pets. If you've got a specific paint or colour in mind, bring it — we'll work with it.",
  },
  {
    q: "Can I get a quote without an on-site visit?",
    a: "We strongly prefer a walk-through — it's the only way to give you an accurate number and catch anything that'll affect the price. Free, takes about 20 minutes, no pressure to book.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-paint-cream py-24 md:py-32 border-t border-paint-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <ScrollReveal>
              <span className="stencil text-paint-clay">07 — FAQ</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-5xl md:text-6xl leading-[0.92]">
                Straight<br />
                <span className="text-paint-clay">answers.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-paint-ink/75 leading-relaxed">
                The stuff people ask us most. Don&rsquo;t see yours? Pick up the phone —
                we&rsquo;re happy to talk through it.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-paint-ink/15 border-y border-paint-ink/15">
              {FAQS.map((item, i) => (
                <ScrollReveal key={item.q} delay={i * 0.05}>
                  <li>
                    <details className="group py-5 md:py-6">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                        <div className="flex items-baseline gap-4 md:gap-5 min-w-0">
                          <span className="stencil text-paint-clay shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="display-cond text-lg md:text-xl text-paint-ink leading-snug">
                            {item.q}
                          </h3>
                        </div>
                        <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-paint-ink/20 text-paint-ink group-open:bg-paint-clay group-open:text-paint-cream group-open:border-paint-clay group-open:rotate-45 transition-all duration-300">
                          <Plus className="w-4 h-4" />
                        </span>
                      </summary>
                      <div className="mt-4 pl-0 md:pl-12 text-paint-ink/75 text-base md:text-[17px] leading-relaxed max-w-2xl">
                        {item.a}
                      </div>
                    </details>
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
