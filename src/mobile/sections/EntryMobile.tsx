import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";

export const EntryMobile = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="relative max-w-sm space-y-10 z-10 w-full">
        <p className="text-[9px] tracking-[0.4em] uppercase text-brand-gold">Entry</p>
        
        <div className="space-y-3">
          <WordReveal 
            text="you don't arrive" 
            className="text-4xl leading-tight justify-center"
          />
          <WordReveal 
            text="you remember" 
            className="text-4xl leading-tight justify-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="pt-8"
        >
          <p className="text-base italic text-brand-green/60">something in you never left</p>
        </motion.div>

        {/* Poster Cards - Smaller and centered for Mobile */}
        <div className="relative flex justify-center gap-4 mt-8 w-full px-4 overflow-visible">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1594132036733-4001d90f5c12?q=80&w=800" 
            cityName="Lagos"
            theme="gold"
            rotation={-8}
            className="scale-[0.7] -mr-8"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800" 
            cityName="London"
            theme="black"
            rotation={10}
            className="scale-[0.7] -ml-8 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
