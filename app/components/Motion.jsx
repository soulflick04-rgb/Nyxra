"use client";

import { useEffect } from "react";


export function MotionLayer() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const elements = document.querySelectorAll(
      ".section-heading, .benefit-grid article, .process-grid article, .price-card, .identity-poster, .service-list article",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((element, index) => {
      element.style.setProperty("--delay", `${(index % 3) * 70}ms`);
      element.classList.add("reveal-ready");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) =>
        el.classList.remove("reveal-ready", "is-revealed"),
      );
    };
  }, []);
  return null;
}

