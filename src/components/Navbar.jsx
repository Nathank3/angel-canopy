import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Close menu on click
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={`sticky top-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled 
          ? "border-b border-white/5 bg-slate-900/80 backdrop-blur-md shadow-lg" 
          : "border-transparent bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          className="w-auto h-12 text-white"
          aria-label="Angels Regional Canopy Enterprises Logo"
        >
          <defs>
            <linearGradient id="canopyGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M15,85 C15,85 25,20 65,15 C85,12.5 95,30 95,30 C95,30 85,5 55,10 C25,15 5,85 5,85 Z"
            fill="url(#canopyGradient)"
          />
          <circle
            cx="55"
            cy="55"
            r="12"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="relative text-sm font-medium text-slate-300 transition-colors hover:text-white group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all group-hover:w-full" />
          </button>
        ))}
      </div>

      <button
        className="hidden px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full md:block bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 backdrop-blur-sm"
        onClick={() => window.location.href = '#footer'}
      >
        Contact Us
      </button>

      {/* Mobile Menu Toggle */}
      <button 
        className="p-2 text-white transition-colors rounded-lg md:hidden hover:bg-white/10"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 w-full overflow-hidden shadow-xl top-full bg-slate-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4 border-t border-white/10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-3 text-lg font-medium text-left text-slate-300 transition-colors rounded-lg hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </button>
              ))}
              <hr className="border-white/10" />
              <button
                className="w-full px-6 py-3 text-lg font-medium text-center text-white transition-all duration-300 rounded-lg bg-indigo-600/80 hover:bg-indigo-600"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '#footer';
                }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
