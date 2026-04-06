import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
}

export function WordReveal({ text, className = "" }: WordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-[0.3em] gap-y-0 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [10, 0]);

        return (
          <motion.span
            key={i}
            style={{ opacity, y }}
            className="inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
