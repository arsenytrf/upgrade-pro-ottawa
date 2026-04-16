import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, AtSign, ArrowUpRight } from "lucide-react";

import { company, galleryImages, sectionImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description: `Get a free painting estimate from Upgrade Pro. Call ${company.phone} or fill out the form. Fully insured painters serving Ottawa, Gatineau, Kanata, Orleans, Nepean, and Barrhaven.`,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Upgrade Pro | Free Painting Estimate in Ottawa",
    description: `Get a free on-site painting estimate. Written quote within 24 hours. Call ${company.phone} — serving Ottawa & Gatineau.`,
    url: "/contact/",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Contact Upgrade Pro for a free painting estimate" }],
  },
};

const CONTACT_CARDS = [
  { icon: Phone,     label: "Phone",     value: company.phone,          href: `tel:${company.phoneRaw}`, sub: "7 days, fast response" },
  { icon: Mail,      label: "Email",     value: company.email,          href: `mailto:${company.email}`, sub: "Replies within 24h" },
  { icon: MapPin,    label: "Based in",  value: company.location,       href: undefined,                 sub: "Ottawa + Gatineau region" },
  { icon: Clock,     label: "Hours",     value: company.hours.weekday,  href: undefined,                 sub: company.hours.weekend },
  { icon: AtSign,    label: "Instagram", value: "@upgrade_proottawa",   href: company.instagram,         sub: "Recent work" },
];

export default function ContactPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative bg-paint-ink text-paint-cream overflow-hidden min-h-[55vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryImages[3].src})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/65 to-paint-ink/25" aria-hidden="true" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 w-full pt-36 md:pt-44 pb-16 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 stencil text-paint-cream/60">
            <Link href="/" className="hover:text-paint-cream">Home</Link>
            <span>/</span>
            <span className="text-paint-clay">Contact</span>
          </nav>

          <ScrollReveal>
            <span className="stencil text-paint-clay">Get In Touch</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-5 display-heavy uppercase text-paint-cream text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] leading-[0.9]">
              Let&rsquo;s talk<br />
              <span className="text-paint-clay">about your walls.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-xl text-paint-cream/75 text-lg leading-relaxed">
              Phone, email, Instagram, or the form below. We reply within 24 hours.
              Free on-site estimates across Ottawa and Gatineau.
            </p>
          </ScrollReveal>
        </div>
        <div className="tick-tape absolute bottom-0 left-0 right-0 opacity-40" />
      </section>

      {/* ───────── Contact info + Quote form ───────── */}
      <section className="bg-paint-cream py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="stencil text-paint-clay">Reach The Crew</span>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-4xl md:text-5xl leading-[0.95] mb-10">
                Five ways<br />
                <span className="text-paint-clay">to reach us.</span>
              </h2>

              <ul className="divide-y divide-paint-ink/15 border-y border-paint-ink/15">
                {CONTACT_CARDS.map((c, i) => {
                  const Icon = c.icon;
                  const inner = (
                    <div className="py-5 flex items-start gap-4 group">
                      <Icon className="w-5 h-5 text-paint-ink/60 shrink-0 mt-1 group-hover:text-paint-clay transition-colors" />
                      <div className="min-w-0">
                        <p className="stencil text-paint-ink/45">{c.label}</p>
                        <p className="mt-1 display-cond text-xl md:text-2xl text-paint-ink truncate">{c.value}</p>
                        <p className="mt-1 text-sm text-paint-ink/55">{c.sub}</p>
                      </div>
                    </div>
                  );
                  return (
                    <ScrollReveal key={c.label} delay={i * 0.06}>
                      <li>
                        {c.href ? (
                          <a
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block hover:bg-paint-bone/50 transition-colors -mx-2 px-2"
                          >
                            {inner}
                          </a>
                        ) : inner}
                      </li>
                    </ScrollReveal>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={0.15}>
                <QuoteForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Map + area ───────── */}
      <section className="relative bg-paint-ink text-paint-cream py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-25"
          style={{ backgroundImage: `url(${sectionImages.area})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paint-ink via-paint-ink/90 to-paint-ink" aria-hidden="true" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <span className="stencil text-paint-clay">Where We Work</span>
          <h2 className="mt-4 display-heavy uppercase text-paint-cream text-4xl md:text-5xl lg:text-6xl leading-[0.92] max-w-3xl mb-12">
            Both sides<br />
            <span className="text-paint-clay">of the river.</span>
          </h2>
          <div className="overflow-hidden border border-paint-cream/15">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179212.4959693453!2d-75.8762197!3d45.3475762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1711000000000!5m2!1sen!2sca"
              width="100%"
              height="480"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Upgrade Pro service area — Ottawa & Gatineau"
              className="w-full"
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {company.cities.map((c) => (
              <span key={c} className="display-cond text-xl md:text-2xl text-paint-cream/80">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-paint-clay text-paint-cream py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <span className="stencil text-paint-cream/80">Rather Just Call?</span>
          <h2 className="mt-4 display-heavy uppercase text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] leading-[0.88]">
            Skip the form.<br />
            <span className="text-paint-ink">Dial us up.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`tel:${company.phoneRaw}`} className="btn-hard bg-paint-ink text-paint-cream hover:bg-paint-charcoal">
              <Phone className="w-4 h-4" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="btn-hard border border-paint-cream/60 text-paint-cream hover:bg-paint-cream hover:text-paint-ink">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
