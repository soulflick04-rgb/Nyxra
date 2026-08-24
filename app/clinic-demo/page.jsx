"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function ClinicDemoPage() {
  const [leads, setLeads] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("nyxra_clinic_demo_leads");
    if (stored) {
      try { setLeads(JSON.parse(stored)); } catch (e) {}
    }
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newLead = {
      name: form["patient-name"].value,
      phone: form["patient-phone"].value,
      service: form["patient-service"].value,
      date: form["patient-date"].value,
      slot: form["patient-slot"].value
    };

    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem("nyxra_clinic_demo_leads", JSON.stringify(updated));
    setShowSuccess(true);
    form.reset();
  };

  return (
    <>
      <Header />

      <div className="bg-primary text-white px-gutter py-2.5 text-xs font-label-caps text-center flex items-center justify-between">
        <Link href="/portfolio" className="flex items-center gap-1 hover:underline font-bold">
          <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Demos
        </Link>
        <span className="uppercase font-bold tracking-widest hidden sm:inline">NYXRA CONCEPT DEMO • CLINIC WORKFLOW SIMULATOR</span>
        <Link href="/contact" className="underline font-bold">Request Scope →</Link>
      </div>

      <main className="max-w-container-max mx-auto px-gutter py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-surface p-6 sm:p-8 border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b]">
            <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface mb-2">Request an Appointment</h2>
            <form onSubmit={handleBooking} className="space-y-4 mt-4">
              <div>
                <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1">Select Service *</label>
                <select name="patient-service" className="w-full bg-surface-container-low border border-outline px-3 py-2.5 text-sm focus:border-primary outline-none" required>
                  <option value="General Health Consultation">General Health Consultation</option>
                  <option value="Dental Checkup & Cleaning">Dental Checkup & Cleaning</option>
                  <option value="Skin & Dermatology Consultation">Skin & Dermatology Consultation</option>
                  <option value="Pediatric Care">Pediatric Care</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1">Patient Full Name *</label>
                  <input name="patient-name" type="text" placeholder="e.g. Rahul Sharma" className="w-full bg-surface-container-low border border-outline px-3 py-2.5 text-sm focus:border-primary outline-none" required />
                </div>
                <div>
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1">Phone / WhatsApp *</label>
                  <input name="patient-phone" type="tel" placeholder="+91 98765 00000" className="w-full bg-surface-container-low border border-outline px-3 py-2.5 text-sm focus:border-primary outline-none" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1">Preferred Date *</label>
                  <input name="patient-date" type="date" className="w-full bg-surface-container-low border border-outline px-3 py-2.5 text-sm focus:border-primary outline-none" required />
                </div>
                <div>
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1">Time Slot *</label>
                  <select name="patient-slot" className="w-full bg-surface-container-low border border-outline px-3 py-2.5 text-sm focus:border-primary outline-none" required>
                    <option value="09:30 AM (Morning)">09:30 AM (Morning)</option>
                    <option value="11:30 AM (Morning)">11:30 AM (Morning)</option>
                    <option value="04:30 PM (Evening)">04:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3.5 font-button text-xs uppercase tracking-widest hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1c1b1b]">
                Confirm Appointment Request
              </button>
            </form>

            {showSuccess && (
              <div className="mt-4 p-4 bg-surface-container-high border-2 border-primary text-xs">
                <p className="text-primary font-bold">Appointment Request Submitted! Check the live staff simulator on the right.</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 bg-surface p-6 border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b]">
            <h3 className="font-headline-lg text-lg text-on-surface uppercase mb-3">Live Staff Lead Record Simulator</h3>
            <div className="border border-outline overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-surface-container-high border-b border-outline font-label-caps text-[10px] uppercase">
                  <tr>
                    <th className="p-2.5">Patient / Phone</th>
                    <th className="p-2.5">Service</th>
                    <th className="p-2.5">Slot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline">
                  {leads.map((lead, idx) => (
                    <tr key={idx} className="bg-surface hover:bg-surface-container-low">
                      <td className="p-2.5 font-bold">{lead.name}<br /><span className="text-[10px] text-on-surface-variant font-mono">{lead.phone}</span></td>
                      <td className="p-2.5">{lead.service}</td>
                      <td className="p-2.5 text-[10px]">{lead.date} • {lead.slot}</td>
                    </tr>
                  ))}
                  {leads.length === 0 && (
                    <tr><td colSpan={3} className="p-4 text-center text-on-surface-variant">Submit a test booking on the left to see it log here in real-time.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
