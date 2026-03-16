"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AnchorScroller() {
  const router = useRouter();

  useEffect(() => {
    // Handle anchor scrolling on page load and when hash changes
    const handleAnchorScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.substring(1); // Remove the '#' character
      let attempts = 0;
      const maxAttempts = 50; // Try for up to 5 seconds (50 * 100ms)

      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          // Wait for next frame to ensure layout is complete
          requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToElement, 100);
        }
      };

      // Small delay to ensure DOM is ready
      setTimeout(scrollToElement, 100);
    };

    // Handle on initial load
    handleAnchorScroll();

    // Handle when hash changes (e.g., clicking a link with anchor)
    window.addEventListener("hashchange", handleAnchorScroll);

    return () => {
      window.removeEventListener("hashchange", handleAnchorScroll);
    };
  }, []);

  return null;
}
