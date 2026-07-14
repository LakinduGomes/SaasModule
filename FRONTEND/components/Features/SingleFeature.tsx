"use client";

import { motion } from "framer-motion";

const SingleFeature = ({ feature, index }: { feature: any; index: number }) => {
  const { icon, title, paragraph } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-[2.5rem] p-8 transition-all hover:border-indigo-400/50 hover:shadow-2xl active:scale-95"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex h-14 w-14 items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-2xl shadow-inner border border-slate-100 dark:border-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
          <div className="group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-50 dark:bg-indigo-500/20 p-2 rounded-full text-indigo-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l10-10M7 7h10v10"/></svg>
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
          {paragraph}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">Explore Module</span>
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-green-500" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;