"use client";

import { useState } from "react";
import SignificaButton from "./SignificaButton";
import { CheckIcon } from "./Icons";

export default function PricingCardGrid({ compact = false }) {
  const [currency, setCurrency] = useState("INR");

  const plans = [
    {
      id: "launch",
      name: "Digital Launch",
      priceINR: "₹10,000",
      priceUSD: "$120",
      tagline: "Professional online presence for small businesses that need clarity and trust.",
      popular: false,
      features: [
        "Custom responsive business website",
        "Significa-grade modern typography & speed",
        "WhatsApp click-to-chat & contact form",
        "Google Maps integration & local SEO setup",
        "Client-owned hosting deployment support",
        "Two structured revision rounds",
        "Full source code and account handover"
      ],
      buttonText: "Launch My Website",
      buttonVariant: "secondary"
    },
    {
      id: "growth",
      name: "Lead Growth System",
      priceINR: "₹15,000",
      priceUSD: "$180",
      tagline: "The practical starting point for high-converting websites plus organized lead management.",
      popular: true,
      features: [
        "Everything in Digital Launch",
        "Advanced qualification enquiry form",
        "Automated Google Sheets / CRM lead tracker",
        "Instant Email/SMS notification to staff",
        "Appointment & callback request workflow",
        "Pre-written follow-up response templates",
        "Zero ongoing licensing fees required",
        "Priority founder onboarding"
      ],
      buttonText: "Build My Lead System",
      buttonVariant: "brand"
    },
    {
      id: "ai",
      name: "AI Business Starter",
      priceINR: "₹20,000",
      priceUSD: "$240",
      tagline: "A stronger system for content, rapid customer replies, and simple business automation.",
      popular: false,
      features: [
        "Everything in Lead Growth System",
        "30-day custom social content calendar & captions",
        "Business-specific AI prompt library",
        "Automated customer FAQ response templates",
        "Proposal & quotation template pack",
        "30 days of direct founder technical support",
        "Quarterly growth recommendation checklist"
      ],
      buttonText: "Request Custom Plan",
      buttonVariant: "secondary"
    }
  ];

  return (
    <div>
      {/* Currency Toggle */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className="text-xs uppercase font-semibold tracking-wider text-foreground-secondary">
          Display Currency:
        </span>
        <div className="inline-flex p-1 rounded-full bg-background-offset border border-border">
          <button
            type="button"
            onClick={() => setCurrency("INR")}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              currency === "INR"
                ? "bg-foreground text-background shadow-xs"
                : "text-foreground-secondary hover:text-foreground"
            }`}
          >
            INR (₹)
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              currency === "USD"
                ? "bg-foreground text-background shadow-xs"
                : "text-foreground-secondary hover:text-foreground"
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Grid of Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const price = currency === "INR" ? plan.priceINR : plan.priceUSD;

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-background-panel border-2 border-brand shadow-lg ring-4 ring-brand/10"
                  : "bg-background-panel border border-border hover:border-foreground/30 shadow-xs"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-brand text-foreground text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-xs text-foreground-secondary mb-6 leading-relaxed min-h-[36px]">
                  {plan.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-border">
                  <span className="text-[11px] uppercase tracking-wider text-foreground-secondary block mb-1">
                    Productised Starting At
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                      {price}
                    </span>
                    <span className="text-xs text-foreground-secondary font-medium">/ project</span>
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
                  What is included:
                </p>
                <ul className="space-y-3 text-xs text-foreground mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-brand/20 text-foreground flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-2.5 h-2.5" />
                      </span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <SignificaButton
                  href="/contact"
                  variant={plan.buttonVariant}
                  size="md"
                  arrow
                  className="w-full"
                >
                  {plan.buttonText}
                </SignificaButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Scoping Note */}
      <div className="mt-8 p-5 rounded-xl bg-background-offset border border-border flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-foreground-secondary gap-4">
        <p>
          <strong className="text-foreground">Scope Assurance:</strong> Every project starts with a written proposal defining all deliverables, tool costs, and revision milestones. No surprise add-ons.
        </p>
        <span className="text-brand font-semibold whitespace-nowrap">
          Website Care from ₹1,999/mo ($25/mo)
        </span>
      </div>
    </div>
  );
}
