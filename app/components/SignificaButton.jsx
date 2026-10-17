"use client";

import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

export default function SignificaButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
  target,
  rel,
  disabled = false,
  ...rest
}) {
  const sizeClasses = {
    sm: "h-9 rounded-sm px-3.5 text-xs",
    md: "h-11 rounded-md px-5 text-sm",
    lg: "h-14 rounded-lg px-7 text-base"
  };

  const variantClasses = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "bg-transparent text-foreground border border-border hover:border-border-active hover:bg-background-offset/40",
    brand: "bg-brand text-foreground hover:brightness-105 font-semibold",
    ghost: "bg-transparent text-foreground hover:bg-background-offset"
  };

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap
    font-medium leading-none outline-none transition-all duration-300 ease-motion
    hover:ring-4 focus-visible:ring-4 ring-outline active:scale-[0.98] active:ring-2
    disabled:pointer-events-none disabled:opacity-60
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.primary}
    ${className}
  `.trim();

  const content = (
    <>
      <span
        className={`inline-flex items-center gap-1.5 transition-transform duration-300 ease-motion ${
          arrow ? (size === "lg" ? "group-hover:-translate-x-3.5" : "group-hover:-translate-x-2.5") : ""
        }`}
      >
        {children}
      </span>
      {arrow && (
        <span
          className={`absolute transition-all duration-300 ease-motion opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${
            size === "lg" ? "right-6" : size === "sm" ? "right-3" : "right-4"
          }`}
        >
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} target={target || "_blank"} rel={rel || "noopener noreferrer"} className={baseClasses} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses} {...rest}>
      {content}
    </button>
  );
}
