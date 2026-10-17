"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SignificaButton from "../components/SignificaButton";
import { CheckIcon, ArrowRightIcon } from "../components/Icons";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      title: "Websites & Landing Pages",
      tagline: "High-speed, mobile-first websites engineered to convert curious visitors into qualified enquiries.",
      image: "/sample-1.png",
      description: "We don't build generic template sites cluttered with bloated plugins. Every Nyxra website is designed with Significa-level typographic precision, rapid mobile rendering, clear value propositions, and zero friction.",
      deliverables: [
        "Custom responsive design tailored to your industry",
        "Targeted conversion landing pages",
        "WhatsApp click-to-chat & instant call triggers",
        "Google Maps business integration & local SEO schema",
        "Google Analytics 4 & search console setup",
        "Lightning-fast load performance (<1.5s mobile)",
        "Client-owned hosting deployment on Vercel / Netlify"
      ],
      idealFor: "Clinics, local practices, consulting studios, and service contractors looking to establish undeniable market credibility."
    },
    {
      num: "02",
      title: "Lead Capture Systems",
      tagline: "Stop letting interested prospects slip through the cracks of random unorganized chats.",
      image: "/sample-2.png",
      description: "Turn traffic from Google, Instagram, and referrals into structured data. We build smart forms and interactive filters that qualify visitor intent and automatically send notifications the moment a submission occurs.",
      deliverables: [
        "Interactive high-intent qualification forms",
        "Automatic real-time sync with Google Sheets or Airtable",
        "Instant Email & SMS alerts sent directly to staff",
        "Form abandonment mitigation & validation",
        "Direct routing to WhatsApp chat with pre-filled message",
        "Spam protection with honeypot security"
      ],
      idealFor: "Businesses receiving leads from multiple channels who need a single source of truth without manual copy-pasting."
    },
    {
      num: "03",
      title: "CRM & Pipeline Management",
      tagline: "Keep every prospect, follow-up date, and quote status in one crystal-clear place.",
      image: "/sample-1.png",
      description: "Enterprise CRMs like Salesforce or HubSpot are bloated and expensive for small businesses. Nyxra builds clean, client-owned pipelines using Google Sheets, Airtable, or Notion that your team will actually enjoy using.",
      deliverables: [
        "Custom sales stages (New, Contacted, Consult Scheduled, Quote Sent, Won)",
        "Lead priority tags & value estimation fields",
        "Automated follow-up reminder triggers",
        "Pre-built communication history logs",
        "Lightweight management dashboard view",
        "Zero monthly software licensing fees"
      ],
      idealFor: "Founders, clinics, and agency owners who need complete pipeline visibility without complex enterprise software."
    },
    {
      num: "04",
      title: "Appointment & Booking Systems",
      tagline: "Effortless scheduling for consultations, patient visits, and client callbacks.",
      image: "/sample-2.png",
      description: "Eliminate the painful back-and-forth of 'What time works for you?'. We configure modern, branded appointment workflows that sync directly with your Google or Outlook calendar.",
      deliverables: [
        "Interactive service, date, and slot pickers",
        "Two-way Google / Microsoft Calendar integration",
        "Automated booking confirmation emails & SMS",
        "Pre-appointment reminder sequence",
        "Rescheduling & cancellation self-service links",
        "Intake question capture prior to consultation"
      ],
      idealFor: "Doctors, dental clinics, wellness coaches, legal consultants, and home service providers."
    },
    {
      num: "05",
      title: "AI Content & Reply Systems",
      tagline: "A reusable, intelligent system for consistent marketing content and instant customer replies.",
      image: "/sample-1.png",
      description: "We don't sell AI magic. We build practical, structured prompt banks, branded caption libraries, and automated response playbooks that save 10+ hours of repetitive weekly operations.",
      deliverables: [
        "30-day customized business content calendar & captions",
        "Business-specific AI prompt library for your niche",
        "Customer FAQ quick-reply templates for WhatsApp & Email",
        "Professional proposal & quote template pack",
        "Onboarding guide and 30 days of direct founder support"
      ],
      idealFor: "Small business owners who want to stay active on social media and respond faster without hiring an agency."
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
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>Capabilities & Deliverables</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                  Practical systems. <br />
                  <span className="text-foreground-secondary">Organised growth.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base text-foreground-secondary leading-relaxed">
                  Start with a high-converting website, then connect the simple lead capture, booking, and automation systems that keep your daily operations running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Deep Dive */}
        <section className="py-12">
          <div className="container-significa space-y-16">
            {services.map((srv, idx) => (
              <div
                key={srv.num}
                className="p-8 sm:p-12 rounded-3xl border border-border bg-background-panel shadow-xs transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl font-bold font-mono text-brand">{srv.num}</span>
                      <span className="w-8 h-px bg-border" />
                      <span className="text-xs uppercase font-semibold tracking-wider text-foreground-secondary">
                        Core Capability
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                      {srv.title}
                    </h2>

                    <p className="text-base text-foreground font-medium mb-4 leading-snug">
                      {srv.tagline}
                    </p>

                    <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
                        Included Deliverables:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {srv.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-foreground">
                            <span className="mt-0.5 w-4 h-4 rounded-full bg-brand/20 text-foreground flex items-center justify-center flex-shrink-0">
                              <CheckIcon className="w-2.5 h-2.5" />
                            </span>
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best for */}
                    <div className="p-3.5 rounded-xl bg-background-offset border border-border text-xs text-foreground-secondary mb-6">
                      <strong className="text-foreground">Ideal For: </strong>
                      {srv.idealFor}
                    </div>

                    <SignificaButton href="/contact" variant="primary" size="md" arrow>
                      Request Scope for {srv.title.split(" ")[0]}
                    </SignificaButton>
                  </div>

                  {/* Right Image Mockup Frame */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background-offset border border-border p-2 shadow-sm">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Our Delivery Process
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                How we go from idea to live deployment.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Written Scope & Architecture",
                  desc: "We analyze your current customer flow and write a clear one-page specification with fixed pricing and timelines."
                },
                {
                  step: "02",
                  title: "Design & Copy Structuring",
                  desc: "We establish the visual hierarchy, write high-converting copy, and design responsive layouts in Significa Sans styling."
                },
                {
                  step: "03",
                  title: "System Integration",
                  desc: "We connect the enquiry forms, WhatsApp notifications, Google Sheets tracker, and calendar booking flows."
                },
                {
                  step: "04",
                  title: "Testing & Handover",
                  desc: "We conduct end-to-end booking tests, deploy to your client-owned account, and record a walkthrough video."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-border bg-background flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-mono font-bold text-brand block mb-3">{item.step}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-foreground-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
