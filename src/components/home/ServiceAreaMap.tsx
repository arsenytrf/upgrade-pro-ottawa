"use client";

import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServiceAreaMap() {
  return (
    <section
      className="bg-sky-950 py-20 md:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="area-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Service Area"
            title="Ottawa & Gatineau"
            description="Based in Ottawa. Serving Gatineau, Orleans, Kanata, Nepean, Barrhaven, Aylmer, and the rest of the National Capital Region."
          />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 md:mt-14">
          {company.cities.map((city, i) => (
            <ScrollReveal key={city} delay={i * 0.08}>
              <div className="group flex items-center gap-2 px-5 py-3 md:px-7 md:py-4 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default">
                <MapPin className="w-4 h-4 text-white/60 group-hover:text-white transition-colors shrink-0" />
                <span className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-slate-300 group-hover:text-white transition-colors uppercase tracking-wider">
                  {city}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-slate-300/70 text-sm mt-8 md:mt-10">
            <MapPin className="w-4 h-4 inline-block mr-1 text-white -mt-0.5" />
            Don&rsquo;t see your area? We likely still cover it.{" "}
            <a
              href={`tel:${company.phoneRaw}`}
              className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors duration-300"
            >
              Call to check
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
