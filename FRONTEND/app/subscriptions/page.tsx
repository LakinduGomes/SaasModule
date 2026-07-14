"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SectionTitle from "../../components/Common/SectionTitle";
import { showErrorAlert } from "../../utils/sweetAlert";

const ViewSubscription = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      const token = localStorage.getItem("authToken");

      // 1. If no token, they can't view private data -> Redirect to Login
      if (!token) {
        // Optional: Save the intended URL to redirect back after login
        localStorage.setItem("redirectAfterLogin", `/subscriptions/${id}`);
        router.push("/signin");
        return;
      }

      try {
        // 2. Fetch from Backend API
        const response = await fetch(
          `http://localhost:8000/api/subscriptions/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setSubscription(data.data);
        } else {
          showErrorAlert("Error", data.message || "Subscription not found");
          router.push("/dashboard");
        }
      } catch (error) {
        console.error(error);
        showErrorAlert("Error", "Failed to load subscription details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSubscription();
  }, [id, router]);

  if (loading)
    return <div className="py-20 text-center">Loading details...</div>;
  if (!subscription) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle
          title="Subscription Details"
          paragraph={`Invoice #${subscription.transaction_id}`}
          center
        />

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-8">
          {/* Status Badge */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h3 className="text-xl font-bold text-gray-800">Status</h3>
            <span
              className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
                subscription.status === "completed" ||
                subscription.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {subscription.status}
            </span>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">
                Organization
              </p>
              <p className="font-semibold text-gray-800">
                {subscription.organization_name}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">
                Plan Period
              </p>
              <p className="font-semibold text-gray-800">
                {subscription.subscription_period} Months
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">
                Total Employees
              </p>
              <p className="font-semibold text-gray-800">
                {subscription.user_count}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">
                Amount Paid
              </p>
              <p className="font-bold text-indigo-600 text-xl">
                Rs. {subscription.final_amount}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs text-gray-400 uppercase font-bold">
                Billing Address
              </p>
              <p className="font-semibold text-gray-800">
                {subscription.address}
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => router.push("/")}
              className="bg-gray-100 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewSubscription;
