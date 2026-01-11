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
      {/* Glowing Orb with Flying-in Logo */}
      <motion.div
        className="relative flex items-center justify-center w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 shadow-[0_0_60px_rgba(99,102,241,0.4)] backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          className="w-20 h-20"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5 
          }}
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M15,85 C15,85 25,20 65,15 C85,12.5 95,30 95,30 C95,30 85,5 55,10 C25,15 5,85 5,85 Z"
            fill="url(#loaderGradient)"
          />
          <circle
            cx="55"
            cy="55"
            r="12"
            fill="white"
            fillOpacity="1"
          />
        </motion.svg>
      </motion.div>

      {/* Text Reveal */}
      <h1 className="mb-8 px-4 text-2xl font-light tracking-widest text-center text-white md:text-3xl">
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
