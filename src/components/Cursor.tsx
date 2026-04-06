import { motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).closest('.group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mousePosition.x - 16, springConfig);
  const cursorY = useSpring(mousePosition.y - 16, springConfig);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-brand-gold/30 bg-brand-gold/5 mix-blend-difference md:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 2.5 : 1,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-brand-gold" />
      </div>
    </motion.div>
  );
}
