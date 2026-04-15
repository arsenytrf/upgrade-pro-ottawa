"use client";

import Link from "next/link";
import {
  Home,
  Hammer,
  ChefHat,
  DoorOpen,
  Scissors,
  TreePine,
  Building2,
  Palette,
  PaintBucket,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  PaintBucket,
  Home,
  ChefHat,
  DoorOpen,
  Hammer,
  Scissors,
  TreePine,
  Building2,
  Palette,
};

export default function ServiceGrid() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What We Paint"
            title="Our Services"
            description="Interior, exterior, cabinets, trim, decks — plus all the unglamorous prep that makes a paint job actually last. One crew, fully insured, bilingual."
            light
          />
        </ScrollReveal>

        {/* Asymmetric grid — 3 columns with varying heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            const isFeature = i === 0 || i === 4;

            return (
              <ScrollReveal key={service.slug} delay={i * 0.06}>
                <div
                  className={`relative group bg-white border border-slate-200 hover-lift overflow-hidden transition-all duration-300 ${
                    isFeature ? "lg:row-span-2 p-8" : "p-6"
                  }`}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  {/* Number watermark */}
                  <span className="absolute top-3 right-4 font-display text-6xl font-black text-slate-100/80 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 flex items-center justify-center bg-sky-50 border border-sky-200 mb-4 group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
                    >
                      <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="font-display text-lg font-black text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className={`text-sm text-slate-500 leading-relaxed ${isFeature ? "mb-6" : "mb-4"}`}>
                      {service.description}
                    </p>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-display uppercase tracking-wider text-sky-600 hover:text-sky-700 font-bold transition-colors duration-300 group/link"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
