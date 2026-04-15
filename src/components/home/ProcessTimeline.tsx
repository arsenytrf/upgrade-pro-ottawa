"use client";

import { Phone, ClipboardCheck, Wrench, ThumbsUp, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call & Walk-Through",
    description: "Tell us what you're thinking. We come by, measure up, and listen — no pressure, no pitch.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Written Quote",
    description: "Itemized estimate with brand, finish, coats, and timeline. Same price at the end as the start.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Prep & Paint",
    description: "Furniture moved, floors covered, walls prepped. Then the fun part — clean brush work and crisp lines.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Final Walk-Through",
    description: "We walk every room with you. Touch-ups done on the spot. You only sign off when you're happy.",
  },
];

const tileClip = "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)";

export default function ProcessTimeline() {
  return (
    <section className="relative bg-slate-900 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Top angular cut */}
      <div
        className="absolute top-0 left-0 right-0 h-12 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
        aria-hidden="true"
      />

      {/* Bottom angular cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-white"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        aria-hidden="true"
      />

      {/* Background grid pattern (blueprint feel) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Amber accent shape */}
      <div
        className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-white" aria-hidden="true" />
              <span className="font-display text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-white">
                The Process
              </span>
              <span className="w-10 h-[2px] bg-white" aria-hidden="true" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95] text-white mb-6">
              From Call
              <br />
              <span className="text-white">To Clean-Up.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
              Four steps. No runaround. Same process on every project — whether it&rsquo;s
              one accent wall or a whole-house repaint.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps grid */}
        <div className="relative">
          {/* Dashed connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
          >
            <svg className="w-full h-px overflow-visible" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeDasharray="8 8"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={i * 0.12}>
                  <div className="relative group">
                    {/* Massive ghost number behind */}
                    <span
                      className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[180px] md:text-[200px] font-bold leading-none text-stroke select-none pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', color: 'transparent' }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>

                    <div className="relative flex flex-col items-center text-center pt-8">
                      {/* Icon tile — angular cut corner */}
                      <div className="relative mb-8">
                        <div
                          className="w-[140px] h-[140px] flex items-center justify-center bg-slate-800 border-2 border-white/30 group-hover:border-white group-hover:bg-white transition-all duration-500"
                          style={{ clipPath: tileClip }}
                        >
                          <Icon
                            className="w-12 h-12 text-white group-hover:text-slate-900 transition-colors duration-500"
                            strokeWidth={1.5}
                          />
                        </div>

                        {/* Step number tag — bottom right */}
                        <div
                          className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-white text-slate-900 font-display text-xs font-bold tracking-wider"
                          style={{ clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)" }}
                        >
                          STEP {step.number}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-3 leading-tight">
                        {step.title}
                      </h3>

                      {/* Accent bar */}
                      <span
                        className="block w-12 h-[2px] bg-white mb-4 origin-center scale-x-50 group-hover:scale-x-100 transition-transform duration-500"
                        aria-hidden="true"
                      />

                      {/* Description */}
                      <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed max-w-[260px]">
                        {step.description}
                      </p>

                      {/* Arrow connector to next (mobile + tablet) */}
                      {i < steps.length - 1 && (
                        <div className="lg:hidden mt-10 text-white/40">
                          <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom timeline indicator */}
        <ScrollReveal delay={0.6}>
          <div className="mt-20 md:mt-24 flex items-center justify-center gap-4">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">
              First Call
            </span>
            <span className="flex-1 max-w-xs h-px bg-gradient-to-r from-slate-700 via-white to-slate-700" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">
              Fresh Walls
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
