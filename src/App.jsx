import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassLoader from './components/GlassLoader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import CeoCorner from './components/CeoCorner';
import GlassConcierge from './components/GlassConcierge';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <GlassLoader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen font-sans text-slate-100"
          >
            <Navbar />
            <main className="relative z-10 space-y-24 pb-36">
              <HeroSection />
              <ServicesGrid />
              <CeoCorner />
            </main>
            <GlassConcierge />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
