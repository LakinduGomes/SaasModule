"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa] pb-16 selection:bg-blue-500/10 selection:text-blue-600">
      <div className="absolute right-[-5%] top-[-5%] -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-indigo-200/20 to-blue-200/20 blur-[120px]" />
      <div className="absolute bottom-10 left-[-5%] -z-10 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <header className="relative mx-auto mb-10 max-w-6xl px-6 pt-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 shadow-lg">
            <span className="text-sm font-black text-white">G1</span>
          </div>
          <div className="h-[1px] w-12 bg-gray-200" />
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
            Security & Privacy v3.0
          </p>
        </div>

        <h1 className="mb-6 text-5xl font-black leading-[0.9] tracking-[-0.04em] text-gray-900 md:text-7xl">
          Privacy <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Protection.
          </span>
        </h1>
        <p className="max-w-md border-l-2 border-primary pl-4 text-sm font-medium leading-relaxed text-gray-500">
          This policy covers data collection, usage, legal basis, sharing,
          security, retention, and user rights within the Gate One Soft
          ecosystem.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            01. Information Collection{" "}
            <div className="h-[1px] flex-grow bg-gray-100" />
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <DataCard
              title="Personal Data"
              items={[
                "Full Name & ID",
                "Contact Details",
                "Payroll & Salary",
                "Attendance Records",
              ]}
              color="blue"
            />
            <DataCard
              title="Organizational"
              items={[
                "Company Registration",
                "Authorized Personnel",
                "HR Structures",
                "Departmental Data",
              ]}
              color="indigo"
            />
            <DataCard
              title="System Usage"
              items={[
                "IP & Browser Type",
                "Device & OS Info",
                "Activity History",
                "Access Logs",
              ]}
              color="gray"
            />
          </div>
        </section>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="rounded-[32px] border border-gray-100 bg-white/70 p-8 shadow-sm backdrop-blur-md md:col-span-7">
            <h3 className="mb-4 text-lg font-bold tracking-tight text-gray-900 underline decoration-blue-500 decoration-2 underline-offset-4">
              2. Purpose of Processing
            </h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-[12px] font-medium text-gray-500 sm:grid-cols-2">
              <li>• Manage payroll & employee records</li>
              <li>• Generate tax & HR reports</li>
              <li>• Compliance with labor laws</li>
              <li>• Technical support & security</li>
              <li>• Track performance metrics</li>
              <li>• Important HR updates</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-gray-900 p-8 text-white md:col-span-5">
            <h3 className="mb-4 text-lg font-bold italic tracking-tight">
              3. Legal Basis
            </h3>
            <div className="space-y-3 text-[11px] text-gray-400">
              <p>
                <strong className="font-bold text-blue-400">Contract:</strong>{" "}
                Perform payroll functions.
              </p>
              <p>
                <strong className="font-bold text-blue-400">Legal:</strong>{" "}
                Comply with tax & regulatory requirements.
              </p>
              <p>
                <strong className="font-bold text-blue-400">Interest:</strong>{" "}
                Enhance system security.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 transition-all hover:border-blue-200">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-black text-gray-900">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> 4. Data
              Sharing
            </h3>
            <p className="text-[12px] leading-relaxed text-gray-500">
              We do not sell or rent personal information. Data is only shared
              with authorized administrators, government authorities for
              compliance, and trusted providers under confidentiality
              agreements.
            </p>
          </div>
          <div className="rounded-[32px] border border-blue-100 bg-blue-50/30 p-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-black text-gray-900">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> 5. Data
              Security
            </h3>
            <p className="text-[12px] italic leading-relaxed text-gray-500">
              Encryption at rest and in transit, multi-factor authentication,
              regular system audits, and disaster recovery procedures are
              enforced to protect your data.
            </p>
          </div>
        </div>

        <section className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 md:col-span-4">
            <h4 className="mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
              6. Data Retention
            </h4>
            <p className="text-[12px] font-medium leading-relaxed text-gray-500">
              Data is retained only as long as necessary for HR/Legal
              requirements or dispute resolution. Following this, data is
              securely deleted.
            </p>
          </div>
          <div className="group flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white md:col-span-8">
            <div className="mb-6 flex items-start justify-between">
              <h4 className="text-xl font-bold italic tracking-tight underline decoration-white/20 underline-offset-8">
                7. Your Rights
              </h4>
              <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-tighter">
                privacy@gateonesoft.com
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-[11px] text-white/80">
              <p>• Access and correct your data</p>
              <p>• Object to processing</p>
              <p>• Request data deletion</p>
              <p>• Request data portability</p>
            </div>
          </div>
        </section>

        <div className="mb-16 grid grid-cols-1 gap-3 md:grid-cols-3">
          <SmallBox
            title="8. Cookies"
            desc="We use cookies to manage sessions and enhance system performance."
          />
          <SmallBox
            title="9. International"
            desc="Safe cross-border transfers via standard contractual clauses."
          />
          <SmallBox
            title="10. Updates"
            desc="Policy changes are broadcasted; the latest version is always available."
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
                <span className="text-gray-400">Email:</span>
                <a
                  href="mailto:privacy@gateonesoft.com"
                  className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-indigo-600"
                >
                  privacy@gateonesoft.com
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-gray-400">Website:</span>
                <a
                  href="https://www.gateonesoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gray-900"
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

const DataCard = ({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) => {
  const themes: any = {
    blue: "border-blue-100 bg-blue-50/20 text-blue-700",
    indigo: "border-indigo-100 bg-indigo-50/20 text-indigo-700",
    gray: "border-gray-200 bg-gray-50/40 text-gray-700",
  };

  return (
    <div
      className={`rounded-[28px] border p-6 ${themes[color] || themes.gray}`}
    >
      <h4 className="mb-4 text-xs font-black uppercase italic tracking-widest">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-[11px] font-medium"
          >
            <span className="h-1 w-1 rounded-full bg-current opacity-40" />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SmallBox = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-3xl border border-gray-100 bg-white p-6">
    <h4 className="mb-2 text-xs font-bold tracking-tight text-gray-900">
      {title}
    </h4>
    <p className="text-[10px] font-medium leading-relaxed text-gray-400">
      {desc}
    </p>
  </div>
);

export default PrivacyPolicy;
