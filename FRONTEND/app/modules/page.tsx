"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ModulesPage = () => {
  const [activeFeature, setActiveFeature] = useState<any>(null);

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    if (activeFeature) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [activeFeature]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div ref={scrollRef}>
      <section className="relative pb-[120px] pt-[160px] bg-[#FDFDFF] dark:bg-[#02040a] overflow-hidden">
        
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 left-0 w-full h-[120%] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        >
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', 
              backgroundSize: '40px 40px' 
            }}
          ></div>
        </motion.div>

        <div className="container relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 border-l-4 border-indigo-600 pl-6"
          >
            <h2 className="text-3xl font-[1000] tracking-tighter text-slate-900 dark:text-white uppercase sm:text-4xl">
              Modular <span className="text-indigo-600">Architecture</span>
            </h2>
            <p className="mt-4 max-w-[700px] text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              Our proprietary suite of interlocking engines is designed to power enterprise workforce logic.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuresData.map((feature, index) => (
              <div key={feature.id} onClick={() => setActiveFeature(feature)} className="cursor-pointer">
                <SingleFeature feature={feature} index={index} />
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 group relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-10 lg:p-14 text-white shadow-2xl"
          >
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-400 blur-[100px]"
            />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-10">
              <div className="max-w-xl">
                <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Infrastructure
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4 leading-none">Enterprise Ready Deployment</h3>
                <p className="text-indigo-100 text-sm font-medium leading-relaxed">
                  Hardware-abstracted logic supporting biometric integration and full API scalability.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-indigo-600 shadow-xl transition-all hover:bg-slate-50">
                  Technical Specs
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeFeature && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 overflow-hidden">
            
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
              className="relative w-full max-w-lg md:max-w-3xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-white dark:border-white/10 overflow-hidden flex flex-col md:flex-row pointer-events-auto"
            >
              <button 
                onClick={() => setActiveFeature(null)}
                className="absolute top-5 right-5 z-[110] p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:rotate-90 transition-transform duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              <div className="w-full md:w-[40%] h-48 md:h-auto overflow-hidden">
                <img 
                  src={activeFeature.image} 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                  alt={activeFeature.title}
                />
              </div>

              <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-600 rounded-xl text-white scale-75">
                    {activeFeature.icon}
                  </div>
                  <span className="text-indigo-600 font-black text-[10px] tracking-[0.3em] uppercase">Module</span>
                </div>

                <h3 className="text-3xl font-[1000] text-slate-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">
                  {activeFeature.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  {activeFeature.paragraph} Deploy this core engine to synchronize logic across your organizational branches.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activeFeature.highlights?.slice(0, 4).map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                      {item}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveFeature(null)}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]"
                >
                  Confirm Integration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModulesPage;