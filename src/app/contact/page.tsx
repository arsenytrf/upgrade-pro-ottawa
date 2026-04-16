import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, AtSign } from "lucide-react";

import { company } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: `Contact | ${company.name}`,
  description: `Get a free estimate from ${company.name}. Call ${company.phone}. Fully insured painters serving ${company.serviceArea}.`,
};

const CONTACT_CARDS = [
  { icon: Phone,     label: "Phone",     value: company.phone,          href: `tel:${company.phoneRaw}`, sub: "7 days, fast response" },
  { icon: Mail,      label: "Email",     value: company.email,          href: `mailto:${company.email}`, sub: "Responses within 24h" },
  { icon: MapPin,    label: "Based in",  value: company.location,       href: undefined,                 sub: "Ottawa + Gatineau region" },
  { icon: Clock,     label: "Hours",     value: company.hours.weekday,  href: undefined,                 sub: company.hours.weekend },
  { icon: AtSign,    label: "Instagram", value: "@upgrade_proottawa",   href: company.instagram,         sub: "Recent work" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paint-bone pt-20 md:pt-28 lg:pt-36 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 label-eyebrow text-paint-ink/50">
            <Link href="/" className="hover:text-paint-ink">Home</Link>
            <span>/</span>
            <span className="text-paint-ink">Contact</span>
          </nav>

          <ScrollReveal>
            <span className="label-eyebrow text-paint-ink/60">Get in touch</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-5 editorial-display-upright text-[56px] sm:text-[80px] md:text-[104px] lg:text-[128px] leading-[0.92] text-paint-ink max-w-5xl">
              Let&rsquo;s <em className="editorial-display">talk</em> about your walls.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-xl text-paint-ink/70 text-lg leading-relaxed">
              Phone, email, Instagram, or the form below. We reply within 24 hours.
              Free on-site estimates across Ottawa and Gatineau.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact grid + form */}
      <section className="bg-paint-cloud border-y border-paint-ink/10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="label-eyebrow text-paint-ink/60">Reach us directly</span>
              <h2 className="mt-4 editorial-display-upright text-4xl md:text-5xl text-paint-ink leading-[1.05] mb-10">
                Five ways to <em className="editorial-display">reach the studio.</em>
              </h2>
              <ul className="divide-y divide-paint-ink/15 border-y border-paint-ink/15">
                {CONTACT_CARDS.map((c, i) => {
                  const Icon = c.icon;
                  const content = (
                    <div className="py-5 flex items-start gap-4 group">
                      <Icon className="w-5 h-5 text-paint-ink/60 shrink-0 mt-0.5 group-hover:text-paint-ink transition-colors" />
                      <div className="min-w-0">
                        <p className="label-eyebrow text-paint-ink/50">{c.label}</p>
                        <p className="mt-1 editorial-display-upright text-xl md:text-2xl text-paint-ink truncate">{c.value}</p>
                        <p className="mt-1 text-sm text-paint-ink/55">{c.sub}</p>
                      </div>
                    </div>
                  );
                  return (
                    <ScrollReveal key={c.label} delay={i * 0.06}>
                      <li>
                        {c.href ? (
                          <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="block hover:bg-paint-bone/40 transition-colors -mx-2 px-2">
                            {content}
                          </a>
                        ) : content}
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

      {/* Map */}
      <section className="bg-paint-bone py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <span className="label-eyebrow text-paint-ink/60">Where we work</span>
          <h2 className="mt-4 editorial-display-upright text-4xl md:text-5xl lg:text-6xl text-paint-ink leading-[1.05] max-w-3xl mb-12">
            On both sides of <em className="editorial-display">the river.</em>
          </h2>
          <div className="image-frame overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179212.4959693453!2d-75.8762197!3d45.3475762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1711000000000!5m2!1sen!2sca"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Upgrade Pro service area — Ottawa & Gatineau"
              className="w-full"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {company.cities.map((c) => (
              <span key={c} className="editorial-display-upright text-xl md:text-2xl text-paint-ink/75">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
