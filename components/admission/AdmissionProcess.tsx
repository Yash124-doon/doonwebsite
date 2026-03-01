'use client';

import './admission.css';

interface AdmissionProcessProps {
  onApplyClick: () => void;
}

const steps = [
  {
    number: 1,
    title: 'Fill the Application Form',
    description: 'Complete the quick admission inquiry form below with basic details about your child.',
  },
  {
    number: 2,
    title: 'Counseling Session',
    description: 'Our admission team will contact you for a free counseling session and campus tour.',
  },
  {
    number: 3,
    title: 'Enrollment Confirmed',
    description: 'Complete the documentation and fee process. Welcome to the Doon family!',
  },
];

export default function AdmissionProcess({ onApplyClick }: AdmissionProcessProps) {
  return (
    <section className="adm-section adm-process-bg" id="admission-process">
      <div className="adm-section-inner">
        {/* Header */}
        <div className="adm-section-header">
          <div className="adm-section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Simple Process
          </div>
          <h2 className="adm-section-title">
            3 Easy Steps to <span className="gold">Join Doon</span>
          </h2>
          <p className="adm-section-desc">
            Our admission process is hassle-free. Get started in under 2 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="adm-steps">
          {steps.map((step) => (
            <div className="adm-step" key={step.number}>
              <div className="adm-step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="adm-process-cta">
          <button onClick={onApplyClick} id="process-apply-btn">
            Start Your Application
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
