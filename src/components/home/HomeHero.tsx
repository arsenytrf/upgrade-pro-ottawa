"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { company, heroImages } from "@/data/company";
import BookingWizard from "@/components/home/BookingWizard";

const PAINT_COLORS = [
  { name: "Ottawa Navy", hex: "#1E2E4A", code: "No. 01" },
  { name: "Studio Moss", hex: "#3F5A3B", code: "No. 02" },
  { name: "Heritage Oak", hex: "#8B5E34", code: "No. 03" },
  { name: "Kiln Clay",   hex: "#B8533F", code: "No. 04" },
  { name: "Kendall Charcoal", hex: "#2A2826", code: "No. 05" },
  { name: "Mushroom",    hex: "#BDB09A", code: "No. 06" },
];

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setColorIndex((i) => (i + 1) % PAINT_COLORS.length);
    }, 3600);
    return () => clearInterval(id);
  }, []);

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
        tl.fromTo("[data-eyebrow]",   { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 })
          .fromTo("[data-headline] > *", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
          .fromTo("[data-sub]",       { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .fromTo("[data-actions]",   { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
          .fromTo("[data-color-card]",{ opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.8");
      }, el);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  const current = PAINT_COLORS[colorIndex];

  return (
    <section ref={heroRef} className="relative bg-paint-bone">
      {/* ───────────── Top editorial bar ───────────── */}
      <div className="border-b border-paint-ink/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-3 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-w-0">
            <span className="label-eyebrow text-paint-ink/50 hidden sm:inline">Est. Ottawa · Gatineau</span>
            <span className="paint-divider w-16 hidden md:block" />
            <span className="label-eyebrow text-paint-ink/50 truncate">Bilingual · Fully Insured · On Bone</span>
          </div>
          <span className="label-eyebrow text-paint-ink/50 hidden lg:inline">Vol. 01 — The Paint Edition</span>
        </div>
      </div>

      {/* ───────────── Hero grid ───────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">

          {/* Left: editorial copy column */}
          <div className="lg:col-span-7">
            <div data-eyebrow className="flex items-center gap-3 mb-8">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: current.hex }} />
              <span className="label-eyebrow text-paint-ink/70">Feature Color · {current.code} — {current.name}</span>
            </div>

            <h1 data-headline className="editorial-display text-paint-ink">
              <span className="block text-[64px] sm:text-[88px] md:text-[112px] lg:text-[140px] xl:text-[168px]">
                Paint,
              </span>
              <span className="block text-[64px] sm:text-[88px] md:text-[112px] lg:text-[140px] xl:text-[168px] editorial-display-upright -mt-2">
                done <em className="editorial-display">properly.</em>
              </span>
            </h1>

            <p
              data-sub
              className="mt-10 max-w-xl text-paint-ink/70 text-lg md:text-xl leading-[1.55] font-light"
            >
              Upgrade Pro is a small, bilingual painting studio serving Ottawa and
              Gatineau. Interiors, exteriors, and kitchen cabinets — with the kind
              of prep work most painters skip.
            </p>

            <div data-actions className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="pill bg-paint-ink text-paint-bone hover:bg-paint-navy"
              >
                Book a Free Estimate
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${company.phoneRaw}`}
                className="pill border border-paint-ink/20 text-paint-ink hover:border-paint-ink hover:bg-paint-ink hover:text-paint-bone"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>

            {/* Signature line + photo strip */}
            <div className="mt-14 md:mt-20 pt-8 border-t border-paint-ink/15 grid grid-cols-3 gap-3 max-w-xl">
              {[heroImages.topRight, heroImages.bottomRight, heroImages.tall].map((src, i) => (
                <div key={i} className="relative aspect-[3/4] image-frame">
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: rotating color field with framed photo */}
          <div className="lg:col-span-5">
            <div
              data-color-card
              className="relative aspect-[4/5] image-frame transition-colors duration-[1800ms] ease-in-out"
              style={{ backgroundColor: current.hex }}
            >
              {/* Photo breathing through a fraction of the block */}
              <div className="absolute inset-[14%] image-frame">
                <img
                  src={heroImages.tall}
                  alt="Interior paint work — Ottawa"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Bottom-left chip */}
              <div className="absolute bottom-5 left-5 bg-paint-bone/95 backdrop-blur-sm px-4 py-3 rounded-xs">
                <p className="serif-numeral text-2xl text-paint-ink leading-none">{current.code}</p>
                <p className="mt-1.5 label-eyebrow text-paint-ink/70">{current.name}</p>
              </div>

              {/* Top-right index */}
              <div className="absolute top-5 right-5 text-paint-bone/80">
                <span className="label-eyebrow">Swatch</span>
                <span className="block serif-numeral text-3xl italic mt-0.5">{String(colorIndex + 1).padStart(2, "0")}<span className="text-paint-bone/40">/06</span></span>
              </div>
            </div>

            {/* Color dots selector */}
            <div className="mt-5 flex items-center gap-2">
              {PAINT_COLORS.map((c, i) => (
                <button
                  key={c.code}
                  onClick={() => setColorIndex(i)}
                  aria-label={c.name}
                  className="relative h-7 w-7 rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: c.hex }}
                >
                  {i === colorIndex && (
                    <span className="absolute inset-[-3px] rounded-full border border-paint-ink/60" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ───────────── Booking wizard (below fold, editorial frame) ───────────── */}
      <div className="bg-paint-cloud border-y border-paint-ink/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="label-eyebrow text-paint-ink/60">The Booking Desk</span>
              <h2 className="mt-3 editorial-display-upright text-4xl md:text-5xl text-paint-ink">
                Tell us about<br /><em className="editorial-display">your walls.</em>
              </h2>
              <p className="mt-5 text-paint-ink/70 leading-relaxed">
                A quick five-step form. We&rsquo;ll come by, measure, and send a
                written quote with the paint brand, coats, and timeline spelled out.
              </p>
            </div>
            <div className="lg:col-span-8">
              <BookingWizard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
