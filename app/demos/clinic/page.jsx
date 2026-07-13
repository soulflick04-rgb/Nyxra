"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BellRing,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound
} from "lucide-react";

const STORAGE_KEY = "nyxra-clinic-demo-leads";

const services = [
  "General consultation",
  "Dental consultation",
  "Skin consultation",
  "Child health consultation",
  "Health check-up"
];

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "4:00 PM", "5:30 PM", "7:00 PM"];

const workflow = [
  { label: "Clinic website", icon: Stethoscope },
  { label: "Appointment form", icon: CalendarDays },
  { label: "Lead record", icon: ClipboardList },
  { label: "Staff alert", icon: BellRing },
  { label: "Follow-up", icon: MessageCircle }
];

function formatDate(value) {
  if (!value) return "Not selected";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function Field({ label, name, type = "text", placeholder, required = false, min }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      <span>
        {label}
        {required && <span className="text-emerald-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
      />
    </label>
  );
}

function SelectField({ label, name, options, required = false }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      <span>
        {label}
        {required && <span className="text-emerald-600"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function ClinicDemoPage() {
  const [leads, setLeads] = useState([]);
  const [submittedLead, setSubmittedLead] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(saved)) setLeads(saved.slice(0, 6));
    } catch {
      setLeads([]);
    }
  }, []);

  function saveLeads(nextLeads) {
    setLeads(nextLeads);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextLeads));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    const lead = {
      id: `AC-${Date.now().toString().slice(-6)}`,
      fullName: String(formData.get("fullName") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      preferredDate: String(formData.get("preferredDate") || "").trim(),
      timeSlot: String(formData.get("timeSlot") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      status: "New request",
      createdAt: new Date().toISOString()
    };

    await new Promise((resolve) => window.setTimeout(resolve, 650));

    const nextLeads = [lead, ...leads].slice(0, 6);
    saveLeads(nextLeads);
    setSubmittedLead(lead);
    setIsSubmitting(false);
    form.reset();
  }

  function updateStatus(id, status) {
    const nextLeads = leads.map((lead) => (lead.id === id ? { ...lead, status } : lead));
    saveLeads(nextLeads);
    if (submittedLead?.id === id) setSubmittedLead({ ...submittedLead, status });
  }

  return (
    <main className="min-h-screen bg-[#f4fbf8] text-slate-900">
      <div className="border-b border-emerald-100 bg-emerald-950 px-4 py-2 text-center text-xs font-semibold text-emerald-50">
        Concept demo by Nyxra — this is a fictional clinic. No real appointment is booked.
      </div>

      <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
              <HeartPulse size={24} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-black tracking-tight text-slate-950">Aarogya Care Clinic</span>
              <span className="block text-xs font-medium text-slate-500">Family care, made simpler</span>
            </span>
          </a>
          <div className="hidden items-center gap-5 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-emerald-700">Services</a>
            <a href="#workflow" className="transition hover:text-emerald-700">How it works</a>
            <a href="#appointment" className="rounded-full bg-emerald-600 px-5 py-2.5 text-white transition hover:bg-emerald-700">
              Request appointment
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.12),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <ShieldCheck size={15} aria-hidden="true" />
              Trusted local care
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Request a clinic appointment in less than two minutes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Choose a service, share your preferred time and let the clinic team follow up with a confirmation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                Request appointment <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700">
                <ArrowLeft size={17} aria-hidden="true" /> Back to Nyxra
              </a>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {["Simple request form", "Staff notification", "Follow-up tracking"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <CheckCircle2 size={17} className="text-emerald-600" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.08 }} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-emerald-200/50 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_30px_100px_rgba(15,118,110,0.18)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Today at the clinic</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">Fast, organised follow-up</h2>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Activity size={24} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-7 grid gap-4">
                {[
                  ["Open hours", "9:00 AM – 8:00 PM", Clock3],
                  ["Location", "Civil Lines, Gorakhpur", MapPin],
                  ["Call desk", "+91 90000 00000", Phone]
                ].map(([label, value, Icon]) => (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                      <p className="mt-1 font-bold text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
                Demo details are fictional. Do not enter medical records or sensitive health information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Clinic services</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">A clear path to the right consultation.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <div key={service} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-700">{index + 1}</span>
                <p className="mt-6 font-bold leading-6 text-slate-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-emerald-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Nyxra workflow</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">From website visitor to organised follow-up.</h2>
          </div>
          <div className="mt-12 grid gap-3 lg:grid-cols-5">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/12 text-emerald-200">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300/70">Step {index + 1}</p>
                  <p className="mt-2 font-bold">{step.label}</p>
                  {index < workflow.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 hidden text-emerald-300/40 lg:block" size={18} aria-hidden="true" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="appointment" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_24px_90px_rgba(15,118,110,0.11)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Appointment request</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Tell the clinic when you would like to visit.</h2>
            <p className="mt-4 leading-7 text-slate-600">The clinic team would normally receive the request and contact the patient to confirm availability.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="fullName" placeholder="Demo Patient" required />
                <Field label="Phone number" name="phone" type="tel" placeholder="98765 43210" required />
              </div>
              <SelectField label="Service" name="service" options={services} required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred date" name="preferredDate" type="date" min={today} required />
                <SelectField label="Preferred time" name="timeSlot" options={timeSlots} required />
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>Short note <span className="font-normal text-slate-400">(optional)</span></span>
                <textarea
                  name="message"
                  placeholder="Example: first consultation. Do not enter private medical information."
                  className="min-h-28 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? "Creating request..." : "Submit demo request"}
                {!isSubmitting && <ArrowRight size={17} aria-hidden="true" />}
              </button>
              <p className="text-center text-xs leading-5 text-slate-500">Demo submissions are stored only in this browser using local storage.</p>
            </form>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-950 p-6 text-white shadow-[0_24px_90px_rgba(6,78,59,0.2)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Staff dashboard preview</p>
                <h2 className="mt-3 text-2xl font-black">Live appointment pipeline</h2>
              </div>
              <span className="rounded-full bg-emerald-400/12 px-3 py-1.5 text-xs font-bold text-emerald-200">{leads.length} requests</span>
            </div>

            <div className="mt-7 grid gap-3">
              {leads.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.04] p-6 text-center">
                  <ClipboardList className="mx-auto text-emerald-300" size={28} aria-hidden="true" />
                  <p className="mt-4 font-bold">No demo requests yet</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/60">Submit the form to see the lead record and follow-up workflow appear here.</p>
                </div>
              ) : (
                leads.map((lead) => (
                  <div key={lead.id} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">{lead.fullName}</p>
                        <p className="mt-1 text-xs text-emerald-100/60">{lead.id} • {lead.service}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${lead.status === "Contacted" ? "bg-sky-400/15 text-sky-200" : lead.status === "Confirmed" ? "bg-emerald-400/16 text-emerald-200" : "bg-amber-400/15 text-amber-200"}`}>
                        {lead.status}
                      </span>
                    </div>
                    <div className="mt-4 grid gap-2 text-xs text-emerald-50/65 sm:grid-cols-2">
                      <span>{formatDate(lead.preferredDate)}</span>
                      <span>{lead.timeSlot}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button type="button" onClick={() => updateStatus(lead.id, "Contacted")} className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-xs font-bold transition hover:bg-white/10">
                        Mark contacted
                      </button>
                      <button type="button" onClick={() => updateStatus(lead.id, "Confirmed")} className="rounded-full bg-emerald-500 px-3 py-2 text-xs font-bold text-emerald-950 transition hover:bg-emerald-400">
                        Confirm appointment
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-200/15 bg-[#03111f] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Built by Nyxra</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Need a website and appointment system like this for your business?</h2>
            <p className="mt-4 leading-7 text-cyan-50/65">Nyxra builds lightweight websites, lead trackers and follow-up systems for clinics and other local businesses.</p>
          </div>
          <a href="/#business-audit" className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200 lg:mt-0">
            Request a free audit <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="border-t border-emerald-100 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Fictional concept demo. Not a real healthcare provider.</p>
          <a href="/" className="font-bold text-emerald-700 hover:text-emerald-800">Nyxra — websites, lead systems and simple automations</a>
        </div>
      </footer>

      <AnimatePresence>
        {submittedLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-5 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-success-title"
          >
            <motion.div initial={{ opacity: 0, y: 18, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Check size={28} aria-hidden="true" />
              </span>
              <h2 id="demo-success-title" className="mt-6 text-2xl font-black text-slate-950">Demo request created</h2>
              <p className="mt-3 leading-7 text-slate-600">The request is now visible in the staff dashboard preview, just like a simple lead-management workflow.</p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p><strong className="text-slate-900">Reference:</strong> {submittedLead.id}</p>
                <p className="mt-2"><strong className="text-slate-900">Requested:</strong> {formatDate(submittedLead.preferredDate)} at {submittedLead.timeSlot}</p>
              </div>
              <button type="button" onClick={() => setSubmittedLead(null)} className="mt-6 w-full rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-700">
                View staff dashboard
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
