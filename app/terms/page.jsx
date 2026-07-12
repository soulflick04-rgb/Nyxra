export const metadata = {
  title: "Terms of Service | Nyxra",
  description:
    "Terms of Service for Nyxra website, lead system and automation projects."
};

const sections = [
  {
    title: "Services",
    body: "Nyxra provides website, lead-capture, appointment workflow, CRM setup and simple automation services for small businesses. Exact deliverables are confirmed in a written project proposal."
  },
  {
    title: "Project scope",
    body: "Each project scope should define pages, features, integrations, revision rounds, timeline, responsibilities and third-party tools before work begins."
  },
  {
    title: "Payments and third-party costs",
    body: "Project fees, payment schedule and optional care plans are confirmed before work starts. Domains, hosting, paid APIs and third-party subscriptions are charged separately when required."
  },
  {
    title: "Client responsibilities",
    body: "Clients are responsible for providing accurate business information, content, images, approvals, platform access and legal or compliance requirements specific to their industry."
  },
  {
    title: "Results",
    body: "Nyxra builds practical systems to improve clarity, enquiry capture and follow-up. Sales, leads or revenue are not guaranteed because results depend on many external factors."
  },
  {
    title: "Ownership and access",
    body: "Ownership and access details should be confirmed in the project proposal. Where practical, client-owned accounts are recommended for domains, hosting and business tools."
  },
  {
    title: "Contact",
    body: "For questions about these terms, contact Nyxra at supportnyxra@gmail.com."
  }
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#020812] px-5 py-16 text-cyan-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-cyan-100 hover:text-white">
          Back to Nyxra
        </a>
        <h1 className="mt-10 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-5 leading-7 text-cyan-50/68">
          These are general placeholder terms for Nyxra's services. They do not invent legal registration details. Project scope, costs and third-party services are confirmed in a written proposal.
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
