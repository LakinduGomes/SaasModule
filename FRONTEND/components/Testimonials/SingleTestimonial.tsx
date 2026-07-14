"use client";
import { Testimonial } from "@/types/testimonial";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const starIcon = (
  <svg width="12" height="12" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, content, designation } = testimonial;

  // Mouse Tracking for the "Rich Spotlight" Effect
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const ratingIcons = Array.from({ length: star }, (_, i) => (
    <motion.span 
      initial={{ rotate: -20, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      transition={{ delay: i * 0.1 }}
      key={i} 
      className="text-indigo-500"
    >
      {starIcon}
    </motion.span>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative h-full rounded-[2.5rem] border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-slate-900"
    >
      
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(79, 70, 229, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[2.4rem] bg-white px-8 py-10 dark:bg-[#030712]">
        
        
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 dark:bg-white/5 border border-slate-100 dark:border-white/10">
            {ratingIcons}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Verified Identity</span>
          </div>
        </div>

        
        <div className="relative flex-grow">
          <span className="absolute -left-4 -top-4 text-6xl font-serif text-slate-100 dark:text-white/5 pointer-events-none">“</span>
          <p className="relative z-10 text-lg font-semibold italic leading-relaxed text-slate-700 dark:text-slate-200">
            {content}
          </p>
        </div>

        
        <div className="mt-10 flex items-center gap-5">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/10 text-xl font-black text-indigo-600 shadow-sm">
              {name.charAt(0)}
            </div>
          </div>
          
          <div>
            <motion.h3 
              className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white"
            >
              {name}
            </motion.h3>
            <div className="mt-1 flex items-center overflow-hidden">
               <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="h-[1px] w-4 bg-indigo-500 mr-2"
               />
              <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-600/80">
                {designation}
              </p>
            </div>
          </div>
        </div>

        
        <div className="absolute -bottom-4 -right-2 rotate-12 select-none opacity-[0.02] dark:opacity-[0.05]">
          <h4 className="text-8xl font-black italic">TRUSTED</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;