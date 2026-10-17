"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SignificaButton from "../components/SignificaButton";
import { CheckCircleIcon } from "../components/Icons";

export default function ThankYouPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-20 flex items-center justify-center">
        <div className="container-significa max-w-xl">
          <div className="p-8 sm:p-14 rounded-3xl border-2 border-brand bg-background-panel text-center shadow-lg animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-brand/20 text-foreground flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-8 h-8 text-brand" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-brand block mb-2">
              Request Successfully Dispatched
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Thank You.
            </h1>

            <p className="text-base text-foreground-secondary leading-relaxed mb-6">
              Your business audit request has been sent directly to Rishi Srivastav at <strong className="text-foreground">supportnyxra@gmail.com</strong>.
            </p>

            <p className="text-sm text-foreground-secondary leading-relaxed mb-8">
              We are currently reviewing your current workflow, presence, and requirements. You will receive your personalized 20-minute video audit and proposed system scope within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <SignificaButton href="/" variant="secondary" size="md">
                Back to Home
              </SignificaButton>
              <SignificaButton href="https://wa.me/919876543210" variant="brand" size="md" arrow>
                Chat on WhatsApp
              </SignificaButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
