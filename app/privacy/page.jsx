"use client";

export default function PrivacyPage() {
  return (
    <main className="bg-surface text-on-surface antialiased min-h-screen py-16 px-gutter">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="font-button text-xs uppercase text-primary hover:underline flex items-center gap-1 mb-8">
          ← Back to Nyxra Home
        </a>
        <h1 className="font-display-xl text-4xl sm:text-5xl text-on-surface mb-4">Privacy Policy</h1>
        <p className="font-body-md text-sm text-on-surface-variant mb-10 leading-relaxed">
          This page provides general business-language privacy information for Nyxra. Project scope, costs and third-party services are confirmed in a written proposal.
        </p>
        <div className="space-y-6">
          <div className="p-6 bg-surface-container-low border border-outline">
            <h2 className="font-headline-lg text-lg mb-2 text-on-surface">Information we collect</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Nyxra may collect information you provide through enquiry forms, email or project discussions, such as your name, business name, contact details, website or social profile, business category, project goals and budget range.
            </p>
          </div>
          <div className="p-6 bg-surface-container-low border border-outline">
            <h2 className="font-headline-lg text-lg mb-2 text-on-surface">Data ownership</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Where practical, Nyxra recommends client-owned accounts for domains, hosting, analytics, forms and business tools so the client retains 100% access.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
