import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Timer,
  BadgeCheck,
  ClipboardCheck,
  Wrench,
  ThumbsUp,
  ArrowRight,
  Scale,
} from "lucide-react";

import { company, galleryImages } from "@/data/company";
import Button from "@/components/shared/Button";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: `Contact | ${company.name}`,
  description: `Get a free estimate from ${company.name}. Call ${company.phone} or send a message. Bilingual, fully insured painters serving ${company.serviceArea}.`,
};

const contactCards = [
  { icon: Phone, label: "Call Us", value: company.phone, href: `tel:${company.phoneRaw}`, description: "Talk to a real person" },
  { icon: MapPin, label: "Location", value: company.location, href: undefined, description: "Ottawa & Gatineau region" },
  { icon: Clock, label: "Hours", value: company.hours.weekday, href: undefined, description: company.hours.weekend },
  { icon: Scale, label: "Insured", value: "Fully Insured", href: undefined, description: "WSIB + liability coverage" },
];

const steps = [
  { number: "01", icon: ClipboardCheck, title: "Send a Message", description: "Fill out the form or give us a call. Tell us what you want repainted and we take it from there." },
  { number: "02", icon: Wrench, title: "On-Site Quote", description: "We walk the space, measure it up, and give you a written estimate with brand, coats, and timeline spelled out." },
  { number: "03", icon: ThumbsUp, title: "We Paint It Right", description: "Proper prep, clean drop cloths, crisp lines. Walk-through with you at the end before you sign off." },
];

const trustItems = [
  { icon: ShieldCheck, title: "Fully Insured", description: "WSIB coverage and liability insurance on every job." },
  { icon: Timer, title: "Fast Response", description: "We get back to every inquiry within 24 hours." },
  { icon: BadgeCheck, title: "Free Estimates", description: "Written quotes on-site at no cost or obligation." },
  { icon: Scale, title: "Bilingual — EN / FR", description: "Service in whichever language feels natural to you." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] bg-white overflow-hidden flex items-end">
        <div className="absolute inset-0 gradient-mesh-sky" aria-hidden="true" />
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-sky-50/50 opacity-40" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-display uppercase tracking-wider">
              <Link href="/" className="text-slate-400 hover:text-sky-600 transition-colors duration-300">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-sky-600">Contact</span>
            </nav>

            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-sky-600 font-display text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-4">
                <span className="w-8 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                Get In Touch
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-black mb-6">
                <span className="block text-5xl sm:text-6xl md:text-7xl text-stroke-sky leading-[0.95]">LET&rsquo;S</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[0.95] mt-1">TALK.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-500 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
                Ready to repaint? Have a kitchen cabinet refresh in mind? Reach out any
                way you like — phone, email, or the form below. Bilingual, no pressure.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left — Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-bold text-sky-600 mb-3">
                    <span className="w-6 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                    Contact Info
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-black text-slate-900">Reach Us Directly</h2>
                </div>
              </ScrollReveal>

              {contactCards.map((card, i) => {
                const Icon = card.icon;
                const inner = (
                  <div className="flex items-start gap-4 p-5 bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 shadow-sm group">
                    <div className="shrink-0 w-11 h-11 bg-sky-50 border border-sky-200 flex items-center justify-center group-hover:bg-sky-100 transition-colors duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-display uppercase tracking-wider text-slate-400 mb-0.5">{card.label}</span>
                      <span className="block font-display text-sm md:text-base font-bold text-slate-900 truncate">{card.value}</span>
                      <span className="block text-xs text-slate-400 mt-0.5">{card.description}</span>
                    </div>
                    {card.href && <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors shrink-0 mt-3 ml-auto" />}
                  </div>
                );

                return (
                  <ScrollReveal key={card.label} delay={i * 0.06}>
                    {card.href ? <a href={card.href} className="block">{inner}</a> : inner}
                  </ScrollReveal>
                );
              })}

              <ScrollReveal delay={0.3}>
                <div className="pt-4">
                  <Button variant="sky" size="md" href={`tel:${company.phoneRaw}`} geometric>
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <QuoteForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="relative bg-gradient-to-b from-slate-50 to-sky-50/30 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader label="Find Us" title="Ottawa, ON" description="Serving Ottawa, Gatineau, Orleans, Kanata, Nepean, Barrhaven, Aylmer, and the rest of the National Capital Region." align="center" light />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative overflow-hidden shadow-xl border border-slate-200">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 via-sky-400 to-sand-400 z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179212.4959693453!2d-75.8762197!3d45.3475762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1711000000000!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Upgrade Pro service area — Ottawa & Gatineau"
                className="w-full"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {company.cities.map((city) => (
                <span key={city} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-display uppercase tracking-wider text-slate-500 bg-white border border-slate-200">
                  <MapPin className="w-3 h-3 text-sky-500" />{city}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader label="Our Process" title="What Happens Next" description="Three steps from your first call to a finished project." align="center" light />
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-[60px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-[3px] bg-gradient-to-r from-sky-500 via-sky-300 to-sand-400" aria-hidden="true" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.number} delay={i * 0.15}>
                    <div className="relative text-center group">
                      <div className="relative mx-auto mb-6">
                        <div className="w-[72px] h-[72px] mx-auto bg-white border-2 border-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/15 group-hover:bg-sky-50 group-hover:shadow-sky-500/30 transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                          <Icon className="w-7 h-7 text-sky-600" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-7 h-7 bg-sky-500 text-white flex items-center justify-center font-display text-[10px] font-black">{step.number}</span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-black text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="relative bg-slate-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute bottom-0 -left-20 w-40 h-40 bg-sky-100/30" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-[0.2em] font-bold text-sky-600 mb-4">
                  <span className="w-6 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                  Why Trust Us
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                  Painted Right.<br />Every Time.
                </h2>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
                  We stake our reputation on every job. When we say we&rsquo;ll be there,
                  we&rsquo;re there. When we say it&rsquo;ll hold up, it holds up — we use
                  the right prep and the right paint, every time.
                </p>
                <div className="relative aspect-[16/9] overflow-hidden shadow-lg">
                  <img src={galleryImages[8].src} alt="Finished cabinet and wall paint" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {trustItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.1} direction="right">
                    <div className="relative bg-white border border-slate-200 hover-lift p-6 h-full group overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400" aria-hidden="true" />
                      <div className="w-12 h-12 bg-sky-50 border border-sky-200 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                        <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-300" />
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
    </>
  );
}
