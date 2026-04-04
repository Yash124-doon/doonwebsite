import React from 'react';

const associations = [
  { id: 1, name: 'Chrysalis', logo: '/images/associations/Chrisalis.png', punchline: 'Awakening Human Potential, One Child at a Time.', benefit: 'Delivers holistic, child-centric learning that nurtures creativity and critical thinking.' },
  { id: 2, name: 'Educis', logo: '/images/associations/educis.png', punchline: 'Empowering Schools with Intelligent Systems.', benefit: 'Comprehensive ERP solution integrating academics, administration, finance, and communication.' },
  { id: 3, name: 'Extra Marks', logo: '/images/associations/EXTRAMARKS.png', punchline: 'Learning Made Interactive, Engaging, and Effective.', benefit: 'Provides digital content and smart learning modules that enhance classroom teaching.' },
  { id: 4, name: 'FSM', logo: '/images/associations/Fsm-new-logo-2.png', punchline: 'Inspiring Creativity Through the Language of Music.', benefit: 'Builds confidence and artistic expression with structured music education programs.' },
  { id: 5, name: 'Learning Lingos', logo: '/images/associations/LearningLingos.png', punchline: 'Unlocking Global Opportunities Through Languages.', benefit: 'Equips students with multilingual skills, fostering cultural awareness and career readiness.' },
  { id: 6, name: 'Gun for Glory', logo: '/images/associations/gfg.png', punchline: 'Precision. Focus. Excellence.', benefit: 'Exclusive partnership with Olympian Gagan Narang offering world-class shooting training.' },
  { id: 7, name: 'AFS', logo: '/images/associations/AFS.png', punchline: 'Connecting Young Minds Across Borders.', benefit: 'Offers intercultural exchange programs that cultivate empathy, leadership, and global citizenship.' },
  { id: 8, name: 'STEMROBO', logo: '/images/associations/STEMROBO.png', punchline: 'Innovation Through STEM and Robotics.', benefit: 'Provides world-class STEM/Robotics curriculum aligned with NEP 2020.' },
];

export default function OurAssociations() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-heading tracking-tight">
            Our Associations
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-body">
            Doon International School is proud to be affiliated with and recognized by leading global educational bodies. These prestigious partnerships reflect our unwavering commitment to maintaining the highest benchmarks of academic excellence, innovation, and holistic student development.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative w-full overflow-hidden flex bg-gray-50/50 py-16 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] border-y border-gray-100">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            animation: slide 50s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}} />

        {/*
          Gradient masks for smooth fade in/out at the edges.
          Pointer-events-none ensures it doesn't block hover effects on the items.
        */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-slide whitespace-nowrap" style={{ width: 'max-content' }}>
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...associations, ...associations].map((assoc, idx) => (
            <div
              key={`${assoc.id}-${idx}`}
              className="flex-shrink-0 w-80 h-[320px] mx-4 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-start p-6 transition-all duration-500 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-2 group cursor-pointer overflow-hidden relative"
            >
              {/* Top Section Default View */}
              <div className="flex flex-col items-center w-full transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
                <img
                  src={assoc.logo}
                  alt={`${assoc.name} Logo`}
                  className="w-auto h-20 object-contain mb-4 transition-all duration-500 group-hover:scale-110 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="text-xl font-bold text-gray-800 transition-colors duration-300 tracking-wide text-center w-full truncate">
                  {assoc.name}
                </div>
              </div>

              {/* Reveal Text Section on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-sm transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 border-t border-gray-50">
                <p className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider text-center whitespace-normal leading-tight h-8 flex items-center justify-center">
                  "{assoc.punchline}"
                </p>
                <p className="text-sm text-gray-600 text-center whitespace-normal leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                  {assoc.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
