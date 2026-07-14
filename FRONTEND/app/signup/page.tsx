"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { authAPI } from "../../api/auth"; 
import Swal from 'sweetalert2'; 
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",  // Changed from username
    last_name: "",   // Added last_name
    organization_name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsContent, setTermsContent] = useState("");
  const [privacyContent, setPrivacyContent] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[] | null>>({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Helper to generate a strong password
  const generateStrongPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 14; i++) { // 14 characters long
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    // Set the state for both Password and Confirm Password
    setFormData({
      ...formData,
      password: password,
      password_confirmation: password // Auto-fill confirmation too
    });
    
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!formData.terms) {
        setErrors({ 
            terms: ["You must agree to the Terms and Conditions to proceed."] 
        });
        setLoading(false); // Stop the loading spinner
        return; // STOP HERE. Do not send data to server.
    }

    if (formData.password !== formData.password_confirmation) {
        setErrors((prev) => ({ 
            ...prev,
            password: ["Passwords do not match."],
            password_confirmation: ["Passwords do not match."] 
        }));
        setLoading(false);
        return; // STOP HERE
    }

    // 1. Prepare Data for Laravel
    // We map your frontend names to the backend names here
    const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
        // Map Company Data
        company_name: formData.organization_name,
        company_email: formData.email, // Use same email for company contact
        company_phone: formData.phone,
        company_address: formData.address,
        // Defaults required by backend
        employee_count: 5, 
        duration: 12       
    };

    try {
      const response = await authAPI.registerCorporate(payload);

      if (response.success) {
        Swal.fire({
          icon: 'success',
          title: 'Welcome, Account Created!',
          text: 'Please sign in to continue. Check your email for verification if required.',
          confirmButtonText: 'Go to Login',
          confirmButtonColor: '#4f46e5'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/signin"; // Redirect to Sign In page
          }
        });
        
        // Reset Form
        setFormData({
            first_name: "", last_name: "", organization_name: "", email: "", phone: "", 
            address: "", password: "", password_confirmation: "", terms: false
        });
      }
    } catch (error) {
      console.error("Registration Error:", error);
      
      if (error.errors) {
        // Laravel Validation Errors
        setErrors(error.errors); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.message || 'Something went wrong. Please try again.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const Modal = ({ show, onClose, title, children, iframeUrl }: { show: boolean; onClose: () => void; title: string; children?: React.ReactNode; iframeUrl?: string }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
          {iframeUrl ? (
            <iframe 
              src={iframeUrl} 
              className="w-full h-[60vh] border rounded" 
              title={title}
            />
          ) : (
            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {children}
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded bg-gray-200 px-2 py-1 text-sm font-bold hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const openTerms = () => {
    setShowTermsModal(true);
  };

  const openPrivacy = () => {
    setShowTermsModal(true);
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-[#FDFDFF] dark:bg-[#02040a]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-[550px] rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-2xl dark:border-white/5 dark:bg-slate-900/50 backdrop-blur-xl sm:p-[60px]"
              >
                <div className="mb-10 text-center">
                  <h3 className="mb-3 text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600">
                    Onboarding
                  </h3>
                  <h2 className="text-3xl font-[1000] tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
                    Create <span className="text-indigo-600">Account.</span>
                  </h2>
                  <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    Join the GateOne ecosystem to scale your enterprise logic.
                  </p>
                </div>

                {/* GOOGLE BUTTON */}
                <button 
                  onClick={() => window.location.href = "http://127.0.0.1:8000/api/auth/google"}
                  type="button"
                  className="group relative mb-8 flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition-all hover:border-indigo-400 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md"
                >
                  <span className="mr-3">
                    {/* Google Icon SVG */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.7416 15.1327L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216" fill="#4285F4"/>
                      <path d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.39915 11.9778L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001" fill="#34A853"/>
                      <path d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38696 8.02225L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z" fill="#FBBC05"/>
                      <path d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z" fill="#EB4335"/>
                    </svg>
                  </span>
                  Single Sign-on with Google
                </button>

                <div className="relative mb-10 flex items-center justify-center">
                  <span className="absolute inset-x-0 h-[1px] bg-slate-100 dark:bg-white/5"></span>
                  <p className="relative z-10 bg-white px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:bg-slate-900/80">
                    Corporate Registration
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: First Name & Last Name (Changed from Username) */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputField 
                      label="First Name" 
                      name="first_name" 
                      placeholder="John" 
                      value={formData.first_name} 
                      onChange={handleChange} 
                      error={errors.first_name}
                    />
                    <InputField 
                      label="Last Name" 
                      name="last_name" 
                      placeholder="Doe" 
                      value={formData.last_name} 
                      onChange={handleChange} 
                      error={errors.last_name}
                    />
                  </div>

                  {/* Row 2: Organization */}
                  <InputField 
                    label="Organization Name" 
                    name="organization_name" 
                    placeholder="GateOne Technologies" 
                    value={formData.organization_name} 
                    onChange={handleChange} 
                    error={errors.company_name} // Backend returns 'company_name' error
                  />

                  {/* Row 3: Email & Phone */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputField 
                      label="Work Email" 
                      name="email" 
                      type="email"
                      placeholder="work@company.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      error={errors.email}
                    />
                    <InputField 
                      label="Phone Number" 
                      name="phone" 
                      placeholder="+94 77 123 4567" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      error={errors.company_phone}
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label className="ml-1 text-[10px] font-black uppercase text-gray-400">
                        Business Address
                    </label>
                    <textarea
                      name="address"
                      rows={2}
                      placeholder="123 Business Park, Colombo"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full rounded-2xl border-2 bg-gray-50 px-5 py-4 text-sm font-bold outline-none transition-all dark:bg-white/5 dark:text-white 
                        ${errors.company_address 
                            ? "border-red-500 bg-red-50 focus:border-red-500" 
                            : "border-transparent focus:border-[#4A3AFF] focus:bg-white dark:focus:bg-[#0D1117]"
                        }`}
                    />
                  </div>

                  {/* Row 4: Password & Confirm */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="relative">
                      <InputField 
                        label="Password" 
                        name="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••" 
                        value={formData.password} 
                        onChange={handleChange} 
                        error={errors.password}
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-[47px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                      {/* SUGGEST BUTTON */}
                      <button
                        type="button" // Important: type="button" prevents form submission!
                        onClick={generateStrongPassword}
                        className="absolute right-12 top-4 text-xs text-blue-600 font-bold hover:text-blue-800"
                      >
                        Suggest Strong Password
                      </button>
                    </div>
                    <div className="relative">
                      <InputField 
                        label="Confirm Password" 
                        name="password_confirmation" 
                        type={showConfirmPassword  ? "text" : "password"}
                        placeholder="••••••••" 
                        value={formData.password_confirmation} 
                        onChange={handleChange} 
                        error={errors.password_confirmation}
                      />
                      <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-[47px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <div className="relative flex h-5 items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="h-5 w-5 rounded border-gray-300 text-[#4A3AFF] focus:ring-[#4A3AFF]"
                      />
                    </div>
                    <div className="text-xs">
                      <label htmlFor="terms" className="font-medium text-gray-600 dark:text-gray-400">
                        I agree to the <span onClick={openTerms} className="font-bold text-[#4A3AFF] hover:underline mx-1 cursor-pointer">Terms of Service</span> and <span onClick={openPrivacy} className="font-bold text-[#4A3AFF] hover:underline mx-1 cursor-pointer">Privacy Policy</span>.
                      </label>
                      {errors.terms && <p className="mt-1 font-bold text-red-500">{errors.terms[0]}</p>}
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Creating Ecosystem..." : "Initialize Account"}
                  </button>

                </form>

                <p className="mt-8 text-center text-xs font-bold text-slate-400">
                  Member already?{" "}
                  <Link href="/signin" className="text-indigo-600 hover:underline">
                    Authorize here
                  </Link>
                </p>

              </motion.div>
            </div>
          </div>
        </div>
        
        <Modal 
          show={showPrivacyModal} 
          onClose={() => setShowPrivacyModal(false)} 
          title="Privacy Policy"
          iframeUrl="/policies/privacy-policy" 
        />

        <Modal 
          show={showTermsModal} 
          onClose={() => setShowTermsModal(false)} 
          title="Terms of Service"
          iframeUrl="/policies/terms-and-conditions" 
        />

        {/* Background Pattern */}
        <div className="absolute left-0 top-0 z-[-1] h-full w-full opacity-[0.05] dark:opacity-[0.1]">
           <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}
          />
        </div>
                      
      </section>
    </>
  );
};

// Reusable Input Component
const InputField = ({ label, name, type = "text", placeholder, value, onChange, error }) => (
  <div className="space-y-2">
    <label className="mb-2 block text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-white/5 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500 
        ${error 
            ? "border-red-500 bg-red-50 focus:border-red-500 dark:border-red-500/50" 
            : "border-transparent focus:border-[#4A3AFF] focus:bg-white dark:focus:bg-[#0D1117]"
        }`}
    />
    {error && <p className="ml-1 text-xs font-bold text-red-500">{error[0]}</p>}
  </div>
);

export default SignupPage;