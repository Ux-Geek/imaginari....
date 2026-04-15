import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Poster } from "../components/Poster";

export const Entry = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax on the hero image
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full"
      style={{ minHeight: "100vh" }}
    >
      {/* ─── Full-screen hero image ─── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY, scale: heroScale }}
        >
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=90&w=2560&auto=format&fit=crop"
            alt="Futuristic nature landscape"
            className="w-full h-full object-cover"
            style={{ filter: "contrast(1.05) saturate(1.1)" }}
          />
        </motion.div>

        {/* Dark gradient overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,18,10,0.2) 0%, rgba(10,18,10,0.55) 60%, rgba(10,18,10,0.85) 100%)",
            opacity: overlayOpacity,
          }}
        />

        {/* Hero text — centred */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-brand-gold mb-10"
          >
            Entry
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight"
          >
            you don't arrive
            <br />
            <em className="text-brand-gold">you remember</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.5 }}
            className="mt-10 text-lg italic text-white/50"
          >
            something in you never left
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-10 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/40">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll-triggered poster section ─── */}
      <div className="relative bg-[#0a120a] py-32 px-8 z-10">
        {/* Story copy that appears on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg mx-auto mb-24"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold mb-6">
            The Collection
          </p>
          <p className="text-2xl md:text-3xl font-serif text-white/80 leading-relaxed">
            there is a place that exists in you<br />
            without asking permission
          </p>
        </motion.div>

        {/* Poster cards rising from base — separated with copy between */}
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-0">

          {/* Left poster */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="self-start md:self-auto md:-ml-20"
          >
            <Poster
              cityImage="https://images.unsplash.com/photo-1594132036733-4001d90f5c12?q=80&w=800"
              cityName="Lagos"
              theme="gold"
              rotation={-4}
              className=""
            />
          </motion.div>

          {/* Story copy between the posters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-center py-16 px-8 max-w-sm mx-auto"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4">
              and sometimes… you wear it
            </p>
            <p className="text-base text-white/50 leading-relaxed font-serif italic">
              distance changes your surroundings, not your origin
            </p>
          </motion.div>

          {/* Right poster */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="self-end md:self-auto md:ml-20"
          >
            <Poster
              cityImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800"
              cityName="London"
              theme="black"
              rotation={4}
              className=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
