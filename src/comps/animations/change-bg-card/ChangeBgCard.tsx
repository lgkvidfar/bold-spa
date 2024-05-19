import React from "react";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ChangeBgCard({
  children,
  childrenId,
  triggerId,
  fromColorBg,
  fromColorText,
}: {
  children: React.ReactNode;
  childrenId: string;
  triggerId?: string;
  fromColorBg?: string;
  fromColorText?: string;
}) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerId ? `#${triggerId}` : undefined,
          start: "top 80%",
          end: "center center",
          // markers: true,
          scrub: 1,
        },
      });

      tl.from(`#${childrenId}`, {
        backgroundColor: fromColorBg,
        color: fromColorText,
      });
    });

    return () => ctx.revert();
  }, [childrenId, fromColorBg, fromColorText, triggerId]);
  return <div>{children}</div>;
}

export default ChangeBgCard;
