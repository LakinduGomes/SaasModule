"use client";
import React from "react";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-primary/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-10">
        <div className="text-xl font-bold tracking-tighter text-gray-900">
          GATEONE<span className="text-[#0070f3]">SOFT</span>
        </div>
        <button
          onClick={() => window.close()}
          className="rounded-full border border-gray-200 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-all hover:bg-gray-100"
        >
          Close Document ×
        </button>
      </nav>

      <main className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm shadow-gray-200/50 md:p-16">
          {children}
        </div>

        <div className="mt-12 text-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Official Document • Gate One Soft © 2026
        </div>
      </main>
    </div>
  );
}
