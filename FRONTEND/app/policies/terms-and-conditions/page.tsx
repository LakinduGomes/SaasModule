"use client";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] pb-16 selection:bg-blue-500/10 selection:text-blue-600">
      <div className="absolute right-[-5%] top-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-300/20 blur-[120px]" />
      <div className="absolute bottom-[10%] left-[-5%] -z-10 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <header className="relative mx-auto mb-14 max-w-6xl px-6 pt-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 shadow-lg">
            <span className="text-sm font-black text-white">G1</span>
          </div>
          <div className="h-[1px] w-12 bg-gray-200" />
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
            Legal Protocol v2.0
          </p>
        </div>

        <h1 className="mb-6 text-5xl font-black leading-[0.9] tracking-[-0.04em] text-gray-900 md:text-7xl">
          Legal <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Framework.
          </span>
        </h1>
        <p className="max-w-md border-l-2 border-primary pl-4 text-base font-medium leading-relaxed text-gray-500">
          The definitive terms governing the usage of Gate One Soft HR & Payroll
          technologies.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="group rounded-[32px] border border-gray-100 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-all hover:shadow-md md:col-span-8">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-blue-500">
              Section 01
            </span>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
              Acceptance of Terms
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
              By accessing Gate One Soft’s software, website, or services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree, please do not use our services.
            </p>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-gray-900 p-8 text-white shadow-xl md:col-span-4">
            <div className="relative z-10">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Section 02
              </span>
              <h2 className="mb-3 text-2xl font-bold italic tracking-tight">
                Services Provided
              </h2>
              <p className="text-xs leading-relaxed text-gray-400 opacity-80">
                Gate One Soft provides HR management, payroll processing, and
                related software services. The scope, features, and availability
                of services may change without prior notice.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </div>

        <section className="mb-16">
          <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-black italic tracking-tight text-gray-900">
              03. User Obligations
            </h2>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Compliance Protocol
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <DutyTile
              title="Accuracy"
              desc="Provide accurate and up-to-date information during registration and usage."
              color="bg-blue-500"
            />
            <DutyTile
              title="Security"
              desc="Maintain the confidentiality of login credentials and access data."
              color="bg-gray-800"
            />
            <DutyTile
              title="Compliance"
              desc="Comply with applicable laws, regulations, and HR policies when using our software."
              color="bg-indigo-500"
            />
            <DutyTile
              title="Integrity"
              desc="Not misuse, reverse-engineer, or attempt to disrupt the system."
              color="bg-red-500"
            />
          </div>
        </section>

        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-100 text-[10px] font-black italic">
                04
              </span>
              Accounts and Security
            </h3>
            <p className="text-[13px] leading-relaxed text-gray-500">
              Users are responsible for all activities under their account.
              Notify Gate One Soft immediately if there is unauthorized access.
              We are not liable for losses resulting from compromised accounts
              due to negligence.
            </p>
          </div>
          <div className="rounded-[32px] border border-blue-100 bg-blue-50/30 p-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-[10px] font-black italic text-blue-600">
                05
              </span>
              Payment and Fees
            </h3>
            <p className="text-[13px] italic leading-relaxed text-gray-500">
              All fees and payment terms are outlined in the purchase agreement.
              Late payments may result in service suspension. Subscription
              renewals are billed automatically unless canceled in advance.
            </p>
          </div>
        </div>

        <section className="group relative mb-16 overflow-hidden rounded-[40px] border border-red-100/50 bg-red-50/30 p-8">
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="mb-2 text-[10px] font-black uppercase tracking-widest text-red-500">
                06. Limitation of Liability
              </h3>
              <p className="text-xl font-bold leading-tight tracking-tight text-red-950">
                Gate One Soft is not liable for indirect, incidental, or
                consequential damages. Our total liability for any claims shall
                not exceed the amount paid by the client for the services in the{" "}
                <span className="bg-red-200/50 px-1 font-black italic underline decoration-red-500 decoration-2">
                  previous 12 months.
                </span>
              </p>
            </div>
            <div className="select-none text-6xl font-black italic text-red-500/5 transition-colors group-hover:text-red-500/10">
              LIMIT
            </div>
          </div>
        </section>

        <section className="relative mb-16 overflow-hidden rounded-[48px] bg-gray-900 p-10 text-center shadow-2xl">
          <div className="relative z-10">
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-blue-400">
              Asset Protection
            </span>
            <h2 className="mb-6 text-3xl font-bold italic tracking-tight text-white">
              7. Intellectual Property
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-400">
              All software, documentation, logos, and content remain the
              property of Gate One Soft or its licensors. Users are granted a
              limited, non-exclusive, non-transferable license to use the
              software as permitted by their subscription or purchase.
            </p>
            <div className="flex justify-center gap-3">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500 delay-75" />
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/20 delay-150" />
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
        </section>

        <div className="mb-20 grid grid-cols-1 gap-3 md:grid-cols-3">
          <SmallBox
            id="08"
            title="Termination"
            desc="Gate One Soft reserves the right to suspend or terminate accounts for violations of these Terms, non-payment, or misuse of services."
          />
          <SmallBox
            id="09"
            title="Modifications"
            desc="We may update these Terms from time to time. Continued use after changes constitutes acceptance."
          />
          <SmallBox
            id="10"
            title="Governing Law"
            desc="Disputes will be subject to the exclusive jurisdiction of the competent courts in the region of incorporation."
          />
        </div>

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

const DutyTile = ({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) => (
  <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200">
    <div className={`h-2 w-2 rounded-full ${color} mb-4`} />
    <h4 className="mb-2 text-xs font-bold uppercase italic tracking-tighter text-gray-900">
      {title}
    </h4>
    <p className="text-[10px] font-medium leading-relaxed text-gray-400">
      {desc}
    </p>
  </div>
);

const SmallBox = ({
  id,
  title,
  desc,
}: {
  id: string;
  title: string;
  desc: string;
}) => (
  <div className="rounded-[32px] border border-gray-100 bg-gray-50/50 p-8">
    <span className="mb-3 block text-[9px] font-black italic tracking-widest text-primary/30">
      {id}
    </span>
    <h4 className="mb-3 text-sm font-bold tracking-tight text-gray-900">
      {title}
    </h4>
    <p className="text-[11px] leading-relaxed text-gray-400">{desc}</p>
  </div>
);

export default TermsAndConditions;
