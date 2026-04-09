import React from "react";
import { motion } from "framer-motion";

interface PosterProps {
  cityImage: string;
  className?: string;
  rotation?: number;
}

export const Poster: React.FC<PosterProps> = ({ cityImage, className, rotation = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
      }}
      className={`relative w-[300px] h-[375px] cursor-none ${className}`}
      style={{ transformOrigin: "bottom center" }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <clipPath id="inner-frame">
            <rect x="17" y="17" width="366" height="466" rx="1" />
          </clipPath>
          
          {/* Mask for the dots - we want the circles to be "holes" */}
          <mask id="dot-mask">
            <rect width="400" height="500" fill="white" />
            {/* Top row holes */}
            {Array.from({ length: 27 }).map((_, i) => (
              <circle key={`mt-${i}`} cx={5 + i * 15} cy={0} r="7" fill="black" />
            ))}
            {/* Bottom row holes */}
            {Array.from({ length: 27 }).map((_, i) => (
              <circle key={`mb-${i}`} cx={5 + i * 15} cy={500} r="7" fill="black" />
            ))}
            {/* Left holes */}
            {Array.from({ length: 32 }).map((_, i) => (
              <circle key={`ml-${i}`} cx={0} cy={17 + i * 15} r="6" fill="black" />
            ))}
            {/* Right holes */}
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

        {/* The Frame with Holes - consistently #1E1E1E */}
        <rect width="400" height="500" fill="#1E1E1E" mask="url(#dot-mask)" />

        {/* Inner Content Component */}
        <g clipPath="url(#inner-frame)">
          {/* City Image Background */}
          <image 
            href={cityImage} 
            width="400" 
            height="500" 
            preserveAspectRatio="xMidYMid slice"
            className="opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Subtle Overlay to make it feel like a card */}
          <rect x="17" y="17" width="366" height="466" fill="rgba(255,255,255,0.05)" />
          
          <g filter="url(#inner-shadow)">
            <rect x="17" y="17" width="366" height="466" rx="1" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};
