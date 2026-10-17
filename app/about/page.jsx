"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SignificaButton from "../components/SignificaButton";
import Link from "next/link";
import { CheckIcon } from "../components/Icons";

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "Practical Systems Over Hype",
      desc: "We reject unnecessary complexity and buzzword technology. We implement only the tools that directly improve customer acquisition, enquiry capture, and business clarity.",
      icon: "handyman"
    },
    {
      num: "02",
      title: "Built Specifically for Small Businesses",
      desc: "Designed for local business owners, doctors, clinic managers, consultants, and educators who need reliable daily operations without dedicated technical staff.",
      icon: "storefront"
    },
    {
      num: "03",
      title: "Transparent Scope & Pricing",
      desc: "Productised starting points. Every deliverable, software tool cost, and revision milestone is established in writing before project kickoff. Zero surprise bills.",
      icon: "receipt_long"
    },
    {
      num: "04",
      title: "Mobile-First & Blazing Fast",
      desc: "Over 80% of local enquiries happen on smartphones. Our websites load in under 1.5 seconds on mobile, with crisp typography and frictionless click-to-call/WhatsApp actions.",
      icon: "devices"
    },
    {
      num: "05",
      title: "100% Client-Owned Accounts",
      desc: "You own your domain, hosting, Google Sheets, forms, and database. We never hold your business digital assets hostage in proprietary agency platforms.",
      icon: "lock_open"
    },
    {
      num: "06",
      title: "Founder-Led Communication",
      desc: "You speak directly with the builder. No fragmented junior account managers or game of telephone. Rishi Srivastav directly designs and delivers your project.",
      icon: "forum"
    },
    {
      num: "07",
      title: "Continuous Evolution & Support",
      desc: "Digital systems are living assets. We provide structured walkthrough documentation, video handovers, and ongoing care retainers to ensure your systems thrive long-term.",
      icon: "published_with_changes"
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Page Hero */}
        <section className="pt-12 sm:pt-20 pb-16">
          <div className="container-significa">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-offset border border-border text-xs font-semibold uppercase tracking-wider text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>The Story & Principles</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                  Design with purpose. <br />
                  <span className="text-foreground-secondary">Systems with soul.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base text-foreground-secondary leading-relaxed">
                  Helping ambitious small businesses stand out with clarity, character, and practical automation that drives real revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile Section */}
        <section className="py-12">
          <div className="container-significa">
            <div className="p-8 sm:p-14 rounded-3xl border border-border bg-background-panel shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Founder Photo */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-border overflow-hidden bg-background-offset shadow-md">
                      <img
                        src="/founder.jpg"
                        alt="Rishi Srivastav, Founder of Nyxra"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-lg bg-brand text-foreground text-xs font-bold uppercase tracking-wider shadow-sm border border-foreground/20">
                      Founder, Nyxra
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand mb-2 block">
                    Founder & Creative Technologist
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Rishi Srivastav
                  </h2>
                  <p className="text-base text-foreground-secondary leading-relaxed mb-4">
                    Nyxra was founded by Rishi Srivastav with a straightforward mission: help small businesses make the most of modern web design, lead workflows, and AI automation without requiring a technical department or paying thousands of dollars for bloated enterprise software.
                  </p>
                  <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
                    Too many small businesses lose leads because their websites look dated, booking an appointment requires multiple phone calls, and incoming customer inquiries are scattered across personal WhatsApp chats. Nyxra fixes this by connecting each piece into one simple, client-owned system.
                  </p>

                  <div className="p-4 rounded-xl bg-background-offset border border-border text-xs text-foreground-secondary space-y-2 mb-8">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-brand" />
                      <span className="text-foreground font-medium">Location: India &bull; Serving Clients Globally</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-brand" />
                      <span className="text-foreground font-medium">Founder-Led Engineering & Creative Direction</span>
                    </div>
                  </div>

                  <SignificaButton href="/contact" variant="brand" size="md" arrow>
                    Schedule an Audit with Rishi
                  </SignificaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Core Principles */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Our Studio Philosophy
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                7 Principles That Guide Everything We Build
              </h2>
              <p className="text-sm text-foreground-secondary mt-3">
                These core commitments ensure every client receives exceptional clarity, full asset ownership, and measurable operational value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((pr) => (
                <div
                  key={pr.num}
                  className="p-6 sm:p-8 rounded-2xl border border-border bg-background flex flex-col justify-between hover:border-brand/40 transition-colors shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-background-offset border border-border flex items-center justify-center text-foreground">
                        <span className="material-symbols-outlined text-xl">{pr.icon}</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-brand">{pr.num}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {pr.title}
                    </h3>

                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
