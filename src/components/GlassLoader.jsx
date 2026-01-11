import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlassLoader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const text = "Angels Regional Canopy Enterprises";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500); // Slight delay before unmounting
          return 100;
        }
        return prev + 1; // Adjust speed here
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-3xl"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
    >
      {/* Glowing Orb */}
      <motion.div
        className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_60px_rgba(99,102,241,0.6)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Text Reveal */}
      <h1 className="mb-8 text-2xl font-light tracking-widest text-white md:text-3xl">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.5,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* Glass Tube Progress Bar */}
      <div className="relative w-64 h-4 overflow-hidden rounded-full bg-white/10 md:w-96 backdrop-blur-md ring-1 ring-white/20">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-400 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <p className="mt-2 text-sm font-mono text-white/50">{progress}%</p>
    </motion.div>
  );
};

export default GlassLoader;
