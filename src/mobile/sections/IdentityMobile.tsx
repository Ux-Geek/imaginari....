import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";

export const IdentityMobile = () => {
  return (
    <section className="relative inverse-mode flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="relative max-w-sm space-y-12 z-10">
        <p className="text-[9px] tracking-[0.4em] uppercase text-brand-gold">Identity</p>
        <div className="space-y-6">
          <WordReveal 
            text="distance changes your surroundings" 
            className="text-2xl leading-relaxed justify-center"
          />
          <WordReveal 
            text="not your origin" 
            className="text-2xl leading-relaxed justify-center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pt-6"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-brand-white/70">
            there is a place that exists in you without asking permission
          </p>
        </motion.div>

        {/* Poster Cards - Stacked or Overlapping for Mobile */}
        <div className="relative h-64 w-full mt-12">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800" 
            cityName="Tokyo"
            theme="black"
            rotation={-8}
            className="absolute left-0 top-0 scale-90 -translate-x-2"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800" 
            cityName="Abuja"
            theme="gold"
            rotation={20}
            className="absolute right-0 top-8 scale-95 translate-x-2"
          />
        </div>
      </div>
    </section>
  );
};
