"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Slogan from "./components/Slogan";
import SmallHighlights from "./components/SmallHighlights";
import SystemArchitecture from "./components/SystemArchitecture";
import PricingCardGrid from "./components/PricingCardGrid";
import ProjectCard from "./components/ProjectCard";
import FaqAccordion from "./components/FaqAccordion";
import SignificaButton from "./components/SignificaButton";
import Link from "next/link";
import { ArrowRightIcon } from "./components/Icons";

export default function HomePage() {
  const problems = [
    {
      num: "01",
      title: "No Professional Website",
      desc: "Prospects cannot find you on Google or do not trust what they see, losing credibility instantly before enquiring."
    },
    {
      num: "02",
      title: "Scattered Enquiries",
      desc: "High-intent leads are lost across random WhatsApp chats, direct Instagram messages, and missed phone calls."
    },
    {
      num: "03",
      title: "No Booking System",
      desc: "Manual scheduling friction creates hesitation for patients, students, or high-ticket clients."
    },
    {
      num: "04",
      title: "Poor Follow-Up",
      desc: "Warm leads go cold because there is no organized pipeline, reminder schedule, or notification alert for staff."
    },
    {
      num: "05",
      title: "Repetitive Tasks",
      desc: "Business owners spend hours answering the same basic questions, pricing queries, and appointment requests."
    }
  ];

  const services = [
    {
      num: "01",
      title: "Websites & Landing Pages",
      desc: "Fast, mobile-first websites designed with Significa-level typographic precision to explain your offer clearly and convert visitors into enquiries.",
      features: ["Custom Responsive Design", "WhatsApp & Call Click-to-Chat", "Google Maps & Local SEO Setup", "Zero Bloated Plugins"],
      icon: "language"
    },
    {
      num: "02",
      title: "Lead Capture Systems",
      desc: "Turn website visitors and social media interest into structured, qualified enquiries that are effortless to track.",
      features: ["Custom High-Conversion Forms", "Google Sheets / CRM Sync", "Instant Email & SMS Staff Alerts", "Lead Stage Qualification"],
      icon: "filter_alt"
    },
    {
      num: "03",
      title: "CRM & Lead Pipeline",
      desc: "Keep prospect details, follow-up dates, call notes, and sales stages in one clean, client-owned pipeline.",
      features: ["Custom Lead Stages & Priority", "Automated Follow-up Reminders", "Lightweight Dashboard View", "100% Client Data Ownership"],
      icon: "table_chart"
    },
    {
      num: "04",
      title: "Appointment & Booking Systems",
      desc: "Make it effortless for customers to book consultations, clinic appointments, or callbacks without phone tag.",
      features: ["Interactive Date & Time Selector", "Calendar Synchronization", "SMS & WhatsApp Confirmations", "Cancellation & Rescheduling"],
      icon: "calendar_month"
    },
    {
      num: "05",
      title: "AI Content & Reply Systems",
      desc: "A reusable system for generating consistent social marketing content and responding in seconds to customer queries.",
      features: ["30-Day Content Calendar & Captions", "Business AI Prompt Library", "Pre-Written Reply & FAQ Templates", "Proposal Template Pack"],
      icon: "psychology"
    }
  ];

  const industries = [
    {
      name: "Clinics & Healthcare",
      problem: "Appointment requests scattered across calls and walk-in counter queues.",
      system: "Clinic website, online appointment booking flow, lead tracker, and receptionist WhatsApp alerts.",
      outcome: "Zero missed patient requests and seamless scheduling.",
      icon: "medical_services"
    },
    {
      name: "Coaching & Institutes",
      problem: "Student queries arrive without course context or counselling status.",
      system: "Course landing pages, qualification form, admission pipeline, and reminder flows.",
      outcome: "Higher enrolment conversion and tracked follow-ups.",
      icon: "school"
    },
    {
      name: "Consultants & Freelancers",
      problem: "Unqualified leads waste hours on discovery calls before assessing fit.",
      system: "Personal brand site, consultation request flow, and qualification gating.",
      outcome: "Only high-intent, pre-qualified client conversations.",
      icon: "person_search"
    },
    {
      name: "Salons, Gyms & Wellness",
      problem: "Customers demand instant service pricing and booking without calling.",
      system: "Service landing pages, slot request calendar, and automated booking confirmations.",
      outcome: "Frictionless conversion from curiosity to confirmed visits.",
      icon: "spa"
    },
    {
      name: "Local Service Contractors",
      problem: "Enquiries forgotten in personal chat logs and memory.",
      system: "Local SEO landing pages, quote request form, Google Maps integration, and lead tracker.",
      outcome: "Every job lead logged, quoted, and followed up systematically.",
      icon: "home_repair_service"
    },
    {
      name: "Early-Stage Startups",
      problem: "Need immediate market credibility without expensive enterprise retainers.",
      system: "High-impact product landing page, waitlist capture, CRM starter, and pitch deck templates.",
      outcome: "Immediate investor and client trust from day one.",
      icon: "rocket_launch"
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-12 sm:pt-20 pb-16">
          <div className="container-significa">
            {/* Top Studio Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-offset border border-border text-xs font-semibold uppercase tracking-wider text-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
              <span>Digital Growth & Automation Studio</span>
            </div>

            {/* Slogan Animated Word Reveal */}
            <div className="mb-8">
              <Slogan
                words={["Websites.", "Lead Systems.", "Automations.", "Growth.", "Scale."]}
                as="h1"
                className="max-w-5xl"
              />
            </div>

            {/* Subtitle & Value Proposition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
              <div className="lg:col-span-8">
                <p className="text-xl sm:text-2xl text-foreground-secondary leading-relaxed font-normal max-w-3xl">
                  Nyxra builds professional websites, lead-capture systems, and practical AI automations that help small businesses win more enquiries, follow up faster, and eliminate repetitive daily work.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <SignificaButton href="/contact" size="lg" variant="brand" arrow className="w-full">
                  Get Free Business Audit
                </SignificaButton>
                <SignificaButton href="/services" size="lg" variant="secondary" className="w-full">
                  Explore Solutions
                </SignificaButton>
              </div>
            </div>

            {/* Magnetic Highlights Cards */}
            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase font-semibold tracking-wider text-foreground-secondary mb-4">
                Explore Studio Highlights
              </p>
              <SmallHighlights />
            </div>
          </div>
        </section>

        {/* Problems Nyxra Solves */}
        <section className="py-20 bg-background-panel border-y border-border transition-colors">
          <div className="container-significa">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-border gap-6">
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                  The Friction We Eliminate
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
                  Your business may be losing customers before the conversation even starts.
                </h2>
              </div>
              <p className="text-sm text-foreground-secondary max-w-sm">
                Most small businesses don&apos;t need complex enterprise software. They need clean communication, structured enquiry capture, and prompt follow-up.
              </p>
            </div>

            {/* 5 Problem Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
              {problems.map((prob) => (
                <div
                  key={prob.num}
                  className="p-6 rounded-xl border border-border bg-background hover:border-brand transition-all duration-300 group shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-bold font-mono text-brand mb-4 block">
                      {prob.num}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-foreground">
                      {prob.title}
                    </h3>
                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-border/40 text-[11px] font-medium text-foreground-secondary">
                    Solved by Nyxra OS
                  </div>
                </div>
              ))}
            </div>

            {/* Solution Integration Ribbon */}
            <div className="mt-8 p-6 rounded-xl bg-brand text-foreground flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                <div>
                  <h4 className="text-lg font-bold">One Connected Digital System</h4>
                  <p className="text-xs opacity-90">Nyxra unifies website, enquiry form, notification alert, and lead tracker into a single flow.</p>
                </div>
              </div>
              <SignificaButton href="/portfolio" variant="primary" size="sm" arrow className="flex-shrink-0">
                See Live Demos
              </SignificaButton>
            </div>
          </div>
        </section>

        {/* The Nyxra Operating System (Interactive Architecture) */}
        <section className="py-20">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Live System Architecture
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                How our practical digital systems operate.
              </h2>
              <p className="text-sm text-foreground-secondary mt-3">
                Click any stage below to inspect the mechanics of Nyxra&apos;s lead capture and follow-up architecture.
              </p>
            </div>

            <SystemArchitecture />
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-border gap-6">
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                  Core Solutions
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  Practical systems for visibility, enquiries & follow-up.
                </h2>
              </div>
              <SignificaButton href="/services" variant="secondary" size="md" arrow>
                View Detailed Deliverables
              </SignificaButton>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((srv) => (
                <div
                  key={srv.num}
                  className="rounded-2xl border border-border bg-background p-6 sm:p-8 flex flex-col justify-between hover:border-brand/40 transition-colors shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-background-offset border border-border flex items-center justify-center text-foreground">
                        <span className="material-symbols-outlined text-xl">{srv.icon}</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-foreground-secondary">
                        {srv.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-foreground-secondary leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-foreground hover:text-brand flex items-center gap-1 transition-colors"
                    >
                      <span>Learn more about {srv.title.split(" ")[0]}</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Scope Review Card */}
              <div className="rounded-2xl border-2 border-brand bg-brand/10 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-foreground mb-2 block">
                    Tailored Systems
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Need a custom combination?
                  </h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed mb-6">
                    Every package is scoped with transparent pricing, zero technical jargon, and complete client ownership of all tool accounts.
                  </p>
                </div>
                <SignificaButton href="/contact" variant="brand" size="md" arrow>
                  Request Scope Review
                </SignificaButton>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions by Industry */}
        <section className="py-20 border-t border-border">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Industry-Specific Workflows
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Built around how small businesses actually operate.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, iIdx) => (
                <div
                  key={iIdx}
                  className="rounded-2xl border border-border bg-background-panel p-6 flex flex-col justify-between shadow-xs hover:border-brand/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-background-offset border border-border flex items-center justify-center text-foreground">
                        <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                      </span>
                      <h3 className="text-lg font-bold text-foreground">{ind.name}</h3>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed">
                      <div>
                        <span className="font-semibold text-brand uppercase block text-[10px]">The Friction:</span>
                        <p className="text-foreground-secondary">{ind.problem}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground uppercase block text-[10px]">Nyxra System:</span>
                        <p className="text-foreground-secondary">{ind.system}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border text-xs">
                    <span className="font-semibold text-foreground">Outcome: </span>
                    <span className="text-foreground-secondary">{ind.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project / Demo Highlights */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-border gap-6">
              <div>
                <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                  Working Prototypes
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  Explore working demo systems.
                </h2>
              </div>
              <SignificaButton href="/portfolio" variant="secondary" size="md" arrow>
                View All Demos
              </SignificaButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <ProjectCard
                name="Apex Health Clinic"
                tagline="Interactive patient appointment booking and instant receptionist lead tracker simulator."
                category="Healthcare & Clinics"
                deliverables={["Appointment Request Flow", "Instant Alert Workflow", "Live Receptionist CRM Table", "Date & Slot Picker"]}
                images={["/sample-1.png", "/sample-2.png"]}
                linkText="Open Live Clinic Simulator"
                href="/clinic-demo"
                metrics="Live Interactive Simulator"
              />

              <ProjectCard
                name="Apex Institute & Coaching"
                tagline="Student course qualification engine with centralized admission counselling pipeline."
                category="Education & Coaching"
                deliverables={["Course Detail Pages", "Student Intent Form", "Lead Status Dashboard", "WhatsApp Direct Channel"]}
                images={["/sample-2.png", "/sample-1.png"]}
                linkText="Inspect Architecture"
                href="/portfolio"
                metrics="3.2x Faster Follow-up"
              />
            </div>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section className="py-20 border-t border-border">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Transparent Pricing
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Productised packages with clear starting points.
              </h2>
              <p className="text-sm text-foreground-secondary mt-3">
                All third-party tools, hosting options, and ongoing costs are confirmed in writing before project kickoff.
              </p>
            </div>

            <PricingCardGrid />
          </div>
        </section>

        {/* Founder Profile Section */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Founder Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-border overflow-hidden bg-background-offset shadow-md">
                    <img
                      src="/founder.jpg"
                      alt="Rishi Srivastav, Founder of Nyxra"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-lg bg-brand text-foreground text-xs font-bold uppercase tracking-wider shadow-sm border border-foreground/20">
                    Founder Led
                  </div>
                </div>
              </div>

              {/* Founder Story */}
              <div className="lg:col-span-7">
                <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                  About The Founder
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                  Rishi Srivastav
                </h2>
                <p className="text-base text-foreground-secondary leading-relaxed mb-4">
                  Nyxra was founded by Rishi Srivastav to help small businesses leverage modern web standards, lead systems, and AI automation without needing large technical teams or paying exorbitant monthly software fees.
                </p>
                <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
                  Every project is founder-led from strategy to delivery. You communicate directly with the builder who designs your architecture and writes your code.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-xs text-foreground-secondary font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Based in India &bull; Serving Global Businesses
                  </span>
                  <span>&bull;</span>
                  <span>100% Client-Owned Accounts</span>
                </div>

                <div className="mt-8">
                  <SignificaButton href="/about" variant="secondary" size="md" arrow>
                    Read Our 7 Core Principles
                  </SignificaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Straight Answers FAQ */}
        <section className="py-20 border-t border-border">
          <div className="container-significa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                  Common Inquiries
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground sticky top-24 leading-tight">
                  Straight answers before you start.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <FaqAccordion />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
