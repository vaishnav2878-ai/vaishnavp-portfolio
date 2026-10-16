"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

import "lenis/dist/lenis.css";

function LenisScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  // Handle route changes and hash navigation
  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;

    if (hash) {
      // Wait for the page content to render before scrolling
      const timeout = setTimeout(() => {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1))
        );

        if (target) {
          lenis.scrollTo(target, {
            offset: -90,
            duration: 1.2,
          });
        }
      }, 300);

      return () => clearTimeout(timeout);
    }

    // Scroll to the top when navigating to another page
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  // Handle in-page and cross-page navigation to hash links
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e) => {
      // Ignore clicks that are not normal left-clicks
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const anchor = e.target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      if (!href) return;

      let url;

      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }

      // Only handle links pointing to the current website
      if (url.origin !== window.location.origin) return;

      // Only handle links containing a hash
      if (!url.hash) return;

      const targetId = decodeURIComponent(url.hash.slice(1));

      if (!targetId) return;

      // On the current page, scroll directly without navigating
      if (url.pathname === window.location.pathname) {
        const target = document.getElementById(targetId);

        if (target) {
          e.preventDefault();

          lenis.scrollTo(target, {
            offset: -90,
            duration: 1.2,
          });

          window.history.replaceState(
            null,
            "",
            `${url.pathname}${url.hash}`
          );
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 0,
        syncTouch: false,
      }}
    >
      <LenisScrollHandler />
      {children}
    </ReactLenis>
  );
}