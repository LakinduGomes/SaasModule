"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  question: string;
  answer: string;
  index: number;
}

const FaqItem = ({ question, answer, index }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
        open 
          ? "bg-white dark:bg-gray-900 border-primary shadow-2xl shadow-primary/10" 
          : "bg-white/40 dark:bg-white/5 border-gray-200 dark:border-gray-800 hover:border-primary/40"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 px-6 md:px-10 text-left relative z-10"
      >
        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border transition-all duration-500 ${
          open ? "bg-primary border-primary text-white scale-110" : "border-gray-200 dark:border-gray-700 text-gray-400"
        }`}>
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </div>

        <h3 className={`flex-1 text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
          open ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"
        }`}>
          {question}
        </h3>

        <div className="relative w-5 h-5 shrink-0 flex items-center justify-center">
          <div className={`absolute w-full h-0.5 bg-current rounded-full transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
          <div className={`absolute w-0.5 h-full bg-current rounded-full transition-transform duration-500 ${open ? "rotate-90 opacity-0" : ""}`} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 md:px-10 pb-8 md:pl-[6.5rem]">
              <div className="h-px w-full bg-gradient-to-r from-primary/20 to-transparent mb-6" />
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;