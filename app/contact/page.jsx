"use client";

import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

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
      <nav id="main-nav" className="bg-surface border-b border-outline z-50 sticky top-0 w-full transition-all duration-300">
        <div className="flex justify-between items-center w-full px-gutter py-3.5 max-w-container-max mx-auto">
          <a className="flex items-center gap-3" href="/">
            <img src="/logo.png" alt="Nyxra" className="h-10 w-10 object-contain rounded-lg border border-outline bg-surface-container-low p-1" />
            <span className="font-headline-lg text-headline-lg-mobile tracking-tighter text-on-surface uppercase hover:text-primary transition-colors">NYXRA</span>
          </a>
          <ul className="hidden lg:flex gap-7 items-center font-label-caps text-label-caps uppercase">
            <li><a className="text-on-surface-variant hover:text-primary" href="/">Home</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/services">Services</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/pricing">Pricing</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/portfolio">Demo Systems</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/about">About</a></li>
            <li><a className="text-primary border-b-2 border-primary pb-1" href="/contact">Audit & Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="px-gutter max-w-container-max mx-auto py-16">
        <div className="mb-10">
          <p className="font-label-caps text-xs text-primary uppercase font-bold tracking-widest mb-2">Initiate Contact</p>
          <h1 className="font-display-xl text-[40px] sm:text-[60px] md:text-display-xl uppercase tracking-tighter text-on-surface leading-none md:w-3/4 break-words">
            Tell Us What Your <br />
            <span className="text-primary relative inline-block scribble-underline">Business Needs.</span>
          </h1>
          <p className="font-body-md text-base sm:text-lg text-on-surface-variant mt-5 max-w-2xl">
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
                  <select className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="business-category" required defaultValue="">
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
                  <select className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="budget-range" required defaultValue="">
                    <option value="" disabled>Select Budget Range</option>
                    <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000 (Digital Launch)</option>
                    <option value="₹15,000 - ₹20,000">₹15,000 - ₹20,000 (Lead Growth System)</option>
                    <option value="₹20,000 - ₹35,000">₹20,000 - ₹35,000 (AI Business Starter)</option>
                    <option value="₹35,000+">₹35,000+ (Custom Scope)</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-bold">Preferred Contact Method *</label>
                  <select className="w-full bg-surface-container-low border border-outline px-4 py-3 text-sm text-on-surface focus:border-primary outline-none" name="preferred-contact-method" required defaultValue="WhatsApp">
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
          </div>
        </div>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <a href="/" className="underline text-secondary-container">Back to Home</a></p>
      </footer>
    </>
  );
}
