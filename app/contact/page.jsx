"use client";

import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const dataObj = {};
    formData.forEach((value, key) => { dataObj[key] = value; });
    dataObj['_subject'] = `New Nyxra Business Audit Request from ${dataObj['full-name'] || 'Lead'}`;

    try {
      await fetch("https://formsubmit.co/ajax/supportnyxra@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(dataObj)
      });
      await fetch("https://script.google.com/macros/s/AKfycby9rUlv7CSat0B4j5TLU1TdSChYgMGZSq8vccMM9KT-8Ms25Mh_qbjParGswH84K8nmaw/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      window.location.href = "/thank-you";
    } catch (err) {
      console.error(err);
      window.location.href = "/thank-you";
    }
  };

  return (
    <>
      <Header />

      <main className="px-gutter max-w-container-max mx-auto py-12 sm:py-16">
        <div className="mb-10">
          <p className="font-label-caps text-xs text-primary uppercase font-bold tracking-widest mb-2">Initiate Contact</p>
          <h1 className="font-display-xl text-[38px] sm:text-[60px] md:text-display-xl uppercase tracking-tighter text-on-surface leading-none md:w-3/4 break-words">
            Tell Us What Your <br />
            <span className="text-primary relative inline-block scribble-underline">Business Needs.</span>
          </h1>
          <p className="font-body-md text-sm sm:text-lg text-on-surface-variant mt-5 max-w-2xl leading-relaxed">
            Share a few details about your current website, enquiry process, or repetitive tasks. Every submission sends an instant notification directly to our founder's inbox at <strong className="text-on-surface">supportnyxra@gmail.com</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-start">
          <div className="lg:col-span-8 bg-surface p-6 sm:p-10 border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Your Full Name *</label>
                  <input className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="full-name" placeholder="e.g. Rishi Srivastav" type="text" required />
                </div>
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Business / Brand Name *</label>
                  <input className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="business-name" placeholder="e.g. Apex Health / Studio X" type="text" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Your Email Address *</label>
                  <input className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="email" placeholder="e.g. you@business.com" type="email" required />
                </div>
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">WhatsApp or Phone Number *</label>
                  <input className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="phone" placeholder="e.g. +91 98765 43210" type="tel" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Business Category *</label>
                  <select className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none cursor-pointer" name="business-category" required defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="Clinic or diagnostics">Clinic or diagnostics</option>
                    <option value="Coaching or education">Coaching or education</option>
                    <option value="Consultant or freelancer">Consultant or freelancer</option>
                    <option value="Salon, gym or wellness">Salon, gym or wellness</option>
                    <option value="Local service business">Local service business</option>
                    <option value="Startup">Early-stage Startup</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">City / Location *</label>
                  <input className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="city" placeholder="e.g. Mumbai, Delhi, Bengaluru" type="text" required />
                </div>
              </div>

              <div>
                <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Current Website or Social URL (Optional)</label>
                <input className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="website-or-social" placeholder="https://instagram.com/yourbusiness" type="text" />
              </div>

              <div>
                <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Main Problem / Bottleneck *</label>
                <textarea className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none resize-none" name="main-current-problem" placeholder="Example: enquiries are scattered across WhatsApp messages..." rows={3} required></textarea>
              </div>

              <div>
                <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Desired Result / Goals *</label>
                <textarea className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none resize-none" name="desired-result" placeholder="Example: high-converting website, automated lead capture..." rows={3} required></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Budget Range *</label>
                  <select className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none cursor-pointer" name="budget-range" required defaultValue="">
                    <option value="" disabled>Select Budget Range</option>
                    <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000 (Digital Launch)</option>
                    <option value="₹15,000 - ₹20,000">₹15,000 - ₹20,000 (Lead Growth System)</option>
                    <option value="₹20,000 - ₹35,000">₹20,000 - ₹35,000 (AI Business Starter)</option>
                    <option value="₹35,000+">₹35,000+ (Custom Scope)</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Preferred Contact Method *</label>
                  <select className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none cursor-pointer" name="preferred-contact-method" required defaultValue="WhatsApp">
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="Email">Email</option>
                    <option value="Phone call">Phone Call</option>
                  </select>
                </div>
              </div>

              <button disabled={isSubmitting} className="w-full sm:w-auto font-button text-xs bg-primary text-white px-8 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1c1b1b] flex items-center justify-center gap-2 cursor-pointer" type="submit">
                <span>{isSubmitting ? "Sending..." : "Submit Audit & Send To Email"}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 bg-surface border-2 border-on-surface shadow-[4px_4px_0px_#1c1b1b]">
              <span className="font-label-caps text-xs text-primary uppercase font-bold block mb-2">Direct Inbox</span>
              <h3 className="font-headline-lg text-xl text-on-surface mb-2">Founder Direct Email</h3>
              <a className="font-mono text-sm font-bold text-primary hover:underline block break-all p-2.5 bg-surface-container-high border border-outline" href="mailto:supportnyxra@gmail.com">
                supportnyxra@gmail.com
              </a>
            </div>

            <div className="p-6 bg-surface-container-high border-2 border-on-surface shadow-[4px_4px_0px_#1c1b1b]">
              <span className="font-label-caps text-xs text-primary uppercase font-bold block mb-2">Review Process</span>
              <h3 className="font-headline-lg text-lg text-on-surface mb-3">What Happens Next:</h3>
              <ul className="text-xs space-y-3 text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                  <span><strong>1. Instant Email Dispatch:</strong> Form sends full parameters directly to supportnyxra@gmail.com.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                  <span><strong>2. Founder Review:</strong> Rishi Srivastav reviews your bottlenecks and enquiry flow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                  <span><strong>3. Direct Reply:</strong> You receive a tailored scope & timeline proposal within 24 hours.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <Link href="/" className="underline text-secondary-container">Back to Home</Link></p>
      </footer>
    </>
  );
}
