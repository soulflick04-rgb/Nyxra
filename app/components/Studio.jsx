"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MotionLayer } from "./Motion";
import ModernHero from "./ModernHero";
import { usePathname } from "next/navigation";

const sectors = {
  clinic: {
    label: "Clinic",
    demoUrl: "https://clinicwebsitedemo22.netlify.app/",
    preview: "/demos/clinic-preview.jpg",
    previewAlt:
      "CarePlus clinic website demo showing its homepage, doctors and appointment options",
    name: "THE CARE ROOM",
    title: "Good care starts\nwith a conversation.",
    category: "A neighbourhood clinic",
    action: "Request a callback",
    tags: ["Services", "Clinic hours", "Find us"],
    note: "Help patients find services, timings and directions.",
    color: "clinic",
  },
  gym: {
    label: "Gym",
    demoUrl: "https://elevate-functional-fitness.lovable.app/",
    preview: "/demos/gym-preview.jpg",
    previewAlt:
      "IronForge gym website demo showing its strength training homepage and class links",
    name: "FORM / FITNESS",
    title: "Make room\nfor stronger days.",
    category: "Movement for every day",
    action: "Ask about a trial",
    tags: ["Training", "Memberships", "Our space"],
    note: "Put your programmes, facilities and trial enquiries in one place.",
    color: "gym",
  },
  coaching: {
    label: "Coaching",
    demoUrl: "https://scholarspace-india-learning-hub.lovable.app/",
    preview: "/demos/coaching-preview.jpg",
    previewAlt:
      "Vidya Sadan coaching website demo showing its courses and admission enquiry options",
    name: "NEXT CHAPTER",
    title: "Big ambitions.\nA clear next step.",
    category: "A place to keep learning",
    action: "Enquire about a course",
    tags: ["Courses", "Batches", "Admissions"],
    note: "Give students and parents a clear view of courses and admissions.",
    color: "coaching",
  },
};
const packages = [
  {
    name: "Digital Launch",
    price: "10,000",
    desc: "A considered first home for your business online.",
    features: [
      "Responsive business website",
      "Contact form & WhatsApp link",
      "Google Maps & basic SEO",
      "Two structured revision rounds",
    ],
  },
  {
    name: "Lead Growth System",
    price: "15,000",
    desc: "Your website, with a clearer path from enquiry to follow-up.",
    features: [
      "Everything in Digital Launch",
      "Qualification enquiry form",
      "Lead tracker / basic CRM connection",
      "Scoped callback & notification workflows",
    ],
  },
  {
    name: "AI Business Starter",
    price: "20,000",
    desc: "Practical tools for content and everyday customer replies.",
    features: [
      "Everything in Lead Growth",
      "Content calendar & caption bank",
      "Templates, prompts & FAQ responses",
      "30 days of basic support",
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <Link className="wordmark" href="/" aria-label="Nyxra home">
        <img
          className="brand-mark"
          src="/nyxra-mark.svg"
          width="36"
          height="36"
          alt=""
        />
        nyxra
      </Link>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="navigation"
        className={open ? "nav is-open" : "nav"}
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            document.querySelector(".menu-button")?.focus();
          }
        }}
      >
        {[
          ["/services", "What we do"],
          ["/portfolio", "Concepts"],
          ["/pricing", "Pricing"],
          ["/about", "Our approach"],
        ].map(([href, text]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {text}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="wordmark" href="/" aria-label="Nyxra home">
          <img
            className="brand-mark"
            src="/nyxra-mark.svg"
            width="36"
            height="36"
            alt=""
          />
          nyxra
        </Link>
        <p>
          Built around your business.
          <br />
          Made for the people who find it.
        </p>
        <a href="mailto:supportnyxra@gmail.com">supportnyxra@gmail.com ↗</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nyxra Team</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <span>Clear scope. Thoughtful work.</span>
      </div>
    </footer>
  );
}
export function Frame({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <MotionLayer />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
export function Button({
  href = "/contact",
  children = "Let’s build your website",
  secondary = false,
}) {
  return (
    <Link className={secondary ? "button secondary" : "button"} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function Intro({ eyebrow, title, children }) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p className="intro-copy">{children}</p>}
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta wrap">
      <div>
        <p className="eyebrow">Your next chapter, online.</p>
        <h2>
          Let’s make something
          <br />
          <em>that feels like you.</em>
        </h2>
      </div>
      <Button href="/contact">Tell us about your business</Button>
    </section>
  );
}

export function Concept({ interactive = false, initial = "clinic" }) {
  const [sector, setSector] = useState(initial);
  const [requested, setRequested] = useState(false);
  const s = sectors[sector];
  return (
    <div className="concept-unit">
      <div
        className="concept-tabs"
        role="group"
        aria-label="Choose a business concept"
      >
        {Object.entries(sectors).map(([key, v]) => (
          <button
            key={key}
            aria-pressed={key === sector}
            onClick={() => {
              setSector(key);
              setRequested(false);
            }}
          >
            {v.label}
          </button>
        ))}
      </div>
      {s.demoUrl ? (
        <a
          className="concept-browser live-demo-preview"
          href={s.demoUrl}
          aria-label={`Open the live ${s.label.toLowerCase()} website demo`}
        >
          <div className="browser-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>LIVE WEBSITE DEMO / NOT A CLIENT PROJECT</span>
            <span aria-hidden="true">↗</span>
          </div>
          <img
            className="live-demo-image"
            src={s.preview}
            width="1440"
            height="800"
            alt={s.previewAlt}
            loading="lazy"
            decoding="async"
          />
          <div className="live-demo-footer">
            <span>Explore the {s.label.toLowerCase()} website</span>
            <span>
              Open live demo <b aria-hidden="true">↗</b>
            </span>
          </div>
        </a>
      ) : (
        <div className={`concept-browser ${s.color}`}>
          <div className="browser-bar">
            <span aria-hidden="true">● ● ●</span>
            <span>DESIGN CONCEPT / NOT A CLIENT PROJECT</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="mock-nav">
            <b>{s.name}</b>
            <span aria-hidden="true">☰</span>
          </div>
          <div className="mock-body">
            <div>
              <p className="mock-category">{s.category}</p>
              <h3>{s.title}</h3>
              {interactive ? (
                <button className="mock-cta" onClick={() => setRequested(true)}>
                  {s.action} ↗
                </button>
              ) : (
                <span className="mock-cta">{s.action} ↗</span>
              )}
            </div>
            <div className="concept-art" aria-hidden="true">
              <div className="art-ring" />
              <div className="art-disc" />
              <span>
                {sector === "clinic" ? "+" : sector === "gym" ? "↑" : "a"}
              </span>
            </div>
          </div>
          <div className="mock-tags">
            {s.tags.map((t) => (
              <span key={t}>{t} ↗</span>
            ))}
          </div>
          {interactive && (
            <p className="demo-feedback" role="status">
              {requested
                ? "Demo only: this is where an enquiry would begin. No request was sent or booking made."
                : "Try the enquiry button. This concept does not collect or send information."}
            </p>
          )}
        </div>
      )}
      <p className="concept-caption">
        <span>{s.note}</span>
        <span>01 / 03 DIRECTIONS</span>
      </p>
    </div>
  );
}

export function Pricing({ full = false }) {
  return (
    <section className="section wrap" id="packages">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A clear starting point</p>
          <h2>
            Good work.
            <br />
            <em>Clearly scoped.</em>
          </h2>
        </div>
        <p>
          Start with what your business needs.
          <br />
          Add more when it makes sense.
        </p>
      </div>
      <div className="pricing-grid">
        {packages.map((p, i) => (
          <article
            className={`price-card ${i === 0 ? "featured" : ""}`}
            key={p.name}
          >
            <div className="price-top">
              <span className="eyebrow">
                0{i + 1} /{" "}
                {i === 0
                  ? "THE ESSENTIALS"
                  : i === 1
                    ? "THE NEXT STEP"
                    : "EVERYDAY TOOLS"}
              </span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="price">
              <span>Starting at</span>₹{p.price}
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button
              href={`/contact?package=${encodeURIComponent(p.name)}`}
              secondary={i !== 0}
            >
              Discuss this package
            </Button>
          </article>
        ))}
      </div>
      <p className="fine-print">
        Starting prices are not final quotations. Scope, taxes, delivery,
        payment milestones, hosting, domains and third-party costs are confirmed
        in a written proposal. Integrations depend on feasibility and the agreed
        tools.
      </p>
      {full && (
        <div className="scope-note">
          <h3>Before work begins, we agree on the details.</h3>
          <p>
            Pages and features. Your content. Revision boundaries. Payment
            milestones. Delivery dependencies. Ownership, renewals and support.
            You receive a written scope to review before confirming.
          </p>
        </div>
      )}
    </section>
  );
}
export function Process() {
  return (
    <section className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">From conversation to launch</p>
          <h2>
            A simple process.
            <br />
            <em>No guessing.</em>
          </h2>
        </div>
        <p>
          You know what happens next
          <br />
          at every stage.
        </p>
      </div>
      <div className="process-grid">
        {[
          [
            "Talk",
            "Tell us about your business, customers and what your website needs to do.",
          ],
          [
            "Agree",
            "Review the written scope, price and terms. Confirm with acceptance and the agreed advance.",
          ],
          [
            "Build",
            "We design and build around your identity. You review the work within the agreed revision scope.",
          ],
          [
            "Launch",
            "We check the agreed features across screen sizes, then complete the approved delivery and handover.",
          ],
        ].map(([title, text], i) => (
          <article key={title}>
            <span className="process-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section wrap faq">
      <div>
        <p className="eyebrow">A few things you might ask</p>
        <h2>
          Before we
          <br />
          <em>begin.</em>
        </h2>
      </div>
      <div>
        {[
          [
            "We already use Instagram. Do we need a website?",
            "Instagram can help people discover you. A website gives them a dedicated place to understand your services, timings, location and next step. We can discuss whether it fits your business.",
          ],
          [
            "Will it work on phones?",
            "Yes. We design responsive layouts and check the agreed pages and features on mobile, tablet and desktop sizes.",
          ],
          [
            "How long will it take?",
            "The delivery schedule depends on your scope, content and feedback. We agree on it in your proposal before you commit.",
          ],
          [
            "Are these real client projects?",
            "The examples shown here are design concepts, not client work or evidence of business results.",
          ],
          [
            "Can you add bookings or automation?",
            "We can scope practical enquiry and workflow features. Tool compatibility, ongoing costs and exact behaviour are checked before we commit. An appointment request is not a confirmed booking.",
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Home() {
  return (
    <Frame>
      <ModernHero>
        <Concept />
      </ModernHero>
      <div className="ticker" aria-label="Our priorities">
        <span>Small businesses. Big attention to detail.</span>
        <span aria-hidden="true">✳</span>
        <span>Mobile, tablet & desktop.</span>
        <span aria-hidden="true">✳</span>
        <span>Built around your identity.</span>
      </div>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A website with a job to do</p>
            <h2>
              Make the next step
              <br />
              <em>feel obvious.</em>
            </h2>
          </div>
          <Link className="text-link" href="/services">
            Explore our services ↗
          </Link>
        </div>
        <div className="benefit-grid">
          {[
            [
              "01",
              "Look like yourself.",
              "A visual direction that fits your business, with a clear structure and content people can understand.",
            ],
            [
              "02",
              "Answer the essentials.",
              "Services, location, timings and useful details in one place, ready when a customer looks you up.",
            ],
            [
              "03",
              "Start a conversation.",
              "Give visitors a clear way to enquire. Add a contact form, WhatsApp link or callback request to suit your scope.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span className="eyebrow">{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="dark-section">
        <div className="wrap concept-section">
          <div>
            <p className="eyebrow">
              Different businesses. Different personalities.
            </p>
            <h2>
              No one-size-
              <br />
              fits-all
              <br />
              <em>first impressions.</em>
            </h2>
            <p>
              A calm clinic. An energetic gym. A welcoming learning space. Your
              website should feel like your business.
            </p>
            <Button href="/portfolio">Explore the concepts</Button>
            <p className="fine-print">
              Illustrative design concepts. Not client projects.
            </p>
          </div>
          <div className="identity-poster" aria-hidden="true">
            <span>NYXRA / DESIGN STUDIES</span>
            <div>
              care<span>+</span>
            </div>
            <div>
              MOVE<span>↗</span>
            </div>
            <div>
              learn<span>_</span>
            </div>
            <span>THREE BUSINESSES. THREE DIFFERENT FEELINGS.</span>
          </div>
        </div>
      </section>
      <Pricing />
      <Process />
      <FAQ />
      <CTA />
    </Frame>
  );
}

export function Services() {
  return (
    <Frame>
      <Intro
        eyebrow="What we do"
        title={
          <>
            Your business,
            <br />
            <em>translated online.</em>
          </>
        }
      >
        Start with a distinctive website. Add practical enquiry tools when your
        business needs them.
      </Intro>
      <section className="wrap service-list">
        {[
          [
            "01",
            "Business websites",
            "A clear, responsive home for your business, designed around your identity and customers.",
            "Service pages · location & timings · contact options · basic SEO",
          ],
          [
            "02",
            "Enquiry & lead systems",
            "Help visitors share what they need, and give your team an organised place to follow up.",
            "Enquiry forms · qualification questions · lead tracker / CRM",
          ],
          [
            "03",
            "Callback & appointment workflows",
            "Make requests easier to collect and review. We define what happens after an enquiry before building it.",
            "Callback requests · appointment enquiries · scoped notifications",
          ],
          [
            "04",
            "AI content starter tools",
            "Reusable content and response resources your team can work with, without unnecessary complexity.",
            "Content calendars · caption banks · prompts · FAQ responses",
          ],
        ].map(([n, t, d, f]) => (
          <article key={n}>
            <span className="eyebrow">{n}</span>
            <h2>{t}</h2>
            <div>
              <p>{d}</p>
              <p className="fine-print">{f}</p>
            </div>
          </article>
        ))}
      </section>
      <Process />
      <CTA />
    </Frame>
  );
}
export function Portfolio() {
  return (
    <Frame>
      <Intro
        eyebrow="The concept studio"
        title={
          <>
            Different businesses.
            <br />
            <em>Distinct directions.</em>
          </>
        }
      >
        Explore three illustrative website directions. These are concepts, not
        client projects, testimonials or claimed results.
      </Intro>
      <section className="wrap portfolio-stage">
        <Concept interactive />
        <div className="scope-note">
          <h3>Imagine your business here.</h3>
          <p>
            These studies show how layout, language and visual character can
            change for different businesses. Your actual project will have its
            own agreed design and features.
          </p>
        </div>
      </section>
      <CTA />
    </Frame>
  );
}
export function About() {
  return (
    <Frame>
      <Intro
        eyebrow="Meet Nyxra"
        title={
          <>
            Small business.
            <br />
            <em>Thoughtful by design.</em>
          </>
        }
      >
        We create websites and practical digital tools for businesses with real
        customers, real questions and real work to do.
      </Intro>
      <section className="wrap about-grid">
        <div className="about-mark" aria-hidden="true">
          n<span>✳</span>
        </div>
        <div>
          <p className="eyebrow">Nyxra Team</p>
          <h2>
            Your business comes first.
            <br />
            The tools come second.
          </h2>
          <p>
            We use AI-assisted tools as part of our workflow. The focus stays on
            clear content, a distinct visual identity and features that serve
            your business.
          </p>
          <p>
            We scope the work before committing, review it with you and test the
            agreed experience before handover. We do not promise a particular
            number of enquiries or business results.
          </p>
          <ul className="principles">
            <li>Clear scope and transparent starting prices.</li>
            <li>Design that reflects your business.</li>
            <li>Responsive layouts and practical testing.</li>
            <li>Client-owned accounts where practical.</li>
            <li>Honest demonstrations and realistic commitments.</li>
          </ul>
        </div>
      </section>
      <CTA />
    </Frame>
  );
}

export function Contact() {
  const [state, setState] = useState("idle");
  const [chosenPackage, setChosenPackage] = useState("Not sure yet");
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("package");
    if (packages.some((p) => p.name === selected)) setChosenPackage(selected);
  }, []);
  async function submit(e) {
    e.preventDefault();
    if (state === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website_check) return;
    setState("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/supportnyxra@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            ...data,
            _subject: `Nyxra website enquiry: ${data.business}`,
            _template: "table",
          }),
        },
      );
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      )
        throw new Error("Delivery not acknowledged");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    } finally {
      clearTimeout(timer);
    }
  }
  return (
    <Frame>
      <Intro
        eyebrow="Start a conversation"
        title={
          <>
            Tell us what
            <br />
            <em>you’re building.</em>
          </>
        }
      >
        A new website, a better one, or a simpler way to handle enquiries. Let’s
        work out what fits.
      </Intro>
      <section className="wrap contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <h2>A little about your business.</h2>
          <div className="form-grid">
            <label>
              Your name
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              Business name
              <input
                name="business"
                autoComplete="organization"
                required
                maxLength={150}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
            <label>
              Phone / WhatsApp <span>(optional)</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={30}
              />
            </label>
            <label>
              Business type
              <select
                aria-label="Business type"
                name="category"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your business
                </option>
                <option>Clinic</option>
                <option>Gym / fitness</option>
                <option>Tuition / coaching</option>
                <option>Other local business</option>
              </select>
            </label>
            <label>
              Interested in
              <select
                aria-label="Interested in"
                name="package"
                value={chosenPackage}
                onChange={(e) => setChosenPackage(e.target.value)}
              >
                <option>Not sure yet</option>
                {packages.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            What would you like your website to do?
            <textarea
              name="requirements"
              rows={4}
              required
              minLength={10}
              maxLength={3000}
              placeholder="Tell us about your services and what customers need to find or do."
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              Leave this empty
              <input name="website_check" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <label className="consent">
            <input type="checkbox" required name="consent" value="Agreed" />
            <span>
              I agree to be contacted about my enquiry. Read the{" "}
              <Link href="/privacy">privacy notice</Link>.
            </span>
          </label>
          <button
            className="button"
            disabled={state === "sending"}
            type="submit"
          >
            {state === "sending" ? "Sending…" : "Send my enquiry"}
            <span aria-hidden="true">↗</span>
          </button>
          <div aria-live="polite" aria-atomic="true">
            {state === "sent" && (
              <p className="form-status success">
                Your enquiry was accepted by our form service. Nyxra Team will
                review it. This is not an order or booking confirmation.
              </p>
            )}
            {state === "error" && (
              <p className="form-status error" role="alert">
                We couldn’t confirm delivery. Your details are still here.
                Please try again or email{" "}
                <a href="mailto:supportnyxra@gmail.com">
                  supportnyxra@gmail.com
                </a>
                .
              </p>
            )}
          </div>
          <p className="fine-print">
            Please don’t include patient records, passwords or payment details.
          </p>
        </form>
        <aside className="contact-aside">
          <span className="large-star" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">A conversation, not a commitment.</p>
          <h2>
            Let’s find
            <br />
            the right fit.
          </h2>
          <p>
            Nyxra Team reviews your requirements and discusses the scope with
            you. Price, timing and payment terms are agreed in writing before
            work starts.
          </p>
          <a href="mailto:supportnyxra@gmail.com">
            Prefer email?
            <br />
            <b>supportnyxra@gmail.com ↗</b>
          </a>
          <p className="fine-print">
            No fixed delivery time or business result is promised by submitting
            this form.
          </p>
        </aside>
      </section>
    </Frame>
  );
}
export function Legal({ privacy = false }) {
  return (
    <Frame>
      <Intro
        eyebrow="The details"
        title={privacy ? "Privacy notice" : "Terms of service"}
      >
        Project-specific scope, costs and services are confirmed in a written
        proposal.
      </Intro>
      <section className="wrap legal">
        {(privacy
          ? [
              [
                "Information you share",
                "Nyxra may collect the name, business information, contact details and project requirements you provide through this form, email or project discussions. We use them to respond to your enquiry and discuss your project.",
              ],
              [
                "Form processing",
                "Our enquiry form sends your information through FormSubmit for delivery to the Nyxra Team inbox. Please do not include sensitive records, passwords or payment details. The interactive design concepts do not send any information.",
              ],
              [
                "Questions about your information",
                "Email supportnyxra@gmail.com if you have questions about information you have shared or want to request a correction or deletion.",
              ],
              [
                "Client accounts",
                "Where practical, we recommend client-owned accounts for domains, hosting and business tools so you retain access.",
              ],
            ]
          : [
              [
                "Services and scope",
                "Nyxra provides websites, lead-capture systems and scoped digital workflows for small businesses. Exact deliverables, third-party costs, taxes, dates, revisions and support are confirmed in a written proposal.",
              ],
              [
                "Prices and confirmation",
                "Published prices are starting points, not final quotations. A project is confirmed when the agreed written scope is accepted and Nyxra Team verifies receipt of the agreed advance payment.",
              ],
              [
                "Delivery and ownership",
                "Delivery depends on the agreed scope, content and feedback. Ownership, account access, payment milestones and handover are set out in the proposal. Client-owned tool accounts are recommended where practical.",
              ],
              [
                "Demonstrations",
                "Concepts on this site are illustrative and are not client projects or claims of business results. Demo interactions do not create real appointments or enquiries.",
              ],
            ]
        ).map(([t, p]) => (
          <article key={t}>
            <h2>{t}</h2>
            <p>{p}</p>
          </article>
        ))}
      </section>
    </Frame>
  );
}
