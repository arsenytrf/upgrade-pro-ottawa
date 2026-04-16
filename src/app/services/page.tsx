import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";

import { company, galleryImages, parallaxImage } from "@/data/company";
import { services } from "@/data/services";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `Services | ${company.name}`,
  description: `Interior, exterior, cabinet, trim, and exterior painting for Ottawa and Gatineau. Call ${company.phone}.`,
};

/* Each service paired with a signature color */
const SERVICE_HUES: Record<string, { hex: string; name: string; code: string; onLight: boolean }> = {
  interior:   { hex: "#1E2E4A", name: "Ottawa Navy",     code: "No. 01", onLight: false },
  exterior:   { hex: "#3F5A3B", name: "Studio Moss",     code: "No. 02", onLight: false },
  cabinets:   { hex: "#E7DFCE", name: "Cloud",           code: "No. 07", onLight: true  },
  trim:       { hex: "#2A2826", name: "Kendall Charcoal",code: "No. 05", onLight: false },
  drywall:    { hex: "#BDB09A", name: "Mushroom",        code: "No. 06", onLight: true  },
  wallpaper:  { hex: "#8B5E34", name: "Heritage Oak",    code: "No. 03", onLight: false },
  decks:      { hex: "#B8533F", name: "Kiln Clay",       code: "No. 04", onLight: false },
  commercial: { hex: "#1F1C17", name: "Ink",             code: "No. 09", onLight: false },
  color:      { hex: "#F5F0E6", name: "Bone",            code: "No. 08", onLight: true  },
};

const SERVICE_HIGHLIGHTS: Record<string, string[]> = {
  interior:   ["Walls, ceilings, feature walls, trim","Furniture moved, floors fully covered","Benjamin Moore · Sherwin-Williams · Sico"],
  exterior:   ["Pressure wash, scrape, caulk, prime — in that order","Siding, stucco, brick, fences, doors","Weather-rated paints for Ottawa winters"],
  cabinets:   ["Doors off, hardware labeled","Full degrease, sand, bond-coat primer, 2 finish coats","Sprayed in a controlled setup — factory-smooth"],
  trim:       ["Baseboards, crown, casings, interior doors","Sprayed or brushed to suit","Dust-controlled, crisp edges"],
  drywall:    ["Nail pops, cracks, dents, ceiling repairs","Proper skim coats — no telegraphing","Wall prepped before we roll"],
  wallpaper:  ["Steam removal, adhesive strip, surface repair","Failed primer coats corrected","Paint-ready walls"],
  decks:      ["Sanding, cleaning, defect repair","Species-appropriate stains and sealers","Rated for freeze-thaw cycles"],
  commercial: ["Offices, retail, rental turnovers, multi-unit","Evening and weekend scheduling","WSIB + liability coverage"],
  color:      ["Free consultation with every quote","Large sample boards, not chips","Lighting checked at multiple times of day"],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paint-bone pt-20 md:pt-28 lg:pt-36 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 label-eyebrow text-paint-ink/50">
            <Link href="/" className="hover:text-paint-ink">Home</Link>
            <span>/</span>
            <span className="text-paint-ink">Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <span className="label-eyebrow text-paint-ink/60">The Catalogue</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-5 editorial-display-upright text-[56px] sm:text-[80px] md:text-[104px] lg:text-[128px] leading-[0.92] text-paint-ink">
                  What we <em className="editorial-display">paint.</em>
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <ScrollReveal delay={0.2}>
                <p className="text-paint-ink/70 text-lg leading-relaxed">
                  Nine services, one crew. Every one gets the prep it actually needs —
                  not the version that fits someone else&rsquo;s margin.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial service spreads */}
      <section className="bg-paint-bone pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="divide-y divide-paint-ink/15 border-y border-paint-ink/15">
            {services.map((service, i) => {
              const isEven = i % 2 === 1;
              const hue = SERVICE_HUES[service.slug] ?? SERVICE_HUES.interior;
              const highlights = SERVICE_HIGHLIGHTS[service.slug] ?? [];
              const number = String(i + 1).padStart(2, "0");
              const imgIndex = i % galleryImages.length;
              return (
                <div key={service.slug} id={service.slug} className="scroll-mt-28 py-16 md:py-24">
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                      {/* Color swatch */}
                      <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : ""}`}>
                        <div
                          className="relative aspect-[5/6] image-frame p-6 md:p-8"
                          style={{ backgroundColor: hue.hex }}
                        >
                          <div className="absolute inset-[12%] image-frame">
                            <img src={galleryImages[imgIndex].src} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                          </div>
                          <div className={`absolute top-6 left-6 ${hue.onLight ? "text-paint-ink" : "text-paint-bone"}`}>
                            <p className="label-eyebrow opacity-70">{hue.code} — {hue.name}</p>
                          </div>
                          <div className={`absolute bottom-6 right-6 serif-numeral italic text-5xl md:text-6xl ${hue.onLight ? "text-paint-ink" : "text-paint-bone"}`}>
                            {number}
                          </div>
                        </div>
                      </div>

                      <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : ""}`}>
                        <span className="label-eyebrow text-paint-ink/55">Service · {number}</span>
                        <h2 className="mt-3 editorial-display-upright text-4xl md:text-5xl lg:text-6xl text-paint-ink leading-[1.04]">
                          {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                          <em className="editorial-display">{service.title.split(" ").slice(-1)}</em>
                        </h2>
                        <p className="mt-6 text-paint-ink/70 text-lg leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                        {highlights.length > 0 && (
                          <ul className="mt-8 space-y-2 border-t border-paint-ink/15 pt-6">
                            {highlights.map((h) => (
                              <li key={h} className="flex items-baseline gap-3 text-paint-ink/75">
                                <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[2px]" style={{ backgroundColor: hue.hex }} />
                                <span className="leading-relaxed">{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-8">
                          <Link href="/contact" className="pill bg-paint-ink text-paint-bone hover:bg-paint-navy">
                            Request a Quote <ArrowUpRight className="w-4 h-4" />
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

      {/* Parallax quote */}
      <section className="relative h-[55vh] bg-paint-navy text-paint-bone flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: `url(${parallaxImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-paint-navy via-paint-navy/60 to-transparent" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 lg:px-14 pb-14">
          <p className="editorial-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] italic max-w-4xl">
            &ldquo;We don&rsquo;t just paint walls.<br /> We prep them properly first.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paint-clay text-paint-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <span className="label-eyebrow text-paint-bone/70">Let&rsquo;s get started</span>
          <h2 className="mt-5 editorial-display-upright text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Let&rsquo;s <em className="editorial-display">paint it right.</em>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="pill bg-paint-bone text-paint-ink hover:bg-paint-ink hover:text-paint-bone">
              Book Estimate <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${company.phoneRaw}`} className="pill border border-paint-bone/40 text-paint-bone hover:bg-paint-bone hover:text-paint-ink">
              <Phone className="w-4 h-4" /> {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
