import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";

export const LegacyMobile = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1520006403991-2c9e0822ca35?q=90&w=2560&auto=format&fit=crop"
          alt="Abstract textile legacy"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 space-y-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="t-micro tracking-[0.6em] text-olive-400"
        >
          The Legacy
        </motion.p>
        
        <div className="space-y-4">
          <WordReveal 
            text="memory is the only land" 
            className="font-display text-4xl text-text-primary leading-none justify-center"
          />
          <WordReveal 
            text="without borders" 
            className="font-display text-4xl text-text-primary leading-none justify-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="pt-6"
        >
          <p className="t-editorial text-text-secondary text-lg">
            what we keep is what we carry
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-olive-400 to-transparent mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
};
