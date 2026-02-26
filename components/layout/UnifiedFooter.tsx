import React from 'react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1HHxdiv1Sp/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
    hoverColor: 'hover:bg-[#1877F2]',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/doon_international_schooljbp?igsh=MWxrMDVuN2M4OHVieA==',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    hoverColor: 'hover:bg-[#E1306C]',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/doon-international-school-jabalpur',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    hoverColor: 'hover:bg-[#0A66C2]',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/DoonIntlJbp',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    hoverColor: 'hover:bg-[#000000]',
  },
];

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
            <div className="mt-5">
              <h5 className="font-semibold text-sm mb-3 text-white/90">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-200 ${social.hoverColor}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
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
