"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

const brandsData = [
  { id: 1,  name: "Accountlogist",  image: "/images/brands/accountlogist.png" },
  { id: 2,  name: "Bizadvisor",     image: "/images/brands/bizadvisor.svg" },
  { id: 3,  name: "Cinnalanka",     image: "/images/brands/cinnalanka2.png" },
  { id: 4,  name: "Cinnaro",        image: "/images/brands/cinnaroo.png" },
  { id: 5,  name: "Githnara",       image: "/images/brands/githnara2.png" },
  { id: 6,  name: "Property",       image: "/images/brands/property.png" },
  { id: 7,  name: "Agra",           image: "/images/brands/agra.jpeg" },
  { id: 8,  name: "Company",        image: "/images/brands/company.jpeg" },
  { id: 9,  name: "Electrical",     image: "/images/brands/electrical.jpeg" },
  { id: 10, name: "Rase",           image: "/images/brands/rase.jpeg" },
  { id: 11, name: "Synergy",        image: "/images/brands/synergy.jpeg" },
  { id: 12, name: "Talent",         image: "/images/brands/talent.jpeg" },
  // { id: 13, name: "Airforce",       image: "/images/brands/airforce.png" },
  // { id: 14, name: "CEAT",           image: "/images/brands/ceat.png" },
  // { id: 15, name: "Vasan",          image: "/images/brands/vasan.png" },
  // { id: 16, name: "Majestic City",  image: "/images/brands/mc.png" },
  // { id: 17, name: "Intelliglows",   image: "/images/brands/intelliglows.png" },
  // { id: 18, name: "Lead",           image: "/images/brands/lead1.png" },
  // { id: 19, name: "Diaper Deal",    image: "/images/brands/diaperdeal.png" },
  // { id: 20, name: "Diaper Store",   image: "/images/brands/diaperstore.png" },
  // { id: 21, name: "Well Living",    image: "/images/brands/well-living.png" },
  // { id: 22, name: "Falcon",         image: "/images/brands/falcon.png" },
  // { id: 23, name: "MNM",            image: "/images/brands/mnm.png" },
  // { id: 24, name: "Hi Bakers",      image: "/images/brands/hibakers.png" },
  // { id: 25, name: "Janatha",        image: "/images/brands/janatha.png" },
  // { id: 26, name: "C Needs",        image: "/images/brands/cneeds.png" },
  // { id: 27, name: "Prime",          image: "/images/brands/prime.png" },
  { id: 28, name: "Abda",           image: "/images/brands/abda.png" },
  { id: 29, name: "Dilantha",       image: "/images/brands/dilantha.png" },
  { id: 30, name: "Everest",        image: "/images/brands/Everest.png" },
  { id: 31, name: "Evoke",          image: "/images/brands/Evoke.png" },
  { id: 32, name: "Global",         image: "/images/brands/Global.png" },
  { id: 33, name: "Sakura",         image: "/images/brands/Sakura.png" },
  { id: 34, name: "LC",             image: "/images/brands/lc.png" },
  { id: 35, name: "UMS",            image: "/images/brands/ums.png" },
  { id: 36, name: "Printek",        image: "/images/brands/printek.jpg" },
  { id: 37, name: "Sahal",          image: "/images/brands/Sahal.png" },
  { id: 38, name: "Dragon",         image: "/images/brands/Dragon.png" },
  { id: 39, name: "Manath",         image: "/images/brands/Manath.png" },
  { id: 40, name: "Pro Realtors",   image: "/images/brands/Prorealtors.png" },
  // { id: 41, name: "TC",             image: "/images/brands/Tc.png" },
  { id: 42, name: "Agra G1",        image: "/images/brands/Agra.png" },
];

const Hero = () => {
  const scrollingBrands = [...brandsData, ...brandsData];

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] w-full flex items-center overflow-hidden bg-[#FDFDFF] pt-24 lg:pt-20 pb-12 lg:pb-0">

      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[150%] lg:w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#6366f1_0%,#4f46e5_30%,#312e81_70%)] opacity-[0.95] [clip-path:polygon(100%_0%,100%_100%,0%_100%,35%_0%)] lg:[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] rounded-bl-[60px] lg:rounded-bl-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="h-[2px] w-8 bg-indigo-600 hidden lg:block" />
              <span className="text-[10px] font-[900] uppercase tracking-[0.3em] text-white/80 lg:text-indigo-600">GateOneSoft Protocol v9.0</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mb-6 text-5xl lg:text-7xl font-[1000] leading-[1.05] tracking-tight text-white lg:text-slate-900">
              Redefine Your <br /><span className="text-cyan-300 lg:text-indigo-600">HR Potential.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mb-10 max-w-lg mx-auto lg:mx-0 text-base lg:text-lg font-bold text-black lg:text-black leading-relaxed">
              Empowering businesses smartly with an all-in-one modular SaaS solution. Optimize growth with high-fidelity automation and predictive culture tools.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link href="#deploy" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} className="w-full flex items-center justify-center gap-3 rounded-full bg-orange-500 lg:bg-indigo-600 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl">
                  <RocketLaunchIcon sx={{ fontSize: 18 }} /> Deploy Now
                </motion.button>
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border-2 border-white/30 lg:border-slate-200 bg-white/10 lg:bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-white lg:text-slate-700 hover:text-indigo-600 transition-all shadow-lg">
                Watch Vision
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <PlayArrowIcon sx={{ fontSize: 14 }} />
                </div>
              </button>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[450px] lg:min-h-[600px]">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative z-20 h-56 w-56 lg:h-80 lg:w-80 rounded-full border-[8px] border-white/20 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600" alt="Strategy" className="h-full w-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[340px] w-[340px] lg:h-[520px] lg:w-[520px] rounded-full border border-white/10 border-dashed animate-[spin_50s_linear_infinite]" />
              {[
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=200",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200",
              ].map((img, i) => {
                const rotation = i * 120;
                return (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute h-full w-full"
                    style={{ rotate: `${rotation}deg` }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16 lg:h-24 lg:w-24 rounded-full border-4 border-white overflow-hidden shadow-2xl"
                      style={{ rotate: `-${rotation}deg` }}
                    >
                      <img src={img} className="h-full w-full object-cover" alt="Node" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling brands strip */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white border-t border-slate-100 flex items-center overflow-hidden">
        <motion.div
          className="flex items-center gap-12 lg:gap-24 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {scrollingBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center justify-center min-w-[150px] transition-transform duration-300 hover:scale-110"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-10 lg:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = "text-sm font-black text-indigo-600 uppercase tracking-tighter";
                    span.innerText = brand.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;