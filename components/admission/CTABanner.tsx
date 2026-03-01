'use client';

import './admission.css';

interface CTABannerProps {
  headline: string;
  subtext: string;
  buttonText: string;
  onClick: () => void;
  variant?: 'default' | 'gold' | 'navy';
}

export default function CTABanner({
  headline,
  subtext,
  buttonText,
  onClick,
  variant = 'default',
}: CTABannerProps) {
  return (
    <section className={`adm-cta-banner variant-${variant}`}>
      {/* Decorative blobs */}
      <div className="adm-cta-blob adm-cta-blob-1" aria-hidden="true" />
      <div className="adm-cta-blob adm-cta-blob-2" aria-hidden="true" />

      <div className="adm-cta-inner">
        <h2>{headline}</h2>
        <p className="adm-cta-sub">{subtext}</p>
        <button className="adm-cta-btn" onClick={onClick}>
          {buttonText}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
}
