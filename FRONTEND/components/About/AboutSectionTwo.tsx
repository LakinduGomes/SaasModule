"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSectionTwo = () => {
  const features = [
    {
      index: "01",
      title: "Bug Free Code",
      desc: "High-integrity HR operations powered by automated QA and unit testing.",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      index: "02",
      title: "Premier Support",
      desc: "On-ground Sri Lankan experts providing rapid response and maintenance.",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      index: "03",
      title: "Secure Cloud Logic",
      desc: "End-to-end encryption and ISO-standard data residency protocols.",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FDFDFF] py-20 dark:bg-[#020617] lg:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.03] dark:opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#4f46e5 0.5px, transparent 0.5px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-[500px]">
            <h2 className="mb-4 text-4xl font-[1000] uppercase leading-none tracking-tighter text-slate-900 dark:text-white lg:text-6xl">
              Operational <span className="text-indigo-600">Prowess.</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Standardizing Excellence in HR Tech
            </p>
          </div>
          <div className="mx-8 mb-4 hidden h-[1px] flex-grow bg-slate-100 dark:bg-slate-800 md:block" />
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative mx-auto aspect-square max-w-[400px] lg:mx-0"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-indigo-100 dark:border-indigo-900/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-dashed border-slate-200 dark:border-slate-800"
              />

              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src="/images/about/about-image-2.svg"
                  alt="Technical Ops"
                  width={280}
                  height={280}
                  className="relative z-10 dark:hidden"
                />
                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="Technical Ops"
                  width={280}
                  height={280}
                  className="relative z-10 hidden dark:block"
                />
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-start gap-6 rounded-3xl border border-slate-100 bg-white/50 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-white/5 dark:bg-slate-900/50 sm:flex-row sm:items-center"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner transition-all group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-900/20">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold tracking-tighter text-indigo-600/40">
                        {item.index}
                      </span>
                      <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden -translate-x-2 pr-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                    <svg
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M13 7l5 5-5 5M6 7l5 5-5 5"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
