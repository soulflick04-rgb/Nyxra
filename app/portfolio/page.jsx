"use client";

export default function PortfolioPage() {
  return (
    <>
      <nav id="main-nav" className="bg-surface border-b border-outline top-0 z-50 sticky transition-all duration-300 w-full">
        <div className="flex justify-between items-center w-full px-gutter py-3.5 max-w-container-max mx-auto">
          <a className="flex items-center gap-3" href="/">
            <img src="/logo.png" alt="Nyxra" className="h-10 w-10 object-contain rounded-lg border border-outline bg-surface-container-low p-1" />
            <span className="font-headline-lg text-headline-lg-mobile tracking-tighter text-on-surface uppercase hover:text-primary transition-colors">NYXRA</span>
          </a>
          <ul className="hidden lg:flex gap-7 items-center font-label-caps text-label-caps uppercase">
            <li><a className="text-on-surface-variant hover:text-primary" href="/">Home</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/services">Services</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/pricing">Pricing</a></li>
            <li><a className="text-primary border-b-2 border-primary pb-1" href="/portfolio">Demo Systems</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/about">About</a></li>
            <li><a className="text-on-surface-variant hover:text-primary" href="/contact">Audit & Contact</a></li>
          </ul>
          <a className="hidden lg:inline-block bg-on-surface text-surface px-6 py-3 font-button text-button uppercase hover:bg-primary transition-colors duration-300" href="/contact">
            Free Business Audit
          </a>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-label-caps text-label-caps text-primary mb-3 uppercase tracking-widest font-bold">Concept Workflows</p>
          <h1 className="font-display-xl text-[44px] sm:text-[64px] md:text-display-xl tracking-tighter leading-none mb-4">
            Demo <span className="italic text-primary font-light">systems</span>.
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant">
            These are concept demos showing how Nyxra designs practical enquiry, booking, and lead workflows for small businesses.
          </p>
        </div>

        {/* Clinic Demo Showcase */}
        <article className="p-8 bg-surface border-2 border-on-surface shadow-[6px_6px_0px_#1c1b1b] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary-container text-on-secondary-container font-label-caps text-xs px-3 py-1 uppercase font-bold">Concept Demo 01</span>
                <span className="font-label-caps text-xs text-primary font-bold uppercase">Healthcare & Wellness</span>
              </div>
              <h2 className="font-headline-xl text-3xl md:text-4xl mb-3">Clinic Appointment & Lead System</h2>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                Appointment requests and medical report enquiries often arrive through scattered phone calls, WhatsApp messages, and front-desk walk-ins.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/clinic-demo" className="inline-flex items-center gap-2 font-button text-xs uppercase bg-primary text-white px-6 py-3.5 hover:bg-primary-container transition-colors shadow-[2px_2px_0px_#1c1b1b]">
                  Launch Live Interactive Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-4 border border-outline shadow-[4px_4px_0px_#1c1b1b]">
                <img src="/sample-1.png" alt="Clinic Demo Preview" className="w-full h-auto object-cover border border-outline" />
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <a href="/" className="underline text-secondary-container">Back to Home</a></p>
      </footer>
    </>
  );
}
