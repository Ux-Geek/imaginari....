import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Cursor } from "./components/Cursor";
import { Entry } from "./sections/Entry";
import { Identity } from "./sections/Identity";
import { Concept } from "./sections/Concept";
import { Legacy } from "./sections/Legacy";
import { Footer } from "./sections/Footer";
import { SideNav } from "./components/SideNav";

export const DesktopApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <main ref={containerRef} className="relative min-h-screen">
      <Cursor />
      <SideNav />

      <Entry />
      <Identity />
      <Concept />
      <Legacy />
      <Footer />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 bg-brand-gold origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
};
