import Link from "next/link";
import { Phone, MapPin, Clock, AtSign } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/navigation";

const PALETTE = [
  { hex: "#1E2E4A", name: "Ottawa Navy" },
  { hex: "#3F5A3B", name: "Studio Moss" },
  { hex: "#8B5E34", name: "Heritage Oak" },
  { hex: "#B8533F", name: "Kiln Clay" },
  { hex: "#2A2826", name: "Kendall Charcoal" },
  { hex: "#BDB09A", name: "Mushroom" },
];

export default function Footer() {
  return (
    <footer className="bg-paint-ink text-paint-bone relative">
      {/* Palette strip header */}
      <div className="flex h-3">
        {PALETTE.map((c) => (
          <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} title={c.name} />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand + tagline */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <span className="flex items-center gap-0.5">
                <span className="block w-2 h-2 rounded-full bg-paint-bone" />
                <span className="block w-2 h-2 rounded-full bg-paint-oak" />
                <span className="block w-2 h-2 rounded-full bg-paint-clay" />
              </span>
              <span className="editorial-display-upright text-2xl tracking-tight text-paint-bone">
                Upgrade <em className="editorial-display">Pro</em>
              </span>
            </Link>
            <p className="editorial-display-upright text-3xl md:text-4xl text-paint-bone/90 leading-[1.1] max-w-md">
              A small, bilingual painting studio for <em className="editorial-display">Ottawa</em> and <em className="editorial-display">Gatineau</em>.
            </p>
            <div className="mt-8 flex flex-col gap-2.5 text-paint-bone/70">
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-paint-bone">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {company.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {company.hours.weekday}
              </span>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-paint-bone"
              >
                <AtSign className="h-4 w-4" /> @upgrade_proottawa
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="label-eyebrow text-paint-bone/40 mb-5">Pages</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="editorial-display-upright text-xl text-paint-bone/85 hover:text-paint-bone transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <p className="label-eyebrow text-paint-bone/40 mb-5">Services</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-paint-bone/70 hover:text-paint-bone text-sm transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cities row */}
        <div className="pt-8 border-t border-paint-bone/15">
          <p className="label-eyebrow text-paint-bone/40 mb-4">Service Area</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {company.cities.map((c) => (
              <span key={c} className="editorial-display-upright text-xl md:text-2xl text-paint-bone/80">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 mt-10 border-t border-paint-bone/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-paint-bone/50">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Fully insured · EN / FR · Ottawa + Gatineau</p>
        </div>
      </div>
    </footer>
  );
}
