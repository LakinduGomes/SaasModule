"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; 
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import SessionTimeoutModal from "@/components/SessionTimeoutModal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 

  const isPolicyPage = pathname?.startsWith("/policies");

  return (
    <html suppressHydrationWarning lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
      <Providers>
        {!isPolicyPage && <Header />}

        {children}

        {!isPolicyPage && <Footer />}
        {!isPolicyPage && <ScrollToTop />}

        {/* Session timeout modal */}
        <SessionTimeoutModal />
      </Providers>

      </body>
    </html>
  );
}