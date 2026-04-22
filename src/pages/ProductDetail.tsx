import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import { SideNav } from "../components/SideNav";
import { Footer } from "../sections/Footer";
import { FooterMobile } from "../mobile/sections/FooterMobile";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-brand-green">
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-serif">Product not found</h1>
          <Link to="/" className="text-sm tracking-widest uppercase border-b border-brand-green pb-1">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-brand-green selection:bg-brand-gold selection:text-white">
      <SideNav />
      
      <main className="pt-24 pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="sticky top-32 aspect-[3/4.5] bg-white overflow-hidden flex items-center justify-center p-8 md:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Breadcrumbs */}
            <nav className="text-[10px] tracking-[0.3em] uppercase text-brand-green/30 flex items-center gap-2">
              <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-green/60">{product.name}</span>
            </nav>

            {/* Header */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
              >
                {product.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-brand-gold font-light"
              >
                {product.price}
              </motion.p>
            </div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 max-w-md"
            >
              <p className="text-base text-brand-green/70 leading-relaxed font-light">
                {product.description}
              </p>
            </motion.div>

            {/* Size Selector */}
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-green/40">Select Size</p>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-[11px] tracking-widest transition-all duration-300 border ${
                      selectedSize === size 
                        ? "bg-brand-green text-white border-brand-green" 
                        : "bg-transparent text-brand-green border-black/10 hover:border-brand-green"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full py-5 bg-brand-green text-white text-[11px] tracking-[0.5em] uppercase hover:bg-black transition-colors duration-500 mt-8">
              Add to Cart
            </button>

            {/* Details List */}
            <div className="pt-12 border-t border-black/5 space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold">Details & Composition</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-[11px] tracking-wide text-brand-green/60 uppercase flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold">Shipping & Returns</p>
                <p className="text-[11px] tracking-wide text-brand-green/60 uppercase">
                  Free worldwide shipping on orders over $300. 14-day return policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-40 space-y-20">
          <div className="text-center space-y-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">You May Also Like</p>
            <h2 className="text-3xl font-serif">Complete the Look</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <div key={p.id} className="w-full">
                <Link to={`/product/${p.id}`} className="block" onClick={() => window.scrollTo(0, 0)}>
                  <div className="group relative aspect-[3/4.5] w-full overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-contain transition-transform duration-1000 ease-out group-hover:scale-110 mix-blend-multiply"
                      />
                    </div>
                    <div className="absolute bottom-8 left-8 z-20">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-black opacity-0 transition-all duration-700 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 font-medium">
                        {p.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
};
