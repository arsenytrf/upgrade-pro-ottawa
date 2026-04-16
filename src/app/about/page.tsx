import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, ArrowUpRight } from "lucide-react";

import { company, sectionImages, galleryImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `About | ${company.name}`,
  description: `Fully insured painting for Ottawa and Gatineau. Call ${company.phone}.`,
};

const VALUES = [
  { n: "01", title: "Prep is the job.",        body: "Sanding, patching, masking, priming. The work you don't see is the work that makes the paint last." },
  { n: "02", title: "On schedule, always.",    body: "Start when we say we'll start. Finish when we say we'll finish. Daily updates, no drift." },
  { n: "03", title: "Spotless worksite.",      body: "Drop cloths, plastic, tape, tools packed up each evening. Left cleaner than we found it." },
  { n: "04", title: "Straight talk.",          body: "Honest updates every day. If something's off, we tell you. If a cost changes, we tell you first." },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative bg-paint-ink text-paint-cream overflow-hidden min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryImages[0].src})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/80 to-paint-ink/30" aria-hidden="true" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 w-full pt-36 md:pt-44 pb-20 md:pb-28">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 stencil text-paint-cream/60">
            <Link href="/" className="hover:text-paint-cream">Home</Link>
            <span>/</span>
            <span className="text-paint-clay">About</span>
          </nav>

          <ScrollReveal>
            <span className="stencil text-paint-clay">A Note From The Shop</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-5 display-heavy uppercase text-paint-cream text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] leading-[0.9]">
              Built on<br />
              <span className="text-paint-clay">the prep.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-xl text-paint-cream/75 text-lg leading-relaxed">
              Upgrade Pro is a small painting studio in Ottawa. Vasyl runs every job
              personally, quotes every job in writing, and doesn&rsquo;t close a project
              without a walk-through first.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-hard bg-paint-clay text-paint-cream hover:bg-paint-rust">
                Book an Estimate <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${company.phoneRaw}`} className="btn-hard border border-paint-cream/40 text-paint-cream hover:bg-paint-cream hover:text-paint-ink">
                <Phone className="w-4 h-4" /> {company.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div className="tick-tape absolute bottom-0 left-0 right-0 opacity-40" />
      </section>

      {/* ───────── Story ───────── */}
      <section className="bg-paint-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden photo-hover bg-paint-ink">
                <img src={sectionImages.whyUs} alt="Vasyl on the job in Ottawa" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/20 to-transparent" />
                <div className="absolute top-5 right-5 bg-paint-clay text-paint-cream px-3 py-2 rotate-[-4deg]">
                  <span className="stencil">Fully Insured</span>
                </div>
                <div className="absolute left-5 right-5 bottom-5 text-paint-cream">
                  <span className="stencil text-paint-clay">Foreman</span>
                  <p className="mt-1.5 display-cond text-3xl md:text-4xl leading-[0.95]">
                    Vasyl Z.<br />
                    <span className="text-paint-cream/70">Founder · On every job</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-6" delay={0.15}>
              <span className="stencil text-paint-clay">Our Approach</span>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-4xl md:text-5xl lg:text-6xl leading-[0.92]">
                Local painters,<br />
                <span className="text-paint-clay">proper hours on the prep.</span>
              </h2>
              <div className="mt-8 space-y-5 text-paint-ink/75 text-lg leading-relaxed">
                <p>
                  Vasyl started Upgrade Pro to do painting the way he always thought it
                  should be done — slower on the prep, faster on the clean-up, honest
                  about what each job takes.
                </p>
                <p>
                  Walls, ceilings, trim, doors, kitchen cabinets, exterior siding, fences,
                  decks. One crew covers it all. Benjamin Moore, Sherwin-Williams, and
                  Sico paints. Low-VOC finishes, safe for kids and pets.
                </p>
                <p>
                  Every quote starts with a free on-site visit. You get it in writing
                  with paint brand, number of coats, and timeline spelled out. Same
                  price at the end as at the start.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/contact" className="btn-hard bg-paint-ink text-paint-cream hover:bg-paint-clay">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────── Values ───────── */}
      <section className="relative bg-paint-ink text-paint-cream py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-25"
          style={{ backgroundImage: `url(${galleryImages[5].src})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paint-ink via-paint-ink/90 to-paint-ink" aria-hidden="true" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <ScrollReveal>
            <span className="stencil text-paint-clay">Our Standards</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 display-heavy uppercase text-paint-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] max-w-4xl">
              Four non-negotiables<br />
              <span className="text-paint-clay">on every job.</span>
            </h2>
          </ScrollReveal>

          <ul className="mt-14 divide-y divide-paint-cream/15 border-y border-paint-cream/15">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.n} delay={i * 0.08}>
                <li className="grid grid-cols-12 gap-4 md:gap-6 py-8 md:py-10 items-baseline">
                  <span className="col-span-2 md:col-span-1 display-heavy italic text-3xl md:text-4xl text-paint-clay">{v.n}</span>
                  <h3 className="col-span-10 md:col-span-4 display-cond text-2xl md:text-3xl text-paint-cream leading-tight">{v.title}</h3>
                  <p className="col-span-12 md:col-span-7 text-paint-cream/70 leading-relaxed text-base md:text-lg">{v.body}</p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="relative bg-paint-clay text-paint-cream py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-paint-cream) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="stencil text-paint-cream/80">Ready When You Are</span>
              <h2 className="mt-4 display-heavy uppercase text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] leading-[0.88]">
                Your home.<br />
                <span className="text-paint-ink">Our brushes.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-paint-cream/90 text-lg leading-relaxed mb-8">
                Fully insured. Free on-site estimates. Written quotes within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-hard bg-paint-ink text-paint-cream hover:bg-paint-charcoal">
                  Book Estimate <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${company.phoneRaw}`} className="btn-hard border border-paint-cream/60 text-paint-cream hover:bg-paint-cream hover:text-paint-ink">
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
