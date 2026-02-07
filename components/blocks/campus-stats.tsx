import { Building, Users, GraduationCap, Grid } from 'lucide-react';

interface Stat {
  title: string;
  subtitle: string;
  icon: string;
}

interface CampusStatsProps {
  stats: Stat[];
}

export default function CampusStats({ stats }: CampusStatsProps) {
  const iconMap = {
    Building,
    Users,
    GraduationCap,
    Grid,
  };

  return (
    <section className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Mobile Layout - Stacked Vertical Cards */}
        <div className="block md:hidden flex flex-col space-y-3">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-3 shadow-md border border-gray-100 flex flex-col items-center text-center min-h-[100px]"
              >
                <div className="bg-gradient-to-br from-[#FFD200] to-[#E6AE18] p-2 rounded-lg mb-2">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="text-lg font-bold text-gray-800 leading-tight mb-1">{stat.title}</div>
                <div className="text-xs text-gray-600 leading-tight">{stat.subtitle}</div>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout - Original Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={index} className="flex flex-col items-center text-center py-4 hover:scale-[1.4] transition-all duration-300 cursor-pointer">
                <div className="text-accent mb-2">
                  <Icon size={32} />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.title}</div>
                <div className="text-sm text-foreground/70">{stat.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
