import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";
import { CatalogueRow } from "../components/CatalogueRow";

const products = [
  { name: "Legacy Silk Shirt", image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800" },
  { name: "Dakar Overshirt", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800" },
  { name: "Borderline Tunic", image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=800" },
  { name: "Heritage Knit", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800" },
];

export const Legacy = () => {
  return (
    <section
      id="legacy"
      className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center bg-white"
    >
      <div className="relative max-w-2xl space-y-12 z-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">The Legacy</p>
        <div className="space-y-4">
          <WordReveal
            text="memory is the only land"
            className="text-4xl md:text-5xl leading-tight justify-center"
          />
          <WordReveal
            text="without borders"
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
            what we keep is what we carry
          </p>
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold">
            a geography of the heart
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
            cityImage="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800"
            cityName="Dakar"
            theme="black"
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
            mapped in silk and shadow
          </p>
          <p className="text-base text-brand-green/50 leading-relaxed font-serif italic">
            every stitch a memory, every fold a journey
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
            cityImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800"
            cityName="Paris"
            theme="gold"
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
