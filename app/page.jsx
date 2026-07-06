"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Code2,
  ExternalLink,
  Gem,
  Globe2,
  Mail,
  Menu,
  MousePointer2,
  Smartphone,
  Sparkles,
  X,
  Zap
} from "lucide-react";

const INQUIRY_FORM_URL =
  process.env.NEXT_PUBLIC_INQUIRY_FORM_URL || "#contact";

const EMAIL = "supportnyxra@gmail.com";
const LOGO_SRC = process.env.NEXT_PUBLIC_LOGO_SRC || "logo.png";
const FOUNDER_IMAGE_SRC =
  process.env.NEXT_PUBLIC_FOUNDER_IMAGE_SRC || "founder.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

const services = [
  {
    title: "Website Development",
    description: "Professional business websites built for speed and growth.",
    icon: Code2
  },
  {
    title: "Business Landing Pages",
    description: "High-converting landing pages for businesses and campaigns.",
    icon: MousePointer2
  },
  {
    title: "Digital Presence Setup",
    description:
      "Everything needed to establish a professional online presence.",
    icon: Globe2
  }
];

const whyNyxra = [
  { title: "Modern Design", icon: Gem },
  { title: "Mobile Friendly", icon: Smartphone },
  { title: "Fast Delivery", icon: Clock3 },
  { title: "Affordable Pricing", icon: BadgeCheck }
];

const pricingPlans = [
  {
    name: "Basic Website",
    price: "Rs. 10,000",
    description: "A clean, professional website for local business visibility.",
    features: [
      "Professional Design",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Button",
      "Google Maps",
      "SEO Ready",
      "Fast Delivery"
    ]
  },
  {
    name: "Premium Website",
    price: "Rs. 15,000",
    description: "A richer website experience with more polish and flexibility.",
    popular: true,
    features: [
      "Everything in Basic",
      "Extra Pages",
      "Advanced Customization",
      "Premium UI",
      "Animations",
      "Custom Features",
      "Better SEO Structure"
    ]
  }
];

const portfolioItems = [
  {
    title: "Nyxra Website",
    category: "Agency Sample",
    url: "https://nyxra.onrender.com",
    thumbnail: "sample-2.png"
  },
  {
    title: "Clinic Website",
    category: "Clinic Sample",
    url: "https://clinicwebsitedemo22.netlify.app/",
    thumbnail: "sample-1.png"
  }
];

const processSteps = [
  "Tell us about your business.",
  "We design your website.",
  "You review & approve.",
  "We launch your website."
];

function externalTargetProps() {
  const opensExternally = /^https?:\/\//.test(INQUIRY_FORM_URL);

  return opensExternally
    ? {
        target: "_blank",
        rel: "noreferrer"
      }
    : {};
}

const revealStates = {
  up: { opacity: 0, y: 42, scale: 0.985, filter: "blur(10px)" },
  soft: { opacity: 0, y: 24, scale: 0.96, filter: "blur(14px)" },
  left: { opacity: 0, x: -34, scale: 0.98, filter: "blur(10px)" },
  right: { opacity: 0, x: 34, scale: 0.98, filter: "blur(10px)" }
};

