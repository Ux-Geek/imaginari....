export const Footer = () => {
  return (
    <footer className="inverse-mode px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="space-y-8">
            <div className="text-xl tracking-[0.4em] uppercase">Imaginary</div>
            <p className="max-w-xs text-sm leading-relaxed text-brand-white/60">
              A quiet return. Not memory, not nostalgia, but a quiet return.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">Navigation</p>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Catalogue</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Archive</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-gold">Connect</p>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-24 border-t border-brand-white/10 pt-8 text-[10px] tracking-[0.1em] uppercase text-brand-white/40">
          © 2026 Imaginary. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
