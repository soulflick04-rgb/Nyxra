"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Bot,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  Gauge,
  Globe2,
  LayoutDashboard,
  Mail,
  Menu,
  MousePointer2,
  PanelsTopLeft,
  Route,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";

const siteConfig = {
  email: "supportnyxra@gmail.com",
  logoSrc: process.env.NEXT_PUBLIC_LOGO_SRC || "logo.png",
  founderImageSrc: process.env.NEXT_PUBLIC_FOUNDER_IMAGE_SRC || "founder.jpg",
  inquiryFormUrl: process.env.NEXT_PUBLIC_INQUIRY_FORM_URL || "",
  socialLinks: []
};

const auditFormEndpoint =
  "https://script.google.com/macros/s/AKfycby9rUlv7CSat0B4j5TLU1TdSChYgMGZSq8vccMM9KT-8Ms25Mh_qbjParGswH84K8nmaw/exec";

const sectionIds = {
  home: "home",
  services: "services",
  solutions: "solutions",
  pricing: "pricing",
  demos: "demo-systems",
  process: "process",
  about: "about",
  contact: "contact"
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo Systems", href: "#demo-systems" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const problems = [
  "No professional website",
  "Enquiries scattered across calls and messages",
  "No appointment or enquiry system",
  "Leads are not followed up properly",
  "Repetitive tasks consume the owner's time"
];

const services = [
  {
    title: "Websites and Landing Pages",
    description:
      "Fast, mobile-first websites designed to explain the business clearly and convert visitors into enquiries.",
    icon: PanelsTopLeft,
    includes: [
      "Business website",
      "Landing pages",
      "Mobile-responsive design",
      "Contact forms",
      "WhatsApp enquiry",
      "Google Maps",
      "Basic SEO",
      "Analytics setup",
      "Domain and deployment support"
    ]
  },
  {
    title: "Lead Capture Systems",
    description:
      "Turn website visitors and social media interest into organised enquiries that are easier to follow up.",
    icon: MousePointer2,
    includes: [
      "Custom enquiry forms",
      "Google Sheets or CRM connection",
      "Lead notifications",
      "Lead status tracking",
      "Follow-up dates",
      "Basic pipeline"
    ]
  },
  {
    title: "CRM and Lead Management Setup",
    description:
      "Keep prospect details, follow-up dates, notes and sales status in one organised place.",
    icon: LayoutDashboard,
    includes: [
      "Lead stages",
      "Contact information",
      "Priority",
      "Notes",
      "Next action",
      "Follow-up date",
      "Simple reporting dashboard"
    ]
  },
  {
    title: "Appointment and Enquiry Systems",
    description:
      "Make it easier for customers to request an appointment, consultation, callback or service booking.",
    icon: CalendarCheck,
    includes: [
      "Booking or request form",
      "Calendar connection",
      "Confirmation flow",
      "Lead storage",
      "Staff notification",
      "Follow-up process"
    ]
  },
  {
    title: "AI Content Starter Systems",
    description:
      "Give businesses a reusable system for creating consistent content and responding to common customer questions.",
    icon: Bot,
    includes: [
      "30-day content calendar",
      "Caption bank",
      "Branded template plan",
      "Business prompt library",
      "FAQs",
      "Review-response templates",
      "Customer reply templates"
    ]
  }
];

const solutions = [
  {
    business: "Clinics and diagnostic centres",
    problem: "Appointment requests and reports often arrive through scattered channels.",
    system: "Clinic website, appointment request flow, lead tracker and staff notifications.",
    outcome: "Patients know what to do next and staff can follow up with less confusion."
  },
  {
    business: "Coaching institutes",
    problem: "Student enquiries need course context, counselling status and admission follow-up.",
    system: "Course landing pages, student enquiry form, course selection and admission pipeline.",
    outcome: "Every enquiry becomes easier to qualify, track and convert into a conversation."
  },
  {
    business: "Consultants and freelancers",
    problem: "Qualified leads need a clear offer, booking request and proposal process.",
    system: "Personal-brand website, consultation request, lead qualification and proposal stage.",
    outcome: "Prospects understand the service and you spend time on stronger conversations."
  },
  {
    business: "Salons, gyms and wellness businesses",
    problem: "Customers want quick answers, service details and easy appointment requests.",
    system: "Service landing pages, booking request, customer reply templates and follow-up reminders.",
    outcome: "More enquiries are captured with a cleaner path from interest to appointment."
  },
  {
    business: "Local service businesses",
    problem: "Owners often lose enquiries because follow-up depends on memory and message threads.",
    system: "Local website, enquiry form, Google Maps, WhatsApp path and simple lead tracker.",
    outcome: "Leads are organised by status, priority and next action."
  },
  {
    business: "Early-stage startups",
    problem: "Founders need a credible first website and practical systems before scaling tools.",
    system: "Landing page, contact flow, analytics, CRM starter and reusable content prompts.",
    outcome: "The business looks credible and has a lightweight operating system from day one."
  }
];

