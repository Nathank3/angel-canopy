import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool, Laptop, Palette } from 'lucide-react';

const services = [
  {
    title: "Detergents & Cleaning",
    icon: <Sparkles className="w-8 h-8 text-cyan-300" />,
    desc: "Industrial grade cleaning solutions for homes and offices.",
  },
  {
    title: "Stationery & Supplies",
    icon: <PenTool className="w-8 h-8 text-pink-300" />,
    desc: "Premium office stationery and scholastic materials.",
  },
  {
    title: "Tech & Laptops",
    icon: <Laptop className="w-8 h-8 text-blue-300" />,
    desc: "Latest high-performance laptops and IT equipment.",
  },
  {
    title: "Graphic Design & Web",
    icon: <Palette className="w-8 h-8 text-purple-300" />,
    desc: "Modern branding, web design, and digital solutions.",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="px-6 py-20 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-cyan-100"
        >
          Our Services & Products
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.6 }}
           className="text-slate-300"
        >
          We offer a comprehensive range of premium supplies and digital solutions tailored to your needs. From keeping your environment pristine with our industrial-grade detergents to equipping your workspace with modern technology and creative branding.
        </motion.p>
      </div>
      <div className="grid max-w-7xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            className="p-8 transition-colors border shadow-xl rounded-2xl bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 group"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/5 group-hover:bg-white/10">
              {service.icon}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
            <p className="leading-relaxed text-slate-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
