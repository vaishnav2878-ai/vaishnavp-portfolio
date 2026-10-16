"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const lenis = useLenis();

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/about#skills" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];


const handleNavClick = (e, link) => {
  setMenuOpen(false);

  if (link?.name !== "Projects") return;

  if (window.location.pathname === "/") {
    e.preventDefault();

    const projectsSection = document.getElementById("projects");

    if (!projectsSection) {
      console.error('Could not find element with id="projects"');
      return;
    }

    if (lenis) {
      lenis.scrollTo(projectsSection, {
        offset: -100,
        duration: 1.2,
      });
    } else {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(null, "", "/#projects");
  }
};
  // Handle Escape key to close the mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuOpen, lenis]);

  // Close the mobile menu when the route changes
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // Check whether a navigation link is active
  const isLinkActive = (link) => {
    if (link.name === "Home") {
      return pathname === "/" && !window.location.hash;
    }

    if (link.name === "Projects") {
      return pathname === "/" && window.location.hash === "#projects";
    }

    if (link.href.includes("#")) {
      return pathname === link.href.split("#")[0];
    }

    return pathname === link.href;
  };

  // Render desktop and mobile navigation
  return (
    <>
      <header className="fixed left-1/2 top-2.5 z-50 w-[calc(100%-1.25rem)] max-w-5xl -translate-x-1/2 print:hidden sm:top-5 sm:w-[calc(100%-2rem)]">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between rounded-full border border-white/15 bg-black/85 px-3.5 py-2 text-sm text-white shadow-2xl shadow-black/60 backdrop-blur-xl sm:px-6 sm:py-3.5"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Vaishnav P - Home"
            className="flex shrink-0 items-center gap-2 transition-transform hover:scale-105 active:scale-95 sm:gap-2.5"
            onClick={handleNavClick}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="sm:h-8 sm:w-8"
            >
              <circle cx="4.706" cy="16" r="4.706" fill="#FFFFFF" />
              <circle cx="16.001" cy="4.706" r="4.706" fill="#FFFFFF" />
              <circle cx="16.001" cy="27.294" r="4.706" fill="#FFFFFF" />
              <circle cx="27.294" cy="16" r="4.706" fill="#FFFFFF" />
            </svg>

            <span className="inline-block text-sm font-semibold tracking-tight text-white sm:text-base">
              Vaishnav
            </span>
          </Link>

          {/* Desktop navigation links */}
          {/* Desktop navigation links */}
<div className="hidden items-center gap-1 md:flex lg:gap-2">
  {navLinks.map((link) => {
    const isActive =
      link.name === "Home"
        ? pathname === "/"
        : link.name === "Projects"
          ? false
          : pathname === link.href.split("#")[0];

    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={(e) => handleNavClick(e, link)}
        className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "bg-white/10 text-white"
            : "text-gray-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        <span className="relative z-10">{link.name}</span>
      </Link>
    );
  })}
</div>

          {/* Desktop action button */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-all duration-300 hover:bg-gray-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.55)] active:scale-95"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/15 active:scale-90 md:hidden sm:h-10 sm:w-10"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            data-lenis-prevent
            className="mt-2 flex max-h-[calc(100svh-5.5rem)] flex-col gap-1 overflow-y-auto overscroll-contain rounded-2xl border border-white/15 bg-black/95 p-3 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200 sm:rounded-3xl sm:p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white sm:text-base"
              >
                <span>{link.name}</span>
              </Link>
            ))}

            <div className="mt-1 border-t border-white/10 pt-2">
              <Link
                href="/contact"
                onClick={handleNavClick}
                className="flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all hover:bg-gray-200 active:scale-95 sm:text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 md:hidden"
        />
      )}
    </>
  );
}