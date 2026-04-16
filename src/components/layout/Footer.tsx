import Link from "next/link";
import { Phone, MapPin, Clock, AtSign } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-paint-ink text-paint-cream relative">
      {/* Tick tape */}
      <div className="tick-tape" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          {/* Brand + bold tagline */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-7">
              <span className="w-9 h-9 bg-paint-clay flex items-center justify-center">
                <span className="display-heavy text-paint-cream text-sm leading-none">UP</span>
              </span>
              <div className="leading-tight">
                <span className="display-cond text-paint-cream text-xl block">UPGRADE PRO</span>
                <span className="stencil text-paint-cream/55 block">Ottawa Painters</span>
              </div>
            </Link>
            <p className="display-cond text-paint-cream text-3xl md:text-4xl leading-[0.95] max-w-md">
              REAL PREP.<br />REAL PAINT.<br /><span className="text-paint-clay">REAL FINISH.</span>
            </p>
            <div className="mt-8 flex flex-col gap-2.5 text-paint-cream/75">
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-paint-cream">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {company.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {company.hours.weekday}
              </span>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-paint-cream">
                <AtSign className="h-4 w-4" /> @upgrade_proottawa
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="stencil text-paint-cream/40 mb-5">Pages</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="display-cond text-paint-cream/85 hover:text-paint-clay text-xl transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="stencil text-paint-cream/40 mb-5">Services</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-paint-cream/70 hover:text-paint-clay text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-paint-cream/15">
          <p className="stencil text-paint-cream/40 mb-4">Service Area</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {company.cities.map((c) => (
              <span key={c} className="display-cond text-paint-cream/80 text-xl md:text-2xl">{c}</span>
            ))}
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-paint-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-paint-cream/50">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Fully insured · Ottawa + Gatineau</p>
        </div>
      </div>
    </footer>
  );
}
