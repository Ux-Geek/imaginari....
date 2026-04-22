import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";
import { CatalogueRow } from "../../components/CatalogueRow";

const products = [
  { id: "signature-linen-shirt", name: "Signature Linen Shirt", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800" },
  { id: "essential-white-tee", name: "Essential White Tee", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" },
  { id: "oxford-button-down", name: "Oxford Button Down", image: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=800" },
  { id: "classic-black-tee", name: "Classic Black Tee", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800" },
];

export const EntryMobile = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Hero Section */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=90&w=1200&auto=format&fit=crop"
            alt="MAGINARI Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,18,10,0.3) 0%, rgba(10,18,10,0.9) 100%)",
            opacity: overlayOpacity,
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[9px] tracking-[0.4em] uppercase text-brand-gold mb-8"
          >
            Entry
          </motion.p>
          
          <div className="space-y-4">
            <WordReveal 
              text="you don't arrive" 
              className="text-4xl leading-tight justify-center text-white"
            />
            <WordReveal 
              text="you remember" 
              className="text-4xl leading-tight justify-center text-brand-gold italic"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-sm italic text-white/50"
          >
            something in you never left
          </motion.p>
        </div>
      </div>

      {/* Collection Section */}
      <div className="relative bg-white py-24 px-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 px-6"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-brand-gold mb-4">The Collection</p>
          <p className="text-xl font-serif text-brand-green/80 leading-relaxed">
            there is a place that exists in you without asking permission
          </p>
        </motion.div>

        {/* Poster Cards */}
        <div className="relative flex justify-center gap-2 mb-16 overflow-visible">
          <Poster 
            cityImage="https://images.unsplash.com/photo-1594132036733-4001d90f5c12?q=80&w=800" 
            cityName="Lagos"
            theme="gold"
            rotation={-6}
            className="scale-[0.8] -mr-6"
          />
          <Poster 
            cityImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800" 
            cityName="London"
            theme="black"
            rotation={8}
            className="scale-[0.8] -ml-6 shadow-xl"
          />
        </div>

        {/* Catalogue Row */}
        <CatalogueRow products={products} className="mt-8" />
      </div>
    </section>
  );
};
