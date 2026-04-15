import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  Home,
  Hammer,
  ChefHat,
  DoorOpen,
  Scissors,
  TreePine,
  Building2,
  Palette,
  PaintBucket,
} from "lucide-react";

import { company, galleryImages, parallaxImage } from "@/data/company";
import { services } from "@/data/services";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `Our Services | ${company.name}`,
  description: `Interior, exterior, cabinet, trim, and exterior painting for Ottawa and Gatineau. Call ${company.phone} for a free estimate.`,
};

const iconMap: Record<string, React.ElementType> = {
  PaintBucket, Home, ChefHat, DoorOpen, Hammer, Scissors, TreePine, Building2, Palette,
};

const serviceImageMap: Record<string, number> = {
  interior: 0,
  exterior: 6,
  cabinets: 2,
  trim: 4,
  drywall: 1,
  wallpaper: 3,
  decks: 8,
  commercial: 5,
  color: 9,
};

const serviceHighlights: Record<string, string[]> = {
  interior: [
    "Walls, ceilings, feature walls, trim",
    "Furniture moved and floors fully covered",
    "Benjamin Moore, Sherwin-Williams, or Sico — your pick",
  ],
  exterior: [
    "Pressure wash, scrape, caulk, prime — in that order",
    "Siding, stucco, brick, trim, doors, fences",
    "Weather-rated paints that survive Ottawa winters",
  ],
  cabinets: [
    "Doors removed, hardware labeled, nothing lost",
    "Full degrease, sand, bond-coat primer, 2 finish coats",
    "Sprayed in a controlled setup — factory-smooth finish",
  ],
  trim: [
    "Baseboards, crown, casings, interior doors",
    "Sprayed or brushed to match the look you want",
    "Dust-controlled, crisp edges every time",
  ],
  drywall: [
    "Nail pops, cracks, dents, ceiling repairs",
    "Proper skim coats — no telegraphing through paint",
    "Wall prepped and paint-ready before we start rolling",
  ],
  wallpaper: [
    "Steam removal, adhesive strip, surface repair",
    "Failed primer coats corrected before repaint",
    "Paint-ready walls so the new finish actually holds",
  ],
  decks: [
    "Sanding, cleaning, defect repair",
    "Species-appropriate stains and sealers",
    "Finishes rated for Canadian freeze-thaw cycles",
  ],
  commercial: [
    "Offices, retail, rental turnovers, multi-unit",
    "Evening and weekend scheduling available",
    "Fully insured — WSIB coverage and liability",
  ],
  color: [
    "Free on-site color consultation with every quote",
    "Large sample boards, not just paint chips",
    "Lighting checks at different times of day",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[60vh] bg-white overflow-hidden flex items-end">
        <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-sky-50/50 opacity-40" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider">
                <Link href="/" className="text-slate-400 hover:text-sky-600 transition-colors duration-300">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-sky-600">Services</span>
              </nav>

              <ScrollReveal>
                <span className="inline-flex items-center gap-2 text-sky-600 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-4">
                  <span className="w-8 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                  What We Do
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display font-black mb-6">
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-stroke-sky leading-[0.95]">WHAT WE</span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[0.95] mt-1">PAINT.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
                  Full-service painting for Ottawa and Gatineau. Interiors, exteriors,
                  cabinets, trim, decks — plus the unglamorous prep that makes paint jobs
                  actually hold up.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="sky" size="lg" href="/contact" geometric>Get Free Quote</Button>
                  <Button variant="outline" size="lg" href={`tel:${company.phoneRaw}`}>
                    <Phone className="w-4 h-4" />Call Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3} direction="right">
              <div className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-[3/4] overflow-hidden shadow-lg">
                    <img src={galleryImages[0].src} alt={galleryImages[0].alt} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden shadow-lg mt-8">
                    <img src={galleryImages[1].src} alt={galleryImages[1].alt} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative bg-sky-950 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: "9", label: "Services" },
              { value: "EN / FR", label: "Bilingual" },
              { value: "FREE", label: "Estimates" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 py-6 md:py-8">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">{stat.value}</span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              const number = String(index + 1).padStart(2, "0");
              const imgIndex = serviceImageMap[service.slug] ?? 0;
              const highlights = serviceHighlights[service.slug] ?? [];
              const Icon = iconMap[service.icon] || PaintBucket;

              return (
                <div key={service.slug} id={service.slug} className="scroll-mt-24">
                  {index > 0 && (
                    <div className="max-w-5xl mx-auto py-8 md:py-12">
                      <div className="h-[3px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    </div>
                  )}

                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      <div className={`relative overflow-hidden group shadow-xl ${isEven ? "lg:order-2" : ""}`}>
                        <div className="relative aspect-[4/3] bg-slate-100">
                          <img
                            src={galleryImages[imgIndex].src}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent" aria-hidden="true" />
                          <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm px-5 py-3">
                            <span className="font-display text-4xl md:text-5xl font-black text-sky-600">{number}</span>
                          </div>
                          <div className="absolute top-4 right-4 w-12 h-12 bg-sky-500 flex items-center justify-center shadow-lg" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className={isEven ? "lg:order-1" : ""}>
                        <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-bold text-sky-600 mb-4">
                          <span className="w-6 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                          Service {number}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-5">
                          {service.title}
                        </h2>
                        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {highlights.length > 0 && (
                          <ul className="space-y-3 mb-8">
                            {highlights.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}

                        <Button href="/contact" variant="outline" size="md">
                          Request a Quote <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-[-10%] bg-cover bg-center" style={{ backgroundImage: `url(${parallaxImage})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-sky-950/65" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <blockquote>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight">
              &ldquo;We don&rsquo;t just paint walls.<br className="hidden sm:block" /> We prep them properly first.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <section className="relative bg-slate-50 py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute top-20 -right-20 w-64 h-64 bg-sky-100/30" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-bold text-sky-600 mb-4">
                  <span className="w-6 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                  Request a Quote
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                  Honest Pricing.<br />No Surprises.
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-6">
                  Every paint job is different, so every quote is custom. We walk the space,
                  measure every wall, and give you a written estimate that spells out the paint
                  brand, number of coats, and timeline. Same price at the end as at the start.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="sky" size="md" href="/contact" geometric>Get Free Quote</Button>
                  <Button variant="ghost" size="md" href={`tel:${company.phoneRaw}`}>
                    <Phone className="w-4 h-4" />{company.phone}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { number: "01", title: "Free Estimates", desc: "On-site quote with paint brand, coats, and timeline in writing.", icon: CheckCircle2 },
                { number: "02", title: "No Hidden Fees", desc: "The price we quote is the price you pay. Changes discussed upfront.", icon: ShieldCheck },
                { number: "03", title: "Satisfaction First", desc: "Walk-through with you at the end. Touch-ups on the spot.", icon: Star },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                  <div className="relative bg-white border border-slate-200 hover-lift p-6 h-full group overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                    <span className="absolute top-3 right-4 font-display text-5xl font-black text-sky-100/80 select-none">{item.number}</span>
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center bg-sky-50 border border-sky-200 mb-4 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                        <item.icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display text-base md:text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" aria-label="Call to action">
        <div className="relative bg-gradient-to-br from-sky-500 via-sky-500 to-sky-600 py-16 md:py-20 lg:py-24" style={{ clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white/70 mb-3">Let&rsquo;s Get Started</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">Let&rsquo;s Paint It Right.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 md:mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                Free estimates. Fully insured. One call to get your repaint scheduled.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:mt-10">
                <Button variant="white" size="lg" href="/contact" geometric>Get Free Quote</Button>
                <Button variant="white" size="lg" href={`tel:${company.phoneRaw}`} className="!bg-transparent !text-white !shadow-none border-2 border-white hover:!bg-white hover:!text-slate-900"><Phone className="w-4 h-4" />{company.phone}</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[8%] bg-white" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-slate-900" aria-hidden="true" />
      </section>
    </>
  );
}
