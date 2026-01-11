import React from 'react';
import { motion } from 'framer-motion';

const CeoCorner = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2 lg:gap-20 items-center">
        
        {/* Image Placeholder */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="relative aspect-square"
        >
          <div className="absolute inset-0 rotate-6 rounded-3xl bg-white/5 backdrop-blur-sm" />
          <div className="absolute inset-0 overflow-hidden border -rotate-3 rounded-3xl bg-white/10 border-white/20 backdrop-blur-md">
            <img src="/ceo.jpg" alt="Angeline Maundu" className="object-cover w-full h-full" />
          </div>
        </motion.div>

        {/* Note */}
        <div className="flex flex-col justify-center">
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="mb-6 text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200"
          >
            A Note from the Founder
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="p-8 border shadow-lg rounded-2xl bg-white/5 border-white/10 backdrop-blur-md"
          >
            <p className="text-lg italic leading-relaxed text-slate-300">
              "At Angels Regional, we believe in quality that protects and serves. Whether it's the tools you teach with or the tech you work with, we have you covered. We don't just supply products; we build relationships under one transparent canopy."
            </p>
            <div className="mt-6">
              <p className="font-bold text-white">Angeline Maundu</p>
              <p className="text-sm text-white/50">Founder & CEO</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CeoCorner;
