import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden px-4 text-center pt-20">
      
      {/* Abstract Glass Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 backdrop-blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
       <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 backdrop-blur-3xl"
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Content */}
      <div className="z-10 w-full max-w-5xl space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-4"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-white to-white/70">
            Everything You Need.<br />
            <span className="text-white/80">Under One Canopy.</span>
          </h1>
          <p className="text-xl font-light text-blue-100/80 md:text-2xl">
            Premium Supplies. Modern Tech. Creative Design.
          </p>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-2xl md:rounded-3xl border border-white/10"
        >
          {/* Glass Overlay/Sheen */}
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none mix-blend-overlay" />
          
          <img 
            src="/hero-image.png" 
            alt="Workspace with laptop and supplies" 
            className="object-cover w-full h-auto aspect-[16/9]"
          />
          
          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
