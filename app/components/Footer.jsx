"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import SignificaButton from "./SignificaButton";

export default function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setLocalTime(timeStr);
      } catch (e) {
        setLocalTime("12:00 PM");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-background-panel border-t border-border mt-20 transition-colors">
      {/* Pre-footer Callout */}
      <div className="border-b border-border py-16">
        <div className="container-significa flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
              Start With A Free Review
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Let&apos;s build a simpler system <br className="hidden sm:inline" />
              for your business.
            </h2>
            <p className="text-sm text-foreground-secondary mt-3 max-w-xl">
              Get an actionable 20-minute video review of your current website, enquiry flow, and lead management with zero pressure.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <SignificaButton href="/contact" size="lg" variant="brand" arrow>
              Get Free Business Audit
            </SignificaButton>
            <SignificaButton href="mailto:supportnyxra@gmail.com" size="lg" variant="secondary">
              Email Founder
            </SignificaButton>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="container-significa py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Live Time */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-border bg-background-offset p-0.5">
                <img src="/logo.png" alt="Nyxra" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">NYXRA</span>
            </Link>
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-sm mb-6">
              Nyxra is a digital and automation studio founded by Rishi Srivastav. We build high-converting websites, lead-capture systems, and practical AI workflows for ambitious businesses.
            </p>

            {/* Live Clock Card (Significa hallmark) */}
            <div className="inline-flex flex-col p-3 rounded-lg bg-background-offset border border-border text-xs">
              <span className="text-[11px] uppercase tracking-wider text-foreground-secondary font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Studio Local Time (IST)
              </span>
              <span className="font-mono text-base font-semibold text-foreground mt-1">
                {localTime || "12:00:00 PM"}
              </span>
              <span className="text-[10px] text-foreground-secondary mt-0.5">
                India & Global • Direct Founder Communication
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="text-foreground hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-brand transition-colors">
                  Services & Deliverables
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-foreground hover:text-brand transition-colors">
                  Pricing Packages
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground hover:text-brand transition-colors">
                  Demo Systems
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground hover:text-brand transition-colors">
                  About & Founder
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-brand transition-colors">
                  Free Audit & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Demo Systems */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-4">
              Demo Systems
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/clinic-demo" className="text-foreground hover:text-brand transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  Clinic Booking (Live)
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground hover:text-brand transition-colors">
                  Coaching Pipeline
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground hover:text-brand transition-colors">
                  Consultant Booking Flow
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground hover:text-brand transition-colors">
                  Local Service Engine
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground hover:text-brand transition-colors">
                  AI Content Starters
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Theme */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-4">
              Legal & Theme
            </h4>
            <ul className="space-y-2.5 text-sm font-medium mb-6">
              <li>
                <Link href="/privacy" className="text-foreground hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground hover:text-brand transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:supportnyxra@gmail.com" className="text-foreground hover:text-brand transition-colors font-mono text-xs">
                  supportnyxra@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <span className="text-xs text-foreground-secondary">Theme:</span>
              <ThemeSwitch />
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-foreground-secondary gap-4">
          <p>© 2026 NYXRA. Founded by Rishi Srivastav. All rights reserved.</p>
          <p>Client-owned accounts. Clear written scope. No proprietary lock-in.</p>
        </div>
      </div>
    </footer>
  );
}
