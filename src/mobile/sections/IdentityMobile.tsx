import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";
import { CatalogueRow } from "../../components/CatalogueRow";

const products = [
  { name: "Lagos Night Shirt", image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=800" },
  { name: "Nomad Linen Top", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { name: "Origin Tunic", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800" },
  { name: "Bridge Knit Shirt", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800" },
];

export const IdentityMobile = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden bg-white">
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

        {/* Poster Cards - Smaller and centered for Mobile */}
        <div className="relative flex justify-center gap-4 mt-8 w-full px-4 overflow-visible">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800" 
            cityName="Tokyo"
            theme="black"
            rotation={-6}
            className="scale-[0.7] -mr-8"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800" 
            cityName="Abuja"
            theme="gold"
            rotation={12}
            className="scale-[0.7] -ml-8"
          />
        </div>

        {/* Catalogue Row */}
        <CatalogueRow products={products} className="mt-12" />
      </div>
    </section>
  );
};
