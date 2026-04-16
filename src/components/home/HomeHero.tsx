"use client";

import { useRef, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { company, heroImages } from "@/data/company";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: ReturnType<typeof import("gsap").default.context> | undefined;
    async function init() {
      const { default: gsap } = await import("gsap");
      if (!el) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo("[data-hero-stamp]",    { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, 0.15)
          .fromTo("[data-hero-title] > *",{ opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, 0.25)
          .fromTo("[data-hero-sub]",      { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5")
          .fromTo("[data-hero-cta]",      { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
          .fromTo("[data-hero-card]",     { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.8")
          .fromTo("[data-hero-trust]",    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
      }, el);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={heroRef} className="relative bg-paint-cream text-paint-ink overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-24 md:pt-32 lg:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">

          {/* Left — punchy headline */}
          <div className="lg:col-span-7">
            <div data-hero-stamp className="inline-flex items-center gap-3 mb-10 border border-paint-ink/25 px-3 py-2">
              <span className="w-2 h-2 bg-paint-clay rounded-full animate-pulse" />
              <span className="stencil text-paint-ink/70">
                Painters · Ottawa + Gatineau
              </span>
            </div>

            <h1 data-hero-title className="display-heavy uppercase text-paint-ink">
              <span className="block text-[48px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[128px]">Interior.</span>
              <span className="block text-[48px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[128px] text-paint-clay">Exterior.</span>
              <span className="block text-[48px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[128px]">Cabinets.</span>
            </h1>

            <p data-hero-sub className="mt-10 max-w-xl text-paint-ink/70 text-lg md:text-xl leading-[1.55]">
              Real prep. Real paint. Done right the first time by a small,
              hands-on crew serving Ottawa and Gatineau.
            </p>

            <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#estimate" className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust">
                Get Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`tel:${company.phoneRaw}`} className="btn-hard border border-paint-ink/25 text-paint-ink hover:bg-paint-ink hover:text-paint-cream">
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </div>

          {/* Right — vertical job card */}
          <div className="lg:col-span-5">
            <div data-hero-card className="relative aspect-[3/4] overflow-hidden shadow-2xl shadow-paint-ink/15 photo-hover">
              <img src={heroImages.portrait} alt="Recent Ottawa paint job" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/20 to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-paint-cream">
                <span className="stencil bg-paint-ink/70 backdrop-blur px-2.5 py-1.5">Recent Work</span>
                <span className="stencil bg-paint-clay px-2.5 py-1.5">Interior</span>
              </div>
              <div className="absolute left-5 right-5 bottom-5 text-paint-cream">
                <p className="stencil text-paint-cream/70 mb-1.5">Ottawa</p>
                <p className="display-cond text-2xl md:text-3xl leading-tight">
                  Clean lines.<br />
                  <span className="text-paint-clay">Proper prep.</span>
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {heroImages.thumbs.map((src, i) => (
                <div key={i} className="relative aspect-[3/4] overflow-hidden photo-hover">
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div data-hero-trust className="mt-16 md:mt-24 border-t border-paint-ink/15 pt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          {[
            "Fully Insured",
            "Free Written Estimates",
            "Ottawa + Gatineau",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2.5 stencil text-paint-ink/75">
              <span className="w-1.5 h-1.5 bg-paint-clay" />
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="tick-tape" />
    </section>
  );
}
