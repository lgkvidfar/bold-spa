import { IService } from "../../../../utils/arrays/services";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ service }: { service: IService }) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${service.serviceId}`,
          start: "top 80%",
          end: "center center",
          // markers: true,
          scrub: 1,
        },
      });

      // Pan the image from bottom-left to top-right
      tl.fromTo(
        `#img-${service.serviceId}`,
        {
          scale: 1.5,
          transformOrigin: "top right",
        },
        {
          scale: 1,
          duration: 1,
        },
      );
    });

    return () => ctx.revert();
  }, [service.serviceId]);

  return (
    <div
      id={service.serviceId}
      className="relative flex min-h-96 w-full flex-col gap-2 border-2 border-bpink p-4 backdrop-blur-sm"
    >
      <div className="flex gap-2 text-2xl">
        <span className="font-semibold text-bpink">
          {service.serviceNumber}
        </span>
        <span>{service.serviceTitle}</span>
      </div>
      <p className="p-8 text-base font-light">{service.serviceDescription}</p>
      <div className="absolute inset-0 z-[-1] overflow-hidden bg-dark opacity-40">
        <img
          className="h-full w-full object-cover"
          id={`img-${service.serviceId}`}
          src={service.serviceImage}
          alt={service.serviceTitle}
        />
      </div>
    </div>
  );
}

export default ServiceCard;
