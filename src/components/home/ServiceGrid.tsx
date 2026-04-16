"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { servicePhotos } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ServiceGrid() {
  return (
    <section className="relative bg-paint-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <span className="stencil text-paint-clay">The Services</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-[48px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.9]">
                Five Services.<br />
                <span className="text-paint-clay">One Crew.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-ink/75 text-lg leading-relaxed">
                Every job gets the same prep, the same crew, the same paint brands.
                Fully insured, written in advance, finished on time.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Photo-backed service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.05}>
              <Link
                href="/services"
                className="group relative block aspect-[4/5] overflow-hidden photo-hover bg-paint-ink"
              >
                <img
                  src={servicePhotos[i] ?? servicePhotos[0]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/40 to-paint-ink/10" />

                {/* Arrow */}
                <div className="absolute top-5 right-5 text-paint-cream">
                  <span className="w-10 h-10 border border-paint-cream/40 flex items-center justify-center group-hover:bg-paint-clay group-hover:border-paint-clay transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Title + descr anchored bottom */}
                <div className="absolute left-5 right-5 bottom-5 md:left-7 md:right-7 md:bottom-7 text-paint-cream">
                  <h3 className="display-cond text-3xl md:text-4xl leading-[0.95]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-paint-cream/80 max-w-[34ch] line-clamp-3">
                    {service.description.split(".")[0]}.
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
