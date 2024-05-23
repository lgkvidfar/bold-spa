import { IService } from "../../../../utils/arrays/services";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CheckCircle, XCircle } from "react-feather"; // Importing Feather Icons

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
      className="relative flex h-[800px] min-h-96 w-full flex-col gap-2 border-2 border-bpink p-4 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-2 text-5xl sm:text-7xl">
        <span className="font-semibold text-bpink">
          {service.serviceNumber}
        </span>
        <span className="text-borange">{service.serviceTitle}</span>
      </div>
      <p className="my-4 pr-8 text-base font-light">
        {service.serviceDescription}
      </p>

      <div className="grid w-full grid-cols-2 gap-4">
        <div>
          <div className="font-semibold text-green-600">Good Fits</div>
          {service.goodFits.map((fit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-green-600">
              <CheckCircle className="text-lg" />
              <span>{fit}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold text-red-600">Bad Fits</div>
          {service.badFits.map((fit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-red-600">
              <XCircle className="text-lg" />
              <span>{fit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
