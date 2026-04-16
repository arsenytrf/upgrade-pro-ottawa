"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/shared/ScrollReveal";

/* Each service paired with one of the six signature paint colors */
const SERVICE_SWATCHES: { hex: string; name: string; code: string; onLight: boolean }[] = [
  { hex: "#1E2E4A", name: "Ottawa Navy",     code: "No. 01", onLight: false },
  { hex: "#8B5E34", name: "Heritage Oak",    code: "No. 03", onLight: false },
  { hex: "#E7DFCE", name: "Cloud",           code: "No. 07", onLight: true  },
  { hex: "#2A2826", name: "Kendall Charcoal",code: "No. 05", onLight: false },
  { hex: "#3F5A3B", name: "Studio Moss",     code: "No. 02", onLight: false },
  { hex: "#BDB09A", name: "Mushroom",        code: "No. 06", onLight: true  },
  { hex: "#B8533F", name: "Kiln Clay",       code: "No. 04", onLight: false },
  { hex: "#F5F0E6", name: "Bone",            code: "No. 08", onLight: true  },
  { hex: "#1F1C17", name: "Ink",             code: "No. 09", onLight: false },
];

export default function ServiceGrid() {
  return (
    <section className="relative bg-paint-bone py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        {/* Editorial header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="label-eyebrow text-paint-ink/60">§ 01 — The Services</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 editorial-display-upright text-5xl md:text-6xl lg:text-7xl text-paint-ink leading-[0.95]">
                Nine ways we <em className="editorial-display">finish a room.</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-ink/70 text-lg leading-relaxed">
                Each service comes with the prep it actually needs — not a shortcut.
                Drop cloths on every job, drop-sheet prices on every quote.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Swatch grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, i) => {
            const swatch = SERVICE_SWATCHES[i % SERVICE_SWATCHES.length];
            const textColor = swatch.onLight ? "text-paint-ink" : "text-paint-bone";
            const mutedColor = swatch.onLight ? "text-paint-ink/60" : "text-paint-bone/70";
            return (
              <ScrollReveal key={service.slug} delay={i * 0.05}>
                <Link
                  href="/services"
                  className="swatch-card group block aspect-[4/5] p-6 md:p-8 relative overflow-hidden"
                  style={{ backgroundColor: swatch.hex }}
                >
                  {/* Top row — code + arrow */}
                  <div className={`flex items-start justify-between ${textColor}`}>
                    <span className="serif-numeral text-4xl md:text-5xl italic leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className={`w-5 h-5 ${mutedColor} transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1`} />
                  </div>

                  {/* Color code label */}
                  <div className={`mt-6 ${mutedColor}`}>
                    <span className="label-eyebrow">{swatch.code} — {swatch.name}</span>
                  </div>

                  {/* Title anchored to bottom */}
                  <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8">
                    <h3 className={`editorial-display-upright text-3xl md:text-4xl lg:text-[42px] leading-[1.02] ${textColor}`}>
                      {service.title.includes(" ") ? (
                        <>
                          {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                          <em className="editorial-display">{service.title.split(" ").slice(-1)}</em>
                        </>
                      ) : service.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-relaxed max-w-[28ch] line-clamp-3 ${mutedColor}`}>
                      {service.description.split(".")[0]}.
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
