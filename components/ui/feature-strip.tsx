import React from 'react';

export default function FeatureStrip() {
  return (
    <section className="relative text-white">
      {/* Background + gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#032A63] via-[#063A87] to-[#0A4C9B]/90"></div>

      {/* Mobile First Responsive Layout */}
      <div className="relative py-4 px-4 md:py-10 md:px-0">
        <div className="grid gap-3 md:hidden">
          {/* Mobile Cards */}
          <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD200]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path fillRule="evenodd" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-h3 font-heading tracking-tight mb-1">World-Class Infrastructure</h3>
                <p className="text-body text-white/90 leading-tight">
                  Modern classrooms, advanced labs, rich library, and smart learning tools.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD200]" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-h3 font-heading tracking-tight mb-1">Residential & Day Boarding Facilities</h3>
                <p className="text-body text-white/90 leading-tight">
                  Safe hostels, nutritious meals, comfortable stay, and secure environment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-xl p-4 border border-white/20 shadow-lg">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD200]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-h3 font-heading tracking-tight mb-1">Sports & Extracurricular Activities</h3>
                <p className="text-body text-white/90 leading-tight">
                  Excellent sports, music, arts, drama, and holistic student development programs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Continuous Layout */}
        {/* Desktop Continuous Layout */}
<div className="hidden md:flex md:justify-center md:items-st md:py-0 md:px-0">
  {/* 1st block */}
  <div className="text-center flex-1 px-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:!text-[#FFD200] px-4 py-4 text-white group">
    <div className="flex justify-center mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFD200]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
      </svg>
    </div>
    <h3 className="text-white group-hover:!text-[#FFD200] text-h3 font-heading tracking-tight mb-1 transition-colors">
      World-Class Infrastructure
    </h3>
    <p className="text-white group-hover:!text-[#FFD200] text-sm leading-snug max-w-xs mx-auto transition-colors">
      Modern classrooms, advanced labs, rich library, and smart learning tools.
    </p>
  </div>

  {/* divider */}
  <div className="w-[2px] h-20 bg-[#FFD200] mx-6 self-center"></div>

  {/* 2nd block */}
  <div className="text-center flex-1 px-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:!text-[#FFD200] px-4 py-4 text-white group">
    <div className="flex justify-center mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFD200]" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
      </svg>
    </div>
    <h3 className="text-white group-hover:!text-[#FFD200] text-h3 font-heading tracking-tight mb-1 transition-colors">
      Residential & Day Boarding Facilities
    </h3>
    <p className="text-white group-hover:!text-[#FFD200] text-sm leading-snug max-w-xs mx-auto transition-colors">
      Safe hostels, nutritious meals, comfortable stay, and secure environment.
    </p>
  </div>

  {/* divider */}
  <div className="w-[2px] h-20 bg-[#FFD200] mx-6 self-center"></div>

  {/* 3rd block */}
  <div className="text-center flex-1 px-2 transition-all duration-300 cursor-pointer hover:scale-105 hover:!text-[#FFD200] px-4 py-4 text-white group">
    <div className="flex justify-center mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFD200]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    </div>
    <h3 className="text-white group-hover:!text-[#FFD200] text-h3 font-heading tracking-tight mb-1 transition-colors">
      Sports & Extracurricular Activities
    </h3>
    <p className="text-white group-hover:!text-[#FFD200] text-sm leading-snug max-w-xs mx-auto transition-colors">
      Excellent sports, music, arts, drama, and holistic student development programs.
    </p>
  </div>
</div>


      </div>
    </section>
  );
}
