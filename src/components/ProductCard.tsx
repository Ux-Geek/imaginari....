import React from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  image: string;
  price?: string;
  category?: string;
}

export function ProductCard({ name, image }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/5] w-full overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      {/* Heart Icon */}
      <div className="absolute top-4 right-4 z-20 text-black/30 transition-colors duration-300 group-hover:text-black">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      {/* Product Image */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Product Name (Hover) */}
      <div className="absolute bottom-6 left-6 z-20">
        <p className="text-[11px] tracking-[0.2em] uppercase text-black opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          {name}
        </p>
      </div>
    </motion.div>
  );
}
