"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/portfolio", label: "Demo Systems" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Audit & Contact" }
  ];

  return (
    <>
      <nav id="main-nav" className="bg-surface border-b border-outline w-full sticky top-0 z-50 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-gutter py-3 max-w-container-max mx-auto">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="NYXRA Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-headline-lg text-2xl sm:text-3xl tracking-tighter text-on-surface uppercase group-hover:text-primary transition-colors">
              NYXRA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-7 items-center font-label-caps text-label-caps uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-primary border-b-2 border-primary pb-1 font-bold"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-on-surface text-surface px-6 py-3 font-button text-button uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-300 shadow-[2px_2px_0px_#1c1b1b]"
            >
              Free Business Audit
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-on-surface p-2 focus:outline-none flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-surface border-l-2 border-on-surface shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex justify-between items-center border-b border-outline pb-4 mb-6">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                  <img src="/logo.png" alt="NYXRA" className="h-9 w-9 object-contain rounded-lg" />
                  <span className="font-headline-lg text-2xl tracking-tight uppercase">NYXRA</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-on-surface hover:text-primary transition-colors"
                  aria-label="Close Sidebar"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 font-label-caps text-sm uppercase">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`py-3 px-3 rounded-lg flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-secondary-container text-on-secondary-container font-bold border border-on-surface"
                          : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </Link>
                  );
                })}
              </div>

              {/* Primary Action Button */}
              <div className="mt-6 pt-4 border-t border-outline">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block bg-primary text-white py-3.5 px-4 font-button text-xs uppercase tracking-widest hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1c1b1b]"
                >
                  Get Free Business Audit →
                </Link>
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div className="border-t border-outline pt-4 mt-6">
              <p className="text-[11px] font-label-caps uppercase text-on-surface-variant mb-1 font-bold">Direct Founder Contact</p>
              <a href="mailto:supportnyxra@gmail.com" className="text-xs font-mono font-bold text-primary hover:underline block break-all">
                supportnyxra@gmail.com
              </a>
              <p className="text-[10px] text-on-surface-variant mt-2 font-label-caps uppercase">© 2026 NYXRA Studio</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
