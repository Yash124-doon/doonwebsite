import React from 'react';

const UnifiedFooter: React.FC = () => {
  return (
    <div className="ios-footer-wrapper">
      <footer className="bg-[#002b5b] text-white ios-footer-force-layer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/10">
        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Doon International School, Jabalpur</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            Providing quality education and holistic development for academic excellence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Contact</h4>
          <ul className="text-sm space-y-2 opacity-80">
            <li>Suman Devi Shikshan Sansthan, Anand Enclaves, Jabalpur, MP 482002</li>
            <li>📞 +91 9201591900 / +91 9201591892</li>
            <li>✉️ info@dooninternationaljabalpur.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3 text-white">Quick Links</h4>
          <ul className="text-sm space-y-2 opacity-80">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/admissions" className="hover:underline">Admissions</a></li>
            <li><a href="/updates" className="hover:underline">Updates</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="bg-[#0A2A5C] rounded-lg p-1 ios-safari-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.719629944034!2d79.91134377531525!3d23.070738279140134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3a02a7cdb21%3A0x58771697fa8990ee!2sDoon%20International%20School!5e0!3m2!1sen!2sin!4v1761893512458!5m2!1sen!2sin"
              width="300"
              height="180"
              className="rounded-lg border-0 bg-[#0A2A5C]"
              loading="lazy"
              title="Doon International School Map"
              frameBorder="0"
              scrolling="no"
              style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)', backgroundColor: 'transparent !important' }}
            />
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default UnifiedFooter;
