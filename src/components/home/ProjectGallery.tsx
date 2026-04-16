"use client";

import { galleryImages } from "@/data/company";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CAPTIONS = [
  { title: "Interior Repaint",   place: "Ottawa" },
  { title: "Cabinet Refinish",   place: "Ottawa + Gatineau" },
  { title: "Feature Wall",       place: "Ottawa" },
  { title: "Trim & Millwork",    place: "Ottawa + Gatineau" },
  { title: "Full Room Repaint",  place: "Ottawa" },
  { title: "Exterior Project",   place: "Ottawa + Gatineau" },
  { title: "Bedroom Repaint",    place: "Ottawa" },
  { title: "Hallway & Baseboards",place: "Ottawa + Gatineau" },
  { title: "Kitchen Cabinets",   place: "Ottawa" },
  { title: "Interior Redo",      place: "Ottawa + Gatineau" },
];

/* Col-span rhythm — each tile owns its own aspect, no forced row heights */
const SPANS = [
  "md:col-span-2 aspect-[4/3]",
  "md:col-span-1 aspect-[3/4]",
  "md:col-span-1 aspect-[3/4]",
  "md:col-span-2 aspect-[4/3]",
  "md:col-span-2 aspect-[4/3]",
  "md:col-span-2 aspect-[4/3]",
  "md:col-span-1 aspect-[3/4]",
  "md:col-span-1 aspect-[3/4]",
  "md:col-span-2 aspect-[4/3]",
  "md:col-span-2 aspect-[4/3]",
];

export default function ProjectGallery() {
  return (
    <section className="relative bg-paint-bone py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <span className="stencil text-paint-clay">02 — Recent Work</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-[48px] sm:text-[72px] md:text-[92px] lg:text-[112px] leading-[0.9]">
                Real jobs. <br /><span className="text-paint-clay">No staging.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <ScrollReveal delay={0.2}>
              <p className="text-paint-ink/75 leading-relaxed">
                Everything here was painted by our crew. Shot on-site, no filters,
                no stock — the actual finish you&rsquo;d get.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((g, i) => {
            const cap = CAPTIONS[i] ?? { title: "Project", place: "" };
            return (
              <ScrollReveal
                key={i}
                delay={i * 0.04}
                className={SPANS[i] ?? "md:col-span-2 aspect-[4/3]"}
              >
                <figure className="relative h-full w-full group photo-hover overflow-hidden bg-paint-ink">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paint-ink/85 via-paint-ink/20 to-transparent opacity-90" />
                  <figcaption className="absolute left-4 right-4 bottom-4 text-paint-cream">
                    <p className="stencil text-paint-clay">No. {String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-1 display-cond text-xl md:text-2xl leading-tight">{cap.title}</p>
                    <p className="text-xs text-paint-cream/70 mt-1">{cap.place}</p>
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
