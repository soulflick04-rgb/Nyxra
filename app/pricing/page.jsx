"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCardGrid from "../components/PricingCardGrid";
import SignificaButton from "../components/SignificaButton";
import FaqAccordion from "../components/FaqAccordion";
import { CheckIcon } from "../components/Icons";

export default function PricingPage() {
  const carePlans = [
    {
      name: "Starter Care",
      price: "₹1,999 / mo ($25)",
      desc: "For small businesses that need reliable uptime, monthly backups, and minor text/image updates.",
      features: [
        "Monthly security & dependency updates",
        "Automated weekly cloud backups",
        "Up to 2 hours of content & image edits",
        "Uptime & domain renewal monitoring",
        "Direct WhatsApp technical support"
      ]
    },
    {
      name: "Growth Care & Optimization",
      price: "₹3,999 / mo ($50)",
      desc: "For active clinics and service businesses that want monthly conversion tuning and pipeline support.",
      features: [
        "Everything in Starter Care",
        "Up to 5 hours of design & workflow adjustments",
        "Monthly enquiry volume & conversion report",
        "Form & CRM integration health audits",
        "Priority 4-hour response turnaround",
        "A/B headline & CTA experiments"
      ]
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Page Hero */}
        <section className="pt-12 sm:pt-20 pb-16">
          <div className="container-significa">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-offset border border-border text-xs font-semibold uppercase tracking-wider text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span>Transparent Scoping & Costs</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
                  Productised pricing. <br />
                  <span className="text-foreground-secondary">Clear starting points.</span>
                </h1>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base text-foreground-secondary leading-relaxed">
                  Every package is scoped with transparent deliverables. Third-party tool costs, hosting choices, and delivery timelines are established in writing before any work begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-12">
          <div className="container-significa">
            <PricingCardGrid />
          </div>
        </section>

        {/* Website Care & Maintenance Retainers */}
        <section className="py-20 bg-background-panel border-t border-border">
          <div className="container-significa">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                Optional Ongoing Peace of Mind
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Website Care & Growth Retainers
              </h2>
              <p className="text-sm text-foreground-secondary mt-3">
                Completely optional. You always own your source code and accounts with zero lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {carePlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border bg-background flex flex-col justify-between shadow-xs hover:border-brand/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-background-offset border border-border text-foreground">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs text-foreground-secondary mb-6 leading-relaxed">
                      {plan.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground">
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-brand/20 text-foreground flex items-center justify-center flex-shrink-0">
                            <CheckIcon className="w-2.5 h-2.5" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <SignificaButton href="/contact" variant="secondary" size="md" arrow className="w-full">
                      Add {plan.name}
                    </SignificaButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-20 border-t border-border">
          <div className="container-significa">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase font-semibold tracking-wider text-brand mb-2">
                  Pricing Clarity
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground sticky top-24 leading-tight">
                  Everything you need to know about our billing & scopes.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <FaqAccordion
                  items={[
                    {
                      q: "How does payment scheduling work?",
                      a: "For project packages, we work on a straightforward 50% upfront deposit to initiate planning, design, and architecture, with the remaining 50% due upon staging review and before live DNS deployment."
                    },
                    {
                      q: "Are third-party tool fees included?",
                      a: "Third-party software (such as custom domain registration at ~$12/year, hosting, or specialized SMS gateways) are maintained on accounts owned directly by you. We specify every estimated monthly cost in your written proposal."
                    },
                    {
                      q: "What if I need custom features outside these packages?",
                      a: "We regularly build custom configurations. Request a free audit or message us, and we will prepare a modular breakdown tailored to your exact operational requirements."
                    },
                    {
                      q: "Can I upgrade my package later?",
                      a: "Yes. You can start with Digital Launch and upgrade to Lead Growth or AI Business Starter at any point. Our systems are built modularly so new capabilities plug in seamlessly."
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
