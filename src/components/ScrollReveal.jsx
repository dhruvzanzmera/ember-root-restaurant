import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const targets = document.querySelectorAll(
      "main section:not(.hero-section), main [data-aos], main .hero-copy, main .hero-visual"
    );

    if (!targets.length) return;

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
    }

    targets.forEach((target) => {
      const delay = Math.min(Number(target.getAttribute("data-aos-delay")) || 0, 360);
      target.style.setProperty("--reveal-delay", `${delay}ms`);
      target.classList.add("reveal-on-scroll");
      observer?.observe(target);
    });

    let frameId;
    const revealVisibleTargets = () => {
      frameId = undefined;
      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) return;

        const bounds = target.getBoundingClientRect();
        if (bounds.top < window.innerHeight - 40 && bounds.bottom > 0) {
          target.classList.add("is-visible");
          observer?.unobserve(target);
        }
      });
    };
    const scheduleRevealCheck = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(revealVisibleTargets);
      }
    };
    const handleVisibilityChange = () => {
      if (!document.hidden) scheduleRevealCheck();
    };

    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    scheduleRevealCheck();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
