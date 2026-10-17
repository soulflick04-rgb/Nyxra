"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ClinicSimulator from "../components/ClinicSimulator";
import SignificaButton from "../components/SignificaButton";
import Link from "next/link";
import { ArrowLeftIcon } from "../components/Icons";

export default function ClinicDemoPage() {
  return (
    <>
      <Header />

      {/* Top Banner Notice */}
      <div className="bg-brand text-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wider flex items-center justify-between">
        <Link href="/portfolio" className="inline-flex items-center gap-1.5 hover:underline">
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <span>Back to Demo Systems</span>
        </Link>
        <span className="hidden sm:inline">NYXRA CONCEPT DEMO &bull; CLINIC WORKFLOW SIMULATOR</span>
        <Link href="/contact" className="hover:underline font-bold">
          Request Similar System &rarr;
        </Link>
      </div>

      <main className="min-h-screen py-12">
        <div className="container-significa">
          {/* Clinic Brand Bar */}
          <div className="p-6 rounded-2xl bg-background-panel border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-brand text-foreground flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground block">Apex Health Clinic</span>
                <span className="text-xs uppercase font-medium tracking-wider text-foreground-secondary">
                  General, Dental & Preventive Healthcare
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-foreground-secondary">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-brand">location_on</span> Metro City Center
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-brand">call</span> +91 98765 43210
              </span>
            </div>
          </div>

          {/* Interactive Simulator */}
          <ClinicSimulator />

          {/* Explanation Section */}
          <div className="mt-16 p-8 rounded-2xl bg-background-panel border border-border">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Why this architecture solves clinic bottlenecks:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-foreground-secondary leading-relaxed">
              <div className="p-4 rounded-xl bg-background-offset border border-border">
                <strong className="text-foreground text-sm block mb-1">1. Zero Appointment Phone Tag</strong>
                <p>Patients choose their specific doctor, preferred day, and slot without receptionist back-and-forth holding phone lines.</p>
              </div>
              <div className="p-4 rounded-xl bg-background-offset border border-border">
                <strong className="text-foreground text-sm block mb-1">2. Instant Receptionist Ping</strong>
                <p>The clinic staff receives a direct notification on WhatsApp with patient name, phone, and reason for visit in under 5 seconds.</p>
              </div>
              <div className="p-4 rounded-xl bg-background-offset border border-border">
                <strong className="text-foreground text-sm block mb-1">3. Automated Confirmation & CRM</strong>
                <p>Every lead is saved to your clinic Google Sheet. One click sends an automated WhatsApp confirmation message to the patient.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-foreground-secondary">
                Ready to deploy a similar system for your clinic or practice?
              </span>
              <SignificaButton href="/contact" variant="brand" size="md" arrow>
                Get Clinic System Scope
              </SignificaButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
