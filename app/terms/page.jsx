"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowLeftIcon } from "../components/Icons";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-base text-foreground-secondary leading-relaxed mb-12">
            These are the operational terms governing Nyxra&apos;s digital systems and consulting services. All exact project scopes, milestone payments, and third-party tools are formalized in a written proposal prior to project commencement.
          </p>

          <div className="space-y-6 text-sm text-foreground-secondary leading-relaxed">
            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">1. Services & Written Scope</h2>
              <p>
                Nyxra provides high-conversion website design, lead capture workflows, appointment booking systems, CRM pipeline setups, and practical business automation. Each engagement is governed by an agreed written scope defining deliverables, revision milestones, and delivery timelines.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">2. Intellectual Property & Asset Ownership</h2>
              <p>
                Upon receipt of final milestone payment, full ownership of custom website design, written copy, and configured automation workflows transfers entirely to the client. Nyxra utilizes client-owned accounts for hosting, domains, and third-party tools so you maintain 100% control.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">3. Revisions & Collaboration</h2>
              <p>
                Every productised package includes structured revision rounds as specified in your agreement. Revisions allow you to request design, layout, or copy adjustments to ensure the final system aligns with your expectations.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background-panel shadow-xs">
              <h2 className="text-xl font-bold text-foreground mb-3">4. Commercial Realities & Guarantees</h2>
              <p>
                Nyxra builds high-performing digital systems designed to dramatically improve discovery, credibility, and conversion speed. However, client revenue and sales ultimately depend on market demand, pricing strategy, offer quality, and overall operational execution.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
