import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Pricing Plans | Modern HR & Payroll",
  description: "Choose the perfect HR management plan for your organization. Transparent pricing, no hidden fees, and a 7-day free trial on all tiers.",
};

const PricingPage = () => {
  return (
    <>

      <main className="relative bg-white dark:bg-black">
        
        <Pricing />
        
        
        <section className="pb-20 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto p-10 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-dashed border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-bold mb-3 dark:text-white">Need a custom enterprise solution?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                For organizations with over 500+ employees, we offer dedicated infrastructure and custom API integrations.
              </p>
              <button className="text-primary font-black uppercase tracking-widest text-xs hover:underline">
                Talk to Sales →
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;