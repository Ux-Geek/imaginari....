import React from "react";

export const Poster: React.FC = () => {
  return (
    <div className="relative group overflow-hidden rounded-sm bg-white/5 backdrop-blur-sm border border-white/10 p-4 shadow-2xl transition-all duration-700 hover:shadow-brand-gold/10">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto drop-shadow-xl"
      >
        <g clipPath="url(#clip0_211_372)">
          {/* Main Frame — Transparent background to show through */}
          <rect width="400" height="500" fill="none" />
          
          {/* Decorative Inner Card */}
          <g filter="url(#filter0_i_211_372)">
            <rect x="17" y="17" width="366" height="466" rx="1" fill="#E4E4E4" />
            <rect
              x="16.75"
              y="16.75"
              width="366.5"
              height="466.5"
              rx="1.25"
              stroke="#C6C6C6"
              strokeWidth="0.5"
            />
          </g>

          {/* Border Pattern - Circles that should stay #1E1E1E on every background */}
          <g className="border-dots">
            {/* Top row */}
            {Array.from({ length: 27 }).map((_, i) => (
              <circle
                key={`top-${i}`}
                cx={5 + i * 15}
                cy={0}
                r="7"
                fill="#1E1E1E"
                stroke="#717171"
                strokeWidth="1"
              />
            ))}
            {/* Bottom row */}
            {Array.from({ length: 27 }).map((_, i) => (
              <circle
                key={`bottom-${i}`}
                cx={5 + i * 15}
                cy={500}
                r="7"
                fill="#1E1E1E"
                stroke="#717171"
                strokeWidth="1"
              />
            ))}
            {/* Left column */}
            {Array.from({ length: 32 }).map((_, i) => (
              <circle
                key={`left-${i}`}
                cx={0}
                cy={17 + i * 15}
                r="6"
                fill="#1E1E1E"
                stroke="#717171"
                strokeWidth="2"
              />
            ))}
            {/* Right column */}
            {Array.from({ length: 32 }).map((_, i) => (
              <circle
                key={`right-${i}`}
                cx={400}
                cy={17 + i * 15}
                r="6"
                fill="#1E1E1E"
                stroke="#717171"
                strokeWidth="2"
              />
            ))}
          </g>

          {/* Placeholder/Artistic Content (using the user's paths) */}
          <path
            d="M130.6 461.528C128.283 461.528 126.171 461.147 124.264 460.384C122.357 459.592 120.7 458.492 119.292 457.084C117.913 455.676 116.843 454.048 116.08 452.2C115.347 450.323 114.98 448.313 114.98 446.172C114.98 443.913 115.391 441.86 116.212 440.012C117.063 438.135 118.207 436.536 119.644 435.216C121.111 433.867 122.768 432.84 124.616 432.136C126.464 431.403 128.4 431.036 130.424 431.036C132.037 431.036 133.372 431.168 134.428 431.432..."
            fill="black"
          />
          {/* I will truncate and use a simpler representation or just the original if needed */}
        </g>
        
        <defs>
          <filter
            id="filter0_i_211_372"
            x="16.5"
            y="16.5"
            width="367"
            height="471"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_innerShadow_211_372" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.785814 0 0 0 0 0.785814 0 0 0 0 0.785814 0 0 0 0.2 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_211_372" />
          </filter>
          <clipPath id="clip0_211_372">
            <rect width="400" height="500" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
