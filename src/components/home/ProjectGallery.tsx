"use client";

import { galleryImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

/* Editorial captions — named like magazine plates */
const CAPTIONS: { plate: string; title: string; room: string; color: string }[] = [
  { plate: "Plate 01", title: "Living Room Refresh",  room: "Interior · Ottawa",     color: "Cloud · No. 07" },
  { plate: "Plate 02", title: "Galley Kitchen",       room: "Cabinets · Kanata",     color: "Kendall · No. 05" },
  { plate: "Plate 03", title: "Dining Feature Wall",  room: "Interior · Gatineau",   color: "Ottawa Navy · No. 01" },
  { plate: "Plate 04", title: "Stairwell & Trim",     room: "Millwork · Nepean",     color: "Bone · No. 08" },
  { plate: "Plate 05", title: "Open Concept Ground",  room: "Interior · Orleans",    color: "Mushroom · No. 06" },
  { plate: "Plate 06", title: "Heritage Siding",      room: "Exterior · Aylmer",     color: "Studio Moss · No. 02" },
  { plate: "Plate 07", title: "Bedroom Repaint",      room: "Interior · Barrhaven",  color: "Cloud · No. 07" },
  { plate: "Plate 08", title: "Hallway & Baseboards", room: "Trim · Ottawa",         color: "Ink · No. 09" },
  { plate: "Plate 09", title: "Cabinet Refinish",     room: "Cabinets · Gatineau",   color: "Heritage Oak · No. 03" },
  { plate: "Plate 10", title: "Bathroom Redo",        room: "Interior · Stittsville",color: "Bone · No. 08" },
];

export default function ProjectGallery() {
  return (
    <section className="relative bg-paint-cloud py-24 md:py-32 lg:py-40 border-t border-paint-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">

        {/* Editorial masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <span className="label-eyebrow text-paint-ink/60">§ 02 — The Portfolio</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 editorial-display-upright text-5xl md:text-6xl lg:text-7xl text-paint-ink leading-[0.95]">
                Recent work, <em className="editorial-display">plated like a catalogue.</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-ink/70 leading-relaxed">
                Ten of Vasyl&rsquo;s recent jobs across the National Capital Region.
                Rooms, cabinets, sidings, trim — no staging, no stock.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Irregular editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          {galleryImages.map((img, i) => {
            const caption = CAPTIONS[i] ?? CAPTIONS[0];
            /* Custom spans for a magazine feel */
            const SPANS = [
              "md:col-span-4 aspect-[4/3]",    // 0 — big feature
              "md:col-span-2 aspect-[3/4]",    // 1
              "md:col-span-3 aspect-[4/3]",    // 2
              "md:col-span-3 aspect-[4/3]",    // 3
              "md:col-span-2 aspect-[3/4]",    // 4
              "md:col-span-4 aspect-[4/3]",    // 5 — big feature
              "md:col-span-3 aspect-[4/3]",    // 6
              "md:col-span-3 aspect-[4/3]",    // 7
              "md:col-span-2 aspect-[3/4]",    // 8
              "md:col-span-4 aspect-[4/3]",    // 9
            ];
            return (
              <ScrollReveal key={i} delay={i * 0.04} className={SPANS[i] ?? "md:col-span-3 aspect-[4/3]"}>
                <figure className="group h-full relative image-frame">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute left-0 right-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-paint-ink/85 via-paint-ink/40 to-transparent">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <p className="label-eyebrow text-paint-bone/70">{caption.plate}</p>
                        <p className="mt-1.5 editorial-display-upright text-xl md:text-2xl text-paint-bone leading-tight truncate">
                          {caption.title}
                        </p>
                        <p className="mt-1.5 text-xs text-paint-bone/70">{caption.room}</p>
                      </div>
                      <p className="hidden sm:block label-eyebrow text-paint-bone/70 whitespace-nowrap">
                        {caption.color}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
