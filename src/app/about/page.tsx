import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Brush,
  Sparkles,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

import { company, galleryImages } from "@/data/company";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: `About | ${company.name}`,
  description: `Professional painting for Ottawa and Gatineau homes. Bilingual crew, fully insured, meticulous prep. Call ${company.phone}.`,
};

const values = [
  { icon: Brush, title: "Prep Is The Job", description: "Sanding, patching, masking, priming. The work you don\u2019t see is the work that makes the paint last." },
  { icon: Clock, title: "On Schedule", description: "We start when we say we\u2019ll start. We finish when we say we\u2019ll finish. Daily updates, no drift." },
  { icon: Sparkles, title: "Spotless Site", description: "Drop cloths, plastic, tape, tools packed up every day. We leave it cleaner than we found it." },
  { icon: MessageSquare, title: "Straight Talk", description: "Bilingual, honest answers. If something\u2019s off, we tell you. If it\u2019ll cost more, we tell you first." },
];

const milestones = [
  { value: "500+", label: "Homes Painted" },
  { value: "100%", label: "Satisfaction" },
  { value: "EN / FR", label: "Bilingual" },
  { value: "FREE", label: "Estimates" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] bg-white overflow-hidden flex items-end">
        <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-sand-100/40 opacity-50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider">
                <Link href="/" className="text-slate-400 hover:text-sky-600 transition-colors duration-300">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-sky-600">About</span>
              </nav>

              <ScrollReveal>
                <span className="inline-flex items-center gap-2 text-sky-600 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-4">
                  <span className="w-8 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                  About Us
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display font-black mb-6">
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-stroke-sky leading-[0.95]">BUILT ON</span>
                  <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[0.95] mt-1">THE PREP.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
                  Upgrade Pro is a locally-run painting company serving Ottawa and Gatineau.
                  Bilingual, fully insured, and obsessive about the prep work most painters
                  skip.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="sky" size="lg" href="/contact" geometric>Get a Quote</Button>
                  <Button variant="outline" size="lg" href={`tel:${company.phoneRaw}`}>
                    <Phone className="w-4 h-4" />Call Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3} direction="right">
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                  <img src={galleryImages[3].src} alt="Clean interior paint finish" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-sky-500 text-white px-5 py-3 shadow-lg">
                  <span className="font-display text-sm font-black uppercase tracking-wide">Ottawa · Gatineau</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden group shadow-xl">
                <img src={galleryImages[5].src} alt="Precision cut-in work" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/30 via-transparent to-transparent opacity-60" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg">
                  <span className="font-display text-sm font-black text-sky-600 uppercase tracking-wider">Clean Lines</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-bold text-sky-600 mb-4">
                  <span className="w-6 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                  Our Approach
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                  Local Painters.<br />Real Craftsmen.
                </h2>
                <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed">
                  <p>
                    Vasyl started Upgrade Pro to do painting the way he always thought it
                    should be done — slower on the prep, faster on the clean-up, and honest
                    about what a job takes.
                  </p>
                  <p>
                    Interior walls, exterior siding, kitchen cabinets, trim, doors, decks —
                    one crew covers all of it. Premium Benjamin Moore, Sherwin-Williams, and
                    Sico paints. Low-VOC finishes that are safe for kids and pets.
                  </p>
                  <p>
                    Every quote starts with a free on-site visit. You get a written estimate
                    with the paint brand, number of coats, and timeline spelled out. Same price
                    at the end as at the start — we don&rsquo;t believe in surprise line items.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/contact" variant="outline" size="md">
                    Get In Touch <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative bg-sky-950 py-16 md:py-20 overflow-hidden">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <span className="block font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">{m.value}</span>
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold">{m.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute top-10 -right-20 w-64 h-64 bg-sky-100/30" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader label="Our Standards" title="What We Stand For" description="Not marketing fluff — these are the habits every job gets, every time." light />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden group shadow-xl">
                <img src={galleryImages[7].src} alt="On-site paint work in progress" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent opacity-60" aria-hidden="true" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 content-center">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                    <div className="relative bg-white border border-slate-200 hover-lift p-5 md:p-6 h-full group overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                      <div className="w-10 h-10 flex items-center justify-center bg-sky-50 border border-sky-200 mb-4 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                        <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-display text-base md:text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-950 py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader label="Service Area" title="Ottawa & Gatineau" description="Based in Ottawa. Serving the National Capital Region on both sides of the river." />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 md:mt-14">
            {company.cities.map((city, i) => (
              <ScrollReveal key={city} delay={i * 0.08}>
                <div className="group flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default">
                  <MapPin className="w-4 h-4 text-white/60 group-hover:text-white transition-colors shrink-0" />
                  <span className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-slate-300 group-hover:text-white transition-colors uppercase tracking-wider">{city}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" aria-label="Call to action">
        <div className="relative bg-gradient-to-br from-sky-500 via-sky-500 to-sky-600 py-16 md:py-20 lg:py-24" style={{ clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal><span className="inline-block font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-white/70 mb-3">Let&rsquo;s Get Started</span></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">Your Home. Our Brushes.</h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="mt-4 md:mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">Fully insured. Bilingual. Free on-site estimates. One call and your repaint is scheduled.</p></ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:mt-10">
                <Button variant="white" size="lg" href="/contact" geometric>Get Free Quote</Button>
                <Button variant="white" size="lg" href={`tel:${company.phoneRaw}`} className="!bg-transparent !text-white !shadow-none border-2 border-white hover:!bg-white hover:!text-slate-900"><Phone className="w-4 h-4" />{company.phone}</Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-[8%] bg-sky-950" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-slate-900" aria-hidden="true" />
      </section>
    </>
  );
}
