import { motion } from "framer-motion";

export const SideNav = () => {
  const navItems = [
    { label: "Story", href: "#story" },
    { label: "Catalogue", href: "#catalogue" },
    { label: "Archive", href: "#archive" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed right-0 top-0 z-[100] h-screen w-16 md:w-20 flex flex-col items-center justify-between py-12 bg-white border-l border-black/5 shadow-2xl">
      {/* Brand Logo - Vertical */}
      <div className="rotate-90 origin-center whitespace-nowrap mt-4">
        <span className="text-[11px] tracking-[0.5em] uppercase text-black font-semibold">
          Imaginari
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-12 py-12">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rotate-90 origin-center whitespace-nowrap text-[9px] tracking-[0.3em] uppercase text-black/40 hover:text-brand-gold transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Cart/Bottom Action */}
      <div className="flex flex-col items-center gap-12">
        <button className="rotate-90 origin-center whitespace-nowrap text-[9px] tracking-[0.3em] uppercase text-black font-semibold">
          Cart (0)
        </button>
        <div className="h-20 w-[1px] bg-black/10" />
      </div>
    </nav>
  );
};
