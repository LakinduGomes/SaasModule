"use client";
import { useState, useEffect } from "react";
import { authAPI } from "../../../api/auth";
import Swal from 'sweetalert2';

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    token: ""
  });
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Extract token and email from URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      token: params.get("token") || "",
      email: params.get("email") || ""
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authAPI.resetPassword(formData);
      Swal.fire({
        icon: 'success',
        title: 'Password Reset!',
        text: 'You can now login with your new password.',
        confirmButtonColor: '#4A3AFF'
      }).then(() => {
        window.location.href = "/signin";
      });
    } catch (error) {
       // Display specific password errors if available
       const msg = error.errors?.password?.[0] || error.errors?.email?.[0] || 'Reset failed.';
       Swal.fire('Error', msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-[#F8F9FF] px-4 pt-24 pb-12 dark:bg-[#050505]">
      <div className="w-full max-w-md rounded-[2.5rem] bg-white p-8 shadow-2xl dark:bg-[#0D1117] md:p-12">
        <h2 className="mb-2 text-2xl font-[1000] text-slate-900 dark:text-white">Reset Password</h2>
        <p className="mb-8 text-sm text-slate-500">Create a new secure password.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email is read-only usually, or hidden, but good to show for confirmation */}
          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full cursor-not-allowed rounded-2xl border-2 border-transparent bg-gray-100 px-5 py-4 font-bold text-gray-500 outline-none dark:bg-white/10 dark:text-gray-400"
          />
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="New Password"
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-5 py-4 font-bold outline-none focus:border-[#4A3AFF] dark:bg-white/5 dark:text-white"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[25px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="password_confirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-5 py-4 font-bold outline-none focus:border-[#4A3AFF] dark:bg-white/5 dark:text-white"
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[25px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-[#4A3AFF] py-4 text-xs font-black uppercase text-white hover:shadow-lg disabled:opacity-70"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;