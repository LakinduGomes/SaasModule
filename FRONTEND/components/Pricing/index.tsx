"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import { API_BASE_URL } from '../../config';

// ----------------------------------------------------------------------
// Configuration
// ----------------------------------------------------------------------
type UserType = "normal" | "google" | null;

interface UserData {
  companyName: string;
  email: string;
  phone: string;
  location: string;
  staffCount: string;
}

// ----------------------------------------------------------------------
// Form Input Component (Helper)
// ----------------------------------------------------------------------
interface FormInputProps {
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    readOnly: boolean;
    onChange: (value: string) => void;
}

const FormInput = ({ label, type = "text", placeholder, value, readOnly, onChange }: FormInputProps) => (
  <div className={`group space-y-2 ${readOnly ? 'opacity-70' : ''}`}>
    <div className="flex justify-between items-center ml-1">
        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-indigo-600 transition-colors duration-300">
        {label}
        </label>
        {readOnly && (
            <span className="text-[8px] font-bold text-slate-500 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Locked
            </span>
        )}
    </div>
    <div className="relative">
      <input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`w-full rounded-2xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5 px-6 py-4 text-xs font-bold text-slate-900 dark:text-white outline-none transition-all duration-300 
        ${readOnly ? 'cursor-not-allowed bg-slate-50 dark:bg-black/20 text-slate-500' : 'focus:bg-white dark:focus:bg-black/40 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50'}`}
      />
    </div>
  </div>
);

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------
const Pricing = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  
  const [userType, setUserType] = useState<UserType>(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState<UserData>({
    companyName: "",
    email: "",
    phone: "",
    location: "",
    staffCount: "5", // Default value as requested
  });

  const pillars = [
    { title: "Core Architecture", points: ["Employee Master Data", "Governance & Admin", "Asset Tracking"] },
    { title: "Financial Engine", points: ["Precision Payroll", "Loan Management", "Statutory Compliance"] },
    { title: "Operations Hub", points: ["Attendance & Leave", "Roster Control", "Events & Incidents"] },
    { title: "Talent Strategy", points: ["Recruitment Pipeline", "Performance Appraisal", "Analytics"] },
  ];

  // ----------------------------------------------------------------------
  // Skeleton Loader (New Component)
  // ----------------------------------------------------------------------
  const FormSkeleton = () => (
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
      {/* Generate 5 placeholder inputs to match your form */}
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="space-y-2">
          <div className="h-2 w-20 bg-slate-200 dark:bg-white/10 rounded-full" />
          <div className="h-[52px] w-full bg-slate-100 dark:bg-white/5 rounded-2xl" />
        </div>
      ))}
      {/* The Full Width Location Field */}
      <div className="sm:col-span-2 space-y-2">
        <div className="h-2 w-24 bg-slate-200 dark:bg-white/10 rounded-full" />
        <div className="h-[52px] w-full bg-slate-100 dark:bg-white/5 rounded-2xl" />
      </div>
      {/* The Button Placeholder */}
      <div className="sm:col-span-2 pt-2">
        <div className="h-16 w-full bg-slate-200 dark:bg-white/10 rounded-2xl" />
      </div>
    </div>
  );

  // ----------------------------------------------------------------------
  // FETCH USER DATA (When Modal Opens)
  // ----------------------------------------------------------------------
  useEffect(() => {
    if (showModal) {
      fetchUserProfile();
    }
  }, [showModal]);

  const fetchUserProfile = async () => {
    setIsLoading(true);
    // Safe check for window existence to avoid SSR errors
    const token = typeof window !== 'undefined' ? (localStorage.getItem('auth_token') || localStorage.getItem('token')) : null; 

    if (!token) {
        setIsLoading(false);
        setShowModal(false);
        // Force login if guest
        Swal.fire({
            icon: 'info',
            title: 'Login Required',
            text: 'Please sign in to initialize your workspace.',
            confirmButtonColor: '#000',
        }).then(() => router.push("/signin"));
        return;
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/user-profile`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = response.data;
        setUserType(data.provider);

        setFormData({
            companyName: data.company_name || "", 
            email: data.company_email || data.email || "", 
            phone: data.company_phone || "", 
            location: data.company_address || "",
            staffCount: "5", // Default start at 5
        });

    } catch (error: any) {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            router.push("/signin");
        } else {
            console.error(error);
        }
    } finally {
        setIsLoading(false);
    }
  };

  // ----------------------------------------------------------------------
  // LOGIC: Who can edit what?
  // ----------------------------------------------------------------------
  const isFieldReadOnly = (field: keyof UserData) => {
    if (isLoading) return true;

    // SCENARIO 1: GOOGLE USER
    // They have no company data yet. They must fill everything except their email (which comes from Google).
    if (userType === "google") {
      return field === "email"; // Only Email is locked
    }

    // SCENARIO 2: NORMAL USER
    // They already filled company data during signup. They can ONLY edit staffCount.
    if (userType === "normal") {
      return field !== "staffCount";
    }

    return false;
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ----------------------------------------------------------------------
  // SUBMISSION
  // ----------------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    const token = localStorage.getItem('auth_token') || localStorage.getItem('token');

    if (!token) {
        setIsSubmitting(false);
        return;
    }

    const payload = {
        company_name: formData.companyName,  // Rename to match Laravel
        email: formData.email,
        phone: formData.phone,
        location: formData.location,         // Matches 'location' in validation
        staff_count: parseInt(formData.staffCount), // Rename & ensure it's a number
    };

    try {
        await axios.post(`${API_BASE_URL}/initialize-workspace`, payload, {
            headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' 
            }
        });

        Swal.fire({
            icon: 'success',
            title: 'Workspace Initialized',
            text: 'Your environment is ready.',
            confirmButtonColor: '#4f46e5'
        }).then(() => {
            setShowModal(false);
            router.push("/");
        });

    } catch (error: any) {

        Swal.fire({
            icon: 'error',
            title: 'Initialization Failed',
            text: 'Please check your inputs and try again.'
        });
        console.log("Validation Errors:", error.response?.data?.errors);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fcfcfd] dark:bg-[#030303] overflow-hidden py-20 px-6">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* Landing Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400">System Ready 24/7</span>
              </div>
              <h2 className="text-[80px] md:text-[120px] font-black leading-[0.8] tracking-[-0.08em] text-slate-900 dark:text-white">
                THE <br/> <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent italic">TOTAL</span> <br/> SUITE.
              </h2>
            </div>
            <p className="text-xl font-medium text-slate-500 max-w-md leading-relaxed">
              One ecosystem. 12 powerful modules. Infinite scale. Experience our elite support and system access for 7 days. 
            </p>
            <button 
              onClick={() => setShowModal(true)}
              className="px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-2xl active:scale-95"
            >
              Initialize Now
            </button>
          </motion.div>

          {/* Pillars Display */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative space-y-4">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white dark:border-white/5 bg-white/40 dark:bg-white/[0.02] p-8 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.02)]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-indigo-600 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {pillar.points.map((pt, i) => (
                      <span key={i} className="text-[11px] font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="text-indigo-500">/</span> {pt}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* ---------------------------------------------------------------------- */}
      {/* MODAL */}
      {/* ---------------------------------------------------------------------- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-[20px]"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row rounded-[2rem] md:rounded-[3rem] bg-white dark:bg-[#0a0a0a] border border-white/20 dark:border-white/10 shadow-2xl"
            >
              {/* Sidebar Info */}
              <div className="relative w-full md:w-80 bg-slate-950 p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/40 mb-8">
                    💎
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Step 01</p>
                  <h4 className="text-3xl md:text-4xl font-black leading-none mt-3 tracking-tighter">System Access.</h4>
                </div>

                <div className="relative z-10 space-y-6 mt-10 md:mt-0">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Authenticated As</p>
                    
                    {isLoading ? (
                        <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                    ) : (
                        <>
                            <p className="text-sm font-bold text-white truncate" title={formData.email}>
                                {formData.email || "Guest"}
                            </p>
                            <span className={`inline-block mt-2 px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest border 
                                ${userType === 'google' 
                                    ? 'bg-orange-500/20 text-orange-300 border-orange-500/20' 
                                    : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/20'}`}>
                                {userType === 'google' ? 'Google Account' : 'Standard Account'}
                            </span>
                        </>
                    )}
                   </div>
                   <p className="text-[10px] text-slate-400 leading-relaxed">
                        {userType === 'normal' 
                         ? "Company details loaded from your registration." 
                         : "Please complete your organization profile to proceed."}
                   </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Initialize Workspace</h3>
                    <div className="h-1 w-12 bg-indigo-600 mt-2 rounded-full" />
                  </div>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-400 hover:text-red-500 transition-all hover:rotate-90"
                  >
                    ✕
                  </button>
                </div>

                {isLoading ? (
                  <FormSkeleton />
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    
                    <FormInput 
                      label="Company Name" 
                      placeholder={isLoading ? "Loading..." : "Acme Inc."}
                      value={formData.companyName}
                      readOnly={isFieldReadOnly("companyName")}
                      onChange={(val) => handleInputChange("companyName", val)}
                    />
                    
                    <FormInput 
                      label="Enterprise Email" 
                      placeholder={isLoading ? "Loading..." : "hr@acme.com"}
                      type="email" 
                      value={formData.email}
                      readOnly={isFieldReadOnly("email")}
                      onChange={(val) => handleInputChange("email", val)}
                    />
                    
                    <FormInput 
                      label="Direct Line" 
                      placeholder={isLoading ? "Loading..." : "+94 ..."}
                      value={formData.phone}
                      readOnly={isFieldReadOnly("phone")}
                      onChange={(val) => handleInputChange("phone", val)}
                    />
                    
                    <FormInput 
                      label="Staff Velocity" 
                      placeholder="No. of Employees" 
                      type="number" 
                      value={formData.staffCount}
                      readOnly={false} // Always editable per requirement
                      onChange={(val) => handleInputChange("staffCount", val)}
                    />
                    
                    <div className="sm:col-span-2">
                      <FormInput 
                          label="Primary Location" 
                          placeholder={isLoading ? "Loading..." : "Headquarters City"}
                          value={formData.location}
                          readOnly={isFieldReadOnly("location")}
                          onChange={(val) => handleInputChange("location", val)}
                      />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button 
                          disabled={!formData.companyName || !formData.email || !formData.phone || !formData.staffCount || !formData.location || isLoading || isSubmitting}
                          type="submit"
                          className={`group relative w-full h-16 bg-slate-900 dark:bg-white rounded-2xl overflow-hidden transition-all shadow-xl 
                          ${(!formData.companyName || !formData.email || !formData.phone || !formData.staffCount || !formData.location || isLoading || isSubmitting) ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-[1.01] active:scale-[0.99]'}`}
                      >
                        <div className={`absolute inset-0 bg-indigo-600 translate-y-full transition-transform duration-500 ${!formData.companyName || !formData.email || !formData.phone || !formData.staffCount || !formData.location || isLoading || isSubmitting ? '' : 'group-hover:translate-y-0'}`} />
                        <span className="relative z-10 w-full h-full flex items-center justify-center text-white dark:text-black group-hover:text-white font-black text-[11px] uppercase tracking-[0.4em]">
                          {isSubmitting ? "Provisioning..." : "Launch Ecosystem"}
                        </span>
                      </button>
                      <p className="text-center text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-4 md:mt-6">
                        Secure • 256-bit Encryption • 24/7 Support
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;