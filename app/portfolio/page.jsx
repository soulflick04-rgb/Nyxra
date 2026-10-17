"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SignificaButton from "../components/SignificaButton";
import Link from "next/link";

export default function PortfolioPage() {
  const demos = [
    {
      name: "Apex Health Clinic & Diagnostics",
      tagline: "Live patient appointment booking workflow with real-time receptionist lead tracker simulator.",
      category: "Healthcare & Wellness",
      deliverables: ["Patient Slot Selector", "Instant WhatsApp Staff Alert", "Auto Google Sheet Record", "Confirmation SMS Workflow"],
      images: ["/sample-1.png", "/sample-2.png"],
      linkText: "Launch Live Clinic Simulator",
      href: "/clinic-demo",
      metrics: "Live Interactive Simulator"
    },
    {
      name: "Apex Institute & Coaching Pipeline",
      tagline: "High-conversion course landing page with student qualification and counselling admission flow.",
      category: "Education & Coaching",
      deliverables: ["Course Detail Hub", "Interactive Qualification Form", "Counselor Pipeline View", "Follow-up Automation"],
      images: ["/sample-2.png", "/sample-1.png"],
      linkText: "Explore Student Flow",
      href: "/clinic-demo",
      metrics: "3.2x Faster Follow-Up"
    },
    {
      name: "Horizon Strategic Consulting",
      tagline: "High-ticket consultation request portal with pre-qualification intake questions and calendar sync.",
      category: "Consultants & Advisory",
      deliverables: ["Personal Brand Profile", "Consultation Intake Flow", "Google Calendar Sync", "Automated Proposal Packet"],
      images: ["/sample-1.png", "/sample-2.png"],
      linkText: "Inspect Architecture",
      href: "/clinic-demo",
      metrics: "100% Pre-Qualified Leads"
    },
    {
      name: "SparkFit Performance Studio",
      tagline: "Trial class booking and member enquiry engine for boutique gyms, studios, and wellness centers.",
      category: "Fitness & Lifestyle",
      deliverables: ["Class Schedule View", "Trial Pass Booking Form", "Staff WhatsApp Notifications", "New Member Onboarding Sequence"],
      images: ["/sample-2.png", "/sample-1.png"],
      linkText: "View Membership Funnel",
      href: "/clinic-demo",
      metrics: "Zero Scheduling Lag"
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Page Hero */}
        <section className="pt-12 sm:pt-20 pb-16">
          <div className="container-significa">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-offset border border-border text-xs font-semibold uppercase tracking-wider text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              <span>Interactive Concept Systems</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                  Demo systems. <br />
                  <span className="text-foreground-secondary">Working prototypes.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base text-foreground-secondary leading-relaxed">
                  These interactive prototypes demonstrate how Nyxra designs practical customer enquiry, appointment booking, and pipeline management workflows for small businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Featured Banner */}
        <section className="py-6">
          <div className="container-significa">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand text-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">medical_services</span>
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider bg-foreground/10 px-2 py-0.5 rounded">
                      Featured Simulator
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Test the Live Apex Clinic Appointment Simulator
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 mt-1 max-w-xl">
                    Submit a sample patient booking on the left and watch it populate the real-time receptionist tracking dashboard on the right.
                  </p>
                </div>
              </div>
              <SignificaButton href="/clinic-demo" variant="primary" size="lg" arrow className="flex-shrink-0">
                Launch Live Simulator
              </SignificaButton>
            </div>
          </div>
        </section>

        {/* Prototype Grid */}
        <section className="py-12">
          <div className="container-significa">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {demos.map((demo, idx) => (
                <ProjectCard
                  key={idx}
                  name={demo.name}
                  tagline={demo.tagline}
                  category={demo.category}
                  deliverables={demo.deliverables}
                  images={demo.images}
                  linkText={demo.linkText}
                  href={demo.href}
                  metrics={demo.metrics}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Before vs After Nyxra Comparison */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Operational Difference
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Before vs. After Nyxra Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before Card */}
              <div className="p-8 rounded-2xl border border-border bg-background">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-4 block">
                  Typical Manual Friction
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-4">Without Structured Systems</h3>
                <ul className="space-y-3.5 text-xs text-foreground-secondary">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>Enquiries lost in scattered personal WhatsApp chats and unread direct messages</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>Manual phone tag and friction trying to coordinate mutually available booking slots</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>No notification to staff when a prospect fills out a generic website contact form</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold">&times;</span>
                    <span>High-intent leads turn cold because there is no organized reminder or pipeline status</span>
                  </li>
                </ul>
              </div>

              {/* After Card */}
              <div className="p-8 rounded-2xl border-2 border-brand bg-brand/5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand mb-4 block">
                  The Nyxra Standard
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-4">With The Nyxra Operating System</h3>
                <ul className="space-y-3.5 text-xs text-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand font-bold">&check;</span>
                    <span>All inquiries captured into a single, clean client-owned Google Sheet or CRM database</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand font-bold">&check;</span>
                    <span>Direct date & time picker integrated with staff calendars and WhatsApp confirmation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand font-bold">&check;</span>
                    <span>Instant WhatsApp/Email alert sent to receptionist phone the exact second an enquiry arrives</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-brand font-bold">&check;</span>
                    <span>Pre-written reply templates and appointment reminders maintain immediate customer trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
