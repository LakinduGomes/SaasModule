"use client";
import { useState } from "react";
import Link from "next/link";
import { authAPI } from "../../../api/auth";
import Swal from 'sweetalert2';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAPI.forgotPassword(email);
      Swal.fire('Success', 'Password reset link emailed!', 'success');
    } catch (error) {
      Swal.fire('Error', error.message || error.errors?.email?.[0] || 'Something went wrong', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-[#FDFDFF] dark:bg-[#02040a]">
      <div className="container">
        <div className="mx-auto max-w-[500px] rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-2xl dark:bg-slate-900/50 sm:p-[60px]">
          <div className="mb-10 text-center">
            <h3 className="mb-3 text-[10px] font-black uppercase tracking-[0.5em] text-indigo-600">Recovery</h3>
            <h2 className="text-3xl font-[1000] tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
              Forgot <span className="text-indigo-600">Password?</span>
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              Enter your email and we'll send you a link to reset it.
            </p>
          </div>
        
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium outline-none focus:border-indigo-500 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center rounded-xl px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-[1.02] active:scale-95 ${
                loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 shadow-indigo-600/20 hover:bg-indigo-700'
            }`}>
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
          <p className="mt-8 text-center text-xs font-bold text-slate-400">
            Remembered? <Link href="/signin" className="text-indigo-600 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;