import { Metadata } from "next";
import { FaqList } from "@/components/Faq";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQ | HR & Payroll Solutions",
  description: "Find answers to frequently asked questions about our HR management system, payroll automation, and data security.",
  // Add more metadata here for better SEO
};

const FaqPage = () => {
  return (
    <>
      

      <main className="pb-20">
        <FaqList />
      </main>
    </>
  );
};

export default FaqPage;