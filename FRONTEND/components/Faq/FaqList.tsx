"use client";

import FaqItem from "./FaqItem";
import { faqData } from "./faqData";

const FaqList = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#FBFBFF] dark:bg-black overflow-hidden">
      <div className="absolute top-0 -right-[10%] w-[40%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -left-[10%] w-[40%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Help Center</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] mb-8">
              Got <span className="text-primary italic">Questions?</span><br />
              We have answers.
            </h2>
            
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-md">
              Everything you need to know about our HR & Payroll ecosystem. Can't find an answer? Our support engineers are 1-click away.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                Contact Support
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-800 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-all">
                View Documentation
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {faqData.map((faq, index) => (
              <FaqItem 
                key={index} 
                index={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FaqList;