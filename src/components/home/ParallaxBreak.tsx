import { parallaxImage } from "@/data/company";

export default function ParallaxBreak() {
  return (
    <section
      className="relative h-[40vh] sm:h-[50vh] overflow-hidden flex items-center justify-center"
      aria-label="Company motto"
    >
      <div
        className="absolute inset-[-10%] bg-cover bg-center"
        style={{ backgroundImage: `url(${parallaxImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-sky-950/65" aria-hidden="true" />

      {/* Geometric shapes in overlay */}
      <div
        className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <blockquote>
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight">
            &ldquo;Great paint jobs aren&rsquo;t about the paint.
            <br className="hidden sm:block" /> They&rsquo;re about the prep.&rdquo;
          </p>
          <footer className="mt-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[3px] bg-gradient-to-r from-white to-white/60" aria-hidden="true" />
            <cite className="not-italic font-display text-xs sm:text-sm uppercase tracking-[0.2em] text-white font-bold">
              Vasyl · Upgrade Pro
            </cite>
            <span className="w-8 h-[3px] bg-gradient-to-r from-white/60 to-white/30" aria-hidden="true" />
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
