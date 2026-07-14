"use client";
import { useState } from "react";
import { authAPI } from "../../../api/auth";
import Swal from 'sweetalert2';

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear specific error when user types
    if (errors[e.target.name]) {
       setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("Not authenticated");

      await authAPI.changePassword(formData, token);

      Swal.fire({
        icon: 'success',
        title: 'Password Updated',
        text: 'Your password has been changed successfully.',
        confirmButtonColor: '#4A3AFF'
      }).then(() => {
        // Optional: Redirect to Dashboard or stay here
        window.location.href = "/"; 
      });

      setFormData({ current_password: "", password: "", password_confirmation: "" });

    } catch (error) {
      if (error.errors) {
        setErrors(error.errors);
      } else {
        Swal.fire('Error', error.message || 'Failed to update password', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-[#F8F9FF] px-4 pt-24 pb-12 dark:bg-[#050505]">
      <div className="w-full max-w-md rounded-[2.5rem] border border-white/20 bg-white p-8 shadow-2xl dark:border-gray-800 dark:bg-[#0D1117] md:p-12">
        <h2 className="mb-2 text-2xl font-[1000] text-slate-900 dark:text-white">Change Password</h2>
        <p className="mb-8 text-sm text-slate-500">Secure your account with a new password.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Current Password */}
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase text-gray-400">Current Password</label>
            <div className="relative">
                <input
                    type={showCurrentPassword ? "text" : "password"}
                    name="current_password"
                    value={formData.current_password}
                    placeholder="Enter the current password"
                    onChange={handleChange}
                    className={`w-full rounded-2xl border-2 bg-gray-50 px-5 py-4 text-sm font-bold outline-none transition-all dark:bg-white/5 dark:text-white 
                        ${errors.current_password ? "border-red-500 bg-red-50" : "border-transparent focus:border-[#4A3AFF]"}`}
                />
                <button 
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-4 top-[20px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
                >
                    {showCurrentPassword ? "Hide" : "Show"}
                </button>
            </div>
            {errors.current_password && <p className="ml-1 text-xs font-bold text-red-500">{errors.current_password[0]}</p>}
          </div>

          <hr className="border-gray-100 dark:border-gray-800"/>

          {/* New Password */}
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase text-gray-400">New Password</label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Enter the new password"
                    onChange={handleChange}
                    className={`w-full rounded-2xl border-2 bg-gray-50 px-5 py-4 text-sm font-bold outline-none transition-all dark:bg-white/5 dark:text-white 
                        ${errors.password ? "border-red-500 bg-red-50" : "border-transparent focus:border-[#4A3AFF]"}`}
                />
                <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-[20px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            {errors.password && <p className="ml-1 text-xs font-bold text-red-500">{errors.password[0]}</p>}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase text-gray-400">Confirm New Password</label>
            <div className="relative">
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    placeholder="Confirm the new password"
                    onChange={handleChange}
                    className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-5 py-4 text-sm font-bold outline-none transition-all focus:border-[#4A3AFF] dark:bg-white/5 dark:text-white"
                />
                <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-[20px] text-xs text-slate-400 hover:text-indigo-600 font-bold uppercase tracking-wider"
                      >
                        {showConfirmPassword ? "Hide" : "Show"}
                      </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-[#4A3AFF] py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-[#4A3AFF]/30 transition-all hover:translate-y-[-2px] disabled:opacity-70"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;