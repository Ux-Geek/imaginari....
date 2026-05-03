import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";
import { CatalogueRow } from "../components/CatalogueRow";

const products = [
  { id: "abuja-silk-shirt", name: "Abuja Silk Shirt", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800" },
  { id: "passage-overshirt", name: "Passage Overshirt", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800" },
  { id: "recall-linen-top", name: "Recall Linen Top", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { id: "meridian-cotton-shirt", name: "Meridian Cotton Shirt", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" },
  { id: "horizon-silk-set", name: "Horizon Silk Set", image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80&w=800" },
  { id: "dune-overshirt", name: "Dune Overshirt", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800" },
  { id: "anchor-knit-shirt", name: "Anchor Knit Shirt", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800" },
  { id: "kora-silk-shirt", name: "Kora Silk Shirt", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800" },
];

export const Concept = () => {
  return (
    <section
      id="concept"
      className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center bg-bg-base section"
    >
      <div className="relative max-w-2xl space-y-12 z-10">
        <p className="section-eyebrow">The Concept</p>
        <div className="space-y-4">
          <WordReveal
            text="imaginary is not a place"
            className="t-display justify-center"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="pt-8 space-y-12"
        >
          <p className="t-editorial text-text-muted">
            it is how you return without moving
          </p>
          <p className="t-micro text-olive-400">
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
          <p className="t-micro text-olive-400 mb-4">
            worn across continents
          </p>
          <p className="t-editorial text-text-muted">
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
            theme="gold"
            rotation={4}
            className=""
          />
        </motion.div>
      </div>

      {/* Catalogue Rows */}
      <div className="space-y-2">
        <CatalogueRow products={products.slice(0, 4)} className="pt-20 pb-0" />
        <CatalogueRow products={products.slice(4, 8)} className="pt-0 pb-20" />
      </div>
    </section>
  );
};
