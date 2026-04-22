import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";
import { CatalogueRow } from "../../components/CatalogueRow";

const products = [
  { name: "Nomad Linen Top", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { name: "Bridge Knit Shirt", image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=800" },
  { name: "Urban Cotton Shirt", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800" },
  { name: "Lagos Night Top", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800" },
];

export const IdentityMobile = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 text-center bg-white py-24">
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
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-brand-green/70">
            there is a place that exists in you without asking permission
          </p>
        </motion.div>

        {/* Separated Posters with Copy */}
        <div className="mt-16 space-y-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="self-start"
          >
            <Poster 
              cityImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800" 
              cityName="Tokyo"
              theme="black"
              rotation={-6}
              className="scale-[0.8]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="py-8"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-2">every city holds a version of you</p>
            <p className="text-sm font-serif italic text-brand-green/60">rooted in the memory of where you began</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="self-end"
          >
            <Poster 
              cityImage="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800" 
              cityName="Abuja"
              theme="gold"
              rotation={8}
              className="scale-[0.8]"
            />
          </motion.div>
        </div>

        {/* Catalogue Row */}
        <CatalogueRow products={products} className="mt-16" />
      </div>
    </section>
  );
};
