import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";

export const ConceptMobile = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="relative max-w-sm space-y-10 z-10">
        <p className="text-[9px] tracking-[0.4em] uppercase text-brand-gold">The Concept</p>
        <div className="space-y-4">
          <WordReveal 
            text="imaginary is not a place" 
            className="text-3xl leading-tight justify-center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="pt-6 space-y-10"
        >
          <p className="text-lg text-brand-green/80 italic">
            it is how you return without moving
          </p>
          
          <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">
            and sometimes… you wear it
          </p>
        </motion.div>

        {/* Poster Cards - Smaller and centered for Mobile */}
        <div className="relative flex justify-center gap-4 mt-8 w-full px-4 overflow-visible">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1539410849639-9ea07149666c?q=80&w=800" 
            cityName="Marrakesh"
            theme="gold"
            rotation={-10}
            className="scale-[0.7] -mr-8"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1588661706680-e37456d2db24?q=80&w=800" 
            cityName="Accra"
            theme="black"
            rotation={6}
            className="scale-[0.7] -ml-8"
          />
        </div>
      </div>
    </section>
  );
};
