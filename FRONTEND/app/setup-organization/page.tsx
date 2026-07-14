"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const SetupOrganization = () => {
  const router = useRouter();
  const [step, setStep] = useState(1); // Optional: If we want to make it multi-step later
  const [loading, setLoading] = useState(false);
  const [checkingName, setCheckingName] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  // Form Data
  const [formData, setFormData] = useState({
    subdomain: "",
    vision: "",
    mission: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);

  // Check Auth on Load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) router.push("/signin");
  }, [router]);

  // 1. Handle Subdomain Check (Auto-check when user types)
  const handleSubdomainChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ""); // Only allow letters/numbers
    setFormData({ ...formData, subdomain: value });
    setIsAvailable(null);

    if (value.length > 2) {
      setCheckingName(true);
      try {
        const token = localStorage.getItem("authToken");
        const res = await fetch(`http://localhost:8000/api/tenant/check-subdomain`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ subdomain: value }),
        });
        const data = await res.json();
        setIsAvailable(data.available);
      } catch (error) {
        console.error("Check failed", error);
      } finally {
        setCheckingName(false);
      }
    }
  };

  // 2. Handle File Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  // 3. Submit the Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAvailable) {
      Swal.fire("Error", "Please choose an available subdomain.", "error");
      return;
    }
    if (!logoFile) {
      Swal.fire("Error", "Please upload your company logo.", "error");
      return;
    }

    setLoading(true);

    // We must use FormData because we are sending a File
    const data = new FormData();
    data.append("subdomain", formData.subdomain);
    data.append("vision", formData.vision);
    data.append("mission", formData.mission);
    data.append("logo", logoFile);

    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`http://localhost:8000/api/tenant/setup`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Note: Do NOT set 'Content-Type' manually when using FormData. Browser does it.
        },
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "Setup Complete!",
          text: "Your organization is ready. Check your email for details.",
          icon: "success",
        }).then(() => {
          // Redirect to their new Dashboard (or a success page)
          // For local dev, we might just go to the main dashboard
          router.push("/"); 
        });
      } else {
        Swal.fire("Error", result.message || "Setup failed", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Network error occurred.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Setup Your Organization</h2>
          <p className="text-gray-500 mb-8">Let's personalize your workspace.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Subdomain Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Choose your URL (Subdomain)
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={formData.subdomain}
                  onChange={handleSubdomainChange}
                  className={`w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 ${
                    isAvailable === true ? "border-green-500 focus:ring-green-200" : 
                    isAvailable === false ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
                  }`}
                  placeholder="companyname"
                  required
                />
                <span className="bg-gray-100 border border-l-0 border-gray-300 p-3 text-gray-500 rounded-r-lg">
                  .yoursite.com
                </span>
              </div>
              {/* Availability Status */}
              <div className="mt-2 text-sm">
                {checkingName && <span className="text-gray-500">Checking availability...</span>}
                {!checkingName && isAvailable === true && (
                  <span className="text-green-600 font-medium">✓ Available!</span>
                )}
                {!checkingName && isAvailable === false && (
                  <span className="text-red-600 font-medium">✕ Taken. Please try another.</span>
                )}
              </div>
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Logo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, SVG up to 2MB</p>
            </div>

            {/* Vision */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Vision
              </label>
              <textarea
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200"
                rows={3}
                placeholder="Where do you see your company in the future?"
              />
            </div>

            {/* Mission */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Mission
              </label>
              <textarea
                value={formData.mission}
                onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200"
                rows={3}
                placeholder="What is your core purpose?"
              />
            </div>

            <button
              type="submit"
              disabled={loading || isAvailable === false}
              className={`w-full py-4 rounded-lg text-white font-bold transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Setting up..." : "Complete Setup"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SetupOrganization;