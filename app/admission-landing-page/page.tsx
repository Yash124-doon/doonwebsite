'use client';

import { useRef } from 'react';
import type { Metadata } from 'next';
import AdmissionHero from '../../components/admission/AdmissionHero';
import WhyChooseUs from '../../components/admission/WhyChooseUs';
import AcademicPrograms from '../../components/admission/AcademicPrograms';
import FacilitiesSection from '../../components/admission/FacilitiesSection';
import TrustSection from '../../components/admission/TrustSection';
import AdmissionProcess from '../../components/admission/AdmissionProcess';
import AdmissionForm from '../../components/admission/AdmissionForm';
import CTABanner from '../../components/admission/CTABanner';

/**
 * Admission Landing Page — Optimized for Meta Ads & Google Ads traffic
 * Standalone high-conversion page with lead capture form
 * connected to the existing backend API
 * URL: /admission-landing-page
 */
export default function AdmissionLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="admission-landing">
      {/* 1. HERO SECTION */}
      <AdmissionHero onApplyClick={scrollToForm} />

      {/* 7. LEAD FORM */}
      <div ref={formRef}>
        <AdmissionForm />
      </div>

      {/* 2. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* CTA BANNER */}
      <CTABanner
        headline="Don't Miss Out — Limited Seats Available!"
        subtext="Secure your child's future at the best CBSE school in Jabalpur."
        buttonText="Book Admission Now"
        onClick={scrollToForm}
      />

      {/* 3. ACADEMIC PROGRAMS */}
      <AcademicPrograms />

      {/* 4. FACILITIES */}
      <FacilitiesSection />

      {/* CTA BANNER */}
      <CTABanner
        headline="Give Your Child the Best Start"
        subtext="World-class infrastructure, experienced faculty, and holistic development."
        buttonText="Apply Now -  It's Easy"
        onClick={scrollToForm}
        variant="gold"
      />

      {/* 5. TRUST / SOCIAL PROOF */}
      <TrustSection />

      {/* 6. ADMISSION PROCESS */}
      <AdmissionProcess onApplyClick={scrollToForm} />



      {/* FINAL CTA */}
      <CTABanner
        headline="Admissions Are Closing Soon!"
        subtext="Apply today and join the Doon International School family."
        buttonText="Apply Now"
        onClick={scrollToForm}
        variant="navy"
      />

      {/* Mobile Sticky CTA */}
      <div className="admission-sticky-cta">
        <button onClick={scrollToForm} className="admission-sticky-cta-btn">
          <span>Apply Now</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
