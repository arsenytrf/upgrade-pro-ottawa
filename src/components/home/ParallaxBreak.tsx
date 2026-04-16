import { sectionImages } from "@/data/company";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] overflow-hidden flex items-end bg-paint-ink"
      aria-label="Studio statement"
    >
      <div
        className="absolute inset-0 bg-cover bg-top bg-fixed"
        style={{ backgroundImage: `url(${sectionImages.parallax})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/55 to-paint-ink/15" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <span className="stencil text-paint-clay mb-5 block">The Studio</span>
        <p className="display-heavy uppercase text-paint-cream text-[42px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.92] max-w-5xl">
          Prep matters more than paint.<br />
          <span className="text-paint-clay">Every wall gets both.</span>
        </p>
      </div>
    </section>
  );
}
