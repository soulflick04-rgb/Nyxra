"use client";

import Link from "next/link";

export default function ModernHero({ children }) {
  return (
    <section className="modern-hero" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="ambient-glow" />
        <div className="dot-field" />
        {Array.from({ length: 24 }, (_, i) => (
          <i
            className="particle"
            key={i}
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 23 + 7) % 85}%`,
              animationDelay: `-${i * 0.7}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      <div className="modern-intro wrap">
        <div className="studio-badge">
          <span className="pulse-dot" />
          <b>Nyxra</b>
          <span className="badge-divider" />
          <span>Websites with a little more you</span>
        </div>
        <h1 id="hero-title">
          Your business deserves
          <br />
          <span>a better first impression.</span>
        </h1>
        <p>
          Distinctive websites for clinics, gyms and coaching centres.
          <br className="desktop-break" /> Thoughtfully designed. Easy to
          explore. Built around your business.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="button">
            Let’s build your website <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/portfolio" className="button secondary">
            Explore the concepts <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-assurances">
          <span>✧ Responsive by design</span>
          <span>✧ Clear project scope</span>
          <span>✧ Your own identity</span>
        </div>
      </div>
      <div className="showcase wrap">
        <div className="showcase-rail rail-left">
          <div className="glass-note">
            <span className="note-symbol">✧</span>
            <p className="eyebrow">Your identity, online</p>
            <h2>
              Recognisably
              <br />
              <span>you.</span>
            </h2>
            <div className="palette" aria-label="Illustrative colour palette">
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>
              A distinct look.
              <br />A considered experience.
            </p>
          </div>
          <div className="mini-note">
            <span>↗</span>Designed for your
            <br />
            next chapter.
          </div>
        </div>
        <div className="showcase-main">
          <div className="showcase-heading">
            <span className="pulse-dot" /> THE CONCEPT STUDIO{" "}
            <span>TRY A DIRECTION ↓</span>
          </div>
          {children}
        </div>
        <div className="showcase-rail rail-right">
          <div className="glass-note journey-note">
            <span className="eyebrow">A clearer customer journey</span>
            <h2>
              From a first look
              <br />
              to <span>“let’s talk.”</span>
            </h2>
            <ol>
              <li>
                <b>01</b>
                <span>
                  Discover your business
                  <small>Services, story, personality</small>
                </span>
              </li>
              <li>
                <b>02</b>
                <span>
                  Find the details<small>Location, hours, useful answers</small>
                </span>
              </li>
              <li>
                <b>03</b>
                <span>
                  Start a conversation<small>A clear way to get in touch</small>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <p className="showcase-disclaimer">
        Illustrative design concepts. Not client projects or claimed results.
      </p>
    </section>
  );
}
