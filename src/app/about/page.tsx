import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";

import { company, galleryImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `About | ${company.name}`,
  description: `Fully insured painting for Ottawa and Gatineau. Call ${company.phone}.`,
};

const VALUES = [
  { num: "i.",   title: "Prep is the job.",         body: "Sanding, patching, masking, priming. The work you don't see is the work that makes the paint last." },
  { num: "ii.",  title: "On schedule, always.",     body: "Start when we say we'll start. Finish when we say we'll finish. Daily updates, no drift." },
  { num: "iii.", title: "Spotless site.",           body: "Drop cloths, plastic, tape, tools packed up each evening. Left cleaner than we found it." },
  { num: "iv.",  title: "Straight talk.",           body: "Honest updates every day. If something's off, we tell you. If a cost changes, we tell you first." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-paint-bone pt-20 md:pt-28 lg:pt-36 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 label-eyebrow text-paint-ink/50">
            <Link href="/" className="hover:text-paint-ink">Home</Link>
            <span>/</span>
            <span className="text-paint-ink">About</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <span className="label-eyebrow text-paint-ink/60">A note from the studio</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-5 editorial-display-upright text-[56px] sm:text-[80px] md:text-[104px] lg:text-[128px] leading-[0.92] text-paint-ink">
                  Built on <em className="editorial-display">the prep.</em>
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 lg:pb-4">
              <ScrollReveal delay={0.2}>
                <p className="text-paint-ink/70 text-lg leading-relaxed">
                  Upgrade Pro is a small painting studio in Ottawa. Vasyl runs every job
                  personally, quotes every job in writing, and doesn&rsquo;t close a project
                  without a walk-through first.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="pill bg-paint-ink text-paint-bone hover:bg-paint-navy">
                    Book a Free Estimate <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a href={`tel:${company.phoneRaw}`} className="pill border border-paint-ink/25 text-paint-ink hover:bg-paint-ink hover:text-paint-bone">
                    <Phone className="w-4 h-4" /> {company.phone}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial story */}
      <section className="bg-paint-cloud py-24 md:py-32 border-t border-paint-ink/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] image-frame">
                <img src={galleryImages[5].src} alt="Precision cut-in work" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-7" delay={0.15}>
              <span className="label-eyebrow text-paint-ink/60">§ On craftsmanship</span>
              <h2 className="mt-4 editorial-display-upright text-4xl md:text-5xl lg:text-6xl text-paint-ink leading-[1.05]">
                Local painters, <em className="editorial-display">proper hours on the prep.</em>
              </h2>
              <div className="mt-8 space-y-5 text-paint-ink/75 text-lg leading-relaxed">
                <p>
                  Vasyl started Upgrade Pro to do painting the way he always thought it
                  should be done — slower on the prep, faster on the clean-up, and honest
                  about what each job takes.
                </p>
                <p>
                  Walls, ceilings, trim, doors, kitchen cabinets, exterior siding, fences,
                  decks. One crew covers it. Benjamin Moore, Sherwin-Williams, and Sico
                  paints. Low-VOC finishes, safe for kids and pets.
                </p>
                <p>
                  Every quote starts with a free on-site visit. You get it in writing with
                  paint brand, number of coats, and timeline spelled out. Same price at
                  the end as at the start.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paint-bone py-24 md:py-32 border-t border-paint-ink/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <ScrollReveal>
            <span className="label-eyebrow text-paint-ink/60">§ Our standards</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 editorial-display-upright text-5xl md:text-6xl lg:text-7xl text-paint-ink leading-[0.95] max-w-4xl">
              Four non-negotiables <em className="editorial-display">on every job.</em>
            </h2>
          </ScrollReveal>
          <ul className="mt-14 divide-y divide-paint-ink/15 border-y border-paint-ink/15">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 0.08}>
                <li className="grid grid-cols-12 gap-4 md:gap-6 py-9 md:py-12 items-baseline">
                  <span className="col-span-2 md:col-span-1 serif-numeral italic text-3xl md:text-4xl text-paint-ink/50">{v.num}</span>
                  <h3 className="col-span-10 md:col-span-4 editorial-display-upright text-3xl text-paint-ink leading-tight">{v.title}</h3>
                  <p className="col-span-12 md:col-span-7 text-paint-ink/70 leading-relaxed text-lg">{v.body}</p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paint-moss text-paint-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="label-eyebrow text-paint-bone/60">Ready when you are</span>
              <h2 className="mt-4 editorial-display-upright text-5xl md:text-6xl lg:text-7xl text-paint-bone leading-[0.95]">
                Your home. <em className="editorial-display">Our brushes.</em>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-paint-bone/80 text-lg mb-6">
                Fully insured. Free on-site estimates. Written quotes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="pill bg-paint-bone text-paint-ink hover:bg-paint-ink hover:text-paint-bone">
                  Book Estimate <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${company.phoneRaw}`} className="pill border border-paint-bone/40 text-paint-bone hover:bg-paint-bone hover:text-paint-ink">
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
