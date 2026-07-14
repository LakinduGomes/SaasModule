"use client";

import { motion } from "framer-motion";

const NewsLatterBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="h-full relative group"
    >
      
      <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-[4rem] animate-[spin_20s_linear_infinite]" />
      
      <div className="h-full bg-gradient-to-b from-gray-900 to-black dark:from-primary/20 dark:to-primary/5 backdrop-blur-3xl rounded-[4rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/10 shadow-2xl">
        
        
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
          <div className="w-10 h-10 bg-primary rounded-full animate-pulse" />
        </div>

        <h3 className="text-3xl font-black text-white mb-4 leading-tight">
          Join the <br /> <span className="text-primary italic font-serif">Inner Circle</span>
        </h3>
        
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
          Exclusive HR insights and early access to features. No noise, just signal.
        </p>

        <div className="w-full space-y-4">
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white text-center outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-primary hover:text-white transition-colors">
            Subscribe
          </button>
        </div>

        <div className="mt-10 flex gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLatterBox;