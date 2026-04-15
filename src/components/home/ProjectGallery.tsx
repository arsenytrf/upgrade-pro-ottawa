"use client";

import { galleryImages } from "@/data/company";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ProjectGallery() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Our Work"
            title="Recent Projects"
            description="Real paint jobs across Ottawa and Gatineau. Interiors, exteriors, cabinets, and everything in between."
            light
          />
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => {
            // Vary aspect ratios for visual interest
            const isLarge = i === 0 || i === 5;
            const isTall = i === 3 || i === 7;

            return (
              <ScrollReveal
                key={i}
                delay={i * 0.05}
                className={`${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                } ${isTall ? "row-span-2" : ""}`}
              >
                <div className="relative overflow-hidden group h-full min-h-[200px] bg-slate-100 shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-sky-950/0 group-hover:bg-sky-950/40 transition-colors duration-300" />

                  {/* Number label */}
                  <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-display text-xs font-black text-sky-600 uppercase tracking-wider">
                      Project {String(i + 1).padStart(2, "0")}
                    </span>
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