function Reveal({ children, className = "", delay = 0, variant = "up" }) {
  const shouldReduceMotion = useReducedMotion();
  const initialState = revealStates[variant] || revealStates.up;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : initialState}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -70px 0px" }}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
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
          src={LOGO_SRC}
          alt="Nyxra logo"
          width={compact ? 34 : 40}
          height={compact ? 34 : 40}
          className="h-9 w-9 rounded-lg object-contain"
          onError={() => setImageReady(false)}
        />
      ) : (
        <span
          className="grid h-9 w-9 place-items-center rounded-lg border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-sm font-semibold text-[#BDF9FF] shadow-[0_0_34px_rgba(0,191,255,0.26)]"
          aria-hidden="true"
        >
          N
        </span>
      )}
      {!compact && (
        <span className="text-base font-semibold tracking-normal text-white">
          Nyxra
        </span>
      )}
    </span>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const targetProps = useMemo(() => externalTargetProps(), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#00BFFF]/12 bg-[#001326]/78 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl"
          : "bg-[#001326]/22 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00BFFF]">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[#00BFFF]/12 bg-[#00BFFF]/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-[#BDF9FF]/78 transition hover:bg-[#00BFFF]/10 hover:text-[#BDF9FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00BFFF]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={INQUIRY_FORM_URL}
          {...targetProps}
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#008C8C] to-[#00BFFF] px-5 py-2.5 text-sm font-bold text-[#001F3F] shadow-[0_12px_42px_rgba(0,191,255,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_54px_rgba(0,191,255,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BDF9FF] md:inline-flex"
        >
          Get Started
          <ArrowRight size={16} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-[#00BFFF]/12 bg-[#00BFFF]/[0.06] text-white transition hover:bg-[#00BFFF]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00BFFF] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[#00BFFF]/12 bg-[#001326]/96 px-5 pb-5 pt-2 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[#E9FBFF]/86 transition hover:bg-[#00BFFF]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00BFFF]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={INQUIRY_FORM_URL}
              {...targetProps}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008C8C] to-[#00BFFF] px-5 py-3 text-sm font-bold text-[#001F3F]"
            >
              Get Started
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 0.36], [0, 120]);
  const gridY = useTransform(scrollYProgress, [0, 0.36], [0, 64]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.36], [1, 0.55]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,191,255,0.34),transparent_38%),linear-gradient(135deg,rgba(0,31,63,0.98),rgba(0,14,28,0.99)_50%,rgba(0,5,12,1))]" />
      <motion.div
        style={shouldReduceMotion ? undefined : { y: glowY, opacity: glowOpacity }}
        className="ambient-plane absolute inset-x-[-12%] top-[-30%] h-[68%] rotate-[-4deg] bg-[linear-gradient(105deg,transparent_10%,rgba(0,191,255,0.3)_36%,rgba(0,140,140,0.22)_54%,rgba(189,249,255,0.1)_70%,transparent_88%)] blur-3xl"
      />
      <motion.div
        style={shouldReduceMotion ? undefined : { y: gridY }}
        className="absolute inset-0 bg-grid opacity-60"
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#001F3F] to-transparent" />
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#BDF9FF]/80">
        {eyebrow}
      </p>
      <h2 className="display-title text-4xl tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[#BDF9FF]/62">{description}</p>
      )}
    </Reveal>
  );
}

