import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, ArrowUpRight } from "lucide-react";

import { company, sectionImages, servicePhotos, galleryImages } from "@/data/company";
import { services } from "@/data/services";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `Services | ${company.name}`,
  description: `Interior, exterior, and cabinet painting for Ottawa and Gatineau. Call ${company.phone}.`,
};

const HIGHLIGHTS: Record<string, string[]> = {
  interior:   ["Walls, ceilings, feature walls, trim","Furniture moved, floors covered","Benjamin Moore · Sherwin-Williams · Sico"],
  exterior:   ["Pressure wash, scrape, caulk, prime — in that order","Siding, stucco, brick, fences, doors","Weather-rated paints for Ottawa winters"],
  cabinets:   ["Doors off, hardware labeled","Degrease · sand · bond-coat primer · 2 finish coats","Sprayed in a controlled setup — factory-smooth"],
  trim:       ["Baseboards, crown, casings, interior doors","Sprayed or brushed to suit","Dust-controlled, crisp edges"],
  drywall:    ["Nail pops, cracks, dents, ceiling repairs","Proper skim coats — no telegraphing","Wall prepped before a brush touches it"],
  wallpaper:  ["Steam removal, adhesive strip, repair","Failed primer coats corrected","Paint-ready walls guaranteed"],
  decks:      ["Sanding, cleaning, defect repair","Species-appropriate stains and sealers","Rated for freeze-thaw cycles"],
  commercial: ["Offices, retail, rental turnovers, multi-unit","Evening and weekend scheduling","WSIB + liability coverage"],
  color:      ["Free consultation with every quote","Large sample boards, not tiny chips","Lighting checked at multiple times of day"],
};

export default function ServicesPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative bg-paint-ink text-paint-cream overflow-hidden min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sectionImages.parallax})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/80 to-paint-ink/30" aria-hidden="true" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 w-full pt-36 md:pt-44 pb-20 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 stencil text-paint-cream/60">
            <Link href="/" className="hover:text-paint-cream">Home</Link>
            <span>/</span>
            <span className="text-paint-clay">Services</span>
          </nav>

          <ScrollReveal>
            <span className="stencil text-paint-clay">The Catalogue</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-5 display-heavy uppercase text-paint-cream text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] leading-[0.9]">
              What We<br />
              <span className="text-paint-clay">Paint.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-xl text-paint-cream/75 text-lg leading-relaxed">
              Nine services, one crew. Every one gets the prep it actually needs —
              not the version that fits someone else&rsquo;s margin.
            </p>
          </ScrollReveal>
        </div>
        <div className="tick-tape absolute bottom-0 left-0 right-0 opacity-40" />
      </section>

      {/* ───────── Service spreads ───────── */}
      <section className="bg-paint-cream py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="divide-y divide-paint-ink/15 border-y border-paint-ink/15">
            {services.map((service, i) => {
              const isEven = i % 2 === 1;
              const highlights = HIGHLIGHTS[service.slug] ?? [];
              const number = String(i + 1).padStart(2, "0");
              const photo = servicePhotos[i] ?? servicePhotos[0];

              return (
                <div key={service.slug} id={service.slug} className="scroll-mt-24 py-14 md:py-20">
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      {/* Photo */}
                      <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : ""}`}>
                        <div className="relative aspect-[5/6] overflow-hidden photo-hover group bg-paint-ink">
                          <img src={photo} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-paint-ink/70 via-paint-ink/10 to-transparent" />
                          {/* Top-left number tag */}
                          <div className="absolute top-5 left-5 flex items-center gap-2">
                            <span className="stencil bg-paint-ink/80 backdrop-blur text-paint-cream px-3 py-2">Service · {number}</span>
                          </div>
                          {/* Corner numeral */}
                          <div className="absolute bottom-5 right-5">
                            <span className="display-heavy italic text-6xl md:text-7xl text-paint-clay leading-none">{number}</span>
                          </div>
                        </div>
                      </div>

                      {/* Copy */}
                      <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""}`}>
                        <span className="stencil text-paint-clay">Service · {number}</span>
                        <h2 className="mt-3 display-heavy uppercase text-paint-ink text-4xl md:text-5xl lg:text-6xl leading-[0.92]">
                          {service.title.split(" ").slice(0, -1).join(" ")}<br />
                          <span className="text-paint-clay">{service.title.split(" ").slice(-1)}.</span>
                        </h2>
                        <p className="mt-6 text-paint-ink/75 text-lg leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                        {highlights.length > 0 && (
                          <ul className="mt-7 space-y-2 border-t border-paint-ink/15 pt-6">
                            {highlights.map((h) => (
                              <li key={h} className="flex items-baseline gap-3 text-paint-ink/80">
                                <span className="w-1.5 h-1.5 bg-paint-clay shrink-0 translate-y-[2px]" />
                                <span className="leading-relaxed">{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-8">
                          <Link href="/contact" className="btn-hard bg-paint-ink text-paint-cream hover:bg-paint-clay">
                            Request a Quote <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Parallax quote ───────── */}
      <section className="relative h-[55vh] bg-paint-ink text-paint-cream flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${galleryImages[2].src})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/70 to-paint-ink/20" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 lg:px-14 pb-16">
          <p className="stencil text-paint-clay mb-5">From the shop</p>
          <p className="display-heavy uppercase text-[38px] sm:text-[60px] md:text-[80px] leading-[0.92] max-w-4xl">
            &ldquo;We don&rsquo;t just paint walls.<br />
            <span className="text-paint-clay">We prep them properly first.&rdquo;</span>
          </p>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative bg-paint-ink text-paint-cream overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55"
          style={{ backgroundImage: `url(${sectionImages.cta})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paint-ink via-paint-ink/80 to-paint-ink/40" aria-hidden="true" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="stencil text-paint-clay">Let&rsquo;s Get Started</span>
              <h2 className="mt-5 display-heavy uppercase text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] leading-[0.88]">
                Book your<br />
                <span className="text-paint-clay">free estimate.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-paint-cream/80 text-lg leading-relaxed mb-8">
                Free on-site estimates. Fully insured. Written quote within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust">
                  Book Estimate <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${company.phoneRaw}`} className="btn-hard border border-paint-cream/40 text-paint-cream hover:bg-paint-cream hover:text-paint-ink">
                  <Phone className="w-4 h-4" /> {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
