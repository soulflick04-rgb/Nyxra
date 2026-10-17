"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeftIcon } from "../components/Icons";

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-16">
        <div className="container-significa max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand hover:underline mb-8">
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>Back to Nyxra Home</span>
          </Link>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-foreground-secondary leading-relaxed mb-12">
            This page provides transparent, plain-language privacy information for Nyxra. Project deliverables, third-party software, and data handling are established in writing prior to project kickoff.
          </p>

          <div className="space-y-6 text-sm text-foreground-secondary leading-relaxed">
            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                Nyxra collects information you choose to provide through our audit request forms, direct emails, and project discovery discussions. This includes your name, business name, phone/WhatsApp number, email address, current website URL, industry category, and project scope requirements.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">2. 100% Client Data Ownership</h2>
              <p>
                Where practical, Nyxra deploys systems directly onto client-owned accounts (e.g. your own domain registrar, your Google Drive / Sheets account, your Meta WhatsApp business manager, and your hosting provider). You retain 100% ownership and administrative access to all customer records and data at all times.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">3. How Information is Used</h2>
              <p>
                Your inquiry data is used solely to evaluate your business requirements, prepare your customized 20-minute video audit, and communicate about project proposals. We never sell, rent, or monetize your contact or business information to third parties.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">4. Contact & Inquiries</h2>
              <p>
                If you have questions regarding our data practices or wish to request the deletion of your enquiry information, you may contact our founder directly at:{" "}
                <a href="mailto:supportnyxra@gmail.com" className="text-foreground font-mono font-medium hover:underline">
                  supportnyxra@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
