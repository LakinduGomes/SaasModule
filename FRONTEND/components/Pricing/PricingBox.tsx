"use client";
import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import OfferList from "./OfferList";

const PricingBox = ({
  packageName,
  price,
  subtitle,
  onStartTrial,
  categories,
  isRecommended,
}) => {
  const [showMore, setShowMore] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const allItems = categories.flatMap((cat) =>
    cat.items.map((item) => ({ category: cat.title, text: item })),
  );
  const visibleItems = showMore ? allItems : allItems.slice(0, 4);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative rounded-[2.5rem] border p-8 transition-all duration-500 ${
        isRecommended
          ? "z-10 scale-105 border-indigo-500 bg-indigo-50/30 shadow-2xl dark:bg-indigo-500/5"
          : "border-slate-200 bg-white hover:border-indigo-400 dark:border-white/10 dark:bg-[#0b1120]"
      }`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(79, 70, 229, 0.1), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {packageName}
            </h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-[1000] tracking-tighter text-slate-900 dark:text-white">
                {price.split("/")[0]}
              </span>
              <span className="text-xs font-bold uppercase tracking-tighter text-slate-500">
                / Emp
              </span>
            </div>
          </div>
          {isRecommended && (
            <span className="rounded-md bg-indigo-600 px-2 py-1 text-[9px] font-black uppercase text-white">
              Popular
            </span>
          )}
        </div>

        <div className="mb-6 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 dark:border-white/5 dark:bg-white/5">
          {subtitle}
        </div>

        <div className="mb-6 flex-grow space-y-2">
          {visibleItems.map((item, idx) => (
            <OfferList
              key={idx}
              text={item.text}
              status="active"
              category={item.category}
            />
          ))}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:underline"
          >
            {showMore ? "↑ Show Less" : "↓ View More Modules"}
          </button>
        </div>

        <button
          onClick={onStartTrial}
          className={`w-full rounded-2xl py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
            isRecommended
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-700"
              : "bg-slate-900 text-white dark:bg-white dark:text-black"
          }`}
        >
          Begin 7-Day Trial
        </button>
      </div>
    </motion.div>
  );
};

export default PricingBox;
