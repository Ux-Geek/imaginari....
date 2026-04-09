import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { WordReveal } from "./components/WordReveal";
import { ProductCard } from "./components/ProductCard";
import { Cursor } from "./components/Cursor";
import { Poster } from "./components/Poster";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const products = [
    {
      name: "The Lagos Anchor",
      category: "Knitwear",
      price: "£145",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Recall Trousers",
      category: "Tailoring",
      price: "£180",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Bridge Overshirt",
      category: "Outerwear",
      price: "£210",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Origin Scarf",
      category: "Accessories",
      price: "£65",
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen">
      <Cursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 mix-blend-difference">
        <div className="text-xs tracking-[0.3em] uppercase text-brand-white">Imaginary</div>
        <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-brand-white">
          <a href="#" className="hover:text-brand-gold transition-colors">Story</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Catalogue</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Cart (0)</a>
        </div>
      </nav>

      {/* SECTION 1 — ENTRY */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <div className="relative max-w-2xl space-y-12 z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">Entry</p>
          <div className="space-y-4">
            <WordReveal 
              text="you don't arrive" 
              className="text-4xl md:text-5xl leading-tight justify-center"
            />
            <WordReveal 
              text="you remember" 
              className="text-4xl md:text-5xl leading-tight justify-center"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="pt-12"
          >
            <p className="text-lg italic text-brand-green/60">something in you never left</p>
          </motion.div>

          {/* Integrated Poster Cards — Fully Visible Gold/Black Frames */}
          <div className="absolute top-full mt-12 left-0 w-full flex justify-between px-0 pointer-events-none">
            <Poster 
              cityImage="https://images.unsplash.com/photo-1594132036733-4001d90f5c12?q=80&w=800" 
              cityName="Lagos"
              theme="gold"
              rotation={-4}
              className="pointer-events-auto opacity-100 -translate-x-1/2"
            />
            <Poster 
              cityImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800" 
              cityName="London"
              theme="black"
              rotation={12}
              className="pointer-events-auto opacity-100 translate-x-1/2"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — IDENTITY */}
      <section className="relative inverse-mode flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <div className="relative max-w-3xl space-y-16 z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">Identity</p>
          <div className="space-y-8">
            <WordReveal 
              text="distance changes your surroundings" 
              className="text-3xl md:text-4xl leading-relaxed justify-center"
            />
            <WordReveal 
              text="not your origin" 
              className="text-3xl md:text-4xl leading-relaxed justify-center"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="pt-8"
          >
            <p className="mx-auto max-w-lg text-base leading-relaxed text-brand-white/70">
              there is a place that exists in you without asking permission
            </p>
          </motion.div>

          {/* Integrated Poster Cards — Fully Visible Gold/Black Frames */}
          <div className="absolute top-full mt-12 left-0 w-full flex justify-between px-0 pointer-events-none">
            <Poster 
              cityImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800" 
              cityName="Tokyo"
              theme="black"
              rotation={-4}
              className="pointer-events-auto opacity-100 -translate-x-1/2"
            />
            <Poster 
              cityImage="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800" 
              cityName="Abuja"
              theme="gold"
              rotation={12}
              className="pointer-events-auto opacity-100 translate-x-1/2"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — IMAGINARY (Concept) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center">
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

          {/* Integrated Poster Cards — Fully Visible Gold/Black Frames */}
          <div className="absolute top-full mt-12 left-0 w-full flex justify-between px-0 pointer-events-none">
            <Poster 
              cityImage="https://images.unsplash.com/photo-1539410849639-9ea07149666c?q=80&w=800" 
              cityName="Marrakesh"
              theme="gold"
              rotation={-4}
              className="pointer-events-auto opacity-100 -translate-x-1/2"
            />
            <Poster 
              cityImage="https://images.unsplash.com/photo-1588661706680-e37456d2db24?q=80&w=800" 
              cityName="Accra"
              theme="black"
              rotation={12}
              className="pointer-events-auto opacity-100 translate-x-1/2"
            />
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="bg-white px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="space-y-4">
              <h2 className="text-3xl font-light tracking-tight">Catalogue 01</h2>
              <p className="max-w-md text-sm text-brand-green/60 leading-relaxed">
                Pieces designed for the quiet return. Intentional silhouettes, 
                cultural anchors, and the weight of home.
              </p>
            </div>
            <div className="flex gap-4 text-[10px] tracking-[0.2em] uppercase">
              <button className="border-b border-brand-green pb-1">All Pieces</button>
              <button className="text-brand-green/40 hover:text-brand-green transition-colors">Knitwear</button>
              <button className="text-brand-green/40 hover:text-brand-green transition-colors">Tailoring</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="inverse-mode px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="space-y-8">
              <div className="text-xl tracking-[0.4em] uppercase">Imaginary</div>
              <p className="max-w-xs text-sm leading-relaxed text-brand-white/60">
                A quiet return. Not memory, not nostalgia, but a quiet return.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">Navigation</p>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Story</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Catalogue</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Archive</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">Connect</p>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-24 border-t border-brand-white/10 pt-8 text-[10px] tracking-[0.1em] uppercase text-brand-white/40">
            © 2026 Imaginary. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 h-1 bg-brand-gold origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
}
