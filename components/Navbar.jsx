"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/about#skills" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change using React's recommended state adjustment pattern
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between rounded-full border border-white/15 bg-black/80 px-4 py-2.5 sm:px-6 sm:py-3.5 text-sm text-white shadow-2xl shadow-black/60 backdrop-blur-xl"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Vaishnav P - Home"
            className="flex items-center gap-2.5 shrink-0 transition-transform hover:scale-105 active:scale-95"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="sm:w-8 sm:h-8"
            >
              <circle cx="4.706" cy="16" r="4.706" fill="#FFFFFF" />
              <circle cx="16.001" cy="4.706" r="4.706" fill="#FFFFFF" />
              <circle cx="16.001" cy="27.294" r="4.706" fill="#FFFFFF" />
              <circle cx="27.294" cy="16" r="4.706" fill="#FFFFFF" />
            </svg>
            <span className="font-semibold tracking-tight text-white text-sm sm:text-base hidden xs:inline-block">
              Vaishnav
            </span>
          </Link>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href.split("#")[0]);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop action button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.55)] active:scale-95"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/15 active:scale-90 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="mt-2.5 flex flex-col gap-1.5 rounded-3xl border border-white/15 bg-black/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href.split("#")[0]);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-white/10 mt-1">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-gray-200 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
        />
      )}
    </>
  );
}