const pricingPlans = [
  {
    name: "Digital Launch",
    price: "₹10,000",
    description: "A professional online presence for small businesses that need clarity and trust.",
    cta: "Launch My Business Online",
    features: [
      "Professional business website",
      "Mobile-responsive design",
      "Contact form",
      "WhatsApp button",
      "Google Maps",
      "Basic SEO",
      "Hosting deployment support",
      "Two structured revision rounds"
    ]
  },
  {
    name: "Lead Growth System",
    price: "₹15,000",
    description: "The practical starting point for websites plus organised enquiry management.",
    cta: "Build My Lead System",
    popular: true,
    features: [
      "Everything in Digital Launch",
      "Advanced enquiry form",
      "Lead tracker or basic CRM",
      "Appointment setup",
      "Email notification workflow",
      "Follow-up templates",
      "Basic analytics"
    ]
  },
  {
    name: "AI Business Starter",
    price: "₹20,000",
    description: "A stronger system for content, customer replies and simple business automation.",
    cta: "Request a Custom Plan",
    features: [
      "Everything in Lead Growth",
      "30-day content calendar",
      "Branded content templates",
      "AI prompt library",
      "FAQ and customer-response system",
      "Proposal and quotation templates",
      "Two simple business automations",
      "30 days of basic support"
    ]
  }
];

const demoSystems = [
  {
    title: "Clinic Appointment and Lead System",
    business: "Clinic or diagnostic centre",
    problem: "Appointment requests and follow-ups are scattered across calls and messages.",
    components: [
      "Clinic homepage",
      "Appointment request",
      "Lead entry",
      "Staff notification",
      "Follow-up status"
    ],
    strip: ["Website", "Appointment Form", "Lead Record", "Staff Alert", "Follow-up"],
    workflow: "Visitor requests an appointment, the lead is stored, staff are notified and follow-up status is tracked.",
    benefit: "The clinic gets a clearer process without needing a complex enterprise tool."
  },
  {
    title: "Coaching Admission Enquiry System",
    business: "Coaching institute",
    problem: "Student interest is hard to qualify when course details and follow-ups are separate.",
    components: [
      "Course landing page",
      "Student enquiry",
      "Course selection",
      "Counselling follow-up",
      "Admission pipeline"
    ],
    strip: ["Course Page", "Student Enquiry", "Counselling", "Pipeline", "Admission Status"],
    workflow: "Student chooses a course, submits details, enters a pipeline and receives counselling follow-up.",
    benefit: "Admissions conversations become easier to prioritise and track."
  },
  {
    title: "Consultant Booking System",
    business: "Consultant or freelancer",
    problem: "Unclear enquiries waste time before a useful consultation can begin.",
    components: [
      "Personal-brand landing page",
      "Service selection",
      "Consultation request",
      "Qualified lead information",
      "Proposal stage"
    ],
    strip: ["Service Page", "Consultation Form", "Qualification", "Meeting", "Proposal"],
    workflow: "Prospect selects a service, shares context, books a consultation and moves into a proposal stage.",
    benefit: "Better enquiry quality and a cleaner path from interest to proposal."
  }
];

const processSteps = [
  {
    title: "Free Business Audit",
    text: "We review your current website, enquiry process and repetitive tasks to find the simplest useful improvements."
  },
  {
    title: "Simple Project Plan",
    text: "You receive a clear scope with recommended pages, forms, tools, timeline and any third-party costs."
  },
  {
    title: "Build and Test",
    text: "Nyxra builds the website and systems, then tests forms, mobile layouts, notifications and key user flows."
  },
  {
    title: "Launch and Handover",
    text: "The project is deployed with essential guidance so you understand how to use and manage the system."
  },
  {
    title: "Support and Improvement",
    text: "After launch, we can help improve content, forms, tracking and automation as your business process becomes clearer."
  }
];

