"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const checkIcon = (
  <svg width="12" height="10" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="mb-4 flex items-center text-[13px] font-black uppercase tracking-tight text-slate-600 dark:text-slate-300"
    >
      <motion.span
        whileHover={{ scale: 1.2, rotate: 360 }}
        className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-200"
      >
        {checkIcon}
      </motion.span>
      {text}
    </motion.div>
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FDFDFF] py-20 dark:bg-[#0B1120] lg:py-32"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.12] dark:opacity-[0.2]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.span
                  animate={{ width: [0, 32] }}
                  className="h-[2px] bg-indigo-600"
                ></motion.span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600">
                  Company Profile
                </span>
              </div>

              <h2 className="mb-8 text-5xl font-[1000] leading-[0.85] tracking-tighter text-slate-900 dark:text-white lg:text-7xl">
                Gate One <br />{" "}
                <span className="text-indigo-600">Engineering.</span>
              </h2>

              <p className="mb-12 max-w-[520px] text-base font-medium leading-relaxed text-slate-500 dark:text-slate-300">
                We build the digital nervous systems for modern enterprises.
                From custom-mapped ERPs to interlocking HR modules, our software
                is designed for performance, scale, and zero-latency logic.
              </p>

              <div className="grid grid-cols-1 gap-x-8 rounded-3xl border border-slate-100 bg-slate-50/50 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:grid-cols-2">
                <div>
                  <List text="Enterprise ERP" delay={0.1} />
                  <List text="HR Core Modules" delay={0.2} />
                  <List text="FinTech & Payroll" delay={0.3} />
                </div>
                <div>
                  <List text="IoT Integrations" delay={0.4} />
                  <List text="Custom SaaS Dev" delay={0.5} />
                  <List text="24/7 Tech Support" delay={0.6} />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 w-full px-4 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto aspect-square max-w-[500px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-100 dark:border-indigo-500/20"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 h-full w-full overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:border-white/5 dark:bg-[#151C2C]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2.8rem] bg-slate-50 dark:bg-[#1E2638]">
                  <Image
                    src="/images/about/about-image.svg"
                    alt="Gate One Soft Identity"
                    fill
                    className="object-cover p-12 opacity-100"
                  />

                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute right-10 top-10 h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-6 -top-6 z-20 flex items-center gap-4 rounded-2xl border border-slate-50 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#1E2638]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-[1000] leading-none text-slate-900 dark:text-white">
                    99.9%
                  </div>
                  <div className="mt-1 text-[9px] font-black uppercase tracking-widest text-indigo-600">
                    System Pulse
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
