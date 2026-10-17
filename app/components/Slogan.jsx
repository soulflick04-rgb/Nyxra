"use client";

import { useEffect, useState } from "react";

export default function Slogan({
  words = ["Websites.", "Lead Systems.", "Automations.", "Growth.", "Scale."],
  as: Component = "h1",
  className = "",
  onEnd
}) {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (revealedCount < words.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timer);
    } else if (onEnd) {
      onEnd();
    }
  }, [revealedCount, words.length, onEnd]);

  return (
    <Component className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.02em] leading-[1.08] ${className}`}>
      {words.map((word, index) => {
        const isRevealed = index < revealedCount;
        const isLast = index === words.length - 1;
        return (
          <span
            key={index}
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed ? "translateY(0)" : "translateY(0.75ch)"
            }}
            className={`mr-2.5 sm:mr-4 inline-block transition-all duration-500 ease-motion ${
              isLast ? "text-foreground-secondary" : "text-foreground"
            }`}
          >
            {word}
            {index % 2 === 1 && <span className="hidden sm:inline"><br /></span>}
          </span>
        );
      })}
    </Component>
  );
}
