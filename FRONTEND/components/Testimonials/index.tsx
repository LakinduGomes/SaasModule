"use client";
import SingleTestimonial from "./SingleTestimonial";
import { motion } from "framer-motion";
const testimonialData = [
  {
    id: 1,
    name: "Mr. Surendra Jayarathne",
    designation: "SAP Consultant",
    content: "We are extremely satisfied with their professionalism, technical capabilities, and commitment to delivering results. Gate One Soft has proven to be a valuable technology partner, and we look forward to working with them again in the future.",
    star: 5,
    image: "",
  },
  {
    id: 2,
    name: "Mr. Thilanka Rusiru",
    designation: "CFO Vasan EyeCare Hospital",
    content: "From start to finish, their attention to detail and commitment to our goals were evident. Gate One Soft delivered on every promise with outstanding clarity and precision. We're incredibly pleased with the outcome and highly recommend them for future projects.",
    star: 5,
    image: "",
  },
  {
    id: 3,
    name: "Dr. A A Kapila Jayanath",
    designation: "Consultant Family Physician",
    content: "Gate One is an excellent system. Most important thing was I could amalgamate it with my EMR. I highly recommend this.",
    star: 5,
    image: "",
  },
  {
    id: 4,
    name: "Mrs. Yamuna Wijesinghe",
    designation: "CFO Majestic City",
    content: "Gate One Soft worked closely with us to bring our ideas to life. Their attention to detail, creativity, and timely delivery made a real difference. The whole process felt effortless, and the outcome exceeded our expectations. We highly recommend them.",
    star: 5,
    image: "",
  },
  {
    id: 5,
    name: "Dr. Parakrama Warnasooriya",
    designation: "Director of Falcon Hospital",
    content: "Gate One Soft impressed us with their streamlined process and clear communication. Every step of the way, their team delivered practical solutions and thoughtful suggestions. The result was a smooth. We’re very happy with their service and dedication.",
    star: 5,
    image: "",
  },
  {
    id: 6,
    name: "Mrs. Majini Mallawaarachchi",
    designation: "Director Diaper Deal",
    content: "Gate One Soft went above and beyond to understand our needs and build a product that truly represents our brand. The experience was smooth, insightful, and highly professional. We are extremely satisfied and grateful for their dedication and top-tier work.",
    star: 5,
    image: "",
  },
];

const Testimonials = () => {
  const scrollingData = [...testimonialData, ...testimonialData, ...testimonialData];

  return (
    <section className="relative z-10 py-20 lg:py-28 bg-[#FDFDFF] dark:bg-[#02040a] overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="container relative z-10">
        
        <div className="mb-16 text-center mx-auto max-w-[800px]">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 block text-xs font-black uppercase tracking-[0.3em] text-indigo-600"
          >
            Client Reviews
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[1000] leading-[1] tracking-[-0.04em] text-slate-900 dark:text-white"
          >
            Client <span className="text-indigo-600">Success Stories.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 mx-auto max-w-[600px] text-base font-medium leading-relaxed text-slate-500 dark:text-slate-400"
          >
            Hear from the organizations across Sri Lanka that rely on our engineering to power their daily operations and long-term digital growth.
          </motion.p>
        </div>

        
        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#FDFDFF] dark:from-[#02040a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#FDFDFF] dark:from-[#02040a] to-transparent" />

          <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">
          {scrollingData.map((testimonial, i) => (
            <div key={i} className="w-[360px] flex-shrink-0 py-4">
              {/* THE FIX: Pass the testimonial data to the component here */}
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
        </div>

        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Built for Excellence</span>
           <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-800" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Verified Partnerships</span>
           <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-800" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Deployment Support</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333%)); }
        }
        .animate-scroll {
          animation: scroll 65s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;