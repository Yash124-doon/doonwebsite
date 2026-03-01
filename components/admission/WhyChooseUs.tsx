'use client';

import './admission.css';

const highlights = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'CBSE Curriculum',
    description: 'Rigorous CBSE board curriculum with emphasis on conceptual understanding and practical learning.',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Experienced Faculty',
    description: '50+ qualified and experienced teachers dedicated to nurturing each student\'s potential.',
  },
  {
    icon: 'fas fa-laptop',
    title: 'Smart Classrooms',
    description: 'Digital learning with interactive smartboards, projectors, and modern teaching aids.',
  },
  {
    icon: 'fas fa-hotel',
    title: 'Residential & Day Boarding',
    description: 'Safe hostels, nutritious meals, comfortable stay, and secure environment for students.',
  },
  {
    icon: 'fas fa-trophy',
    title: 'Excellent Results',
    description: 'Consistently outstanding board results with students excelling in competitive exams.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Co-Curricular Activities',
    description: 'Music, dance, art, debate, and cultural programs for all-round personality development.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Safe & Secure Campus',
    description: 'CCTV monitored campus with secure entry, ensuring your child\'s safety at all times.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="adm-section" id="why-choose-us">
      <div className="adm-section-inner">
        {/* Section Header */}
        <div className="adm-section-header">
          <div className="adm-section-label">Why Parents Choose Us</div>
          <h2 className="adm-section-title">
            The <span className="gold">Doon Advantage</span>
          </h2>
          <p className="adm-section-desc">
            We don&apos;t just educate—we inspire. Here&apos;s why families across Jabalpur trust us
            with their children&apos;s future.
          </p>
        </div>

        {/* Grid */}
        <div className="adm-why-grid">
          {highlights.map((item, index) => (
            <div
              className="adm-why-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="adm-why-icon">
                <i className={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
