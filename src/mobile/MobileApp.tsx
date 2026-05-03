import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { EntryMobile } from "./sections/EntryMobile";
import { IdentityMobile } from "./sections/IdentityMobile";
import { ConceptMobile } from "./sections/ConceptMobile";
import { LegacyMobile } from "./sections/LegacyMobile";
import { FooterMobile } from "./sections/FooterMobile";

import { SideNav } from "../components/SideNav";

export const MobileApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <main ref={containerRef} className="relative min-h-screen bg-bg-base">
      <SideNav />

      {/* Mobile Sections */}
      <div className="snap-y snap-proximity overflow-y-auto">
        <EntryMobile />
        <IdentityMobile />
        <ConceptMobile />
        <LegacyMobile />
        <FooterMobile />
      </div>

      {/* Mobile Scroll Progress */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 w-full bg-olive-400 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
};
