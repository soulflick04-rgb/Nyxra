"use client";

export default function PricingPage() {
  return (
    <>
      <header id="main-nav" className="bg-surface sticky top-0 z-40 border-b border-outline w-full transition-all duration-300">
        <div className="flex justify-between items-center w-full px-gutter py-3.5 max-w-container-max mx-auto">
          <a className="flex items-center gap-3" href="/">
            <img src="/logo.png" alt="Nyxra" className="h-10 w-10 object-contain rounded-lg border border-outline bg-surface-container-low p-1" />
            <span className="font-headline-lg text-headline-lg-mobile tracking-tighter text-on-surface uppercase hover:text-primary transition-colors">NYXRA</span>
          </a>
          <nav className="hidden lg:flex items-center space-x-7 font-label-caps text-label-caps uppercase">
            <a className="text-on-surface-variant hover:text-primary" href="/">Home</a>
            <a className="text-on-surface-variant hover:text-primary" href="/services">Services</a>
            <a className="text-primary border-b-2 border-primary pb-1" href="/pricing">Pricing</a>
            <a className="text-on-surface-variant hover:text-primary" href="/portfolio">Demo Systems</a>
            <a className="text-on-surface-variant hover:text-primary" href="/about">About</a>
            <a className="text-on-surface-variant hover:text-primary" href="/contact">Audit & Contact</a>
          </nav>
          <div className="hidden lg:block">
            <a className="bg-on-surface text-surface font-button text-button px-6 py-3 hover:bg-primary hover:text-white transition-colors duration-200" href="/contact">
              Free Business Audit
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-label-caps text-label-caps text-primary uppercase mb-3 tracking-widest font-bold">Transparent Scope</p>
          <h1 className="font-display-xl text-[44px] sm:text-[64px] md:text-display-xl tracking-tighter leading-none mb-4">
            Productised <span className="italic text-primary font-light">pricing</span>.
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant">
            Clear package starting points. Scope, third-party software, and timeline are confirmed before project commencement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plan 1 */}
          <div className="p-8 bg-surface border-2 border-on-surface flex flex-col justify-between">
            <div>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest block mb-2 font-bold">Foundation</span>
              <h2 className="font-headline-lg text-3xl mb-2 text-on-surface">Digital Launch</h2>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                A professional online presence for small businesses that need clarity and trust.
              </p>
              <div className="mb-6 pb-6 border-b border-outline">
                <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant block">Starting at</span>
                <span className="font-display-lg text-4xl sm:text-5xl font-bold text-primary">₹10,000</span>
              </div>
              <ul className="space-y-3 text-xs text-on-surface mb-8">
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Professional business website</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Mobile-responsive design</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Contact form & WhatsApp button</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Google Maps & Basic SEO</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Two structured revision rounds</span></li>
              </ul>
            </div>
            <a href="/contact" className="w-full text-center bg-on-surface text-surface py-4 font-button text-xs uppercase tracking-widest hover:bg-primary transition-colors">
              Launch My Business Online
            </a>
          </div>

          {/* Plan 2 */}
          <div className="p-8 bg-surface border-2 border-primary shadow-[8px_8px_0px_#b02f00] relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 bg-primary text-white text-[10px] uppercase font-bold font-label-caps px-4 py-1 tracking-widest border border-on-surface">
              MOST POPULAR
            </div>
            <div>
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest block mb-2 font-bold">Growth Engine</span>
              <h2 className="font-headline-lg text-3xl mb-2 text-on-surface">Lead Growth System</h2>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                The practical starting point for websites plus organised enquiry management.
              </p>
              <div className="mb-6 pb-6 border-b border-outline">
                <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant block">Starting at</span>
                <span className="font-display-lg text-4xl sm:text-5xl font-bold text-primary">₹15,000</span>
              </div>
              <ul className="space-y-3 text-xs text-on-surface mb-8">
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span><strong>Everything in Digital Launch</strong> included</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Advanced qualification enquiry form</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Lead tracker / basic CRM connection</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Appointment & callback workflow setup</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Instant team notification workflow</span></li>
              </ul>
            </div>
            <a href="/contact" className="w-full text-center bg-primary text-white py-4 font-button text-xs uppercase tracking-widest hover:bg-primary-container transition-colors">
              Build My Lead System
            </a>
          </div>

          {/* Plan 3 */}
          <div className="p-8 bg-surface border-2 border-on-surface flex flex-col justify-between">
            <div>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest block mb-2 font-bold">Automation</span>
              <h2 className="font-headline-lg text-3xl mb-2 text-on-surface">AI Business Starter</h2>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                A stronger system for content, customer replies and simple business automation.
              </p>
              <div className="mb-6 pb-6 border-b border-outline">
                <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface-variant block">Starting at</span>
                <span className="font-display-lg text-4xl sm:text-5xl font-bold text-primary">₹20,000</span>
              </div>
              <ul className="space-y-3 text-xs text-on-surface mb-8">
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span><strong>Everything in Lead Growth</strong> included</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>30-day content calendar & caption bank</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>Branded social templates & prompt library</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>FAQ & customer-response system</span></li>
                <li className="flex items-start gap-2.5"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span> <span>30 days of direct basic support</span></li>
              </ul>
            </div>
            <a href="/contact" className="w-full text-center bg-on-surface text-surface py-4 font-button text-xs uppercase tracking-widest hover:bg-primary transition-colors">
              Request Custom Plan
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-on-surface text-surface border-t border-outline-variant py-12 text-center text-xs">
        <p>© 2026 NYXRA. All rights reserved. <a href="/" className="underline text-secondary-container">Back to Home</a></p>
      </footer>
    </>
  );
}
