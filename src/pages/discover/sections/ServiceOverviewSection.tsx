import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceCard from "./services-comps/ServiceCard";
import services from "../../../utils/arrays/services";
import SectionHeader from "../../../comps/headers/SectionHeader";
gsap.registerPlugin(ScrollTrigger);

function ServiceOverviewSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#service-overview-container",
          start: "top center",
          end: "bottom center",
          markers: false,
          scrub: 1,
        },
      });

      tl.fromTo(
        "#service-line",
        { height: 0 },
        { height: "100%", ease: "none" },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="service-overview-section"
      className="my-8 flex min-h-screen w-full shrink-0 flex-col items-center justify-center"
    >
      <SectionHeader title="SERVICE OVERVIEW" />
      <div className="flex flex-col gap-8">
        <div
          id="service-overview-container"
          className="relative flex w-full max-w-2xl flex-col gap-4 px-4"
        >
          <div
            id="service-line"
            className="absolute right-0 top-0 h-0 w-2 origin-top rounded-sm bg-gradient-to-b from-light via-borange to-bpink"
          />

          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceOverviewSection;
