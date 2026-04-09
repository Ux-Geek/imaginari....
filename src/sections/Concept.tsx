import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";

export const Concept = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <div className="relative max-w-2xl space-y-12 z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">The Concept</p>
        <div className="space-y-4">
          <WordReveal 
            text="imaginary is not a place" 
            className="text-4xl md:text-5xl leading-tight justify-center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="pt-8 space-y-12"
        >
          <p className="text-xl text-brand-green/80">
            it is how you return without moving
          </p>
          
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold">
            and sometimes… you wear it
          </p>
        </motion.div>

        {/* Integrated Poster Cards — Optimized for Mobile Diagonals */}
        <div className="absolute top-full mt-12 left-0 w-full flex justify-between px-0 pointer-events-none">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1539410849639-9ea07149666c?q=80&w=800" 
            cityName="Marrakesh"
            theme="gold"
            rotation={-4}
            className="pointer-events-auto opacity-100 -translate-x-[70%] md:-translate-x-1/2 md:rotate-[-4deg] rotate-[-20deg] scale-90 md:scale-100"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1588661706680-e37456d2db24?q=80&w=800" 
            cityName="Accra"
            theme="black"
            rotation={12}
            className="pointer-events-auto opacity-100 translate-x-[70%] md:translate-x-1/2 md:rotate-[12deg] rotate-[18deg] scale-90 md:scale-100"
          />
        </div>
      </div>
    </section>
  );
};
