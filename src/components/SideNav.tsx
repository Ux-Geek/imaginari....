import { motion } from "framer-motion";

export const SideNav = () => {
  return (
    <nav className="fixed top-0 right-0 z-[100] h-[70px] w-[200px] flex items-center justify-between px-6 bg-white border-b border-l border-black/5 shadow-lg rounded-bl-3xl">
      <div className="flex flex-col">
        <span className="text-[10px] tracking-[0.2em] uppercase text-black font-bold">Imaginari</span>
        <span className="text-[8px] tracking-[0.1em] uppercase text-black/40">Menu</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="h-8 w-[1px] bg-black/10" />
        <button className="flex flex-col gap-1 items-end group">
          <div className="h-[1.5px] w-5 bg-black" />
          <div className="h-[1.5px] w-3 bg-black transition-all group-hover:w-5" />
        </button>
      </div>
    </nav>
  );
};
