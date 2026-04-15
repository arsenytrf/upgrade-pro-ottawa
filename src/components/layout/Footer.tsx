import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Geometric top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-white via-white/60 to-white/30" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main grid */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="md:max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
                <span className="font-display text-slate-900 text-xs font-bold">UP</span>
              </div>
              <div className="leading-tight">
                <span className="font-display text-sm font-bold tracking-tight text-white block">
                  UPGRADE PRO
                </span>
                <span className="font-display text-[9px] font-semibold tracking-[0.2em] text-slate-300 uppercase block">
                  Ottawa Painters
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Nav + Services */}
          <div className="flex gap-12">
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Pages
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href="/services"
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact + Facebook */}
          <div className="flex flex-col gap-2.5">
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Phone className="h-3.5 w-3.5 text-white" />
              {company.phone}
            </a>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-white" />
              {company.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-3.5 w-3.5 text-white" />
              {company.hours.weekday}
            </div>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 mt-1"
            >
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              @upgrade_proottawa
            </a>
          </div>
        </div>

        {/* Service area tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {company.cities.map((city) => (
            <span
              key={city}
              className="px-2 py-0.5 text-[11px] text-slate-500 bg-white/[0.03] border border-white/5"
            >
              {city}
            </span>
          ))}
          <span className="px-2 py-0.5 text-[11px] text-white bg-white/5 border border-white/10">
            Fully Insured · EN / FR
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Serving Ottawa · Gatineau · EN / FR
          </p>
        </div>
      </div>
    </footer>
  );
}
