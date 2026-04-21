import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";
import { CatalogueRow } from "../../components/CatalogueRow";

const products = [
  { name: "Legacy Silk Shirt", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { name: "Dakar Overshirt", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800" },
  { name: "Borderline Tunic", image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=800" },
  { name: "Heritage Knit", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800" },
];

export const LegacyMobile = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden bg-white">
      <div className="relative max-w-sm space-y-10 z-10 w-full">
        <p className="text-[9px] tracking-[0.4em] uppercase text-brand-gold">The Legacy</p>
        <div className="space-y-4">
          <WordReveal 
            text="memory is the only land" 
            className="text-3xl leading-tight justify-center"
          />
          <WordReveal 
            text="without borders" 
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
            what we keep is what we carry
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">
            a geography of the heart
          </p>
        </motion.div>

        {/* Poster Cards - Smaller and centered for Mobile */}
        <div className="relative flex justify-center gap-4 mt-8 w-full px-4 overflow-visible">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800" 
            cityName="Dakar"
            theme="black"
            rotation={-8}
            className="scale-[0.7] -mr-8"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800" 
            cityName="Paris"
            theme="gold"
            rotation={10}
            className="scale-[0.7] -ml-8"
          />
        </div>

        {/* Catalogue Row */}
        <CatalogueRow products={products} className="mt-12" />
      </div>
    </section>
  );
};
