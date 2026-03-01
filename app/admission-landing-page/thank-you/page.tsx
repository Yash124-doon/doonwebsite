'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './thank-you.css';

/**
 * Thank You Page — /admission-landing-page/thank-you
 * Users are redirected here after successful form submission.
 * This page URL can be used for:
 * - Google Ads Conversion Tracking
 * - Meta Pixel Conversion Event
 * - Google Analytics Goal Tracking
 */
export default function ThankYouPage() {
  // Fire conversion tracking events on page load
  useEffect(() => {
    // Google Ads Conversion Tracking (gtag)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID
        event_category: 'admission',
        event_label: 'form_submitted',
      });
    }

    // Meta Pixel Lead Event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Admission Form',
        content_category: 'Admission',
      });
    }

    // Google Analytics Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'admission',
        event_label: 'admission_form_submitted',
        value: 1,
      });
    }
  }, []);

  return (
    <div className="thankyou-page">
      {/* Background decorative elements */}
      <div className="thankyou-bg-shape thankyou-bg-shape-1" aria-hidden="true" />
      <div className="thankyou-bg-shape thankyou-bg-shape-2" aria-hidden="true" />
      <div className="thankyou-bg-shape thankyou-bg-shape-3" aria-hidden="true" />

      <div className="thankyou-container">
        {/* School Logo */}
        {/* <div className="thankyou-logo">
          <Image
            src="/assets/doonlogo.png"
            alt="Doon International School Logo"
            width={80}
            height={80}
            priority
          />
        </div> */}

        {/* Success Icon */}
        <div className="thankyou-icon">
          <div className="thankyou-icon-circle">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div className="thankyou-icon-ring" />
        </div>

        {/* Main Content */}
        <h1 className="thankyou-title">
          Thank You <span className="gold">for Applying!</span>
        </h1>

        <p className="thankyou-subtitle">
          Your admission inquiry has been successfully submitted.
        </p>

        <div className="thankyou-message-card">
          <div className="thankyou-message-icon">
            <i className="fas fa-phone-alt" />
          </div>
          <div>
            <h3>What Happens Next?</h3>
            <p>
              Our admission counselor will contact you within <strong>24 hours</strong> to
              schedule a free counseling session and campus tour. Please keep your phone available.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="thankyou-contact">
          <p>Need immediate assistance? Call us directly:</p>
          <a href="tel:+919201591900" className="thankyou-phone">
            <i className="fas fa-phone" />
            +91 92015 91900
          </a>
          <span className="thankyou-divider">or</span>
          <a href="tel:+919201591892" className="thankyou-phone secondary">
            <i className="fas fa-phone" />
            +91 92015 91892
          </a>
        </div>

        {/* Quick Info Cards */}
        <div className="thankyou-info-grid">
          <div className="thankyou-info-card">
            <i className="fas fa-clock" />
            <span>Response within 24 hrs</span>
          </div>
          <div className="thankyou-info-card">
            <i className="fas fa-calendar-check" />
            <span>Free Campus Tour</span>
          </div>
          <div className="thankyou-info-card">
            <i className="fas fa-user-tie" />
            <span>Personal Counselor</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="thankyou-actions">
          <Link href="/admission-landing-page" className="thankyou-btn-primary">
            <i className="fas fa-arrow-left" />
            Back to Admission Page
          </Link>
          <Link href="/" className="thankyou-btn-secondary">
            Visit Homepage
          </Link>
        </div>

        {/* Social Proof */}
        <div className="thankyou-footer-trust">
          <i className="fas fa-shield-alt" />
          <span>Your information is 100% secure. CBSE Affiliated School.</span>
        </div>
      </div>
    </div>
  );
}
