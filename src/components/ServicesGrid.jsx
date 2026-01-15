import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, PenTool, Laptop, Palette } from 'lucide-react';

const services = [
  {
    title: "Detergents & Cleaning",
    icon: <Sparkles className="w-8 h-8 text-cyan-300" />,
    desc: "Industrial grade cleaning solutions for homes and offices.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Stationery & Supplies",
    icon: <PenTool className="w-8 h-8 text-pink-300" />,
    desc: "Premium office stationery and scholastic materials.",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Tech & Laptops",
    icon: <Laptop className="w-8 h-8 text-indigo-300" />,
    desc: "Latest high-performance laptops and IT equipment.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Graphic Design & Web",
    icon: <Palette className="w-8 h-8 text-purple-300" />,
    desc: "Modern branding, web design, and digital solutions.",
    color: "from-violet-500 to-purple-500"
  },
];

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ServiceCard = ({ title, icon, desc, color, index }) => {
  const ref = useRef(null);

  // Mouse position mechanism for TILT (percentages)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse position mechanism for SPOTLIGHT (pixels)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse motion for the tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Tilt transformations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [ROTATION_RANGE, -ROTATION_RANGE]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-ROTATION_RANGE, ROTATION_RANGE]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative h-full w-full rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-white/10 p-8 backdrop-blur-xl group"
    >
      {/* 3D Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="relative z-10 flex flex-col h-full"
      >
        <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 shadow-lg shadow-${color}/20 ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {icon}
          </div>
        </div>
        
        <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
          {title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {desc}
        </p>
      </div>

      {/* Spotlight Effect Overlay - Primary */}
       <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
             background: useMotionTemplate`radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )`
        }}
      />
      
      {/* Spotlight Effect Overlay - Border Highlight (Optional extra layer) */}
      <motion.div
        className="absolute inset-x-0 inset-y-0 z-0 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
             background: useMotionTemplate`radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.05),
              transparent 80%
            )`
        }}
       />

    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section id="services" className="relative px-6 py-24 overflow-hidden bg-slate-950 scroll-mt-20">
        
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#050505] to-[#050505] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="max-w-3xl mx-auto mb-20 text-center">
            
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md"
          >
            <span className="text-sm font-semibold tracking-wide uppercase text-indigo-300">
               Premium Solutions
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400"
          >
            Elevate Your <span className="text-indigo-400">Experience</span>
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-lg text-slate-400 leading-relaxed"
          >
            Discover our curated suite of services designed to empower your business and lifestyle. 
            From industrial necessities to digital innovation.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {services.map((service, index) => (
            <div key={index} className="h-full">
               <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
