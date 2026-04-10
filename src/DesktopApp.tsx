import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Cursor } from "./components/Cursor";
import { Entry } from "./sections/Entry";
import { Identity } from "./sections/Identity";
import { Concept } from "./sections/Concept";
import { Catalogue } from "./sections/Catalogue";
import { Footer } from "./sections/Footer";

export const DesktopApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <main ref={containerRef} className="relative min-h-screen">
      <Cursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 mix-blend-difference">
        <div className="text-xs tracking-[0.3em] uppercase text-brand-white">Imaginari</div>
        <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-brand-white">
          <a href="#" className="hover:text-brand-gold transition-colors">Story</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Catalogue</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Cart (0)</a>
        </div>
      </nav>

      <Entry />
      <Identity />
      <Concept />
      <Catalogue />
      <Footer />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 bg-brand-gold origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
};
