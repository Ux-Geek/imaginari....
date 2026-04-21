import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";
import { CatalogueRow } from "../components/CatalogueRow";

const products = [
  { name: "Abuja Silk Shirt", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800" },
  { name: "Passage Overshirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800" },
  { name: "Recall Linen Top", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { name: "Meridian Cotton Shirt", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" },
];

export const Concept = () => {
  return (
    <section
      id="concept"
      className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center"
    >
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
      </div>

      {/* Poster cards with story copy between them */}
      <div className="mt-24 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Left poster */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="self-start md:-ml-16"
        >
          <Poster
            cityImage="https://images.unsplash.com/photo-1539410849639-9ea07149666c?q=80&w=800"
            cityName="Marrakesh"
            theme="gold"
            rotation={-4}
            className=""
          />
        </motion.div>

        {/* Story copy between */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-center py-14 px-8 max-w-sm mx-auto"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4">
            worn across continents
          </p>
          <p className="text-base text-brand-green/50 leading-relaxed font-serif italic">
            cloth as cartography — every thread a longitude
          </p>
        </motion.div>

        {/* Right poster */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="self-end md:mr-[-4rem]"
        >
          <Poster
            cityImage="https://images.unsplash.com/photo-1588661706680-e37456d2db24?q=80&w=800"
            cityName="Accra"
            theme="black"
            rotation={4}
            className=""
          />
        </motion.div>
      </div>

      {/* Catalogue Row */}
      <CatalogueRow products={products} className="mt-20" />
    </section>
  );
};
