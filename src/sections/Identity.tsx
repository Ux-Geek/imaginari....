import { motion } from "framer-motion";
import { WordReveal } from "../components/WordReveal";
import { Poster } from "../components/Poster";

export const Identity = () => {
  return (
    <section
        id="identity"
        className="relative inverse-mode flex min-h-screen flex-col items-center justify-center px-8 text-center"
      >
        <div className="relative max-w-3xl space-y-16 z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold">Identity</p>
          <div className="space-y-8">
            <WordReveal
              text="distance changes your surroundings"
              className="text-3xl md:text-4xl leading-relaxed justify-center"
            />
            <WordReveal
              text="not your origin"
              className="text-3xl md:text-4xl leading-relaxed justify-center"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="pt-8"
          >
            <p className="mx-auto max-w-lg text-base leading-relaxed text-brand-white/70">
              there is a place that exists in you without asking permission
            </p>
          </motion.div>
        </div>

        {/* Poster cards with story copy between them */}
        <div className="mt-24 w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Left poster */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="self-start md:-ml-16"
          >
            <Poster
              cityImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800"
              cityName="Tokyo"
              theme="black"
              rotation={-4}
              className=""
            />
          </motion.div>

          {/* Story copy between */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-center py-14 px-8 max-w-sm mx-auto"
          >
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-4">
              every city holds a version of you
            </p>
            <p className="text-base text-brand-white/50 leading-relaxed font-serif italic">
              rooted in the memory of where you began
            </p>
          </motion.div>

          {/* Right poster */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="self-end md:mr-[-4rem]"
          >
            <Poster
              cityImage="https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800"
              cityName="Abuja"
              theme="gold"
              rotation={4}
              className=""
            />
          </motion.div>
        </div>
      </section>
  );
};
