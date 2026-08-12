import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChefHat, ShoppingBag, Menu as MenuIcon, X, Calendar } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Navbar({ scrolled, menuOpen, setMenuOpen }) {
  const { totalCartItems, setIsCartOpen, setIsReserveModalOpen } = useApp();
  const location = useLocation();

  // Handle mobile menu exit animation
  const [renderMobileMenu, setRenderMobileMenu] = useState(false);
  const [mobileMenuAnimating, setMobileMenuAnimating] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setRenderMobileMenu(true);
      setMobileMenuAnimating(true);
    } else if (renderMobileMenu) {
      setMobileMenuAnimating(false);
      const timer = setTimeout(() => setRenderMobileMenu(false), 250);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "Team", path: "/team" },
    { label: "Reviews", path: "/reviews" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1B1712]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10"
          : "bg-[#1B1712]/60 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <ChefHat className="w-7 h-7 text-[#D9A441] group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.75} />
          <span className="font-serif text-xl sm:text-2xl tracking-wide text-[#F4EFE6]">Ember &amp; Root</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-widest uppercase text-[#F4EFE6]/80 font-medium">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `transition-all duration-200 hover:text-[#D9A441] py-1 border-b-2 ${
                  isActive ? "text-[#D9A441] border-[#D9A441] font-semibold" : "border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setIsReserveModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 border border-[#D9A441]/50 text-[#D9A441] font-semibold text-xs px-3.5 sm:px-4 py-2.5 rounded-full hover:bg-[#D9A441] hover:text-[#1B1712] transition-all duration-200 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Reserve Table</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-[#D9A441] text-[#1B1712] font-semibold text-xs px-3.5 sm:px-4 py-2.5 rounded-full hover:bg-[#eab654] transition-all duration-200 shadow-md active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Order Now</span>
            {totalCartItems > 0 && (
              <span className="w-5 h-5 bg-[#1B1712] text-[#D9A441] text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-up">
                {totalCartItems}
              </span>
            )}
          </button>

          <button
            className="lg:hidden text-[#F4EFE6] p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Smooth Enter + Exit */}
      {renderMobileMenu && (
        <div
          className={`lg:hidden bg-[#1B1712]/98 border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-xs uppercase tracking-widest font-medium shadow-2xl backdrop-blur-xl ${
            mobileMenuAnimating ? "animate-slide-down" : "animate-fade-out"
          }`}
        >
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 transition-colors border-b border-white/5 ${
                  isActive ? "text-[#D9A441] font-bold pl-2 border-[#D9A441]/40" : "text-[#F4EFE6]/80 hover:text-[#D9A441]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              setIsReserveModalOpen(true);
            }}
            className="w-full text-center border border-[#D9A441] text-[#D9A441] py-3 rounded-full font-semibold text-xs mt-2 hover:bg-[#D9A441] hover:text-[#1B1712] transition-colors"
          >
            Reserve Table
          </button>
        </div>
      )}
    </header>
  );
}
