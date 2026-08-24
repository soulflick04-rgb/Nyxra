"use client";

export default function TermsPage() {
  return (
    <main className="bg-surface text-on-surface antialiased min-h-screen py-16 px-gutter">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="font-button text-xs uppercase text-primary hover:underline flex items-center gap-1 mb-8">
          ← Back to Nyxra Home
        </a>
        <h1 className="font-display-xl text-4xl sm:text-5xl text-on-surface mb-4">Terms of Service</h1>
        <p className="font-body-md text-sm text-on-surface-variant mb-10 leading-relaxed">
          These are general terms for Nyxra's services. Project scope, costs and third-party services are confirmed in a written proposal.
        </p>
        <div className="space-y-6">
          <div className="p-6 bg-surface-container-low border border-outline">
            <h2 className="font-headline-lg text-lg mb-2 text-on-surface">Services & Project Scope</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Nyxra provides website, lead-capture, appointment workflow, CRM setup and simple automation services for small businesses. Exact deliverables are confirmed in a written project proposal.
            </p>
          </div>
          <div className="p-6 bg-surface-container-low border border-outline">
            <h2 className="font-headline-lg text-lg mb-2 text-on-surface">Ownership & Accounts</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Where practical, client-owned accounts are recommended for domains, hosting and business tools.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
