"use client";

import {
  Brush,
  ShieldCheck,
  DollarSign,
  Sparkles,
  Languages,
  Leaf,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

const reasons = [
  {
    icon: Brush,
    title: "Prep That Actually Matters",
    description: "Sanding, patching, caulking, priming. The unglamorous part most painters rush — we don't.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Liability and WSIB coverage. You're protected the moment we walk in the door.",
  },
  {
    icon: DollarSign,
    title: "Honest, Written Quotes",
    description: "Itemized estimates with paint brand, coats, and timeline spelled out. No surprises.",
  },
  {
    icon: Sparkles,
    title: "Clean Finish, Cleaner Site",
    description: "Drop cloths everywhere, furniture wrapped, tools off the floor. We leave it better than we found it.",
  },
  {
    icon: Languages,
    title: "Bilingual — EN & FR",
    description: "Nous parlons français. Ottawa and Gatineau clients handled in whichever language feels right.",
  },
  {
    icon: Leaf,
    title: "Low-VOC, Family-Safe",
    description: "Benjamin Moore, Sherwin-Williams, Sico. Low-odour, durable finishes — safe for kids and pets.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-slate-50 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Geometric background shapes */}
      <div
        className="absolute top-20 -right-32 w-64 h-64 bg-sky-100/40"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-40 h-40 bg-sand-200/30"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Why Us"
            title="The Upgrade Pro Difference"
            description="Anyone can roll paint on a wall. We do the parts that matter — the prep, the cut-ins, the clean-up — so the finish actually lasts."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="relative bg-white border border-slate-200 hover-lift p-6 h-full group overflow-hidden">
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-sand-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-11 h-11 flex items-center justify-center bg-sky-50 border border-sky-200 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
                    >
                      <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-black text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
