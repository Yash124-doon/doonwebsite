'use client';

import { useRef, useState, useEffect } from 'react';
import type { Metadata } from 'next';
import AdmissionHero from '../../components/admission/AdmissionHero';
import WhyChooseUs from '../../components/admission/WhyChooseUs';
import AcademicPrograms from '../../components/admission/AcademicPrograms';
import FacilitiesSection from '../../components/admission/FacilitiesSection';
import TrustSection from '../../components/admission/TrustSection';
import AdmissionProcess from '../../components/admission/AdmissionProcess';
import AdmissionForm from '../../components/admission/AdmissionForm';
import CTABanner from '../../components/admission/CTABanner';
import AdmissionModal from '../../components/admission/AdmissionModal';

/**
 * Admission Landing Page — Optimized for Meta Ads & Google Ads traffic
 * Standalone high-conversion page with lead capture form
 * connected to the existing backend API
 * URL: /admission-landing-page
 */
export default function AdmissionLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open modal on page load
  useEffect(() => {
    console.log("Admission Page Loaded - Setting Auto Popup Timer");
    const timer = setTimeout(() => {
      console.log("Opening Auto Popup...");
      setIsModalOpen(true);
    }, 3000); // 3 seconds delay for stability
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admission-landing">
      <AdmissionModal isOpen={isModalOpen} onClose={closeModal} />

      {/* 1. HERO SECTION */}
      <AdmissionHero onApplyClick={openModal} />

      {/* 7. LEAD FORM (Keeping in-page as well for SEO/Direct flow) */}
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
        onClick={openModal}
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
        onClick={openModal}
        variant="gold"
      />

      {/* 5. TRUST / SOCIAL PROOF */}
      <TrustSection />

      {/* 6. ADMISSION PROCESS */}
      <AdmissionProcess onApplyClick={openModal} />



      {/* FINAL CTA */}
      <CTABanner
        headline="Admissions Are Closing Soon!"
        subtext="Apply today and join the Doon International School family."
        buttonText="Apply Now"
        onClick={openModal}
        variant="navy"
      />

      {/* Sticky CTA Footer - Visible on all devices for landing page */}
      <div className="admission-sticky-footer">
        <div className="admission-sticky-footer-inner">
          <a
            href="https://wa.me/919201591900?text=Hello!%20I%20am%20interested%20in%20Doon%20International%20School%2C%20Jabalpur."
            target="_blank"
            rel="noopener noreferrer"
            className="adm-sticky-btn whatsapp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            <span>WhatsApp</span>
          </a>

          <button onClick={openModal} className="adm-sticky-btn apply">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            <span>Enroll Now</span>
          </button>

          <a href="tel:+919201591900" className="adm-sticky-btn call">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
