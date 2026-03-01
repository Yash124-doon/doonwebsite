'use client';

import './admission.css';

const facilities = [
  { icon: 'fas fa-building', title: 'Residential & Day Boarding', desc: 'Safe hostels, nutritious meals, comfortable stay & secure environment', highlight: true },
  { icon: 'fas fa-bus', title: 'Transport', desc: 'GPS-tracked buses covering all major areas of Jabalpur' },
  { icon: 'fas fa-microscope', title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry & Biology labs' },
  { icon: 'fas fa-desktop', title: 'Computer Lab', desc: 'Modern computers with high-speed internet access' },
  { icon: 'fas fa-book', title: 'Library', desc: '10,000+ books, journals & digital resources' },
  { icon: 'fas fa-futbol', title: 'Sports Complex', desc: 'Cricket, basketball, football & indoor games' },
  { icon: 'fas fa-music', title: 'Auditorium', desc: 'State-of-the-art auditorium for cultural events' },
  { icon: 'fas fa-utensils', title: 'Cafeteria', desc: 'Hygienic meals with nutritious balanced menu' },
  { icon: 'fas fa-first-aid', title: 'Medical Room', desc: '24/7 medical support with trained nurse on campus' },
];

export default function FacilitiesSection() {
  return (
    <section className="adm-section" style={{ background: '#f8f9fc' }} id="facilities">
      <div className="adm-section-inner">
        {/* Header */}
        <div className="adm-section-header">
          <div className="adm-section-label">World-Class Facilities</div>
          <h2 className="adm-section-title">
            Everything Your Child <span className="gold">Needs to Thrive</span>
          </h2>
          <p className="adm-section-desc">
            A campus designed for learning, safety, and growth — equipped with
            modern infrastructure including residential &amp; day boarding facilities.
          </p>
        </div>

        {/* Grid */}
        <div className="adm-facilities-grid">
          {facilities.map((item, index) => (
            <div className={`adm-facility-card ${item.highlight ? 'adm-facility-highlight' : ''}`} key={index}>
              <div className="adm-facility-icon">
                <i className={item.icon} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
