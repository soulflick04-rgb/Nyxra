"use client";

import { useState } from "react";
import SignificaButton from "./SignificaButton";
import { CheckCircleIcon } from "./Icons";

export default function ClinicSimulator() {
  const initialLeads = [
    {
      id: 1,
      name: "Dr. Ananya Roy",
      phone: "+91 98765 11223",
      service: "Dental Checkup & Cleaning",
      slot: "Tomorrow • 11:30 AM",
      status: "Confirmed",
      statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
    },
    {
      id: 2,
      name: "Vikram Mehta",
      phone: "+91 98111 22334",
      service: "Full Body Diagnostic Package",
      slot: "28 Oct • 09:30 AM",
      status: "Follow-Up Pending",
      statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      phone: "+91 99220 33445",
      service: "Skin & Dermatology Consultation",
      slot: "29 Oct • 04:30 PM",
      status: "New Enquiry",
      statusColor: "bg-brand/20 text-foreground border-brand"
    }
  ];

  const [leads, setLeads] = useState(initialLeads);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "General Health Consultation",
    date: "",
    slot: "11:30 AM - Morning",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      slot: `${formData.date || "Preferred"} • ${formData.slot.split(" ")[0]}`,
      status: "New Lead (Alert Sent)",
      statusColor: "bg-brand text-foreground font-bold border-brand"
    };

    setLeads([newLead, ...leads]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4500);

    setFormData({
      name: "",
      phone: "",
      service: "General Health Consultation",
      date: "",
      slot: "11:30 AM - Morning",
      notes: ""
    });
  };

  return (
    <div className="w-full">
      {/* 5-Step Progress Ribbon */}
      <div className="mb-8 p-4 rounded-xl bg-background-panel border border-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 text-xs gap-2">
          <span className="font-semibold uppercase tracking-wider text-brand flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
            Live Nyxra Workflow Simulation
          </span>
          <span className="text-foreground-secondary">
            Simulating patient booking &rarr; staff WhatsApp alert &rarr; instant CRM record
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-medium">
          <div className="p-2 rounded-lg bg-background-offset border border-border">
            1. Patient Visits
          </div>
          <div className="p-2 rounded-lg bg-brand text-foreground font-bold border border-foreground/20 shadow-xs">
            2. Fills Form
          </div>
          <div className="p-2 rounded-lg bg-background-offset border border-border">
            3. Instant Alert
          </div>
          <div className="p-2 rounded-lg bg-background-offset border border-border">
            4. Auto CRM Log
          </div>
          <div className="p-2 rounded-lg bg-background-offset border border-border">
            5. Fast Booking
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Patient Booking Form */}
        <div className="lg:col-span-5 bg-background-panel p-6 sm:p-8 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="material-symbols-outlined text-sm">edit_calendar</span>
            Step 1: Patient Experience
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            Request Clinic Appointment
          </h3>
          <p className="text-xs text-foreground-secondary mb-6 leading-relaxed">
            Fill out this test form to see your enquiry appear instantly on the clinic receptionist dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">
                Select Service *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-background-offset border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                required
              >
                <option value="General Health Consultation">General Health Consultation</option>
                <option value="Dental Checkup & Cleaning">Dental Checkup & Cleaning</option>
                <option value="Skin & Dermatology Consultation">Skin & Dermatology Consultation</option>
                <option value="Pediatric / Child Healthcare">Pediatric / Child Healthcare</option>
                <option value="Full Body Diagnostic Package">Full Body Diagnostic Package</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background-offset border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background-offset border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-background-offset border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full bg-background-offset border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                >
                  <option value="09:30 AM - Morning">09:30 AM (Morning)</option>
                  <option value="11:30 AM - Morning">11:30 AM (Morning)</option>
                  <option value="02:00 PM - Afternoon">02:00 PM (Afternoon)</option>
                  <option value="04:30 PM - Evening">04:30 PM (Evening)</option>
                  <option value="06:30 PM - Evening">06:30 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-foreground-secondary mb-1">
                Symptoms / Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Brief reason for consultation..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-background-offset border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
              />
            </div>

            <SignificaButton type="submit" variant="brand" size="md" arrow className="w-full">
              Confirm Appointment Request
            </SignificaButton>
          </form>

          {submitted && (
            <div className="mt-4 p-4 rounded-xl bg-brand/10 border border-brand text-xs flex items-start gap-2.5 animate-in fade-in">
              <CheckCircleIcon className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-foreground">Appointment Request Submitted!</p>
                <p className="text-foreground-secondary mt-0.5">
                  Your entry has been automatically synced to the Staff Dashboard simulator on the right.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right: Real-time Staff Dashboard Simulator */}
        <div className="lg:col-span-7 bg-background-panel p-6 sm:p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-lg font-bold text-foreground">
                  Staff Lead Tracker Simulator
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-background-offset border border-border text-foreground-secondary">
                Auto-Synced Google Sheets / CRM
              </span>
            </div>

            <p className="text-xs text-foreground-secondary mb-4 leading-relaxed">
              When a patient submits the form on your clinic website, your reception team immediately receives an instant notification (WhatsApp & Email) and this clean lead record is automatically populated.
            </p>

            {/* Table */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-background-offset border-b border-border text-[11px] font-semibold uppercase tracking-wider text-foreground-secondary">
                    <tr>
                      <th className="p-3">Patient / Contact</th>
                      <th className="p-3">Service Requested</th>
                      <th className="p-3">Slot</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-background-offset/50 transition-colors">
                        <td className="p-3">
                          <strong className="block font-semibold text-foreground text-sm">
                            {lead.name}
                          </strong>
                          <span className="font-mono text-[11px] text-foreground-secondary">
                            {lead.phone}
                          </span>
                        </td>
                        <td className="p-3 text-foreground font-medium">{lead.service}</td>
                        <td className="p-3 text-foreground-secondary text-[11px]">{lead.slot}</td>
                        <td className="p-3">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider border ${lead.statusColor}`}
                          >
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-foreground-secondary">
            <span>Storage: 100% Client-Owned Google Sheets / Airtable</span>
            <button
              type="button"
              onClick={() => setLeads(initialLeads)}
              className="text-brand hover:underline font-medium"
            >
              Reset Demo Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
