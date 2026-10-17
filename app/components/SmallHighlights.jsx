"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export default function SmallHighlights({ items, className = "" }) {
  const containerRef = useRef(null);
  const [hoverStyle, setHoverStyle] = useState({
    opacity: 0,
    transform: "scale(0.95)",
    left: 0,
    top: 0,
    width: 0,
    height: 0
  });

  const defaultItems = [
    {
      title: "Clinic Booking & Patient Engine",
      subtitle: "Live Interactive Simulator",
      category: "From Demo Systems",
      href: "/clinic-demo",
      badge: "Live Simulator",
      icon: "medical_services"
    },
    {
      title: "7 Core Principles That Guide Nyxra",
      subtitle: "Practical Systems Over Hype",
      category: "Our Philosophy",
      href: "/about",
      badge: "Philosophy",
      icon: "handyman"
    },
    {
      title: "Transparent Productised Pricing",
      subtitle: "Clear scope from ₹10,000",
      category: "Pricing & Scope",
      href: "/pricing",
      badge: "Fixed Scopes",
      icon: "receipt_long"
    },
    {
      title: "Free 20-Min Business Audit",
      subtitle: "Identify your enquiry leaks",
      category: "Complimentary Review",
      href: "/contact",
      badge: "Free Audit",
      icon: "auto_awesome"
    }
  ];

  const highlights = items || defaultItems;

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    setHoverStyle({
      opacity: 1,
      transform: "scale(1)",
      left: `${el.offsetLeft}px`,
      top: `${el.offsetTop}px`,
      width: `${el.offsetWidth}px`,
      height: `${el.offsetHeight}px`
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle((prev) => ({
      ...prev,
      opacity: 0,
      transform: "scale(0.95)"
    }));
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      className={`relative -mx-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 ${className}`}
    >
      {/* Gliding Magnetic Pill Backdrop */}
      <div
        aria-hidden="true"
        style={hoverStyle}
        className="pointer-events-none absolute -z-10 rounded-xl bg-background-offset border border-border/80 transition-all duration-300 ease-smooth"
      />

      {highlights.map((item, idx) => (
        <Link
          key={idx}
          href={item.href}
          onMouseEnter={handleMouseEnter}
          className="group flex flex-col justify-between p-4 rounded-xl border border-border/50 bg-background/50 hover:border-transparent transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-medium uppercase tracking-wider text-foreground-secondary">
                {item.category}
              </span>
              <span className="w-6 h-6 rounded-md bg-background-offset border border-border flex items-center justify-center text-foreground-secondary group-hover:text-foreground group-hover:border-brand transition-colors">
                <span className="material-symbols-outlined text-[15px]">{item.icon}</span>
              </span>
            </div>

            <h3 className="text-base font-semibold text-foreground leading-snug mb-1 group-hover:text-foreground">
              {item.title}
            </h3>

            <p className="text-xs text-foreground-secondary leading-relaxed">
              {item.subtitle}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-medium text-foreground-secondary group-hover:text-foreground">
            <span>Explore</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightIcon className="w-3.5 h-3.5 text-brand" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
