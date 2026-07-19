import { useEffect, useState } from "react";

/**
 * Returns the current scrollY, throttled to animation frames, for use in
 * subtle parallax transforms. Returns 0 permanently if the user prefers
 * reduced motion.
 */
export function useParallax() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return y;
}
