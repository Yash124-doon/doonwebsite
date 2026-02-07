import { DiscoverDoonPillar } from '../../../types/discover-doon';
import { BookOpen, GraduationCap, Home, Microscope, Award, BarChart3, Globe, Brain, Trophy, Star } from 'lucide-react'

interface PillarGridProps {
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

export default function PillarGrid({ pillars }: PillarGridProps) {
  // Take pillars 7, 8, 9 (indices 6, 7, 8)
  const sectionPillars = pillars.slice(6, 9);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Growth & Exploration
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectionPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#FFD700] min-h-[400px] flex flex-col animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* Pillar number indicator */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 bg-[#FFD700] text-[#003366] rounded-full mb-6 text-xl font-bold shadow-lg animate-bounce"
                style={{ animation: 'pulse 0.8s ease-in-out 0.2s' }}
              >
                {pillar.id}
              </div>

              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-2xl">{getPillarIcon(pillar.id)}</span>
                {pillar.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm flex-grow px-2 py-1">
                {pillar.body}
              </p>

              {/* Decorative element */}
              <div className="mt-6 flex justify-end">
                <div
                  className="w-8 h-8 bg-[#FFD700] rounded-full opacity-30 hover:rotate-90 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
