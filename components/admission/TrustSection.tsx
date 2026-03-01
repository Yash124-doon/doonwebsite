'use client';

import './admission.css';

const counters = [
  { value: '25', suffix: '+', label: 'Years of Excellence' },
  { value: '2000', suffix: '+', label: 'Happy Students' },
  { value: '100', suffix: '%', label: 'Board Results' },
  { value: '15', suffix: '+', label: 'Acres Campus' },
];

const testimonials = [
  {
    quote: "Doon International School has been an incredible journey for my son. The teachers are dedicated and the facilities are world-class. He's become so confident and disciplined.",
    name: 'Mrs. Priya Sharma',
    role: 'Parent of Class VIII Student',
    initials: 'PS',
  },
  {
    quote: "We moved our daughter from another school and the difference has been night and day. The smart classrooms and activity-based learning really helped her score top marks.",
    name: 'Mr. Rajesh Gupta',
    role: 'Parent of Class X Student',
    initials: 'RG',
  },
  {
    quote: "The hostel facility is excellent. Even being away from home, my child is well taken care of. The teachers treat students like their own. Truly grateful to the Doon family.",
    name: 'Mrs. Anjali Verma',
    role: 'Parent of Class VI Student',
    initials: 'AV',
  },
];

export default function TrustSection() {
  return (
    <section className="adm-section adm-trust-bg" id="trust">
      <div className="adm-section-inner">
        {/* Header */}
        <div className="adm-section-header">
          <div className="adm-section-label">Trust & Results</div>
          <h2 className="adm-section-title">
            Numbers That <span className="gold">Speak For Us</span>
          </h2>
          <p className="adm-section-desc">
            Two decades of educational excellence, thousands of successful students,
            and a community of happy parents.
          </p>
        </div>

        {/* Counters */}
        <div className="adm-trust-counters">
          {counters.map((counter, index) => (
            <div className="adm-trust-counter" key={index}>
              <div className="value">
                {counter.value}<span className="suffix">{counter.suffix}</span>
              </div>
              <div className="label">{counter.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="adm-section-header" style={{ marginBottom: '2rem' }}>
          <h3 className="adm-section-title" style={{ fontSize: '1.6rem' }}>
            What Parents Say
          </h3>
        </div>

        <div className="adm-testimonials">
          {testimonials.map((t, index) => (
            <div className="adm-testimonial" key={index}>
              <span className="quote-mark">&ldquo;</span>
              <div className="adm-stars">★★★★★</div>
              <p>{t.quote}</p>
              <div className="adm-testimonial-author">
                <div className="adm-testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="adm-testimonial-name">{t.name}</div>
                  <div className="adm-testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
