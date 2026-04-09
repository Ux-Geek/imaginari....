import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";

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

export const Catalogue = () => {
  return (
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
  );
};
