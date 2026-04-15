import { motion } from "framer-motion";

export const SideNav = () => {
  const navItems = [
    { 
      label: "Story", 
      href: "#story",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      label: "Catalogue", 
      href: "#catalogue",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      label: "Archive", 
      href: "#archive",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    { 
      label: "Contact", 
      href: "#contact",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] h-[50px] w-auto flex items-center gap-1 px-4 bg-white/80 backdrop-blur-md border border-black/5 shadow-sm rounded-full transition-all">
      {/* Logo mark */}
      <div className="flex items-center justify-center w-8 h-8 mr-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A75E" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v5l3 3" />
        </svg>
      </div>

      <div className="w-px h-5 bg-black/10 mx-1" />

      {/* Icon-only nav items */}
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              title={item.label}
              aria-label={item.label}
              style={{ color: '#555555' }}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 hover:text-black transition-all duration-200"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>

      <div className="w-px h-5 bg-black/10 mx-1" />

      {/* Cart icon only */}
      <a href="#cart" aria-label="Cart" className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-all duration-200" style={{ color: '#555555' }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </a>
    </nav>
  );
};
