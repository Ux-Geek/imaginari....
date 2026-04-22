import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-white px-8 py-32 border-t border-black/5">
      <div className="mx-auto max-w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 md:gap-8 mb-40">
          <div className="space-y-12">
            <div className="text-2xl tracking-[0.5em] uppercase font-light">MAGINARI</div>
            <p className="max-w-xs text-sm leading-relaxed text-brand-green/40">
              distance changes your surroundings, not your origin.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
            <div className="space-y-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">Explore</p>
              <ul className="space-y-4 text-[11px] tracking-wider uppercase text-brand-green/60">
                <li><a href="#" className="hover:text-black transition-colors">The Story</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Catalogue</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Archive</a></li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">Connect</p>
              <ul className="space-y-4 text-[11px] tracking-wider uppercase text-brand-green/60">
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">Newsletter</p>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent border-b border-black/10 py-2 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase"
                />
                <button className="text-[10px] tracking-[0.4em] uppercase self-start hover:text-brand-gold transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-20 overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15vw] font-serif leading-none text-black/[0.03] select-none pointer-events-none text-center whitespace-nowrap"
          >
            IMAGINARI
          </motion.h2>
          
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-end pb-8">
            <div className="text-[9px] tracking-[0.3em] uppercase text-brand-green/30">
              © 2026 MAGINARI
            </div>
            <div className="text-[9px] tracking-[0.3em] uppercase text-brand-green/30">
              All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
