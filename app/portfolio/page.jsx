"use client";

import Header from "../components/Header";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main className="max-w-container-max mx-auto px-gutter py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="font-label-caps text-label-caps text-primary mb-3 uppercase tracking-widest font-bold">Concept Workflows</p>
          <h1 className="font-display-xl text-[40px] sm:text-[60px] md:text-display-xl tracking-tighter leading-none mb-4">
            Demo <span className="italic text-primary font-light">systems</span>.
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant">
            These are concept demos showing how Nyxra designs practical enquiry, booking, and lead workflows for small businesses.
          </p>
        </div>

        {/* Clinic Demo Showcase */}
        <article className="p-6 sm:p-8 bg-surface border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary-container text-on-secondary-container font-label-caps text-xs px-3 py-1 uppercase font-bold">Concept Demo 01</span>
                <span className="font-label-caps text-xs text-primary font-bold uppercase">Healthcare & Wellness</span>
              </div>
              <h2 className="font-headline-xl text-2xl sm:text-3xl md:text-4xl mb-3">Clinic Appointment & Lead System</h2>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                Appointment requests and medical report enquiries often arrive through scattered phone calls, WhatsApp messages, and front-desk walk-ins.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/clinic-demo" className="inline-flex items-center gap-2 font-button text-xs uppercase bg-primary text-white px-6 py-3.5 hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1c1b1b]">
                  Launch Live Interactive Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-4 border border-outline shadow-[4px_4px_0px_#1c1b1b]">
                <img src="/sample-1.png" alt="Clinic Demo Preview" className="w-full h-auto object-cover border border-outline" />
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <Link href="/" className="underline text-secondary-container">Back to Home</Link></p>
      </footer>
    </>
  );
}
