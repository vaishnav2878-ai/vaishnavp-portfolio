"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // Controls whether the mobile menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links for the portfolio.
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-slate-700 bg-black/85 px-5 py-3 text-sm text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:px-6 sm:py-4">

      {/* Logo: Four-circle design */}
      <Link
        href="#home"
        aria-label="Vaishnav P Home"
        className="shrink-0"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </Link>

      {/* Desktop navigation links */}
      <div className="ml-7 hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative h-6 overflow-hidden text-gray-300 hover:text-white"
          >
            {/* Original text moves upward on hover */}
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {link.name}
            </span>

            {/* Duplicate text slides into view */}
            <span className="absolute left-0 top-full block whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop action buttons */}
      <div className="ml-8 hidden items-center gap-4 md:flex">
        

        {/* Glowing Get Started button */}
        <Link
          href="#projects"
          className="rounded-full bg-white px-4 py-2 font-medium text-black shadow-[0_0_30px_7px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-slate-100 hover:shadow-[0_0_30px_14px_rgba(255,255,255,0.35)]"
        >
          Contact
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-[calc(100%+12px)] flex flex-col items-center gap-2 rounded-3xl border border-slate-700 bg-black/95 p-5 text-base shadow-2xl backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="w-full rounded-xl px-4 py-3 text-center text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile contact button */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-full border border-slate-600 px-4 py-3 text-center transition hover:bg-slate-800"
          >
            Contact
          </Link>

          {/* Mobile Get Started button */}
          <Link
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="w-full rounded-full bg-white px-4 py-3 text-center font-medium text-black transition hover:bg-slate-200"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}