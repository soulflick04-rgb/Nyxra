"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqs = [
    {
      q: "What exactly does Nyxra build?",
      a: "Nyxra builds professional, high-performing websites, landing pages, lead-capture forms, centralized CRM lead trackers (like Google Sheets / Airtable), appointment booking workflows, and reusable AI-assisted content and reply systems for small businesses."
    },
    {
      q: "Do I need technical knowledge to manage my website?",
      a: "No. The entire project is planned and executed in plain, straightforward language. The handover includes clear video guidance on how to view your incoming leads, update basic text, and manage your customer appointment requests."
    },
    {
      q: "How long does a typical project take?",
      a: "Most small business websites and lead capture pipelines are planned and delivered within 5 to 14 days, depending on scope, copy/image readiness, and connected automation requirements."
    },
    {
      q: "Will I own my website and business data?",
      a: "100% yes. Where practical, client-owned accounts are used for hosting, domain registration, forms, analytics, and CRM tools. We never hold your assets hostage in proprietary software."
    },
    {
      q: "Do you guarantee sales or revenue?",
      a: "No. Nyxra builds reliable digital systems that dramatically improve clarity, discovery, enquiry capture, and speed of follow-up. Final sales depend on your product offer, pricing, market fit, and business execution."
    },
    {
      q: "What ongoing costs should I expect?",
      a: "Domain registration (~$12/year) and basic hosting (often free or ~$5-$15/month). We specify every third-party cost in writing beforehand so there are zero surprises. Optional website maintenance is available from ₹1,999/month."
    }
  ];

  const faqs = items || defaultFaqs;

  return (
    <div className="border-t border-border divide-y divide-border">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="py-5 transition-colors">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between text-left group outline-none"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-brand transition-colors pr-6">
                {faq.q}
              </h3>
              <span
                className={`w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-45 bg-foreground text-background" : "bg-background-offset group-hover:border-brand"
                }`}
              >
                <span className="text-lg leading-none font-light">+</span>
              </span>
            </button>
            {isOpen && (
              <div className="pt-3 pr-10 text-sm text-foreground-secondary leading-relaxed animate-in fade-in duration-200">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
