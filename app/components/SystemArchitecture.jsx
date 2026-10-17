"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "./Icons";

export default function SystemArchitecture() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Conversion-Focused Website",
      desc: "Fast, mobile-first website designed to explain your offer clearly, establish immediate credibility, and eliminate friction.",
      icon: "language",
      detail: "Clean typography, fast load speeds, WhatsApp click-to-chat, and local SEO configuration."
    },
    {
      num: "02",
      title: "Smart Enquiry Capture",
      desc: "High-intent forms and interactive selectors that collect customer details and specific service requirements.",
      icon: "input",
      detail: "Custom qualification questions, service pickers, time slot preferences, and validation."
    },
    {
      num: "03",
      title: "Centralised Lead Tracker",
      desc: "Every incoming lead is automatically recorded in a client-owned Google Sheet or lightweight CRM pipeline.",
      icon: "table_chart",
      detail: "Zero manual data entry, categorized by stage (New, Contacted, Booked, Closed)."
    },
    {
      num: "04",
      title: "Instant Staff Alert & Sync",
      desc: "Real-time WhatsApp or Email alert sent directly to your phone the exact second an enquiry is submitted.",
      icon: "notifications_active",
      detail: "Instant lead notification with customer name, phone number, and requested service."
    },
    {
      num: "05",
      title: "Automated Follow-Up Flow",
      desc: "Pre-written response templates, appointment confirmations, and reminder messages so high-intent leads never go cold.",
      icon: "route",
      detail: "Appointment confirmation texts, calendar integration, and reminder messaging."
    }
  ];

  return (
    <div className="w-full rounded-2xl border border-border bg-background-panel p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-brand animate-pulse" />
          <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
            The Nyxra Operating System (OS)
          </h3>
        </div>
        <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-background-offset border border-border text-foreground-secondary">
          5-Stage Automated Architecture
        </span>
      </div>

      {/* 5-Step Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg border text-left transition-all duration-200 outline-none ${
                isActive
                  ? "bg-brand text-foreground border-foreground font-semibold shadow-xs"
                  : "bg-background-offset/50 border-border text-foreground-secondary hover:text-foreground hover:bg-background-offset"
              }`}
            >
              <span className="block text-[10px] font-mono uppercase opacity-75">{step.num}</span>
              <span className="text-xs font-medium block truncate mt-0.5">{step.title.split(" ")[0]} Flow</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="p-6 rounded-xl bg-background-offset border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-foreground flex-shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-2xl">
              {steps[activeStep].icon}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-brand">{steps[activeStep].num}</span>
              <h4 className="text-lg font-bold text-foreground">{steps[activeStep].title}</h4>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-xl">
              {steps[activeStep].desc}
            </p>
            <p className="text-xs text-foreground font-medium mt-2 flex items-center gap-1.5">
              <CheckCircleIcon className="w-3.5 h-3.5 text-brand" />
              <span>{steps[activeStep].detail}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <Link
            href="/clinic-demo"
            className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors"
          >
            <span>See Live Simulator</span>
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-foreground-secondary gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Client-owned tools: Google Sheets, Meta WhatsApp, Supabase, Airtable, Cal.com
        </span>
        <span className="text-[11px]">No locked enterprise contracts</span>
      </div>
    </div>
  );
}
