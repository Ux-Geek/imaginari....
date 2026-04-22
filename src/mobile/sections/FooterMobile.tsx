import { motion } from "framer-motion";

export const FooterMobile = () => {
  return (
    <footer className="bg-white px-6 py-20 border-t border-black/5">
      <div className="space-y-20">
        <div className="space-y-10 text-center">
          <div className="text-xl tracking-[0.5em] uppercase font-light">MAGINARI</div>
          <p className="max-w-xs mx-auto text-xs leading-relaxed text-brand-green/40">
            distance changes your surroundings, not your origin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 text-center">
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">Explore</p>
            <ul className="space-y-4 text-[11px] tracking-wider uppercase text-brand-green/60">
              <li><a href="#" className="hover:text-black transition-colors">The Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Catalogue</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Archive</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">Connect</p>
            <ul className="space-y-4 text-[11px] tracking-wider uppercase text-brand-green/60">
              <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">Newsletter</p>
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-black/10 py-2 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase text-center"
              />
              <button className="text-[10px] tracking-[0.4em] uppercase hover:text-brand-gold transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="relative pt-20 pb-10 overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] font-serif leading-none text-black/[0.03] select-none pointer-events-none text-center whitespace-nowrap"
          >
            MAGINARI
          </motion.h2>
          
          <div className="mt-10 flex flex-col items-center gap-2 text-[8px] tracking-[0.3em] uppercase text-brand-green/30">
            <div>© 2026 MAGINARI</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
