import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, PhoneCall, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return "dark";
      if (saved === "light") return "light";
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Scroll observer to trigger background solidification
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Collapse drawer on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-cream-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo Brandmark */}
          <Link
            id="brand-logo"
            to="/"
            className="flex items-center gap-3 focus:outline-none group"
          >
            <div className="w-8 h-8 flex items-center justify-center border border-sage-500 rounded-none relative shrink-0">
              <div className="w-4 h-[1px] bg-sage-500 rotate-45"></div>
              <div className="w-4 h-[1px] bg-sage-500 -rotate-45 absolute animate-pulse"></div>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.2em] text-neutral-900 group-hover:text-sage-500 transition-colors duration-300">
                LEUR AESTHETICS
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-neutral-500 font-light mt-0.5">
                Clinical Skincare
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-10">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Treatments" },
              { path: "/about", label: "Our Story" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                    isActive
                      ? "text-sage-500"
                      : "text-neutral-500 hover:text-sage-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-sage-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Call-to-Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+13105550190"
              className="flex items-center text-neutral-500 hover:text-neutral-900 font-sans text-[10px] uppercase tracking-widest font-semibold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-2 text-sage-500" />
              <span>310.555.0190</span>
            </a>

            <button
              id="theme-toggle"
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-none border border-cream-200 hover:border-[#1A1A1A] text-neutral-500 hover:text-[#1A1A1A] transition-colors focus:outline-none bg-white cursor-pointer flex items-center justify-center"
              aria-label="Toggle application theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-sage-500" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <Link
              id="header-booking-cta"
              to="/booking"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-[11px] font-bold uppercase tracking-widest text-[#F7F6F4] bg-[#1A1A1A] rounded-none group transition-all duration-300 hover:bg-sage-500 focus:outline-none"
            >
              <span className="relative z-10">Book Care</span>
            </Link>
          </div>

          {/* Mobile Hamburguer Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              id="mobile-theme-toggle"
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-none border border-cream-200 text-neutral-500 transition-colors focus:outline-none bg-white cursor-pointer flex items-center justify-center"
              aria-label="Toggle application theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-sage-500" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link
              to="/booking"
              className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#F7F6F4] bg-[#1A1A1A] rounded-none hover:bg-sage-500 transition-all duration-200"
            >
              Book
            </Link>
            
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-950 hover:text-sage-500 dark:hover:text-sage-500 focus:outline-none p-1.5 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (with AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden w-full bg-white border-b border-cream-200 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-5 flex flex-col justify-center">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Treatments & services" },
                { path: "/about", label: "About our practice" },
                { path: "/contact", label: "Contact clinic" },
              ].map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block font-sans text-xs font-bold uppercase tracking-widest py-2.5 border-b border-cream-100 ${
                        isActive ? "text-sage-500 pl-2 border-sage-200" : "text-neutral-500 hover:text-neutral-900"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 * 0.08 }}
                className="pt-4 flex flex-col space-y-4"
              >
                <div className="flex items-center text-neutral-600 font-sans text-[11px] uppercase tracking-wider">
                  <PhoneCall className="w-4 h-4 mr-2.5 text-sage-500" />
                  <span>Clinical Line: 310.555.0190</span>
                </div>
                
                <Link
                  to="/booking"
                  className="w-full text-center py-4 bg-[#1A1A1A] text-[#F7F6F4] rounded-none text-xs font-bold uppercase tracking-widest hover:bg-sage-500 transition-colors duration-250"
                >
                  Schedule Initial consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
