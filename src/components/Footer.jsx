import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="py-12 border-t border-white/10 bg-slate-900/30 backdrop-blur-md">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="mb-6 text-2xl font-bold text-white">Angels Regional Canopy Enterprises</h2>
        <div className="flex justify-center gap-8 mb-8 text-sm text-slate-400">
           <a href="mailto:contact@arce.com" className="hover:text-white">Email Us</a>
           <a href="https://wa.me/" className="hover:text-white">WhatsApp</a>
        </div>
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Angels Regional Canopy Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
