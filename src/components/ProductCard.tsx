import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface ProductCardProps {
  name: string;
  image: string;
  price?: string;
  category?: string;
}

export function ProductCard({ name, image, price, category }: ProductCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#F5F5F5]"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 flex flex-col justify-end p-4 md:p-8"
      >
        <motion.img
          src={image}
          alt={name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        
        <div className="relative z-10 space-y-1">
          {category && (
            <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-brand-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {category}
            </p>
          )}
          <h3 className="text-base md:text-lg font-medium text-brand-green">{name}</h3>
          {price && <p className="text-xs md:text-sm text-brand-green/60">{price}</p>}
        </div>
      </div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-brand-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
