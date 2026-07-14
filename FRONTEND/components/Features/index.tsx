"use client";

import { useState, useEffect } from "react";
import SingleFeature from "./SingleFeature";
import featuresData, { EnhancedFeature } from "./featuresData";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<EnhancedFeature | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    if (activeFeature) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [activeFeature]);

  return (
    <section id="features" ref={containerRef} className="relative py-20 lg:py-32 bg-[#FDFDFF] dark:bg-[#02040a] overflow-hidden">
      
      {/* Background elements */}
      <motion.div style={{ y: backgroundY }} className="absolute top-0 left-0 w-full h-[120%] opacity-[0.05] dark:opacity-[0.08] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.8px, transparent 0.8px)', backgroundSize: '48px 48px' }}></div>
      </motion.div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-200/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase mb-6 block tracking-[0.5em]">
            HR CORE MODULES
          </motion.span>
          <h2 className="text-5xl lg:text-7xl font-[1000] tracking-tighter text-slate-900 dark:text-white leading-[0.9] mb-4">
            Modular <span className="text-indigo-600">Architecture.</span>
          </h2>
          <div className="h-1.5 w-12 bg-indigo-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {featuresData.map((feature, index) => (
            <div key={feature.id} onClick={() => setActiveFeature(feature)} className="cursor-pointer">
              <SingleFeature feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
  {activeFeature && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={() => setActiveFeature(null)}
        className="absolute inset-0 bg-slate-200/40 backdrop-blur-md dark:bg-black/60"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-lg md:max-w-3xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white dark:border-white/10 overflow-hidden flex flex-col md:flex-row pointer-events-auto"
      >
        <button 
          onClick={() => setActiveFeature(null)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div className="w-full md:w-[40%] h-48 md:h-auto overflow-hidden">
          <img 
            src={activeFeature.image} 
            className="w-full h-full object-cover" 
            alt={activeFeature.title}
          />
        </div>

        <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-600 rounded-xl text-white scale-75 origin-left">
              {activeFeature.icon}
            </div>
            <span className="text-indigo-600 font-bold text-[10px] tracking-widest uppercase">Module</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            {activeFeature.title}
          </h3>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
            {activeFeature.paragraph} Deploy this core module to synchronize your data across all organizational branches.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {activeFeature.highlights.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                <div className="h-1 w-1 rounded-full bg-indigo-500" />
                {item}
              </div>
            ))}
          </div>

          <button className="w-full py-3.5 bg-slate-900 dark:bg-white dark:text-black text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Features;