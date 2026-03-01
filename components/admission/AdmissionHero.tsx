'use client';

import Image from 'next/image';
import './admission.css';

interface AdmissionHeroProps {
  onApplyClick: () => void;
}

export default function AdmissionHero({ onApplyClick }: AdmissionHeroProps) {
  const handleCall = () => {
    window.open('tel:+919201591900', '_self');
  };

  return (
    <section className="admission-hero" id="admission-hero">
      {/* Background Image */}
      <div className="admission-hero-bg">
        <Image
          src="/assets/heroimagenew.jpeg"
          alt="Doon International School Campus"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Overlay */}
      <div className="admission-hero-overlay" />

      {/* Decorative Shapes */}
      <div className="admission-hero-shape admission-hero-shape-1" aria-hidden="true" />
      <div className="admission-hero-shape admission-hero-shape-2" aria-hidden="true" />
      <div className="admission-hero-shape admission-hero-shape-3" aria-hidden="true" />

      {/* Content */}
      <div className="admission-hero-content">
        {/* Badge */}
        <div className="admission-hero-badge">
          <span className="dot" />
          Admissions Open 2026–27
        </div>

        {/* Headline */}
        <h1>
          Your Child Deserves
          <span className="gold">The Best Education</span>
        </h1>

        {/* Sub-headline */}
        <p className="admission-hero-sub">
          Doon International School, Jabalpur | CBSE affiliated, Nursery to Class IX
          with Day Boarding &amp; Hostel facility. Where excellence meets opportunity.
        </p>

        {/* Trust statement */}
        <div className="admission-hero-trust">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
          CBSE Affiliated &nbsp;•&nbsp; Day Boarding &amp; Hostel &nbsp;•&nbsp; Trusted by 2000+ Families
        </div>

        {/* CTA Buttons */}
        <div className="admission-hero-cta">
          <button
            className="btn-primary-gold"
            onClick={onApplyClick}
            id="hero-apply-btn"
          >
            Apply Now <br /> Free Counseling
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
          <button
            className="btn-secondary-outline"
            onClick={handleCall}
            id="hero-call-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Call: +91 92015 91900
          </button>
        </div>

        {/* Stats */}
        <div className="admission-hero-stats">
          <div className="admission-hero-stat">
            <div className="number">25+</div>
            <div className="label">Years of Excellence</div>
          </div>
          <div className="admission-hero-stat">
            <div className="number">2000+</div>
            <div className="label">Happy Students</div>
          </div>
          <div className="admission-hero-stat">
            <div className="number">100%</div>
            <div className="label">Board Results</div>
          </div>
          <div className="admission-hero-stat">
            <div className="number">50+</div>
            <div className="label">Expert Faculty</div>
          </div>
        </div>
      </div>
    </section>
  );
}