const whyNyxra = [
  "Practical systems instead of unnecessary complexity",
  "Designed for small businesses",
  "Transparent scope and pricing",
  "Mobile-first and lightweight",
  "Client-owned accounts wherever practical",
  "Founder-led communication",
  "Clear third-party software costs"
];

const faqs = [
  {
    question: "What exactly does Nyxra build?",
    answer:
      "Nyxra builds websites, landing pages, lead-capture systems, simple CRM trackers, appointment request workflows and reusable AI-assisted content systems for small businesses."
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. The project is planned in plain language, and the handover explains the important parts you need to manage."
  },
  {
    question: "How long does a project take?",
    answer:
      "Most small projects can be planned and built in days to a few weeks depending on scope, content readiness and integrations."
  },
  {
    question: "Are hosting and paid tools included?",
    answer:
      "Domains, hosting, paid APIs and third-party subscriptions are charged separately when required and are confirmed before work begins."
  },
  {
    question: "Do you guarantee sales?",
    answer:
      "No. Nyxra builds professional systems that improve clarity, enquiry capture and follow-up, but sales depend on offer, market, pricing, traffic and execution."
  },
  {
    question: "Will I own my website and data?",
    answer:
      "Where practical, client-owned accounts are used for hosting, domain, forms, analytics and connected business tools."
  },
  {
    question: "How many revisions are included?",
    answer:
      "The Digital Launch package includes two structured revision rounds. Larger scopes can include additional revision rules in the proposal."
  },
  {
    question: "What happens after launch?",
    answer:
      "You can manage the system yourself or choose a care plan for maintenance, small updates and improvement support."
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Yes. Nyxra can audit an existing website and recommend design, content, enquiry-flow and tracking improvements."
  },
  {
    question: "Can I begin with only a website and add automation later?",
    answer:
      "Yes. Many businesses start with a strong website and add lead tracking, appointment workflows or AI content systems later."
  }
];

const businessCategories = [
  "Clinic or diagnostics",
  "Coaching or education",
  "Consultant or freelancer",
  "Salon, gym or wellness",
  "Local service business",
  "Startup",
  "Other"
];

const budgetRanges = [
  "₹10,000 - ₹15,000",
  "₹15,000 - ₹20,000",
  "₹20,000 - ₹35,000",
  "₹35,000+",
  "Not sure yet"
];

const contactMethods = ["Email", "WhatsApp", "Phone call"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function getAuditHref() {
  return siteConfig.inquiryFormUrl || "#business-audit";
}

function getExternalProps(href) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -70px 0px" }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BrandLogo({ compact = false }) {
  const [imageReady, setImageReady] = useState(true);

  return (
    <span className="flex items-center gap-3">
      {imageReady ? (
        <img
          src={siteConfig.logoSrc}
          alt="Nyxra logo"
          width={42}
          height={42}
          className="h-10 w-10 rounded-lg object-contain"
          onError={() => setImageReady(false)}
        />
      ) : (
        <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-100">
          N
        </span>
      )}
      {!compact && (
        <span className="text-base font-semibold tracking-tight text-white">
          Nyxra
        </span>
      )}
    </span>
  );
}

