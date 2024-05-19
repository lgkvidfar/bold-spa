import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceCard from "./services-comps/ServiceCard";
import services from "../../../utils/arrays/services";
gsap.registerPlugin(ScrollTrigger);

function ServiceOverviewSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#service-overview-container",
          start: "top 50%",
          end: "bottom 20%",
          markers: false,
          scrub: 1,
        },
      });

      tl.from("#service-line", {
        scaleY: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="service-overview-section"
      className="my-8 flex min-h-screen w-full shrink-0 flex-col items-center justify-center"
    >
      <div>
        <div>SERVICE OVERVIEW</div>
      </div>
      <div
        id="service-overview-container"
        className="relative flex w-full max-w-2xl flex-col gap-4 px-4"
      >
        <div
          id="service-line"
          className="absolute right-0 top-0 h-full w-2 origin-top rounded-sm bg-gradient-to-b from-light via-borange to-bpink"
        />

        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServiceOverviewSection;
