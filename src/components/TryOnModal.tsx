import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../data/products";

interface TryOnModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

type FlowState = "idle" | "uploading" | "processing" | "completed" | "failed";

export const TryOnModal = ({ isOpen, onClose, product }: TryOnModalProps) => {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [status, setStatus] = useState<FlowState>("idle");
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFrontImage(null);
      setStatus("idle");
      setResultUrl(null);
    }
  }, [isOpen]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFrontImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startTryOn = async () => {
    if (!frontImage) return;

    setStatus("uploading");
    
    // Simulating Upload & Processing
    setTimeout(() => {
      setStatus("processing");
      
      // Simulating heavy AI processing
      setTimeout(() => {
        setStatus("completed");
        // For demo purposes, we'll just use the product image as the "rendered" result
        // In a real app, this would be the URL returned by the backend
        setResultUrl(product.image); 
      }, 5000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-bg-elevated shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-30 text-text-muted hover:text-text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-2">
                <p className="section-eyebrow">Experience</p>
                <h2 className="t-title-lg">Virtual Try-On</h2>
              </div>

              {/* IDLE / UPLOAD STATE */}
              {status === "idle" && (
                <div className="space-y-8">
                  <p className="text-center text-sm text-text-muted font-light">
                    Upload a front-facing full body photo to see how the <span className="text-olive-400 font-medium">{product.name}</span> fits your silhouette.
                  </p>
                  
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="aspect-[3/4] border border-dashed border-border-medium flex flex-col items-center justify-center space-y-4 group-hover:border-olive-400 transition-colors overflow-hidden">
                      {frontImage ? (
                        <img src={frontImage} className="w-full h-full object-cover" alt="Preview" />
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-full bg-olive-400/5 flex items-center justify-center text-olive-400">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <p className="t-micro text-text-muted">Select your photo</p>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    disabled={!frontImage}
                    onClick={startTryOn}
                    className={`w-full py-5 text-[11px] tracking-[0.5em] uppercase transition-all duration-500 ${
                      frontImage 
                        ? "bg-olive-400 text-bg-base hover:bg-olive-300" 
                        : "bg-white/5 text-text-dim cursor-not-allowed"
                    }`}
                  >
                    Generate Preview
                  </button>
                </div>
              )}

              {/* PROCESSING STATE */}
              {(status === "uploading" || status === "processing") && (
                <div className="py-20 flex flex-col items-center space-y-12">
                  <div className="relative w-24 h-24">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                      className="absolute inset-0 border-t border-olive-400 rounded-full"
                    />
                    <div className="absolute inset-2 border border-white/5 rounded-full" />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <p className="t-micro text-olive-400 animate-pulse">
                      {status === "uploading" ? "Uploading Canvas..." : "Mapping Silhouette..."}
                    </p>
                    <p className="t-editorial text-text-muted max-w-[240px] mx-auto">
                      "Distance changes your surroundings, but style remains your anchor."
                    </p>
                  </div>
                </div>
              )}

              {/* COMPLETED STATE */}
              {status === "completed" && resultUrl && (
                <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="aspect-[3/4.5] bg-bg-base overflow-hidden shadow-inner flex items-center justify-center p-8"
                  >
                    {/* In a real app, this would be the AI generated result */}
                    <img src={resultUrl} className="w-full h-full object-contain" alt="Try-on Result" />
                  </motion.div>

                  <div className="flex gap-4">
                    <button className="flex-1 btn-ghost w-full">
                      Save Look
                    </button>
                    <button className="flex-1 btn-primary w-full py-[13px]">
                      Add to Cart
                    </button>
                  </div>

                  <button 
                    onClick={() => setStatus("idle")}
                    className="w-full text-center t-micro text-text-muted hover:text-olive-400 transition-colors mt-8"
                  >
                    Try Another Photo
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
