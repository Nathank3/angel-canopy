import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5 backdrop-blur-md"
    >
      <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
        ARCE
      </div>
      <button 
        className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 backdrop-blur-sm"
        onClick={() => window.location.href = '#footer'}
      >
        Contact CEO
      </button>
    </motion.nav>
  );
};

export default Navbar;
