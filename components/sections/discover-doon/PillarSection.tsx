import { DiscoverDoonPillar } from '../../../types/discover-doon';
import { BookOpen, GraduationCap, Home, Microscope, Award, BarChart3, Globe, Brain, Trophy, Star } from 'lucide-react';

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

interface PillarSectionProps {
  pillars: DiscoverDoonPillar[];
}

export default function PillarSection({ pillars }: PillarSectionProps) {
  // Take the first 3 pillars
  const sectionPillars = pillars.slice(0, 3);

  return (

    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {sectionPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[420px] flex flex-col"
            >
              {/* Pillar number indicator */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 bg-[#FFD700] text-[#003366] rounded-full mb-6 text-lg font-semibold shadow-lg animate-bounce"
                style={{ animation: 'pulse 0.8s ease-in-out 0.2s' }}
              >
                {pillar.id}
              </div>

              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-2xl">{getPillarIcon(pillar.id)}</span>
                {pillar.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base flex-grow px-2 py-1">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
