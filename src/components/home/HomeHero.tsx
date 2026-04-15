"use client";

import { useRef, useEffect } from "react";
import { Phone, ArrowDown } from "lucide-react";
import { company, heroImages } from "@/data/company";
import Button from "@/components/shared/Button";
import BookingWizard from "@/components/home/BookingWizard";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;

    async function init() {
      const { default: gsap } = await import("gsap");
      if (!el) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo("[data-hero-badge]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
          .fromTo("[data-hero-headline] > *", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.3")
          .fromTo("[data-hero-subtitle]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
          .fromTo("[data-hero-buttons] > *", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
          .fromTo("[data-hero-gallery]", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.5")
          .fromTo("[data-hero-form]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
      }, el);
    }

    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Geometric background shapes */}
      <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />

      {/* Large geometric angular shape in background */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-50/60 opacity-50"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-sand-100/50 opacity-40"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24 pb-12">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div data-hero-badge className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 border border-sky-200 text-sky-700 font-display text-xs uppercase tracking-[0.15em] font-bold">
                <span className="w-2 h-2 bg-sky-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} />
                Insured Painters · Ottawa + Gatineau
              </span>
            </div>

            {/* Headline */}
            <div data-hero-headline className="mb-6">
              <h1 className="font-display font-black">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-stroke-sky leading-[0.95]">
                  PREP.
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-slate-900 leading-[0.95] mt-1">
                  PAINT.
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-sky-500 leading-[0.95] mt-1">
                  PERFECT.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p data-hero-subtitle className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              Interior, exterior, and kitchen cabinet painting for Ottawa and
              Gatineau homes. Meticulous prep, premium paints, and finishes that
              hold up — year after year.
            </p>

            {/* Buttons */}
            <div data-hero-buttons className="flex flex-wrap items-center gap-3 mb-8">
              <Button variant="sky" size="lg" href="#estimate-form" geometric>
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg" href={`tel:${company.phoneRaw}`}>
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:flex items-center gap-2 text-slate-400 text-xs font-display uppercase tracking-wider">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right — Gallery mosaic */}
          <div data-hero-gallery className="relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Tall left */}
              <div className="relative aspect-[3/4] overflow-hidden shadow-xl group">
                <img
                  src={heroImages.tall}
                  alt="Precision interior repaint — feature wall"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent" />
              </div>
              {/* Two stacked right */}
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] overflow-hidden shadow-xl group">
                  <img
                    src={heroImages.topRight}
                    alt="Fresh cabinet repaint in Ottawa kitchen"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden shadow-xl group">
                  <img
                    src={heroImages.bottomRight}
                    alt="Finished interior with clean trim lines"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-sky-500 text-white px-5 py-3 shadow-lg shadow-sky-500/20 z-10">
              <span className="font-display text-sm font-black uppercase tracking-wide">
                Interior · Exterior · Cabinets
              </span>
            </div>
          </div>
        </div>

        {/* Hero Form */}
        <div data-hero-form className="mt-16 lg:mt-20 max-w-3xl mx-auto">
          <BookingWizard />
        </div>
      </div>
    </section>
  );
}
