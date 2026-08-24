"use client";

import Header from "../components/Header";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="px-gutter pt-12 sm:pt-16 pb-12 max-w-container-max mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-8 z-10">
              <p className="font-label-caps text-label-caps text-primary mb-3 tracking-widest uppercase">Our Core Capabilities</p>
              <h1 className="font-display-xl text-[40px] sm:text-[60px] md:text-display-xl text-on-surface leading-tight relative">
                Practical Systems.<br />
                <span className="italic text-primary">Organised</span><br />
                Growth.
              </h1>
            </div>
            <div className="md:col-span-4 z-10">
              <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant max-w-sm">
                Start with a high-converting website, then connect the simple systems that keep your sales pipeline and enquiries organised.
              </p>
            </div>
          </div>
        </section>

        {/* Service 1 */}
        <section className="px-gutter py-14 sm:py-16 max-w-container-max mx-auto border-t border-outline">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
            <div className="md:col-span-6 order-2 md:order-1">
              <div className="flex items-center space-x-4 mb-3">
                <span className="font-headline-lg text-3xl text-primary font-bold">01</span>
                <div className="h-px bg-on-surface flex-grow"></div>
              </div>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-5xl text-on-surface mb-4">Websites & Landing Pages</h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                Fast, mobile-first websites designed to explain your business clearly and convert visitors into active enquiries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-surface-container-high border border-outline">
                  <strong className="font-button text-xs uppercase text-primary block mb-1">Inclusions:</strong>
                  <ul className="text-xs space-y-1.5 text-on-surface">
                    <li>• Custom business website</li>
                    <li>• Targeted landing pages</li>
                    <li>• Mobile-first architecture</li>
                    <li>• Interactive contact forms</li>
                  </ul>
                </div>
                <div className="p-3 bg-surface-container-high border border-outline">
                  <strong className="font-button text-xs uppercase text-primary block mb-1">Integrations:</strong>
                  <ul className="text-xs space-y-1.5 text-on-surface">
                    <li>• WhatsApp click-to-chat</li>
                    <li>• Google Maps integration</li>
                    <li>• Basic on-page SEO</li>
                    <li>• Google Analytics setup</li>
                  </ul>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 font-button text-xs uppercase bg-on-surface text-surface px-6 py-3 hover:bg-primary transition-colors">
                Start Website Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="md:col-span-6 order-1 md:order-2">
              <div className="relative bg-surface p-4 border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b]">
                <img src="/sample-1.png" alt="Nyxra Website Mockup" className="w-full h-auto object-cover border border-outline" />
              </div>
            </div>
          </div>
        </section>

        {/* Service 2 */}
        <section className="px-gutter py-14 sm:py-16 max-w-container-max mx-auto border-t border-outline bg-surface-container-low">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
            <div className="md:col-span-6">
              <div className="relative bg-surface p-4 border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b]">
                <img src="/sample-2.png" alt="Lead Capture Dashboard" className="w-full h-auto object-cover border border-outline" />
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="font-headline-lg text-3xl text-primary font-bold">02</span>
                <div className="h-px bg-on-surface flex-grow"></div>
              </div>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-5xl text-on-surface mb-4">Lead Capture Systems</h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                Turn website visitors and social media interest into organised enquiries that are easy to qualify and follow up.
              </p>
              <ul className="space-y-3 font-body-md text-sm text-on-surface mb-6">
                <li className="flex items-center hairline-border-b pb-2"><span className="material-symbols-outlined text-primary mr-3 text-sm">filter_alt</span> Custom high-intent enquiry forms</li>
                <li className="flex items-center hairline-border-b pb-2"><span className="material-symbols-outlined text-primary mr-3 text-sm">table_rows</span> Google Sheets or CRM real-time connection</li>
                <li className="flex items-center hairline-border-b pb-2"><span className="material-symbols-outlined text-primary mr-3 text-sm">notifications</span> Instant lead email & WhatsApp notifications</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 font-button text-xs uppercase bg-on-surface text-surface px-6 py-3 hover:bg-primary transition-colors">
                Set Up Lead Capture <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="py-16 sm:py-20 px-gutter max-w-container-max mx-auto border-t border-outline">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <p className="font-label-caps text-label-caps text-primary uppercase mb-2 tracking-widest font-bold">How We Work</p>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg">A clear path from audit to launch.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 bg-surface border border-outline">
              <span className="font-headline-lg text-2xl text-primary font-bold block mb-2">01</span>
              <h4 className="font-button text-sm uppercase mb-2">Free Business Audit</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">We review your website, enquiry flow, and repetitive tasks to identify improvements.</p>
            </div>
            <div className="p-5 bg-surface border border-outline">
              <span className="font-headline-lg text-2xl text-primary font-bold block mb-2">02</span>
              <h4 className="font-button text-sm uppercase mb-2">Simple Project Plan</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">You receive a clear scope with recommended pages, forms, tools, and timeline.</p>
            </div>
            <div className="p-5 bg-surface border border-outline">
              <span className="font-headline-lg text-2xl text-primary font-bold block mb-2">03</span>
              <h4 className="font-button text-sm uppercase mb-2">Build & Test</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Nyxra builds the systems and verifies mobile layouts, forms, and notification flows.</p>
            </div>
            <div className="p-5 bg-surface border border-outline">
              <span className="font-headline-lg text-2xl text-primary font-bold block mb-2">04</span>
              <h4 className="font-button text-sm uppercase mb-2">Launch & Handover</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">The project is deployed with client-owned accounts and clear handover guidance.</p>
            </div>
            <div className="p-5 bg-surface border border-outline sm:col-span-2 lg:col-span-1">
              <span className="font-headline-lg text-2xl text-primary font-bold block mb-2">05</span>
              <h4 className="font-button text-sm uppercase mb-2">Support & Growth</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Ongoing care plan available to update content, tracking, and automation over time.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <Link href="/" className="underline text-secondary-container">Back to Home</Link></p>
      </footer>
    </>
  );
}
