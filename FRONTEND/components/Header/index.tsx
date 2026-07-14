"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Swal from 'sweetalert2';
import menuData from "./menuData"; 
// Import your NEW auth file
import { authAPI } from "../../api/auth"; 

type User = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email: string;
  avatar?: string | null;
  google_id?: string;
};

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const usePathName = usePathname();
  const router = useRouter();

  // 1. Check User Session
  useEffect(() => {
    const checkUserSession = async () => {
      // Use the key exactly as defined in your auth.js ('auth_token')
      const token = localStorage.getItem("auth_token");

      if (token) {
        try {
          // Use your authAPI wrapper (it handles the token automatically)
          const userData = await authAPI.getCurrentUser();
          
          if (userData && userData.email) {
            setUser(userData);
            // Optional: Backup user data to local storage
            localStorage.setItem("user_data", JSON.stringify(userData));
          } else {
            // Token existed but was invalid/expired
            throw new Error("Invalid session");
          }
        } catch (error) {
          console.error("Session expired:", error);
          // Cleanup EXACTLY the keys you use in auth.js
          localStorage.removeItem("auth_token");
          localStorage.removeItem("user_data");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    checkUserSession();

    // Sticky Header Logic
    const handleSticky = () => setSticky(window.scrollY >= 40);
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  // 2. Handle Logout
  const handleLogout = async () => {
    setUserMenuOpen(false);

    try {
        // authAPI handles the token automatically via interceptor
        await authAPI.logoutCorporate();
    } catch (error) {
        console.warn("Logout API failed", error);
    } finally {
        // Clear the CORRECT keys
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_data");
        setUser(null);

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: 'success',
            title: 'Logged out successfully',
            didOpen: (toast) => { toast.style.marginTop = '70px'; }
        });
        
        window.location.href = "/signin";
    }
  };

  // 3. Smart Display Name Logic
  const getDisplayName = () => {
    if (!user) return "";
    if (user.username) return user.username;
    if (user.first_name) return `${user.first_name} ${user.last_name || ''}`;
    return user.email.split('@')[0];
  };

  const displayName = getDisplayName();

  return (
    <>
      <header
        className={`header left-0 top-0 z-[9999] flex w-full items-center transition-all duration-500 ${
          sticky ? "fixed py-3 justify-center" : "absolute py-6"
        }`}
      >
        <div 
          className={`transition-all duration-500 mx-auto px-5 ${
            sticky 
              ? "container max-w-[950px] bg-white/90 backdrop-blur-xl rounded-full border border-black/5 shadow-2xl py-2" 
              : "container"
          }`}
        >
          <div className="relative flex items-center justify-between">
            
            {/* LOGO */}
            <div className={`${sticky ? "w-24" : "w-32"} transition-all duration-500`}>
              <Link href="/">
                <Image
                  src="/images/logo/g1.png"
                  alt="logo"
                  width={110}
                  height={22}
                  className="brightness-0" 
                />
              </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-7">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    <Link
                      href={menuItem.path || "#"}
                      className="text-[10px] font-black uppercase tracking-[0.25em] text-black hover:text-indigo-600 transition-all py-2"
                    >
                      {menuItem.title}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-600 transition-all ${usePathName === menuItem.path ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT SIDE: AUTH BUTTONS */}
            <div className="flex items-center gap-3 lg:gap-6">
              
              {user ? (
                /* --- LOGGED IN USER VIEW --- */
                <div className="relative flex items-center gap-4">
                  
                  {/* Avatar Button */}
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-gray-200 bg-slate-100 ring-2 ring-transparent hover:ring-indigo-500 transition-all focus:outline-none"
                  >
                     <img 
                        src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random&color=fff`} 
                        alt="Profile"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random&color=fff`;
                        }}
                      />
                  </button>

                  {/* Dropdown Menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 top-12 w-56 rounded-xl bg-white shadow-xl border border-gray-100 dark:bg-slate-900 dark:border-slate-700 z-[99999] overflow-hidden">
                      
                      <div className="px-5 py-4 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-700">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {displayName}
                        </p>
                        <p className="text-xs text-slate-500 truncate mt-0.5">{user.email}</p>
                      </div>

                      <div className="py-2">
                        {/* Only show "Change Password" if NOT a Google User */}
                        {!user.google_id && (
                          <Link href="/passwords/change-password">
                            <span 
                                onClick={() => setUserMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors"
                            >
                              Change Password
                            </span>
                          </Link>
                        )}

                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              ) : (
                /* --- LOGGED OUT VIEW --- */
                <Link
                  href="/signin"
                  className={`flex items-center justify-center rounded-full bg-black text-white font-[1000] uppercase tracking-[0.15em] transition-all hover:bg-indigo-600 active:scale-95 ${
                    sticky ? "px-4 py-1.5 text-[8px]" : "px-6 py-2.5 text-[9px]"
                  }`}
                >
                  Login
                </Link>
              )}

              {/* Mobile Toggle Button */}
              <button 
                onClick={() => setNavbarOpen(!navbarOpen)} 
                className="block lg:hidden text-black p-1 z-[10001] relative focus:outline-none"
              >
                  <div className="w-5 flex flex-col items-end gap-1">
                    <span className={`h-0.5 bg-black transition-all duration-300 ${navbarOpen ? "w-5 rotate-45 translate-y-1.5 bg-white" : "w-5"}`} />
                    <span className={`h-0.5 bg-black transition-all duration-300 ${navbarOpen ? "opacity-0" : "w-3"}`} />
                    <span className={`h-0.5 bg-black transition-all duration-300 ${navbarOpen ? "w-5 -rotate-45 -translate-y-1.5 bg-white" : "w-4"}`} />
                 </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Drawer */}
         <div className={`fixed inset-0 z-[10000] flex items-start justify-end p-4 transition-all duration-500 lg:hidden ${
            navbarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setNavbarOpen(false)} />
          
          <div className={`relative w-[250px] bg-black rounded-[2rem] p-8 shadow-2xl transition-all duration-500 transform ${
              navbarOpen ? "translate-x-0" : "translate-x-20"
            }`}
          >
            <ul className="flex flex-col gap-6 pt-10">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={() => setNavbarOpen(false)}
                    className="text-xs font-black uppercase tracking-[0.3em] text-white hover:text-indigo-400 transition-all block"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              <div className="h-px bg-white/10 my-4" />
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;