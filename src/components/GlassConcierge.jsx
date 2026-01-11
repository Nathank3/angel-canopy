import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

const GlassConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Buy Laptops", text: "Hello, I am interested in buying laptops." },
    { label: "Order Detergents", text: "Hello, I would like to order detergents." },
    { label: "Graphic Design", text: "Hello, I have a graphic design inquiry." },
    { label: "General Inquiry", text: "Hello, I have a general question." },
  ];

  const handleOptionClick = (text) => {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 overflow-hidden border shadow-2xl w-80 rounded-2xl bg-slate-900/60 border-white/20 backdrop-blur-xl"
          >
            <div className="p-4 border-b border-white/10 bg-white/5">
              <h3 className="font-semibold text-white">Concierge</h3>
              <p className="text-xs text-slate-300">How can I help you today?</p>
            </div>
            <div className="p-2">
              {options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option.text)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm text-left text-white transition-colors rounded-xl hover:bg-white/10 group"
                >
                  {option.label}
                  <ChevronRight size={16} className="text-white/30 group-hover:text-white" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </motion.button>
    </div>
  );
};

export default GlassConcierge;
