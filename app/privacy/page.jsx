export const metadata = {
  title: "Privacy Policy | Nyxra",
  description:
    "Privacy Policy for Nyxra, covering enquiry information, project communication and third-party service use."
};

const sections = [
  {
    title: "Information we collect",
    body: "Nyxra may collect information you provide through enquiry forms, email or project discussions, such as your name, business name, contact details, website or social profile, business category, project goals and budget range."
  },
  {
    title: "How information is used",
    body: "Information is used to review your enquiry, prepare project recommendations, communicate about scope, deliver agreed services and improve the quality of Nyxra's business processes."
  },
  {
    title: "Third-party services",
    body: "Projects may use third-party tools such as hosting platforms, form providers, analytics, email, calendars, spreadsheets or CRM systems. Any required tools, paid subscriptions or API costs are confirmed in a written proposal."
  },
  {
    title: "Data ownership",
    body: "Where practical, Nyxra recommends client-owned accounts for domains, hosting, analytics, forms and business tools so the client can retain access to their website and business data."
  },
  {
    title: "No sale of personal information",
    body: "Nyxra does not sell personal information. Information may be shared only where needed to deliver agreed services, operate third-party tools or comply with a valid legal requirement."
  },
  {
    title: "Contact",
    body: "For privacy-related questions, contact Nyxra at supportnyxra@gmail.com."
  }
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020812] px-5 py-16 text-cyan-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-cyan-100 hover:text-white">
          Back to Nyxra
        </a>
        <h1 className="mt-10 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 leading-7 text-cyan-50/68">
          This page provides general business-language privacy information for Nyxra. Project scope, costs and third-party services are confirmed in a written proposal.
        </p>
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-cyan-200/12 bg-white/[0.035] p-6">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="mt-3 leading-7 text-cyan-50/68">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
