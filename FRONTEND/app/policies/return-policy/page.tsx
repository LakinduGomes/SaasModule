"use client";
import React from "react";

const ReturnPolicyPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] pb-16 selection:bg-blue-500/10 selection:text-blue-600">
      <div className="absolute right-[-5%] top-[-5%] -z-10 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-br from-green-200/20 to-blue-200/20 blur-[100px]" />
      <div className="absolute bottom-10 left-[-5%] -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[80px]" />

      <header className="relative mx-auto mb-14 max-w-6xl px-6 pt-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 shadow-lg">
            <span className="text-sm font-black text-white">G1</span>
          </div>
          <div className="h-[1px] w-12 bg-gray-200" />
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
            Official Policy v1.4
          </p>
        </div>

        <h1 className="mb-6 text-5xl font-black leading-[0.9] tracking-[-0.04em] text-gray-900 md:text-7xl">
          Return <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Guidelines.
          </span>
        </h1>
        <p className="max-w-md border-l-2 border-primary pl-4 text-sm font-medium leading-relaxed text-gray-500">
          Guidelines on software returns, cancellations, and refund eligibility
          to ensure full client satisfaction.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="group relative mb-12 overflow-hidden rounded-[32px] border border-gray-100 bg-white/70 p-8 shadow-sm backdrop-blur-md">
          <div className="relative z-10">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 underline decoration-blue-500 decoration-2 underline-offset-4">
              1. Overview
            </h2>
            <p className="max-w-3xl text-sm italic leading-relaxed text-gray-500">
              At Gate One Soft, we strive to ensure our clients are fully
              satisfied with our HR & Payroll software and related services.
              This Return Policy outlines the terms under which refunds or
              cancellations may be processed.
            </p>
          </div>
          <div className="absolute right-[-10%] top-[-20%] h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/10" />
        </section>

        <div className="mb-16 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-[32px] border border-green-100 bg-green-50/10 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/5">
            <h2 className="mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-green-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-500 text-[10px] text-white">
                ✓
              </span>
              2. Eligibility
            </h2>
            <ul className="space-y-3 text-[13px] font-medium text-gray-600">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-green-400" /> Purchased
                directly from Gate One Soft.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-green-400" /> Technical
                issues preventing core functionality.
              </li>
              <li className="rounded-xl border border-green-200/50 bg-white/60 p-3 font-bold italic text-green-800 shadow-sm">
                Submitted within 14 days of original purchase.
              </li>
              <li className="flex items-center gap-2 opacity-60">
                <span className="h-1 w-1 rounded-full bg-green-400" /> Subject
                to verification by support.
              </li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-red-100 bg-red-50/10 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/5">
            <h2 className="mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-red-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-500 text-[10px] text-white">
                ✕
              </span>
              3. Non-Refundable
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <NonRefundItem text="Customized software or modules." />
              <NonRefundItem text="Subscription renewals after activation." />
              <NonRefundItem text="Training, installation, or setup fees." />
              <NonRefundItem text="Third-party integrations or add-ons." />
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="mb-12 flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            04. Request Process{" "}
            <div className="h-[1px] flex-grow bg-gray-100" />
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <ProcessNode
              step="01"
              title="Contact"
              desc="Email billing@gateonesoft.com with purchase details."
            />
            <ProcessNode
              step="02"
              title="Review"
              desc="Internal review within 5–7 business days."
            />
            <ProcessNode
              step="03"
              title="Settlement"
              desc="Refund to original method within 10 days."
            />
          </div>
        </section>

        <section className="relative mb-12 overflow-hidden rounded-[48px] bg-gray-950 p-12 text-white shadow-2xl">
          <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold italic tracking-tight underline decoration-blue-500">
                5. Subscription Cancellations
              </h2>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                Cancel anytime via dashboard or support. Retain access until the
                end of the current cycle. Partial refunds for unused periods are
                not provided.
              </p>
            </div>
            <div className="hidden h-24 w-px bg-white/10 md:block" />
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-6 py-4 text-[10px] font-bold uppercase italic tracking-widest text-blue-400">
              No Unused Cycle <br /> Refunds
            </div>
          </div>
          <div className="absolute left-[-20%] top-[-50%] h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />
        </section>

        <section className="mb-16 flex items-center gap-6 rounded-3xl border border-amber-100 bg-amber-50/20 p-6">
          <div className="text-xl">⚖️</div>
          <div>
            <h4 className="mb-1 text-[11px] font-black uppercase tracking-widest text-amber-700">
              6. Special Circumstances
            </h4>
            <p className="text-[11px] font-medium italic leading-relaxed text-amber-900/60">
              Exceptional cases like duplicate payments are evaluated
              individually at our sole discretion.
            </p>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-8 rounded-[40px] border border-gray-100 bg-white p-10 shadow-sm md:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-black italic tracking-tighter text-gray-900">
              11. Contact Us
            </h2>
            <div className="space-y-1 text-[13px] font-medium text-gray-400">
              <p className="mb-1 font-bold text-gray-900">Gate One Soft</p>

              <p className="flex items-center gap-2">
                <span>Email:</span>
                <a
                  href="mailto:support@gateonesoft.com"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-all hover:text-indigo-600"
                >
                  support@gateonesoft.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span>Website:</span>
                <a
                  href="https://www.gateonesoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold transition-colors hover:text-gray-900"
                >
                  www.gateonesoft.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 border-l border-gray-100 pl-8">
            <div className="text-right">
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-gray-300">
                Last Update
              </p>
              <p className="text-xs font-black text-blue-600">JUN 01, 2025</p>
            </div>
            <div className="text-right">
              <p className="mb-1 text-[9px] font-bold uppercase tracking-widest text-gray-300">
                Effective
              </p>
              <p className="text-xs font-black text-gray-900">JAN 01, 2025</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

const NonRefundItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 rounded-xl border border-red-50/50 bg-white/40 p-3">
    <div className="h-1 w-1 rounded-full bg-red-400" />
    <span className="text-[12px] font-medium leading-tight text-gray-500">
      {text}
    </span>
  </div>
);

const ProcessNode = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center transition-all hover:border-blue-200">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-sm font-black text-blue-600 shadow-sm">
      {step}
    </div>
    <h4 className="mb-2 text-xs font-bold tracking-tight text-gray-900">
      {title}
    </h4>
    <p className="px-2 text-[10px] font-medium leading-relaxed text-gray-400">
      {desc}
    </p>
  </div>
);

const ContactLink = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="mb-1 text-[9px] font-black uppercase tracking-widest text-gray-300">
      {label}
    </p>
    <p className="text-sm font-bold text-gray-900">{value}</p>
  </div>
);

export default ReturnPolicyPage;
