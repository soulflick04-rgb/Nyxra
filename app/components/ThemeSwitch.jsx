"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export default function ThemeSwitch({ className = "" }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : theme === "dark" ? "yellow" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("nyxra-theme", next);
    } catch (e) {}
  };

  if (!mounted) {
    return (
      <div className={`w-[50px] h-[26px] rounded-full bg-background-offset border border-border opacity-50 ${className}`} />
    );
  }

  const isChecked = theme === "dark" || theme === "yellow";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Toggle theme (currently ${theme})`}
      title={`Current theme: ${theme}. Click to switch.`}
      className={`relative flex items-center w-[52px] h-[28px] rounded-full bg-background-offset border border-border cursor-pointer transition-colors outline-none focus-visible:ring-2 ring-brand ${className}`}
    >
      <span className="absolute left-[7px] text-foreground-secondary pointer-events-none">
        <SunIcon className="w-3.5 h-3.5" />
      </span>
      <span className="absolute right-[7px] text-foreground-secondary pointer-events-none">
        <MoonIcon className="w-3.5 h-3.5" />
      </span>

      <span
        className={`absolute top-[2px] w-[22px] h-[22px] rounded-full bg-background border border-border shadow-sm flex items-center justify-center transition-all duration-300 ease-motion ${
          isChecked ? "left-[26px]" : "left-[2px]"
        }`}
      >
        {theme === "light" && <SunIcon className="w-3 h-3 text-foreground" />}
        {theme === "dark" && <MoonIcon className="w-3 h-3 text-brand" />}
        {theme === "yellow" && (
          <span className="w-2.5 h-2.5 rounded-full bg-brand border border-foreground" />
        )}
      </span>
    </button>
  );
}
