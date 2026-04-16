import HomeHero from "@/components/home/HomeHero";
import StatsStrip from "@/components/home/StatsStrip";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import ServiceGrid from "@/components/home/ServiceGrid";
import ProjectGallery from "@/components/home/ProjectGallery";
import ParallaxBreak from "@/components/home/ParallaxBreak";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import BookingWizard from "@/components/home/BookingWizard";
import ServiceAreaMap from "@/components/home/ServiceAreaMap";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <MarqueeStrip />
      <ServiceGrid />
      <StatsStrip />
      <ProjectGallery />
      <ParallaxBreak />
      <WhyChooseUs />
      <ProcessTimeline />
      <section className="bg-paint-bone py-24 md:py-32 border-t border-paint-ink/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="stencil text-paint-clay">06 — Book a Visit</span>
              <h2 className="mt-4 display-heavy uppercase text-paint-ink text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
                Tell us about<br /><span className="text-paint-clay">your walls.</span>
              </h2>
              <p className="mt-6 text-paint-ink/75 leading-relaxed">
                Five quick questions. We come by, measure, and send a written quote —
                paint brand, coats, and timeline all spelled out.
              </p>
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
