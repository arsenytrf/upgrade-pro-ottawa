import { parallaxImage } from "@/data/company";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] overflow-hidden flex items-end bg-paint-navy"
      aria-label="Studio motto"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${parallaxImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-paint-navy via-paint-navy/70 to-transparent" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-9">
            <p className="label-eyebrow text-paint-bone/60 mb-5">A note from Vasyl</p>
            <blockquote>
              <p className="editorial-display text-paint-bone text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] italic font-light">
                &ldquo;Great paint jobs aren&rsquo;t about the paint.
                <br className="hidden md:block" /> They&rsquo;re about the prep.&rdquo;
              </p>
            </blockquote>
          </div>
          <div className="lg:col-span-3 lg:pb-3">
            <p className="label-eyebrow text-paint-bone/60">
              — Vasyl Z.<br />
              <span className="text-paint-bone/40">Founder, Upgrade Pro</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
