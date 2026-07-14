"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    vision: "" 
  });

  return (
    <section id="contact" className="relative py-24 bg-slate-50 dark:bg-[#030303] overflow-hidden">
      
      <div className="absolute top-10 left-10 pointer-events-none select-none">
        <h1 className="text-[15vw] font-black text-gray-200/40 dark:text-white/[0.02] leading-none uppercase">CONNECT</h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, rotateY: -10 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            style={{ perspective: "1200px" }}
            className="w-full lg:w-2/3"
          >
            <div className="relative group bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/5 rounded-[3rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-none transition-transform duration-700 hover:rotate-x-1">
              
              <div className="mb-14">
                <span className="text-primary font-[1000] tracking-[0.3em] uppercase text-[10px]">Secure Gateway</span>
                <h2 className="text-5xl md:text-7xl font-[1000] text-gray-900 dark:text-white mt-4 tracking-tighter">
                  Let's Talk <span className="text-primary">.</span>
                </h2>
              </div>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative border-b-2 border-gray-100 dark:border-gray-800 focus-within:border-primary transition-colors py-2">
                    <label className="text-[10px] uppercase font-[1000] tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent outline-none text-lg font-bold py-2 text-black dark:text-white"
                      placeholder=""
                    />
                  </div>
                  <div className="relative border-b-2 border-gray-100 dark:border-gray-800 focus-within:border-primary transition-colors py-2">
                    <label className="text-[10px] uppercase font-[1000] tracking-widest text-gray-400">Work Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent outline-none text-lg font-bold py-2 text-black dark:text-white"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="relative border-b-2 border-gray-100 dark:border-gray-800 focus-within:border-primary transition-colors py-2">
                  <label className="text-[10px] uppercase font-[1000] tracking-widest text-gray-400">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent outline-none text-lg font-bold py-2 text-black dark:text-white"
                    placeholder="Gate One Engineering"
                  />
                </div>

                <div className="relative border-b-2 border-gray-100 dark:border-gray-800 focus-within:border-primary transition-colors py-2">
                  <label className="text-[10px] uppercase font-[1000] tracking-widest text-gray-400">Your Vision</label>
                  <textarea 
                    rows={3} 
                    className="w-full bg-transparent outline-none text-lg font-bold py-2 text-black dark:text-white resize-none"
                    placeholder="Describe the system you want to build..."
                  />
                </div>

                <button className="relative overflow-hidden group bg-primary text-white px-12 py-6 rounded-full font-[1000] text-xs uppercase tracking-[0.2em] transition-all hover:pr-16 active:scale-95">
                  <span className="relative z-10">Deploy Message</span>
                  <span className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-xl">→</span>
                </button>
              </form>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/3">
            <NewsLatterBox />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;