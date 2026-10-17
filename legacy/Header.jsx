"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignificaButton from "./SignificaButton";
import ThemeSwitch from "./ThemeSwitch";
import { ThreeDotsIcon, CloseIcon, ArrowRightIcon } from "./Icons";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Close drawer on path change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  // Smart hide on scroll down / show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setIsNavVisible(false); // scrolling down
        } else if (lastScrollY - currentScrollY > 6) {
          setIsNavVisible(true); // scrolling up
        }
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Escape key handler for drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
      <div className="h-[76px] w-full" />
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[76px] bg-background/95 backdrop-blur-md transition-all duration-300 ease-motion border-b ${
          isScrolled ? "border-b-border shadow-sm" : "border-b-transparent"
        } ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container-significa h-full flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-border bg-background-offset p-0.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="/logo.png" alt="Nyxra" className="w-full h-full object-contain" onError={(e) => (e.target.style.display = 'none')} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand">
                NYXRA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive ? "text-foreground font-semibold" : "text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Trailing Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Switch */}
            <ThemeSwitch />

            {/* Audit CTA Button */}
            <div className="hidden sm:block">
              <SignificaButton href="/contact" size="sm" variant="primary" arrow>
                Free Audit
              </SignificaButton>
            </div>

            {/* 3-Dots Drawer Trigger Button */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open directory menu"
              className="w-9 h-9 rounded-md border border-border bg-transparent text-foreground flex items-center justify-center hover:border-border-active hover:bg-background-offset/50 transition-all duration-200 outline-none focus-visible:ring-2 ring-brand"
            >
              <ThreeDotsIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
          />

          {/* Drawer Sidebar */}
          <aside className="relative z-50 w-full max-w-md h-full bg-background border-l border-border p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl transition-transform duration-300 ease-motion">
            {/* Top Bar inside Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setDrawerOpen(false)}>
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-border bg-background-offset p-0.5">
                    <img src="/logo.png" alt="Nyxra" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-foreground">NYXRA</span>
                </Link>

                <div className="flex items-center gap-2">
                  <SignificaButton href="/contact" size="sm" variant="brand">
                    Audit
                  </SignificaButton>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-md border border-border bg-background-offset text-foreground flex items-center justify-center hover:bg-background-offset/80 transition-colors"
                  >
                    <CloseIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Directory Links */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-4">
                  Navigation
                </p>
                <ul className="space-y-3 text-lg font-medium">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setDrawerOpen(false)}
                          className={`flex items-center justify-between py-1 transition-colors ${
                            isActive ? "text-brand font-semibold" : "text-foreground hover:text-foreground-secondary"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowRightIcon className="w-4 h-4 text-foreground-tertiary" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Interactive Demos Group */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-4">
                  Interactive Demos
                </p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/clinic-demo"
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-background-offset/60 hover:bg-background-offset transition-colors text-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Apex Clinic Booking System</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand/20 text-foreground">
                        Live Simulator
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      onClick={() => setDrawerOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-background-offset transition-colors text-foreground-secondary hover:text-foreground"
                    >
                      Coaching Admission Funnel &rarr;
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      onClick={() => setDrawerOpen(false)}
                      className="block p-2.5 rounded-lg hover:bg-background-offset transition-colors text-foreground-secondary hover:text-foreground"
                    >
                      Consultant Booking Architecture &rarr;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Founder & Studio Meta */}
            <div className="mt-8 pt-6 border-t border-border text-xs text-foreground-secondary space-y-3">
              <div className="flex items-center justify-between">
                <span>Studio Founder:</span>
                <span className="font-semibold text-foreground">Rishi Srivastav</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Direct Contact:</span>
                <a href="mailto:supportnyxra@gmail.com" className="text-foreground hover:underline font-mono">
                  supportnyxra@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span>Operating Model:</span>
                <span className="text-[11px] font-medium text-foreground">Client-Owned Accounts</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
