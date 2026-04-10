import { motion } from "framer-motion";

export const SideNav = () => {
  const navItems = [
    { label: "Story", href: "#story" },
    { label: "Catalogue", href: "#catalogue" },
    { label: "Archive", href: "#archive" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 z-[100] h-[50px] w-auto max-w-[600px] flex items-center gap-8 px-6 md:px-10 bg-white border border-black/5 shadow-sm rounded-md transition-all">
      {/* Brand/Logo - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-black font-bold">
        Imaginari
      </div>

      {/* Main Nav Items - Hidden on mobile, flex on desktop */}
      <ul className="hidden md:flex items-center gap-6">
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

      {/* Mobile Actions: Cart & Hamburger - Visible on mobile, can be hidden on desktop if preferred */}
      <div className="flex md:hidden items-center gap-6">
        <button className="text-[10px] tracking-[0.2em] uppercase text-black font-medium">
          Cart (0)
        </button>
        <button className="flex flex-col gap-1.5 items-end group">
          <div className="h-[1.5px] w-5 bg-black" />
          <div className="h-[1.5px] w-3 bg-black transition-all group-hover:w-5" />
        </button>
      </div>

      {/* Optional: Show Cart on Desktop too if needed */}
      <div className="hidden md:block h-4 w-[1px] bg-black/10 mx-2" />
      <div className="hidden md:block text-[9px] tracking-[0.2em] uppercase text-black/50">
        Cart (0)
      </div>
    </nav>
  );
};
