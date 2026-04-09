import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";

export const Entry = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <div className="relative max-w-2xl space-y-12 z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">Entry</p>
        <div className="space-y-4">
          <WordReveal 
            text="you don't arrive" 
            className="text-4xl md:text-5xl leading-tight justify-center"
          />
          <WordReveal 
            text="you remember" 
            className="text-4xl md:text-5xl leading-tight justify-center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="pt-12"
        >
          <p className="text-lg italic text-brand-green/60">something in you never left</p>
        </motion.div>

        {/* Integrated Poster Cards — Optimized for Mobile Diagonals */}
        <div className="absolute top-full mt-12 left-0 w-full flex justify-between px-0 pointer-events-none">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1594132036733-4001d90f5c12?q=80&w=800" 
            cityName="Lagos"
            theme="gold"
            rotation={-4}
            className="pointer-events-auto opacity-100 -translate-x-[60%] md:-translate-x-1/2 md:rotate-[-4deg] rotate-[-15deg] scale-90 md:scale-100"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800" 
            cityName="London"
            theme="black"
            rotation={12}
            className="pointer-events-auto opacity-100 translate-x-[60%] md:translate-x-1/2 md:rotate-[12deg] rotate-[20deg] scale-90 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
};
