import HomeHero from "@/components/home/HomeHero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import ServiceGrid from "@/components/home/ServiceGrid";
import CabinetProcess from "@/components/home/CabinetProcess";
import ProjectGallery from "@/components/home/ProjectGallery";
import ParallaxBreak from "@/components/home/ParallaxBreak";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FAQ from "@/components/home/FAQ";
import BookingWizard from "@/components/home/BookingWizard";
import ServiceAreaMap from "@/components/home/ServiceAreaMap";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarqueeStrip />
      <ServiceGrid />
      <CabinetProcess />
      <ProjectGallery />
      <ParallaxBreak />
      <WhyChooseUs />
      <ProcessTimeline />
      <FAQ />
      <section id="estimate" className="relative bg-paint-ink text-paint-cream py-24 md:py-32 border-t border-paint-cream/10 scroll-mt-20 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="stencil text-paint-clay">06 — Free Estimate</span>
              <h2 className="mt-4 display-heavy uppercase text-paint-cream text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
                Tell us about<br /><span className="text-paint-clay">your walls.</span>
              </h2>
              <p className="mt-6 text-paint-cream/75 leading-relaxed">
                Five quick questions. We come by, measure, and send a written quote —
                paint brand, coats, and timeline spelled out. No pressure, ever.
              </p>
              <div className="mt-8 flex flex-col gap-3 text-paint-cream/75">
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-paint-clay" />
                  Free on-site visit
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-paint-clay" />
                  Written quote within 24 hours
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-paint-clay" />
                  Same price end-to-end
                </span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <BookingWizard />
            </div>
          </div>
        </div>
      </section>
      <ServiceAreaMap />
      <CtaBanner />
    </>
  );
}
