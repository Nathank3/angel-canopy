import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden px-4 text-center">
      
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

      {/* Content */}
      <div className="z-10 max-w-4xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-tight text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-white to-white/70"
        >
          Everything You Need.<br />
          <span className="text-white/80">Under One Canopy.</span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8 }}
           className="text-xl font-light text-blue-100/80 md:text-2xl"
        >
          Premium Supplies. Modern Tech. Creative Design.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
