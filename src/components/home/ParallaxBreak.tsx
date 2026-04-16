import { sectionImages } from "@/data/company";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] overflow-hidden flex items-end bg-paint-ink"
      aria-label="Studio motto"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${sectionImages.parallax})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-paint-ink via-paint-ink/70 to-paint-ink/20" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-9">
            <p className="stencil text-paint-clay mb-5">From the shop</p>
            <blockquote>
              <p className="display-heavy uppercase text-paint-cream text-[42px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.92]">
                &ldquo;Great paint jobs aren&rsquo;t about the paint.<br />
                <span className="text-paint-clay">They&rsquo;re about the prep.&rdquo;</span>
              </p>
            </blockquote>
          </div>
          <div className="lg:col-span-3 lg:pb-3">
            <p className="stencil text-paint-cream/70">
              — Vasyl Z.<br />
              <span className="text-paint-cream/40">Founder, Upgrade Pro</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