function ServiceCard({ service, delay }) {
  const Icon = service.icon;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group h-full rounded-lg border border-[#00BFFF]/12 bg-[#00BFFF]/[0.035] p-6 shadow-[0_18px_58px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#00BFFF]/35 hover:bg-[#00BFFF]/[0.055]">
        <div className="mb-7 grid h-12 w-12 place-items-center rounded-lg border border-[#00BFFF]/22 bg-[#00BFFF]/10 text-[#BDF9FF] transition group-hover:border-[#BDF9FF]/50 group-hover:text-[#E9FBFF]">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 leading-7 text-[#BDF9FF]/62">{service.description}</p>
      </article>
    </Reveal>
  );
}

function WhyCard({ item, delay }) {
  const Icon = item.icon;

  return (
    <Reveal delay={delay}>
      <div className="rounded-lg border border-[#00BFFF]/12 bg-[#001326]/72 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/[0.045]">
        <Icon className="mb-5 text-[#9DEEFF]" size={25} aria-hidden="true" />
        <h3 className="font-semibold text-white">{item.title}</h3>
      </div>
    </Reveal>
  );
}

function PricingCard({ plan, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`relative h-full rounded-lg border p-6 shadow-[0_28px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:p-8 ${
          plan.popular
            ? "border-[#00BFFF]/45 bg-[linear-gradient(145deg,rgba(0,191,255,0.16),rgba(255,255,255,0.055),rgba(0,140,140,0.14))]"
            : "border-[#00BFFF]/12 bg-[#00BFFF]/[0.035]"
        }`}
      >
        {plan.popular && (
          <span className="absolute right-5 top-5 rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/12 px-3 py-1 text-xs font-semibold text-[#BDF9FF]">
            Most Popular
          </span>
        )}
        <h3 className="pr-28 text-2xl font-semibold text-white">{plan.name}</h3>
        <p className="mt-4 text-sm leading-6 text-[#BDF9FF]/62">{plan.description}</p>
        <p className="mt-8 text-5xl font-semibold tracking-normal text-white">
          {plan.price}
        </p>
        <ul className="mt-8 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm leading-6 text-[#BDF9FF]/78">
              <Check
                className="mt-0.5 shrink-0 text-[#9DEEFF]"
                size={18}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function ProjectThumbnail({ item }) {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(135deg,#001F3F,#008C8C_48%,#000814)] p-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(0,191,255,0.22),transparent_30%),radial-gradient(circle_at_92%_18%,rgba(0,140,140,0.22),transparent_28%)]" />
      <div className="relative overflow-hidden rounded-lg border border-[#00BFFF]/18 bg-[#000814] shadow-[0_22px_70px_rgba(0,0,0,0.34)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#00BFFF]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#008C8C]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#BDF9FF]" />
          <span className="ml-2 h-4 flex-1 rounded-full bg-white/8" />
        </div>
        <img
          src={item.thumbnail}
          alt={`${item.title} thumbnail`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.38))]" />
      </div>
    </div>
  );
}

function PortfolioCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${item.title}`}
        className="group block overflow-hidden rounded-lg border border-[#00BFFF]/12 bg-[#00BFFF]/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#00BFFF]/35 hover:bg-[#00BFFF]/[0.065] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00BFFF]"
      >
        <ProjectThumbnail item={item} />
        <div className="flex items-center justify-between gap-4 p-5">
          <div>
            <p className="text-sm text-[#9DEEFF]">{item.category}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
          </div>
          <ExternalLink
            className="shrink-0 text-[#BDF9FF]/62 transition group-hover:text-[#9DEEFF]"
            size={20}
            aria-hidden="true"
          />
        </div>
      </a>
    </Reveal>
  );
}

function FounderImage() {
  const [imageReady, setImageReady] = useState(true);

  return (
    <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full border-2 border-[#00BFFF]/70 bg-[#00BFFF]/10 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_52px_rgba(0,191,255,0.3)] sm:w-48 lg:w-56">
      {imageReady ? (
        <img
          src={FOUNDER_IMAGE_SRC}
          alt="Rishi Srivastav, Founder of Nyxra"
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-full object-cover object-center"
          onError={() => setImageReady(false)}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center rounded-full px-8 text-center">
          <div className="grid h-24 w-24 place-items-center rounded-full border border-[#00BFFF]/30 bg-[#00BFFF]/10 text-3xl font-semibold text-[#E9FBFF]">
            RS
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const targetProps = useMemo(() => externalTargetProps(), []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#001F3F] text-[#E9FBFF]">
      <Navbar />

      <section
        id="home"
        className="relative flex min-h-[84svh] items-center overflow-hidden px-5 py-28 sm:px-6 lg:px-8"
      >
        <HeroBackground />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#00BFFF]/18 bg-[#00BFFF]/[0.055] px-4 py-2 text-sm text-[#BDF9FF] shadow-[0_0_70px_rgba(0,191,255,0.16)] backdrop-blur-xl">
              <Sparkles size={15} aria-hidden="true" />
              Premium websites for local businesses
            </div>
            <h1 className="hero-title tracking-normal text-white">
              We Build Websites That{" "}
              <span className="bg-gradient-to-r from-[#008C8C] to-[#00BFFF] bg-clip-text text-transparent">
                Grow Local Businesses.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#BDF9FF]/78 sm:text-lg">
              Modern, fast, and professional websites designed to help local
              businesses build trust, attract customers, and grow online.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={INQUIRY_FORM_URL}
                {...targetProps}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008C8C] to-[#00BFFF] px-7 py-3.5 text-sm font-bold text-[#001F3F] shadow-[0_16px_54px_rgba(0,191,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,191,255,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BDF9FF] sm:w-auto"
              >
                Get Started
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#00BFFF]/16 bg-[#00BFFF]/[0.055] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#00BFFF]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00BFFF] sm:w-auto"
              >
                View Pricing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="relative px-5 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Focused digital foundations."
            description="Everything is designed to help a local business look credible, load fast, and convert visitors into leads."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Nyxra"
            title="Premium where it matters."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyNyxra.map((item, index) => (
              <WhyCard key={item.title} item={item} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative px-5 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,191,255,0.08),transparent)]" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple packages. Clear value."
            description="Choose the right starting point for a polished, professional web presence."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Portfolio"
            title="Live sample websites."
            description="Two clean sample projects visitors can open and explore."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.title} item={item} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Process" title="From idea to launch." />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="relative rounded-lg border border-[#00BFFF]/12 bg-[#00BFFF]/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/[0.06]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#00BFFF]/22 bg-[#00BFFF]/10 text-sm font-semibold text-[#BDF9FF]">
                      {index + 1}
                    </span>
                    <Zap className="text-[#9DEEFF]" size={18} aria-hidden="true" />
                  </div>
                  <p className="leading-7 text-[#E9FBFF]/86">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <Reveal variant="soft">
          <div className="founder-card mx-auto max-w-5xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <span className="founder-spark right-10 top-8" aria-hidden="true" />
            <span className="founder-spark bottom-7 right-1/4 hidden sm:block" aria-hidden="true" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[0.55fr_1fr]">
              <div className="flex justify-center lg:justify-start">
                <FounderImage />
              </div>
              <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                <h2 className="creator-title">Rishi Srivastav</h2>
                <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#BDF9FF]/58">
                  Founder Of Nyxra
                </p>
                <p className="mt-5 text-base leading-7 text-[#BDF9FF]/78 sm:text-lg sm:leading-8">
                  Hi, I&apos;m Rishi - I built Nyxra to help local businesses
                  look premium online, earn trust faster, and turn visitors into
                  real customers with clean, modern websites that feel effortless.
                </p>
                <div className="mt-5" aria-label="Rishi Srivastav signature">
                  <p className="signature-text">Rishi Srivastav</p>
                  <div className="signature-rule mx-auto lg:mx-0" />
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#008C8C] to-[#00BFFF] px-7 py-3.5 text-sm font-bold text-[#001F3F] shadow-[0_0_38px_rgba(0,191,255,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_0_58px_rgba(0,191,255,0.44)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BDF9FF]"
                >
                  <Mail size={18} aria-hidden="true" />
                  Connect With Me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="contact"
        className="relative px-5 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#BDF9FF]/80">
              Contact
            </p>
            <h2 className="display-title text-4xl tracking-normal text-white sm:text-5xl">
              Let&apos;s build your website.
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#00BFFF]/12 bg-[#00BFFF]/[0.055] px-5 py-3 text-[#E9FBFF]/86 transition hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00BFFF]"
            >
              <Mail size={18} aria-hidden="true" />
              {EMAIL}
            </a>
            <div className="mt-8">
              <a
                href={INQUIRY_FORM_URL}
                {...targetProps}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#008C8C] to-[#00BFFF] px-7 py-3.5 text-sm font-bold text-[#001F3F] shadow-[0_16px_54px_rgba(0,191,255,0.3)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BDF9FF]"
              >
                Get Started
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#00BFFF]/12 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <div className="flex justify-center sm:justify-start">
              <BrandLogo />
            </div>
            <p className="mt-3 text-sm text-[#BDF9FF]/62">
              Building Digital Experiences That Matter.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 text-sm text-[#BDF9FF]/78 transition hover:text-[#BDF9FF]"
          >
            <Mail size={16} aria-hidden="true" />
            {EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
