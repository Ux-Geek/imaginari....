export const FooterMobile = () => {
  return (
    <footer className="inverse-mode px-6 py-20">
      <div className="space-y-16">
        <div className="space-y-8">
          <div className="text-lg tracking-[0.4em] uppercase">Imaginari</div>
          <p className="max-w-xs text-xs leading-relaxed text-brand-white/60">
            A quiet return. Not memory, not nostalgia, but a quiet return.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-brand-gold">Navigation</p>
            <ul className="space-y-4 text-xs">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Catalogue</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Archive</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <p className="text-[9px] tracking-[0.2em] uppercase text-brand-gold">Connect</p>
            <ul className="space-y-4 text-xs">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-white/10 text-[9px] tracking-[0.1em] uppercase text-brand-white/40">
          © 2026 Imaginari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