function AuditButton({ children, className = "", variant = "primary", onClick }) {
  const href = getAuditHref();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200";
  const styles =
    variant === "secondary"
      ? "border border-cyan-200/20 bg-cyan-200/[0.06] text-cyan-50 hover:border-cyan-200/40 hover:bg-cyan-200/[0.1]"
      : "bg-gradient-to-r from-teal-300 to-cyan-300 text-slate-950 shadow-[0_16px_46px_rgba(34,211,238,0.24)] hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(34,211,238,0.34)]";

  return (
    <a href={href} {...getExternalProps(href)} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-cyan-200/10 bg-[#03111f]/86 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-[#03111f]/48 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a
          href="#home"
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          onClick={() => setOpen(false)}
        >
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-cyan-200/10 bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-cyan-50/72 transition hover:bg-cyan-200/10 hover:text-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <AuditButton>Free Business Audit</AuditButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-200/12 bg-cyan-200/[0.06] text-white transition hover:bg-cyan-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-cyan-200/10 bg-[#03111f]/96 px-5 pb-5 pt-2 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-cyan-50/82 transition hover:bg-cyan-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
              >
                {item.label}
              </a>
            ))}
            <AuditButton className="mt-3 w-full" onClick={() => setOpen(false)}>
              Free Business Audit
            </AuditButton>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/70">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-cyan-50/66 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

function HeroSystemVisual() {
  const items = [
    { label: "Website", icon: Globe2, text: "Clear offer and trust" },
    { label: "Enquiry form", icon: FileText, text: "Customer details captured" },
    { label: "Lead tracker", icon: ClipboardList, text: "Status and next action" },
    { label: "Notification", icon: BellRing, text: "Team knows what changed" },
    { label: "Appointment", icon: CalendarCheck, text: "Request or consultation" },
    { label: "Follow-up", icon: Route, text: "Simple process to continue" }
  ];

  return (
    <Reveal delay={0.12}>
      <div className="relative mx-auto max-w-xl rounded-2xl border border-cyan-200/14 bg-white/[0.045] p-4 shadow-[0_24px_120px_rgba(34,211,238,0.13)] backdrop-blur-xl lg:max-w-none">
        <div className="absolute -inset-px -z-10 rounded-2xl bg-[linear-gradient(135deg,rgba(45,212,191,0.4),rgba(34,211,238,0.05),rgba(125,211,252,0.22))] opacity-50 blur-xl" />
        <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-200" />
          <span className="ml-2 h-4 flex-1 rounded-full bg-white/8" />
        </div>
        <div className="grid gap-3 pt-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`rounded-xl border border-cyan-200/12 bg-[#061827]/80 p-4 ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300/10 text-cyan-100">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-cyan-50/58">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

function Hero() {
  return (
    <section id={sectionIds.home} className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(45,212,191,0.16),transparent_28%),linear-gradient(135deg,#020812_0%,#03172b_45%,#020611_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-soft opacity-70" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/14 bg-cyan-200/[0.055] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
              <Sparkles size={15} aria-hidden="true" />
              AI-Powered Digital Growth & Automation Studio
            </div>
            <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-6xl 2xl:text-7xl">
              Grow Your Business with Better Websites and Smarter Systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50/72">
              Nyxra builds professional websites, lead-capture systems and simple AI-powered automations that help businesses win more enquiries, follow up faster and reduce repetitive work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AuditButton>Get a Free Business Audit</AuditButton>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/18 bg-white/[0.035] px-5 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/35 hover:bg-cyan-200/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                Explore Our Solutions
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-cyan-100/70">
              Clear scope. Practical systems. No unnecessary complexity.
            </p>
          </div>
        </Reveal>
        <HeroSystemVisual />
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Problems Nyxra Solves"
          title="Your business may be losing customers before the conversation even starts."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {problems.map((problem, index) => (
            <Reveal key={problem} delay={index * 0.04}>
              <div className="h-full rounded-xl border border-cyan-200/12 bg-white/[0.035] p-5">
                <span className="mb-7 grid h-10 w-10 place-items-center rounded-lg border border-cyan-200/16 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                  {index + 1}
                </span>
                <p className="font-semibold leading-6 text-white">{problem}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cyan-200/14 bg-cyan-200/[0.055] px-6 py-5 text-center text-lg font-semibold text-cyan-50">
            Nyxra connects these pieces into one simple digital system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <Reveal delay={index * 0.04} className="h-full">
      <article className="group h-full rounded-2xl border border-cyan-200/12 bg-[#061827]/72 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/28 hover:bg-[#082033]">
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-cyan-200/16 bg-cyan-300/10 text-cyan-100">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="mt-3 leading-7 text-cyan-50/64">{service.description}</p>
        <ul className="mt-6 grid gap-3">
          {service.includes.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-5 text-cyan-50/72">
              <Check className="mt-0.5 shrink-0 text-teal-200" size={16} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function Services() {
  return (
    <section id={sectionIds.services} className="relative px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Core Services"
          title="Practical systems for visibility, enquiries and follow-up."
          description="Start with a strong website, then connect the simple systems that keep business conversations organised."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id={sectionIds.solutions} className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions By Business Type"
          title="Built around the way small businesses actually operate."
          description="Each system is scoped to the business model, enquiry path and practical follow-up process."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal key={solution.business} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-cyan-200/12 bg-white/[0.035] p-6">
                <h3 className="text-xl font-bold text-white">{solution.business}</h3>
                <dl className="mt-6 grid gap-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/60">Common problem</dt>
                    <dd className="mt-2 text-sm leading-6 text-cyan-50/68">{solution.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/60">Recommended system</dt>
                    <dd className="mt-2 text-sm leading-6 text-cyan-50/68">{solution.system}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/60">Practical outcome</dt>
                    <dd className="mt-2 text-sm leading-6 text-cyan-50/68">{solution.outcome}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }) {
  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className={`relative h-full rounded-2xl border p-6 shadow-[0_24px_100px_rgba(0,0,0,0.24)] ${
        plan.popular
          ? "border-cyan-200/40 bg-[linear-gradient(145deg,rgba(34,211,238,0.16),rgba(255,255,255,0.045),rgba(45,212,191,0.12))]"
          : "border-cyan-200/12 bg-white/[0.035]"
      }`}>
        {plan.popular && (
          <span className="mb-5 inline-flex rounded-full border border-cyan-200/28 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
            Most Popular
          </span>
        )}
        <h3 className="text-2xl font-black text-white">{plan.name}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-cyan-50/64">{plan.description}</p>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/58">Starting at</p>
        <p className="mt-2 text-4xl font-black text-white">{plan.price}</p>
        <ul className="mt-7 grid gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-6 text-cyan-50/74">
              <Check className="mt-1 shrink-0 text-teal-200" size={16} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <AuditButton className="mt-8 w-full">{plan.cta}</AuditButton>
      </article>
    </Reveal>
  );
}

function Pricing() {
  return (
    <section id={sectionIds.pricing} className="relative px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Productised packages with clear starting points."
          description="Scope, third-party tools and ongoing costs are confirmed before the project begins."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        <Reveal>
          <div className="mt-8 grid gap-4 rounded-2xl border border-cyan-200/12 bg-[#061827]/72 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold text-white">
                Domains, hosting, paid APIs and third-party subscriptions are charged separately when required.
              </p>
              <p className="mt-2 text-sm text-cyan-50/62">
                Optional care plan: Website and Automation Care - starting from ₹1,999/month.
              </p>
            </div>
            <AuditButton variant="secondary">Discuss Scope</AuditButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DemoSystems() {
  const [openDemo, setOpenDemo] = useState(null);

  return (
    <section id={sectionIds.demos} className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Demo Systems"
          title="Concept systems for common business workflows."
          description="These are concept demos, not paid client projects. They show how Nyxra thinks about practical business systems."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {demoSystems.map((demo, index) => (
            <Reveal key={demo.title} delay={index * 0.05}>
              <article className="h-full overflow-hidden rounded-2xl border border-cyan-200/12 bg-white/[0.035]">
                <div className="border-b border-cyan-200/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(45,212,191,0.08))] p-5">
                  <span className="inline-flex rounded-full border border-cyan-200/24 bg-[#03111f]/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                    Concept Demo
                  </span>
                  <h3 className="mt-5 text-xl font-black text-white">{demo.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-cyan-100/72">{demo.business}</p>
                </div>
                <div className="grid gap-5 p-5">
                  <div className="rounded-2xl border border-cyan-200/12 bg-[#020812]/45 p-3">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">
                      Workflow
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {demo.strip.map((step, stepIndex) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="rounded-full border border-cyan-200/16 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-50">
                            {step}
                          </span>
                          {stepIndex < demo.strip.length - 1 && (
                            <ArrowRight className="text-cyan-200/42" size={14} aria-hidden="true" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">Problem</p>
                    <p className="mt-2 text-sm leading-6 text-cyan-50/68">{demo.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">System components</p>
                    <ul className="mt-3 grid gap-2">
                      {demo.components.map((component) => (
                        <li key={component} className="flex gap-2 text-sm text-cyan-50/72">
                          <Check size={15} className="mt-0.5 shrink-0 text-teal-200" aria-hidden="true" />
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">Workflow</p>
                    <p className="mt-2 text-sm leading-6 text-cyan-50/68">{demo.workflow}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">Business benefit</p>
                    <p className="mt-2 text-sm leading-6 text-cyan-50/68">{demo.benefit}</p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-200/18 bg-white/[0.035] px-5 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/35 hover:bg-cyan-200/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                    onClick={() => setOpenDemo(openDemo === index ? null : index)}
                    aria-expanded={openDemo === index}
                    aria-controls={`demo-workflow-${index}`}
                  >
                    View Workflow
                    <ChevronDown className={`transition ${openDemo === index ? "rotate-180" : ""}`} size={17} aria-hidden="true" />
                  </button>
                  {openDemo === index && (
                    <div
                      id={`demo-workflow-${index}`}
                      className="rounded-2xl border border-cyan-200/12 bg-cyan-300/[0.055] p-4 text-sm leading-6 text-cyan-50/72"
                    >
                      <p className="font-semibold text-white">Detailed workflow</p>
                      <ol className="mt-3 grid gap-2">
                        {demo.strip.map((step, stepIndex) => (
                          <li key={step} className="flex gap-3">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-xs font-bold text-cyan-100">
                              {stepIndex + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id={sectionIds.process} className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Process" title="A clear path from audit to launch." />
        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-cyan-200/12 bg-[#061827]/72 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-sm font-black text-cyan-100">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cyan-50/66">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNyxra() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          align="left"
          eyebrow="Why Nyxra"
          title="Built for useful outcomes, not unnecessary complexity."
          description="Small businesses need clear systems that can be understood, owned and improved over time."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {whyNyxra.map((item, index) => (
            <Reveal key={item} delay={index * 0.035}>
              <div className="flex h-full gap-3 rounded-2xl border border-cyan-200/12 bg-white/[0.035] p-5">
                <ShieldCheck className="mt-0.5 shrink-0 text-cyan-100" size={20} aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-cyan-50/78">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const [imageReady, setImageReady] = useState(true);

  return (
    <section id={sectionIds.about} className="px-5 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-20">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-cyan-200/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(34,211,238,0.035))] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.24)] sm:p-8 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:p-10">
          <div className="flex justify-center lg:justify-start">
            <div className="relative aspect-square w-40 overflow-hidden rounded-full border border-cyan-200/36 bg-cyan-300/10 p-1 shadow-[0_0_50px_rgba(34,211,238,0.18)] sm:w-52">
              {imageReady ? (
                <img
                  src={siteConfig.founderImageSrc}
                  alt="Rishi Srivastav, Founder of Nyxra"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover object-center"
                  onError={() => setImageReady(false)}
                />
              ) : (
                <div className="grid h-full w-full place-items-center rounded-full text-3xl font-black text-cyan-100">
                  RS
                </div>
              )}
            </div>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/62">Founder, Nyxra</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Rishi Srivastav</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-cyan-50/72">
              Nyxra was founded by Rishi Srivastav to help small businesses use modern digital and AI tools without needing a large technical team. The goal is simple: build clear websites and practical systems that make businesses easier to discover, contact and operate.
            </p>
            <p className="signature-text mt-6">Rishi Srivastav</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Straight answers before you start."
        />
        <div className="mt-12 grid gap-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.02}>
                <div className="rounded-2xl border border-cyan-200/12 bg-white/[0.035]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    <span className="font-bold text-white">{faq.question}</span>
                    <ChevronDown className={`shrink-0 text-cyan-100 transition ${open ? "rotate-180" : ""}`} size={20} aria-hidden="true" />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm leading-7 text-cyan-50/68">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  required = false
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-cyan-50/82">
      <span>
        {label}
        {required && <span className="text-cyan-200"> *</span>}
      </span>
      <input
        className="min-h-12 rounded-xl border border-cyan-200/14 bg-[#020812]/62 px-4 py-3 text-base text-white outline-none transition placeholder:text-cyan-50/34 focus:border-cyan-200/55 focus:bg-[#041321] focus:ring-2 focus:ring-cyan-200/18"
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function SelectField({ label, name, options, required = false }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-cyan-50/82">
      <span>
        {label}
        {required && <span className="text-cyan-200"> *</span>}
      </span>
      <select
        className="min-h-12 rounded-xl border border-cyan-200/14 bg-[#020812]/62 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-200/55 focus:bg-[#041321] focus:ring-2 focus:ring-cyan-200/18"
        name={name}
        required={required}
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({ label, name, placeholder, required = false }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-cyan-50/82">
      <span>
        {label}
        {required && <span className="text-cyan-200"> *</span>}
      </span>
      <textarea
        className="min-h-28 rounded-xl border border-cyan-200/14 bg-[#020812]/62 px-4 py-3 text-base text-white outline-none transition placeholder:text-cyan-50/34 focus:border-cyan-200/55 focus:bg-[#041321] focus:ring-2 focus:ring-cyan-200/18"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const isSubmittingRef = useRef(false);

  async function handleAuditSubmit(event) {
    event.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const formData = new FormData(event.currentTarget);
      await fetch(auditFormEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      window.location.href = "/thank-you";
    } catch (error) {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      setSubmissionError("Something went wrong. Please try again or email Nyxra directly.");
    }
  }

  return (
    <section id={sectionIds.contact} className="relative px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          align="left"
          eyebrow="Contact"
          title="Tell us what your business needs."
          description="Share a few details about your current website, enquiry process or repetitive work. Nyxra will review them and suggest a practical starting point."
        />
        <Reveal>
          <div id="business-audit" className="scroll-mt-28 rounded-3xl border border-cyan-200/14 bg-[#061827]/78 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-2xl border border-cyan-200/12 bg-white/[0.035] p-5 transition hover:border-cyan-200/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
              >
                <Mail className="text-cyan-100" size={22} aria-hidden="true" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">Email</p>
                <p className="mt-2 break-all font-semibold text-white">{siteConfig.email}</p>
              </a>
              <div className="rounded-2xl border border-cyan-200/12 bg-white/[0.035] p-5">
                <Gauge className="text-cyan-100" size={22} aria-hidden="true" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/58">Response</p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/70">Your request will be reviewed before we recommend a scope.</p>
              </div>
            </div>
            <form
              name="nyxra-business-audit"
              onSubmit={handleAuditSubmit}
              className="mt-8 grid gap-5"
            >
              {submissionError && (
                <div
                  className="rounded-2xl border border-red-300/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100"
                  role="alert"
                  aria-live="assertive"
                >
                  {submissionError}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="full-name" autoComplete="name" required />
                <Field label="Business name" name="business-name" autoComplete="organization" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field label="WhatsApp or phone number" name="phone" type="tel" autoComplete="tel" required />
                <SelectField label="Business category" name="business-category" options={businessCategories} required />
                <Field label="City" name="city" autoComplete="address-level2" required />
              </div>

              <Field
                label="Website or social profile"
                name="website-or-social"
                type="url"
                autoComplete="url"
                placeholder="https://"
              />

              <TextAreaField
                label="Main current problem"
                name="main-current-problem"
                required
                placeholder="Example: enquiries are scattered, website is outdated, follow-up is hard to manage..."
              />
              <TextAreaField
                label="Desired result"
                name="desired-result"
                required
                placeholder="Example: better website, organised leads, appointment requests, simple automation..."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField label="Budget range" name="budget-range" options={budgetRanges} required />
                <SelectField label="Preferred contact method" name="preferred-contact-method" options={contactMethods} required />
              </div>

              <TextAreaField
                label="Optional message"
                name="message"
                placeholder="Share anything else that helps us understand your business."
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_16px_46px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(34,211,238,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                >
                  {isSubmitting ? "Submitting..." : "Submit Audit Request"}
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/18 bg-white/[0.035] px-6 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/35 hover:bg-cyan-200/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                >
                  Email Nyxra
                </a>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-200/16 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(45,212,191,0.06))] p-8 text-center sm:p-12">
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
            Let's build a simpler system for your business.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cyan-50/70">
            Start with a free audit of your current website, enquiry process and repetitive business tasks.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <AuditButton>Get My Free Audit</AuditButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200/18 bg-white/[0.035] px-5 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/35 hover:bg-cyan-200/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Email Nyxra
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Demo Systems", href: "#demo-systems" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ];

  return (
    <footer className="border-t border-cyan-200/12 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-cyan-50/62">
            Nyxra builds websites, lead systems and simple automations for growing businesses.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 hover:text-white">
            <Mail size={16} aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-cyan-50/64 transition hover:text-cyan-100">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-cyan-200/10 pt-6 text-sm text-cyan-50/45">
        © {new Date().getFullYear()} Nyxra. Project scope, costs and third-party services are confirmed in a written proposal.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020812] text-cyan-50">
      <Header />
      <Hero />
      <ProblemsSection />
      <Services />
      <Solutions />
      <Pricing />
      <DemoSystems />
      <Process />
      <WhyNyxra />
      <Founder />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
