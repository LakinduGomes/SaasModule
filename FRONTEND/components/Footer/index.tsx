"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pb-10 pt-20">
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-12 w-full px-4 lg:mb-0 lg:w-4/12">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo/g1.png"
                alt="logo"
                width={140}
                height={30}
                className="mb-4"
              />
            </Link>
            <p className="mb-8 max-w-[300px] text-base leading-relaxed text-gray-500">
              Redefining excellence through modern aesthetics and user-centric
              digital solutions.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "Instagram", "LinkedIn"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 transition-all hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12 w-1/2 px-4 lg:mb-0 lg:w-2/12">
            <h4 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Explore
            </h4>
            <ul className="space-y-4">
              <li>
                <NavLink href="/about">Our Story</NavLink>
              </li>
              <li>
                <NavLink href="/blogs">Insights</NavLink>
              </li>
              <li>
                <NavLink href="/pricing">Plans</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Get in Touch</NavLink>
              </li>
            </ul>
          </div>

          <div className="mb-12 w-1/2 px-4 lg:mb-0 lg:w-2/12">
            <h4 className="mb-7 text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Assistance
            </h4>
            <ul className="space-y-4">
              <li>
                <NavLink href="/help">Help Center</NavLink>
              </li>
              <li>
                <NavLink href="/community">Community</NavLink>
              </li>
              <li>
                <NavLink href="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink href="/support">Support Ticket</NavLink>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-4/12">
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-8">
              <div className="relative z-10">
                <h4 className="mb-2 font-bold text-gray-900">Join the Elite</h4>
                <p className="mb-6 text-sm text-gray-500">
                  Receive curated updates and exclusive offers.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button className="absolute right-1 top-1 rounded-full bg-gray-900 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-primary">
                    Go
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/5"></div>
            </div>
          </div>
        </div>

        <div className="mb-8 mt-20 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-gray-100 bg-[#FDFDFD] px-8 py-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
  {/* Corrected to use Next.js <Link> and no .html extension */}
  <Link 
    href="/policies/return-policy" 
    className="group block transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex flex-col">
      <span className="text-sm font-black tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
        Return Policy
      </span>
      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300 transition-colors group-hover:text-gray-400">
        30-Day Money Back
      </span>
    </div>
  </Link>

  <div className="hidden h-8 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent md:block"></div>

  <Link 
    href="/policies/terms-and-conditions" 
    className="group block transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex flex-col">
      <span className="text-sm font-black tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
        Terms & Conditions
      </span>
      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300 transition-colors group-hover:text-gray-400">
        Service Agreement
      </span>
    </div>
  </Link>

  <div className="hidden h-8 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent md:block"></div>

  <Link 
    href="/policies/privacy-policy" 
    className="group block transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex flex-col">
      <span className="text-sm font-black tracking-tight text-gray-900 transition-colors group-hover:text-blue-600">
        Privacy Policy
      </span>
      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300 transition-colors group-hover:text-gray-400">
        100% Data Security
      </span>
    </div>
  </Link>
</div>
          <div className="flex gap-4">
            <div className="h-6 w-10 rounded border border-gray-200 bg-gray-100"></div>
            <div className="h-6 w-10 rounded border border-gray-200 bg-gray-100"></div>
            <div className="h-6 w-10 rounded border border-gray-200 bg-gray-100"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs font-medium tracking-wide text-gray-400">
            DESIGNED BY <span className="text-gray-900">GATEONESOFT</span> — ©
            2026 ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms-conditions.php"
              target="_blank"
              className="text-xs text-gray-400 transition-colors hover:text-primary"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-xs text-gray-400 transition-colors hover:text-primary"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block text-sm text-gray-500 transition-all duration-300 hover:translate-x-1 hover:text-primary"
  >
    {children}
  </Link>
);

const PolicyItem = ({
  href,
  title,
  sub,
}: {
  href: string;
  title: string;
  sub: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block transition-transform duration-300 hover:-translate-y-1"
  >
    <div className="flex flex-col">
      <span className="text-sm font-bold text-gray-900 transition-colors group-hover:text-primary">
        {title}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-tighter text-gray-400">
        {sub}
      </span>
    </div>
  </Link>
);

export default Footer;
