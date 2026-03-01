'use client';

import './admission.css';

const programs = [
  { icon: 'fas fa-child', title: 'Pre-Primary', classes: 'Nursery – KG', tag: 'Age 3–5', description: 'Foundation years with play-based learning' },
  { icon: 'fas fa-book-open', title: 'Primary', classes: 'Class I – V', tag: 'Age 6–10', description: 'Building fundamentals in all subjects' },
  { icon: 'fas fa-flask', title: 'Middle School', classes: 'Class VI – VIII', tag: 'Age 11–13', description: 'Exploring subjects with lab-based approach' },
  { icon: 'fas fa-bullseye', title: 'Secondary', classes: 'Class IX', tag: 'Board Foundation', description: 'Board preparation with expert guidance' },
  { icon: 'fas fa-home', title: 'Day Boarding', classes: 'All Classes', tag: 'Day Scholar', description: 'Extended school hours with supervised study & meals' },
  { icon: 'fas fa-bed', title: 'Hostel Facility', classes: 'All Classes', tag: 'Residential', description: 'Safe residential campus with homely environment' },
];

export default function AcademicPrograms() {
  return (
    <section className="adm-section" id="academic-programs">
      <div className="adm-section-inner">
        {/* Header */}
        <div className="adm-section-header">
          <div className="adm-section-label">Academic Programs</div>
          <h2 className="adm-section-title">
            From <span className="gold">Nursery to Class IX</span>
          </h2>
          <p className="adm-section-desc">
            CBSE-affiliated comprehensive education programs with Day Boarding &amp; Hostel
            facilities — designed to prepare students for future success.
          </p>
        </div>

        {/* Grid */}
        <div className="adm-programs-grid">
          {programs.map((prog, index) => (
            <div className="adm-program-card" key={index}>
              <span className="adm-program-icon-wrap">
                <i className={prog.icon} />
              </span>
              <h4>{prog.title}</h4>
              <p>{prog.classes}</p>
              <span className="tag">{prog.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
