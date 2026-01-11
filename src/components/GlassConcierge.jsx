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
    // hello, i have been redirected from your website. i am interested in ...
    const baseMessage = "hello, i have been redirected from your website. i am interested in ";
    const fullMessage = `${baseMessage}${text.toLowerCase()}`;
    const url = `https://wa.me/254745290191?text=${encodeURIComponent(fullMessage)}`;
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-16 h-16 transition-colors rounded-full shadow-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-indigo-500/50"
        aria-label="Toggle Concierge"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </motion.button>
    </div>
  );
};

export default GlassConcierge;
