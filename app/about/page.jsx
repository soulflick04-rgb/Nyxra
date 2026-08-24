"use client";

import Header from "../components/Header";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="max-w-container-max mx-auto px-gutter py-12 sm:py-16">
        <div className="p-6 sm:p-12 bg-surface border-2 border-on-surface shadow-[8px_8px_0px_#1c1b1b] grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center mb-16">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-52 h-52 sm:w-72 sm:h-72 rounded-full border-4 border-on-surface overflow-hidden shadow-[6px_6px_0px_#1c1b1b] bg-surface-container-high">
                <img src="/founder.jpg" alt="Rishi Srivastav, Founder of Nyxra" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute bottom-2 right-2 bg-secondary-container border border-on-surface px-3 py-1.5 text-xs font-label-caps uppercase font-bold shadow-[2px_2px_0px_#1c1b1b]">
                Founder, Nyxra
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-label-caps text-xs uppercase tracking-widest text-primary font-bold mb-2">Founder & Creative Technologist</p>
            <h1 className="font-headline-lg text-3xl sm:text-4xl text-on-surface mb-4">Rishi Srivastav</h1>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
              Nyxra was founded by Rishi Srivastav to help small businesses use modern digital and AI tools without needing a large technical team or overwhelming enterprise software.
            </p>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
              The goal is simple: build clear, high-performing websites and practical systems that make businesses easier to discover, contact, and operate day-to-day.
            </p>
            <p className="font-serif italic text-3xl text-primary mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Rishi Srivastav
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <Link href="/" className="underline text-secondary-container">Back to Home</Link></p>
      </footer>
    </>
  );
}
