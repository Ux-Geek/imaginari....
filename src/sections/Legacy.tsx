import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";

export const Legacy = () => {
  return (
    <section
      id="legacy"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1520006403991-2c9e0822ca35?q=90&w=2560&auto=format&fit=crop"
          alt="Abstract textile legacy"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl px-8 text-center space-y-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[10px] tracking-[0.6em] uppercase text-brand-gold"
        >
          The Legacy
        </motion.p>
        
        <div className="space-y-6">
          <WordReveal
            text="memory is the only land"
            className="text-5xl md:text-7xl text-white leading-tight justify-center"
          />
          <WordReveal
            text="without borders"
            className="text-5xl md:text-7xl text-white leading-tight justify-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="pt-12 space-y-8"
        >
          <p className="text-xl md:text-2xl text-white/80 font-serif italic">
            what we keep is what we carry
          </p>
          <div className="w-px h-24 bg-gradient-to-b from-brand-gold to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
