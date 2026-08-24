"use client";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface antialiased flex items-center justify-center p-6">
      <div className="max-w-xl w-full p-8 sm:p-12 bg-surface border-2 border-on-surface shadow-[8px_8px_0px_#1c1b1b] text-center">
        <div className="w-16 h-16 bg-secondary-container border-2 border-on-surface rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">check</span>
        </div>
        <p className="font-label-caps text-xs text-primary uppercase font-bold tracking-widest mb-2">Request Received</p>
        <h1 className="font-display-xl text-3xl sm:text-5xl text-on-surface mb-4">Thank You.</h1>
        <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">
          Your business audit request has been dispatched directly to Rishi Srivastav at <strong className="text-on-surface">supportnyxra@gmail.com</strong>. We will review your details before recommending a practical starting point.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/" className="bg-on-surface text-surface px-8 py-3.5 font-button text-xs uppercase tracking-widest hover:bg-primary transition-colors">
            Back to Home
          </a>
          <a href="mailto:supportnyxra@gmail.com" className="border-2 border-on-surface px-6 py-3.5 font-button text-xs uppercase tracking-widest hover:bg-surface-container-high transition-colors">
            Email Nyxra Directly
          </a>
        </div>
      </div>
    </main>
  );
}
