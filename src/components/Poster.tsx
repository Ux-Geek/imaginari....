import React from "react";
import { motion } from "framer-motion";

interface PosterProps {
  cityImage: string;
  cityName: string;
  theme?: "gold" | "black";
  className?: string;
  rotation?: number;
}

export const Poster: React.FC<PosterProps> = ({ 
  cityImage, 
  cityName, 
  theme = "gold", 
  className, 
  rotation = 0 
}) => {
  const frameColor = theme === "gold" ? "#b5a96a" : "#2a2a27";
  const shadowColor = theme === "gold" ? "rgba(181, 169, 106, 0.25)" : "rgba(0, 0, 0, 0.4)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        scale: 1.05, 
        y: -15,
        boxShadow: `0 40px 80px -12px ${shadowColor}`
      }}
      className={`relative w-[260px] h-[325px] cursor-none flex-shrink-0 ${className}`}
      style={{ transformOrigin: "bottom center" }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-2xl"
      >
        <defs>
          <clipPath id="inner-frame">
            <rect x="17" y="17" width="366" height="466" rx="1" />
          </clipPath>
          
          <mask id="dot-mask">
            <rect width="400" height="500" fill="white" />
            {/* Edge dots as holes */}
            {Array.from({ length: 27 }).map((_, i) => (
              <circle key={`mt-${i}`} cx={5 + i * 15} cy={0} r="7" fill="black" />
            ))}
            {Array.from({ length: 27 }).map((_, i) => (
              <circle key={`mb-${i}`} cx={5 + i * 15} cy={500} r="7" fill="black" />
            ))}
            {Array.from({ length: 32 }).map((_, i) => (
              <circle key={`ml-${i}`} cx={0} cy={17 + i * 15} r="6" fill="black" />
            ))}
            {Array.from({ length: 32 }).map((_, i) => (
              <circle key={`mr-${i}`} cx={400} cy={17 + i * 15} r="6" fill="black" />
            ))}
          </mask>

          <filter id="inner-shadow" x="16.5" y="16.5" width="367" height="471" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="bg" />
            <feBlend in="SourceGraphic" in2="bg" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="erode" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          </filter>
        </defs>

        {/* Frame Color: Dynamic Gold or Black */}
        <rect width="400" height="500" fill={frameColor} mask="url(#dot-mask)" />

        <g clipPath="url(#inner-frame)">
          <image 
            href={cityImage} 
            width="400" 
            height="500" 
            preserveAspectRatio="xMidYMid slice"
            className="opacity-95 contrast-125 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          
          {/* Subtle Overlay */}
          <rect x="17" y="17" width="366" height="466" fill={theme === "gold" ? "rgba(181, 169, 106, 0.15)" : "rgba(0,0,0,0.1)"} />
          
          {/* City Name Typography */}
          <text 
            x="50%" 
            y="430" 
            textAnchor="middle" 
            fill="#f4f0e4" 
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif", 
              fontSize: "56px", 
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}
            className="drop-shadow-sm select-none"
          >
            {cityName}
          </text>

          <g filter="url(#inner-shadow)">
            <rect x="17" y="17" width="366" height="466" rx="1" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};
