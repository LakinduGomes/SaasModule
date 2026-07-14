"use client";
import { useState, useEffect, Suspense } from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

import { authAPI } from "../../api/auth"; 
import Swal from 'sweetalert2'; 

// --- Logic Component ---
const SigninContent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  const [rememberMe, setRememberMe] = useState(false);
  const searchParams = useSearchParams(); 
  const router = useRouter();
  
  // Handle URL Status (for after email verification)
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: rememberedEmail.trim(),
        remember: true
      }));

      const passwordInput = document.getElementById("password") as HTMLInputElement;
      passwordInput?.focus();
    }

    const status = searchParams?.get('verified');
    if (status === "success") {
      Swal.fire({
        icon: "success",
        title: "Email Verified!",
        text: "Your account is verified. Please login.",
        timer: 3000,
        showConfirmButton: false,
      });
      // Optional: Clean up the URL
      router.replace("/signin");
    } 
    else if (status === "already") {
      Swal.fire({
        icon: "info",
        title: "Already Verified",
        text: "This email is already verified. Please login.",
      });
    } 
    else if (status === "invalid") {
      Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text: "The verification link is invalid or expired.",
      });
    }
  }, [searchParams, router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(""); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authAPI.loginCorporate(formData);

      // --- FIX 1: Check for Token, not "success" boolean ---
      if (response.token) { 
        
        if (response.user) {
          localStorage.setItem("user_data", JSON.stringify(response.user));
        }

        if (formData.remember) {
          localStorage.setItem("rememberedEmail", formData.email.trim());
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        })
        
        await Toast.fire({
            icon: 'success',
            title: 'Welcome Back! Signed in successfully',
            didOpen: (toast) => {
              toast.style.marginTop = '70px';
            }
        })

        // Redirect to Dashboard
        window.location.href = "/"; 
      } else {
         setError("Login failed. No token received.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-[#FDFDFF] dark:bg-[#02040a]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-[500px] rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-2xl dark:border-white/5 dark:bg-slate-900/50 backdrop-blur-xl sm:p-[60px]"
            >
              <div className="mb-10 text-center">
                <h3 className="mb-3 text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600">
                  Authentication
                </h3>
                <h2 className="text-3xl font-[1000] tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
                  Welcome <span className="text-indigo-600">Back.</span>
                </h2>
                <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Securely access your GateOne enterprise dashboard.
                </p>
              </div>

              {/* GOOGLE BUTTON */}
              <button 
                onClick={() => window.location.href = "http://127.0.0.1:8000/api/auth/google"}
                type="button"
                className="group relative mb-8 flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition-all hover:border-indigo-400 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md"
              >
                <span className="mr-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216" fill="#4285F4"/>
                    <path d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001" fill="#34A853"/>
                    <path d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z" fill="#FBBC05"/>
                    <path d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z" fill="#EB4335"/>
                  </svg>
                </span>
                Sign in with Google
              </button>

              {/* Global Error Message */}
              {error && (
                  <div className="mb-6 rounded-xl bg-red-50 p-4 text-center text-sm font-bold text-red-500 dark:bg-red-500/10">
                      {error}
                  </div>
              )}

              <div className="relative mb-10 flex items-center justify-center">
                <span className="absolute inset-x-0 h-[1px] bg-slate-100 dark:bg-white/5"></span>
                <p className="relative z-10 bg-white px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:bg-slate-900/80">
                  Protected Login
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                  <label className="mb-2 block text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Company Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-white/5 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Password</label>
                    <Link href="/passwords/forgot-password" className="text-[11px] font-bold text-indigo-600 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-white/5 dark:bg-slate-950 dark:text-white dark:focus:border-indigo-500"
                    />        
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-indigo-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>     
                  </div> 
                </div>

                {/* Remember Me */}
                <div className="mb-8 flex items-center gap-3">
                  <input type="checkbox" id="remember" name="remember" checked={formData.remember} onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300 accent-indigo-600" />
                  <label htmlFor="remember" className="text-[12px] font-bold text-slate-500 dark:text-slate-400 cursor-pointer">
                    Stay authorized
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`flex w-full items-center justify-center rounded-xl px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95 ${
                  loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 shadow-indigo-600/20 hover:bg-indigo-700'
                  }`}>
                  {loading ? "Processing..." : "AUTHORIZE SESSION"}
                </button>
              </form>

              <p className="mt-8 text-center text-xs font-bold text-slate-400">
                New to GateOne?{" "}
                <Link href="/signup" className="text-indigo-600 hover:underline font-black">
                  Create Identity
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] h-full w-full opacity-[0.05] dark:opacity-[0.1]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
};

// --- Suspense Wrapper ---
const SigninPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50">Loading Authentication...</div>}>
      <SigninContent />
    </Suspense>
  );
};

export default SigninPage;