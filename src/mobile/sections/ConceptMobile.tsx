import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";
import { CatalogueRow } from "../../components/CatalogueRow";

const products = [
  { id: "abuja-silk-shirt", name: "Abuja Silk Shirt", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800" },
  { id: "passage-overshirt", name: "Passage Overshirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800" },
  { id: "recall-linen-top", name: "Recall Linen Top", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { id: "meridian-cotton-shirt", name: "Meridian Cotton Shirt", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" },
  { id: "horizon-silk-set", name: "Horizon Silk Set", image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80&w=800" },
  { id: "dune-overshirt", name: "Dune Overshirt", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800" },
  { id: "anchor-knit-shirt", name: "Anchor Knit Shirt", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800" },
  { id: "kora-silk-shirt", name: "Kora Silk Shirt", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800" },
];

export const ConceptMobile = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-0 text-center bg-white py-24">
      <div className="relative w-full space-y-12 z-10">
        <div className="px-6 space-y-12">
          <p className="text-[9px] tracking-[0.4em] uppercase text-brand-gold">The Concept</p>
          <div className="space-y-6">
            <WordReveal 
              text="imaginary is not a place" 
              className="text-3xl leading-tight justify-center"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="pt-6 space-y-8"
          >
            <p className="text-lg text-brand-green/80 italic">
              it is how you return without moving
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">
              and sometimes… you wear it
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
                cityImage="https://images.unsplash.com/photo-1539410849639-9ea07149666c?q=80&w=800" 
                cityName="Marrakesh"
                theme="gold"
                rotation={-6}
                className="scale-[0.8]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="py-8"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-2">worn across continents</p>
              <p className="text-sm font-serif italic text-brand-green/60">cloth as cartography — every thread a longitude</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="self-end"
            >
              <Poster 
                cityImage="https://images.unsplash.com/photo-1588661706680-e37456d2db24?q=80&w=800" 
                cityName="Accra"
                theme="black"
                rotation={8}
                className="scale-[0.8]"
              />
            </motion.div>
          </div>
        </div>

        {/* Catalogue Rows - Full Width */}
        <div className="space-y-4 mt-16">
          <CatalogueRow products={products.slice(0, 4)} className="pt-0 pb-0" />
          <CatalogueRow products={products.slice(4, 8)} className="pt-0 pb-0" />
        </div>
      </div>
    </section>
  );
};
