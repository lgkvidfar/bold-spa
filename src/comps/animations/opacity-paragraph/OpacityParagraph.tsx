import { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "../../../utils/cn";

export default function OpacityParagraph({
  value,
  css,
}: {
  value: string;
  css?: string;
}) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "end end"],
  });

  const words = value.split(" ");

  return (
    <p
      className={cn(
        "relative flex max-w-full flex-wrap whitespace-pre-wrap p-10 text-2xl sm:text-4xl",
        css,
      )}
      ref={element}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="ml-2">
      {characters.map((char: string, index: number) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);
        return (
          <Character
            key={index}
            char={char}
            start={start}
            end={end}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

const Character = ({
  char,
  start,
  end,
  progress,
}: {
  char: string;
  start: number;
  end: number;
  progress: MotionValue<number>;
}) => {
  const opacity = useSpring(useTransform(progress, [start, end], [0, 1]), {
    stiffness: 100,
    damping: 10,
  });
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};
