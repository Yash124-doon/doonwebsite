import { DiscoverDoonPillar } from '../../../types/discover-doon';
import { BookOpen, GraduationCap, Home, Microscope, Award, BarChart3, Globe, Brain, Trophy, Star } from 'lucide-react'

interface PillarHighlightProps {
  pillar: DiscoverDoonPillar;
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

export default function PillarHighlight({ pillar }: PillarHighlightProps) {
  // This component is specifically for pillar 10 (last one)

  return (
    <section id={`pillar-${pillar.id}`} className="py-24 px-4 bg-gradient-to-r from-[#002B6B] to-[#FFD700]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          {/* Large pillar number */}
          <div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFA000] text-[#003366] rounded-full mb-8 text-3xl font-black shadow-xl animate-bounce"
            style={{ animation: 'pulse 1.2s ease-in-out 0.5s' }}
          >
            {pillar.id}
          </div>

          <h3 className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-3xl">{getPillarIcon(pillar.id)}</span>
            {pillar.title}
          </h3>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            {pillar.body}
          </p>

          {/* Emphasis decoration */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-16 h-1 bg-[#FFD700] rounded-full" />
            <div className="w-6 h-6 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
            <div className="w-16 h-1 bg-[#FFD700] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
