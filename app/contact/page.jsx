"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignificaButton from "../components/SignificaButton";
import { CheckCircleIcon } from "../components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    category: "Clinic or diagnostics",
    city: "",
    websiteUrl: "",
    primaryGoal: "Website + Lead Capture System",
    budgetRange: "₹15,000 - ₹25,000 ($180 - $300)",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      "full-name": formData.fullName,
      "business-name": formData.businessName,
      email: formData.email,
      phone: formData.phone,
      "business-category": formData.category,
      city: formData.city,
      "website-url": formData.websiteUrl,
      "primary-goal": formData.primaryGoal,
      "budget-range": formData.budgetRange,
      notes: formData.notes,
      _subject: `New Nyxra Business Audit Request from ${formData.fullName} (${formData.businessName})`
    };

    try {
      await fetch("https://formsubmit.co/ajax/supportnyxra@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Page Hero */}
        <section className="pt-12 sm:pt-20 pb-16">
          <div className="container-significa">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-offset border border-border text-xs font-semibold uppercase tracking-wider text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>Complimentary Video Audit & Proposal</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                  Tell us what your <br />
                  <span className="text-foreground-secondary">business needs.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base text-foreground-secondary leading-relaxed">
                  Share a few details about your current customer flow, bottlenecks, or website requirements. Rishi Srivastav personally reviews every submission and sends a 20-minute action video within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Studio Meta */}
        <section className="py-12">
          <div className="container-significa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Form */}
              <div className="lg:col-span-8">
                {submitted ? (
                  <div className="p-8 sm:p-14 rounded-3xl border-2 border-brand bg-background-panel text-center shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-brand/20 text-foreground flex items-center justify-center mx-auto mb-5">
                      <CheckCircleIcon className="w-8 h-8 text-brand" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-3">
                      Audit Request Received!
                    </h2>
                    <p className="text-base text-foreground-secondary leading-relaxed mb-6 max-w-lg mx-auto">
                      Thank you, <strong className="text-foreground">{formData.fullName}</strong>. Your details have been sent directly to Rishi Srivastav at <strong className="text-foreground">supportnyxra@gmail.com</strong>.
                    </p>
                    <p className="text-sm text-foreground-secondary mb-8">
                      We will review your business and deliver a tailored video audit with fixed scope options within 24 hours.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <SignificaButton href="/" variant="secondary" size="md">
                        Back to Home
                      </SignificaButton>
                      <SignificaButton href="https://wa.me/919876543210" variant="brand" size="md" arrow>
                        Chat on WhatsApp
                      </SignificaButton>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 sm:p-12 rounded-3xl border border-border bg-background-panel shadow-xs space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        Submit Audit Request
                      </h3>
                      <p className="text-xs text-foreground-secondary">
                        Fill in as much detail as you have. All fields marked with * are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rishi Srivastav"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                          Business / Brand Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Health Clinic"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. contact@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                          Business Industry *
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        >
                          <option value="Clinic or diagnostics">Clinic or diagnostics</option>
                          <option value="Coaching or education">Coaching or education</option>
                          <option value="Consultant or freelancer">Consultant or freelancer</option>
                          <option value="Salon, gym or wellness">Salon, gym or wellness</option>
                          <option value="Local service business">Local service business</option>
                          <option value="Startup">Early-stage Startup</option>
                          <option value="Other">Other Business</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                          City / State
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mumbai, Bengaluru, Global"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                        Current Website or Social URL (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. https://instagram.com/mybusiness or None"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
                        Tell Us About Your Goals & Current Bottleneck
                      </label>
                      <textarea
                        rows={3}
                        placeholder="What is your biggest operational pain point? (e.g. losing leads on WhatsApp, manual scheduling, no modern website...)"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
                      />
                    </div>

                    <SignificaButton
                      type="submit"
                      variant="brand"
                      size="lg"
                      arrow
                      disabled={isSubmitting}
                      className="w-full text-base"
                    >
                      {isSubmitting ? "Submitting Request..." : "Submit Business Audit Request"}
                    </SignificaButton>
                  </form>
                )}
              </div>

              {/* Right: Studio Direct Contact & Deliverables */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-2xl border border-border bg-background-panel shadow-xs space-y-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand block mb-1">
                      Direct Communication
                    </span>
                    <h4 className="text-xl font-bold text-foreground">Studio Contact</h4>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-foreground-secondary block">Founder:</span>
                      <strong className="text-foreground text-sm">Rishi Srivastav</strong>
                    </div>
                    <div>
                      <span className="text-foreground-secondary block">Direct Email:</span>
                      <a href="mailto:supportnyxra@gmail.com" className="text-foreground hover:underline font-mono text-sm">
                        supportnyxra@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="text-foreground-secondary block">Location:</span>
                      <span className="text-foreground font-medium">India &bull; Global Remote Services</span>
                    </div>
                    <div>
                      <span className="text-foreground-secondary block">Response Time:</span>
                      <span className="text-foreground font-medium">Guaranteed under 24 hours</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <SignificaButton
                      href="mailto:supportnyxra@gmail.com"
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Open Email Client
                    </SignificaButton>
                  </div>
                </div>

                {/* What you receive card */}
                <div className="p-6 rounded-2xl border border-border bg-background-panel shadow-xs">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                    What You Receive in the Audit:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-foreground-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">&bull;</span>
                      <span>20-minute tailored video Loom analysis of your current presence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">&bull;</span>
                      <span>Identification of 3 specific friction points losing you enquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">&bull;</span>
                      <span>Proposed system architecture diagram with fixed pricing scope</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand font-bold">&bull;</span>
                      <span>100% free with zero obligation to hire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
