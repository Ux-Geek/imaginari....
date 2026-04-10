import { motion } from "framer-motion";

export const SideNav = () => {
  const navItems = [
    { label: "Story", href: "#story" },
    { label: "Catalogue", href: "#catalogue" },
    { label: "Archive", href: "#archive" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 right-6 z-[100] h-[50px] w-full max-w-[420px] flex items-center justify-between px-8 bg-white border border-black/5 shadow-2xl rounded-full">
      <div className="text-[10px] tracking-[0.3em] uppercase text-black font-bold">
        Imaginari
      </div>

      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[9px] tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
