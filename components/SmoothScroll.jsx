"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function LenisScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();
  const initialLoadRef = useRef(true);

  // Handle route change scroll-to-top or hash scrolling
  useEffect(() => {
    if (!lenis) return;

    // Check if there is an in-page hash (e.g., /about#skills or /#home)
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        // Small delay to allow layout to settle
        const timeout = setTimeout(() => {
          lenis.scrollTo(target, { offset: -90, duration: 1.2 });
        }, 150);
        return () => clearTimeout(timeout);
      }
    } else if (!initialLoadRef.current) {
      // Scroll to top immediately on page navigation (when there's no hash)
      lenis.scrollTo(0, { immediate: true });
    }

    initialLoadRef.current = false;
  }, [pathname, lenis]);

  // Intercept on-page hash anchor clicks for smooth scrolling
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle pure hash links like #about or #skills
      if (href.startsWith("#") && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -90, duration: 1.2 });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      }}
    >
      <LenisScrollHandler />
      {children}
    </ReactLenis>
  );
}
