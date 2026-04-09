import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { EntryMobile } from "./sections/EntryMobile";
import { IdentityMobile } from "./sections/IdentityMobile";
import { ConceptMobile } from "./sections/ConceptMobile";
import { CatalogueMobile } from "./sections/CatalogueMobile";
import { FooterMobile } from "./sections/FooterMobile";

import { MobileNav } from "./components/MobileNav";

export const MobileApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <main ref={containerRef} className="relative min-h-screen bg-brand-white">
      <MobileNav />

      {/* Mobile Sections */}
      <div className="snap-y snap-proximity overflow-y-auto">
        <EntryMobile />
        <IdentityMobile />
        <ConceptMobile />
        <CatalogueMobile />
        <FooterMobile />
      </div>

      {/* Mobile Scroll Progress */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 w-full bg-brand-gold origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
};
