"use client";

const checkIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L3.5 6.5L1 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OfferList = ({
  text,
  status,
  category,
}: {
  text: string;
  status: "active" | "inactive";
  category?: string;
}) => {
  return (
    <div className="group flex items-start gap-3 py-1">
      <div
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors ${
          status === "active"
            ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {checkIcon}
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium leading-tight text-slate-700 dark:text-slate-300">
          {text}
        </p>
        {category && (
          <span className="mt-0.5 text-[9px] font-black uppercase tracking-widest text-slate-400">
            {category}
          </span>
        )}
      </div>
    </div>
  );
};

export default OfferList;
