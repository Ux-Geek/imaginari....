import { motion } from "framer-motion";

export const SideNav = () => {
  const navItems = [
    { 
      label: "Story", 
      href: "#story",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      label: "Catalogue", 
      href: "#catalogue",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      label: "Archive", 
      href: "#archive",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: "Contact", 
      href: "#contact",
      icon: (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <nav className="fixed top-6 right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 z-[100] h-[50px] w-auto max-w-[700px] flex items-center gap-8 px-6 md:px-10 bg-white border border-black/5 shadow-sm rounded-md transition-all">
      {/* Brand/Logo */}
      <div className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-black font-bold border-r border-black/5 pr-8 mr-2">
        Imaginari
      </div>

      {/* Main Nav Items */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              style={{ color: '#555555' }}
              className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase hover:text-black transition-colors duration-300"
            >
              <span className="opacity-60">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Actions */}
      <div className="flex md:hidden items-center gap-6">
        <button style={{ color: '#555555' }} className="text-[10px] tracking-[0.2em] uppercase font-medium">
          Cart (0)
        </button>
        <button className="flex flex-col gap-1.5 items-end group focus:outline-none">
          <div className="h-[1.5px] w-5 bg-[#555555]" />
          <div className="h-[1.5px] w-3 bg-[#555555] transition-all group-hover:w-5" />
        </button>
      </div>

      {/* Desktop Cart */}
      <div className="hidden md:flex items-center gap-3 pl-4 border-l border-black/5 ml-2">
        <svg className="w-3.5 h-3.5 opacity-60" style={{ color: '#555555' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <div style={{ color: '#555555' }} className="text-[9px] tracking-[0.2em] uppercase">
          Cart (0)
        </div>
      </div>
    </nav>
  );
};
