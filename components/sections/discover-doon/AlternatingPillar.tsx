import { DiscoverDoonPillar } from '../../../types/discover-doon';
import { BookOpen, GraduationCap, Home, Microscope, Award, BarChart3, Globe, Brain, Trophy, Star } from 'lucide-react';

interface AlternatingPillarProps {
  pillars: DiscoverDoonPillar[];
}

// Education-themed Lucide React icons for pillars (thin-line, consistent navy color)
const getPillarIcon = (pillarId: number) => {
  const iconProps = { className: 'w-6 h-6 text-[#002B6B]' };

  const icons = {
    1: <BookOpen {...iconProps} />,
    2: <GraduationCap {...iconProps} />,
    3: <Home {...iconProps} />,
    4: <Microscope {...iconProps} />,
    5: <Award {...iconProps} />,
    6: <BarChart3 {...iconProps} />,
    7: <Globe {...iconProps} />,
    8: <Brain {...iconProps} />,
    9: <Trophy {...iconProps} />,
    10: <Star {...iconProps} />
  };
  return icons[pillarId as keyof typeof icons] || <BookOpen {...iconProps} />;
};

export default function AlternatingPillar({ pillars }: AlternatingPillarProps) {
  // Take pillars 4, 5, 6 (indices 3, 4, 5)
  const sectionPillars = pillars.slice(3, 6);

  return (
    <section className="py-20 bg-white">
      {sectionPillars.map((pillar, index) => {
        const isEven = index % 2 === 0;

        // Determine animation direction based on pillar requirements
        const getAnimationDirection = (pillarIndex: number) => {
          // Index 0 (pillar 4): fade-left, Index 1 (pillar 5): fade-right, Index 2 (pillar 6): fade-left
          return pillarIndex % 2 === 0 ? 'fade-left' : 'fade-right';
        };

        const animationDir = getAnimationDirection(index);

        return (
          <div
            key={pillar.id}
            id={`pillar-${pillar.id}`}
            className="mb-24 last:mb-0"
          >
            <div className={`max-w-7xl mx-auto px-4 py-16 ${isEven ? '' : 'bg-[#F8FAFF]'} shadow-sm`}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center py-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content side */}
                <div className={isEven ? '' : 'lg:order-2'}>
                  {/* Pillar number indicator */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD700] text-[#003366] rounded-full mb-6 text-xl font-bold shadow-lg animate-bounce"
                    style={{ animation: 'pulse 0.8s ease-in-out 0.4s' }}
                  >
                    {pillar.id}
                  </div>

                  <h3 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    <span className="text-2xl">{getPillarIcon(pillar.id)}</span>
                    {pillar.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed px-2 py-1">
                    {pillar.body}
                  </p>
                </div>

                {/* Visual side */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                  <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    {/* Placeholder for visual content */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#003366] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{pillar.id}</span>
                      </div>
                      <p className="text-gray-700 font-medium">Interactive Visual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
