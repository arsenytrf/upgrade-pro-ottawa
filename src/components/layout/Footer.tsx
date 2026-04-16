import Link from "next/link";
import { Phone, MapPin, Clock, AtSign } from "lucide-react";
import { company, logoSrc } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-paint-bone text-paint-ink relative border-t border-paint-ink/15">
      <div className="tick-tape" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-7">
              <img src={logoSrc} alt="Upgrade Pro" className="h-14 w-auto" />
              <span className="sr-only">Upgrade Pro · Ottawa Painters</span>
            </Link>
            <p className="display-cond text-paint-ink text-3xl md:text-4xl leading-[0.95] max-w-md">
              REAL PREP.<br />REAL PAINT.<br /><span className="text-paint-clay">REAL FINISH.</span>
            </p>
            <div className="mt-8 flex flex-col gap-2.5 text-paint-ink/75">
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-paint-ink">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {company.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {company.hours.weekday}
              </span>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-paint-ink">
                <AtSign className="h-4 w-4" /> @upgrade_proottawa
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 lg:grid-cols-7">
            <div className="col-span-1 lg:col-span-3">
              <p className="stencil text-paint-ink/45 mb-5">Pages</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="display-cond text-paint-ink/85 hover:text-paint-clay text-xl transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-4">
              <p className="stencil text-paint-ink/45 mb-5">Services</p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href="/services" className="text-paint-ink/70 hover:text-paint-clay text-sm transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-paint-ink/15">
          <p className="stencil text-paint-ink/45 mb-4">Service Area</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {company.cities.map((c) => (
              <span key={c} className="display-cond text-paint-ink/80 text-xl md:text-2xl">{c}</span>
            ))}
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-paint-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-paint-ink/50">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Fully insured · Ottawa + Gatineau</p>
        </div>
      </div>
    </footer>
  );
}
