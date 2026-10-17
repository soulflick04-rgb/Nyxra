"use client";

import { useState } from "react";
import SignificaButton from "./SignificaButton";
import { CheckCircleIcon } from "./Icons";

export default function AuditForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    contactName: "",
    email: "",
    phone: "",
    primaryGoal: "Website + Lead Capture",
    budgetRange: "₹15,000 - ₹25,000 ($180 - $300)",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    "₹10,000 - ₹15,000 ($120 - $180)",
    "₹15,000 - ₹25,000 ($180 - $300)",
    "₹25,000 - ₹50,000 ($300 - $600)",
    "Custom / Enterprise Scope"
  ];

  const goalOptions = [
    "Website + Lead Capture",
    "Appointment & Booking Workflow",
    "CRM Lead Tracker Setup",
    "AI Content & Reply Starter",
    "Full Digital Growth System"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl border border-brand bg-background-panel text-center max-w-xl mx-auto shadow-sm animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-brand/20 text-foreground flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon className="w-8 h-8 text-brand" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Audit Request Received!
        </h3>
        <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
          Thank you, <strong className="text-foreground">{formData.contactName}</strong>. Rishi Srivastav will personally analyze <strong className="text-foreground">{formData.businessName || "your business"}</strong> and send a 20-minute tailored video audit and system architecture within 24 hours.
        </p>
        <div className="p-4 rounded-xl bg-background-offset border border-border text-xs text-foreground-secondary text-left space-y-2 mb-6">
          <div className="flex justify-between">
            <span>Primary Focus:</span>
            <span className="font-semibold text-foreground">{formData.primaryGoal}</span>
          </div>
          <div className="flex justify-between">
            <span>Contact Email:</span>
            <span className="font-mono text-foreground">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Direct WhatsApp:</span>
            <span className="font-mono text-foreground">{formData.phone || "Not provided"}</span>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <SignificaButton href="/" variant="secondary" size="md">
            Return to Homepage
          </SignificaButton>
          <SignificaButton href="https://wa.me/919876543210" variant="brand" size="md" arrow>
            Chat on WhatsApp
          </SignificaButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-2xl border border-border bg-background-panel shadow-sm">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand block mb-1">
          Complimentary 20-Minute Review
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
          Request Your Free Business Audit
        </h3>
        <p className="text-sm text-foreground-secondary mt-1">
          Identify where your current website or manual workflow is leaking enquiries.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Business Name & Website */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
              Business / Practice Name *
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
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
              Current Website / Social URL (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. instagram.com/mybusiness or None"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
              required
            />
          </div>
        </div>

        {/* Row 3: WhatsApp / Phone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
            Phone / WhatsApp Number (For video audit link delivery) *
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
            required
          />
        </div>

        {/* Row 4: Primary Goal Chips */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-2">
            Primary Area of Focus
          </label>
          <div className="flex flex-wrap gap-2">
            {goalOptions.map((goal) => {
              const isSelected = formData.primaryGoal === goal;
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors outline-none ${
                    isSelected
                      ? "bg-brand text-foreground border-foreground font-semibold"
                      : "bg-background-offset border-border text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 5: Budget Range Chips */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-2">
            Estimated Project Budget
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {budgetOptions.map((budget) => {
              const isSelected = formData.budgetRange === budget;
              return (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setFormData({ ...formData, budgetRange: budget })}
                  className={`p-3 rounded-lg text-xs text-left border transition-colors outline-none ${
                    isSelected
                      ? "bg-foreground text-background border-foreground font-semibold"
                      : "bg-background-offset border-border text-foreground-secondary hover:text-foreground"
                  }`}
                >
                  {budget}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 6: Additional Context */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1.5">
            Current Friction or Bottleneck (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Tell us briefly about where your leads are slipping or what repetitive tasks consume your time..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-background-offset border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
          />
        </div>

        <SignificaButton type="submit" variant="brand" size="lg" arrow className="w-full text-base">
          Submit Free Audit Request
        </SignificaButton>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-foreground-secondary gap-2">
        <span>Founder-Led Review by Rishi Srivastav</span>
        <span>Guaranteed turnaround under 24 hours</span>
      </div>
    </form>
  );
}
