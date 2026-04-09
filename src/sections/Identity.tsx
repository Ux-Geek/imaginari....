import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";

export const Identity = () => {
  return (
    <section className="relative inverse-mode flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <div className="relative max-w-3xl space-y-16 z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">Identity</p>
        <div className="space-y-8">
          <WordReveal 
            text="distance changes your surroundings" 
            className="text-3xl md:text-4xl leading-relaxed justify-center"
          />
          <WordReveal 
            text="not your origin" 
            className="text-3xl md:text-4xl leading-relaxed justify-center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="pt-8"
        >
          <p className="mx-auto max-w-lg text-base leading-relaxed text-brand-white/70">
            there is a place that exists in you without asking permission
          </p>
        </motion.div>

        {/* Integrated Poster Cards — Optimized for Mobile Diagonals */}
        <div className="absolute top-full mt-12 left-0 w-full flex justify-between px-0 pointer-events-none">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800" 
            cityName="Tokyo"
            theme="black"
            rotation={-4}
            className="pointer-events-auto opacity-100 -translate-x-[65%] md:-translate-x-1/2 md:rotate-[-4deg] rotate-[-12deg] scale-90 md:scale-100"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800" 
            cityName="Abuja"
            theme="gold"
            rotation={12}
            className="pointer-events-auto opacity-100 translate-x-[65%] md:translate-x-1/2 md:rotate-[12deg] rotate-[25deg] scale-90 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
};
