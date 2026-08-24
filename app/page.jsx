"use client";

import Header from "./components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 md:pt-24 pb-16 sm:pb-section-gap px-gutter max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-7 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-outline bg-surface-container-high mb-6">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface">AI-Powered Digital Growth & Automation Studio</span>
              </div>

              <h1 className="font-display-xl text-[42px] sm:text-[64px] lg:text-display-xl leading-[0.95] mb-6 text-on-surface">
                Grow Your <br />
                <span className="text-primary relative scribble-underline">Business</span> <br />
                with Better Websites & Smarter Systems.
              </h1>

              <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                Nyxra builds professional websites, lead-capture systems and simple AI-powered automations that help businesses win more enquiries, follow up faster and reduce repetitive work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/contact" className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container px-8 py-4 font-button text-button uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 shadow-[4px_4px_0px_#1c1b1b] border-2 border-on-surface active:translate-y-0.5 active:translate-x-0.5 active:shadow-[1px_1px_0px_#1c1b1b]">
                  Get a Free Business Audit <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center bg-surface-container-high text-on-surface px-8 py-4 font-button text-button uppercase tracking-wider hover:bg-surface-variant transition-all duration-300 border-2 border-on-surface">
                  Explore Solutions
                </Link>
              </div>

              <p className="text-xs uppercase font-label-caps tracking-widest text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span>
                Clear scope. Practical systems. No unnecessary complexity.
              </p>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative bg-surface p-5 border-2 border-on-surface shadow-[8px_8px_0px_#1c1b1b] transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between border-b border-outline pb-3 mb-4">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    Live System Architecture
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Nyxra OS</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-surface-container-low border border-outline">
                    <span className="material-symbols-outlined text-primary text-xl mb-1">language</span>
                    <p className="font-button text-xs uppercase text-on-surface">1. Website</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Clear offer, trust & fast loading</p>
                  </div>
                  <div className="p-3 bg-surface-container-low border border-outline">
                    <span className="material-symbols-outlined text-primary text-xl mb-1">input</span>
                    <p className="font-button text-xs uppercase text-on-surface">2. Enquiry Form</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Captures customer intent</p>
                  </div>
                  <div className="p-3 bg-surface-container-low border border-outline">
                    <span className="material-symbols-outlined text-primary text-xl mb-1">table_chart</span>
                    <p className="font-button text-xs uppercase text-on-surface">3. Lead Tracker</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Google Sheets / CRM sync</p>
                  </div>
                  <div className="p-3 bg-surface-container-low border border-outline">
                    <span className="material-symbols-outlined text-primary text-xl mb-1">notifications_active</span>
                    <p className="font-button text-xs uppercase text-on-surface">4. Alert & Sync</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Instant WhatsApp/Email alert</p>
                  </div>
                  <div className="col-span-2 p-3 bg-secondary-container/40 border border-on-surface">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-button text-xs uppercase text-on-surface font-bold">5. Automated Follow-up Flow</p>
                        <p className="text-[11px] text-on-surface-variant">Simple appointment confirmation & response templates</p>
                      </div>
                      <span className="material-symbols-outlined text-primary text-2xl">route</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-outline text-[11px] font-label-caps text-on-surface-variant">
                  <span>CLIENT-OWNED ACCOUNTS</span>
                  <Link href="/portfolio" className="text-primary hover:underline font-bold flex items-center gap-1">SEE DEMOS →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="bg-surface-container-highest py-16 sm:py-20 px-gutter border-y border-outline-variant relative">
          <div className="max-w-container-max mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <p className="font-label-caps text-label-caps text-primary uppercase mb-3 tracking-widest font-bold">Problems Nyxra Solves</p>
              <h2 className="font-headline-lg text-2xl sm:text-[32px] md:text-headline-lg text-on-surface">
                Your business may be losing customers before the conversation even starts.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-6 bg-surface border border-outline hover:border-primary transition-all duration-300">
                <span className="font-headline-lg text-2xl text-primary mb-3 block">01</span>
                <h3 className="font-button text-sm uppercase text-on-surface mb-2 font-bold">No Professional Website</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Prospects can't find you or don't trust what they see, losing credibility instantly.</p>
              </div>
              <div className="p-6 bg-surface border border-outline hover:border-primary transition-all duration-300">
                <span className="font-headline-lg text-2xl text-primary mb-3 block">02</span>
                <h3 className="font-button text-sm uppercase text-on-surface mb-2 font-bold">Scattered Enquiries</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Leads lost across random WhatsApp chats, direct messages, and missed phone calls.</p>
              </div>
              <div className="p-6 bg-surface border border-outline hover:border-primary transition-all duration-300">
                <span className="font-headline-lg text-2xl text-primary mb-3 block">03</span>
                <h3 className="font-button text-sm uppercase text-on-surface mb-2 font-bold">No Booking System</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Manual scheduling friction creates hesitation for patients, students, or clients.</p>
              </div>
              <div className="p-6 bg-surface border border-outline hover:border-primary transition-all duration-300">
                <span className="font-headline-lg text-2xl text-primary mb-3 block">04</span>
                <h3 className="font-button text-sm uppercase text-on-surface mb-2 font-bold">Poor Follow-Up</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">High-intent leads go cold because there is no organized pipeline or reminder flow.</p>
              </div>
              <div className="p-6 bg-surface border border-outline hover:border-primary transition-all duration-300 sm:col-span-2 md:col-span-1">
                <span className="font-headline-lg text-2xl text-primary mb-3 block">05</span>
                <h3 className="font-button text-sm uppercase text-on-surface mb-2 font-bold">Repetitive Tasks</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">Owner spends valuable hours answering the same basic questions over and over.</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 p-6 bg-secondary-container border-2 border-on-surface text-center shadow-[4px_4px_0px_#1c1b1b]">
              <p className="font-headline-lg text-lg sm:text-xl md:text-2xl text-on-secondary-container">
                Nyxra connects these pieces into <span className="font-bold underline decoration-primary decoration-4">one simple digital system</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-on-surface text-surface py-16 sm:py-section-gap px-gutter border-b border-surface">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-14">
              <div>
                <p className="font-label-caps text-label-caps text-secondary-container uppercase mb-2 tracking-widest">Core Services</p>
                <h2 className="font-headline-lg text-2xl sm:text-headline-lg-mobile md:text-headline-lg text-surface">
                  Practical systems for visibility, <br />enquiries and follow-up.
                </h2>
              </div>
              <Link href="/services" className="mt-4 md:mt-0 font-button text-sm uppercase text-secondary-container hover:text-surface transition-colors flex items-center gap-2">
                View Detailed Deliverables <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-surface-variant/30">
              <div className="p-6 sm:p-8 border-b lg:border-r border-surface-variant/30 hover:bg-surface-variant/10 transition-colors">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-5">web</span>
                <h3 className="font-button text-base uppercase text-surface mb-3">1. Websites & Landing Pages</h3>
                <p className="font-body-md text-sm text-surface-variant/80 mb-5 leading-relaxed">
                  Fast, mobile-first websites designed to explain the business clearly and convert visitors into enquiries.
                </p>
              </div>
              <div className="p-6 sm:p-8 border-b lg:border-r border-surface-variant/30 hover:bg-surface-variant/10 transition-colors">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-5">filter_alt</span>
                <h3 className="font-button text-base uppercase text-surface mb-3">2. Lead Capture Systems</h3>
                <p className="font-body-md text-sm text-surface-variant/80 mb-5 leading-relaxed">
                  Turn website visitors and social media interest into organised enquiries that are easy to follow up.
                </p>
              </div>
              <div className="p-6 sm:p-8 border-b border-surface-variant/30 hover:bg-surface-variant/10 transition-colors">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-5">dashboard_customize</span>
                <h3 className="font-button text-base uppercase text-surface mb-3">3. CRM & Lead Management</h3>
                <p className="font-body-md text-sm text-surface-variant/80 mb-5 leading-relaxed">
                  Keep prospect details, follow-up dates, notes and sales pipeline status in one organized place.
                </p>
              </div>
              <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-surface-variant/30 hover:bg-surface-variant/10 transition-colors">
                <span className="material-symbols-outlined text-secondary-container text-4xl mb-5">calendar_month</span>
                <h3 className="font-button text-base uppercase text-surface mb-3">4. Appointment & Enquiry Systems</h3>
                <p className="font-body-md text-sm text-surface-variant/80 mb-5 leading-relaxed">
                  Make it effortless for customers to request appointments, consultations, callbacks or bookings.
                </p>
              </div>
              <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-surface-variant/30 hover:bg-surface-variant/10 transition-colors">
                <span className="material-symbols-outlined text-primary-container text-4xl mb-5">psychology</span>
                <h3 className="font-button text-base uppercase text-surface mb-3">5. AI Content Starter Systems</h3>
                <p className="font-body-md text-sm text-surface-variant/80 mb-5 leading-relaxed">
                  A reusable system for creating consistent marketing content and responding quickly to customer queries.
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-surface-variant/10 flex flex-col justify-between">
                <div>
                  <span className="font-label-caps text-xs uppercase tracking-widest text-secondary-container block mb-2">Need A Tailored Plan?</span>
                  <h4 className="font-headline-lg text-2xl text-surface mb-3">Simple Project Scope</h4>
                  <p className="text-xs text-surface-variant/80 leading-relaxed">
                    Every package is scoped with transparent pricing, zero technical jargon, and client-owned tool accounts.
                  </p>
                </div>
                <Link href="/contact" className="mt-6 inline-block bg-primary text-white font-button text-xs uppercase tracking-wider py-3 px-5 text-center hover:bg-primary-container transition-colors">
                  Request Scope Review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="bg-surface-container-low py-16 sm:py-section-gap px-gutter border-t border-outline">
          <div className="max-w-container-max mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <p className="font-label-caps text-label-caps text-primary uppercase mb-3 tracking-widest font-bold">Clear Pricing</p>
              <h2 className="font-headline-lg text-2xl sm:text-[32px] md:text-headline-lg text-on-surface">
                Productised packages with clear starting points.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-6 sm:p-8 bg-surface border-2 border-on-surface flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-lg text-2xl mb-1">Digital Launch</h3>
                  <p className="text-xs text-on-surface-variant mb-6">A professional online presence for small businesses that need clarity and trust.</p>
                  <div className="mb-6 pb-6 border-b border-outline">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant block">Starting at</span>
                    <span className="font-display-lg text-4xl font-bold text-primary">₹10,000</span>
                  </div>
                  <ul className="space-y-3 text-xs text-on-surface mb-8">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Professional business website</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Mobile-responsive & fast loading</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Contact form & WhatsApp click-to-chat</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Google Maps integration & Basic SEO</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full text-center bg-on-surface text-surface py-3.5 font-button text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                  Launch My Business Online
                </Link>
              </div>

              <div className="p-6 sm:p-8 bg-surface border-2 border-primary shadow-[6px_6px_0px_#b02f00] relative flex flex-col justify-between">
                <div className="absolute -top-3.5 right-6 bg-primary text-white text-[10px] uppercase font-bold font-label-caps px-3 py-1 tracking-widest">
                  Most Popular
                </div>
                <div>
                  <h3 className="font-headline-lg text-2xl mb-1">Lead Growth System</h3>
                  <p className="text-xs text-on-surface-variant mb-6">The practical starting point for websites plus organised enquiry management.</p>
                  <div className="mb-6 pb-6 border-b border-outline">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant block">Starting at</span>
                    <span className="font-display-lg text-4xl font-bold text-primary">₹15,000</span>
                  </div>
                  <ul className="space-y-3 text-xs text-on-surface mb-8">
                    <li className="flex items-center gap-2 font-bold"><span className="material-symbols-outlined text-primary text-sm">check</span> Everything in Digital Launch</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Advanced qualification enquiry form</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Lead tracker / basic CRM connection</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Email/SMS notification workflow</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full text-center bg-primary text-white py-3.5 font-button text-xs uppercase tracking-widest hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1c1b1b]">
                  Build My Lead System
                </Link>
              </div>

              <div className="p-6 sm:p-8 bg-surface border-2 border-on-surface flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-lg text-2xl mb-1">AI Business Starter</h3>
                  <p className="text-xs text-on-surface-variant mb-6">A stronger system for content, customer replies and simple business automation.</p>
                  <div className="mb-6 pb-6 border-b border-outline">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant block">Starting at</span>
                    <span className="font-display-lg text-4xl font-bold text-primary">₹20,000</span>
                  </div>
                  <ul className="space-y-3 text-xs text-on-surface mb-8">
                    <li className="flex items-center gap-2 font-bold"><span className="material-symbols-outlined text-primary text-sm">check</span> Everything in Lead Growth</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> 30-day content calendar & caption bank</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> Branded social templates & prompt library</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check</span> 30 days of direct basic support</li>
                  </ul>
                </div>
                <Link href="/contact" className="w-full text-center bg-on-surface text-surface py-3.5 font-button text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                  Request Custom Plan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:py-section-gap px-gutter max-w-container-max mx-auto border-t border-outline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-80 sm:h-80 rounded-full border-4 border-on-surface overflow-hidden shadow-[8px_8px_0px_#1c1b1b] bg-surface-container-high">
                  <img src="/founder.jpg" alt="Rishi Srivastav, Founder of Nyxra" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="absolute bottom-2 right-2 bg-secondary-container border border-on-surface px-4 py-2 text-xs font-label-caps uppercase font-bold shadow-[2px_2px_0px_#1c1b1b]">
                  Founder Led
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-label-caps text-label-caps text-primary uppercase mb-2 tracking-widest">About The Founder</p>
              <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mb-4 sm:mb-6">
                Rishi Srivastav
              </h2>
              <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Nyxra was founded by Rishi Srivastav to help small businesses use modern digital and AI tools without needing a large technical team. The goal is simple: build clear websites and practical systems that make businesses easier to discover, contact and operate.
              </p>
              <p className="font-serif italic text-3xl text-primary mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Rishi Srivastav
              </p>
              <div className="flex items-center gap-4">
                <Link href="/about" className="inline-flex items-center gap-2 font-button text-xs uppercase border-b-2 border-on-surface pb-1 hover:text-primary hover:border-primary transition-colors">
                  Read Our 7 Core Principles <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final Audit CTA */}
        <section className="bg-secondary-container text-on-secondary-container py-14 sm:py-16 px-gutter border-t-2 border-on-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <p className="font-label-caps text-xs uppercase mb-2 tracking-widest font-bold">Start With A Free Review</p>
              <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl leading-tight">
                Let's build a simpler system <br />for your business.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="bg-on-secondary-container text-secondary-container px-8 py-4 font-button text-button uppercase tracking-widest hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-3 text-center">
                Get My Free Audit <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="mailto:supportnyxra@gmail.com" className="border-2 border-on-secondary-container px-6 py-4 font-button text-button uppercase tracking-wider hover:bg-on-secondary-container hover:text-secondary-container transition-colors text-center">
                Email Nyxra
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-on-surface text-surface border-t border-outline-variant w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg w-full px-gutter py-12 sm:py-16 max-w-container-max mx-auto">
          <div>
            <Link className="flex items-center gap-3 mb-4" href="/">
              <img src="/logo.png" alt="Nyxra" className="h-8 w-8 object-contain rounded-lg bg-surface p-0.5" />
              <span className="font-display-lg text-2xl text-surface tracking-tighter">NYXRA</span>
            </Link>
            <p className="font-body-md text-xs text-surface-variant max-w-xs leading-relaxed">
              Nyxra builds websites, lead systems and simple automations for growing businesses.
            </p>
            <p className="mt-4 text-xs font-mono text-secondary-container">supportnyxra@gmail.com</p>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps uppercase text-surface-variant mb-4 tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-xs text-surface-variant">
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/services">Services</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/pricing">Pricing Packages</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/portfolio">Demo Systems</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/about">About & Founder</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/contact">Free Audit & Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps uppercase text-surface-variant mb-4 tracking-widest">Demo Systems</h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-xs text-surface-variant">
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/clinic-demo">Clinic Appointment System (Live)</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/portfolio">Coaching Admission Pipeline</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/portfolio">Consultant Booking System</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps uppercase text-surface-variant mb-4 tracking-widest">Legal & Scope</h4>
            <ul className="flex flex-col gap-2.5 font-body-md text-xs text-surface-variant mb-4">
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-secondary-fixed-dim hover:underline" href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-surface-variant/20 px-gutter py-6 text-center md:flex md:justify-between max-w-container-max mx-auto text-xs font-label-caps text-surface-variant">
          <p>© 2026 NYXRA. Founder Rishi Srivastav. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Scope, costs & third-party tools are confirmed in a written proposal.</p>
        </div>
      </footer>
    </>
  );
}
