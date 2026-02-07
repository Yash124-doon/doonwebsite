import { getDiscoverDoonData } from '../../lib/getData';
import Hero from '../../components/sections/discover-doon/Hero';
import MainHeading from '../../components/sections/discover-doon/MainHeading';
import PillarSection from '../../components/sections/discover-doon/PillarSection';
import AlternatingPillar from '../../components/sections/discover-doon/AlternatingPillar';
import PillarGrid from '../../components/sections/discover-doon/PillarGrid';
import PillarHighlight from '../../components/sections/discover-doon/PillarHighlight';
import FinalCTA from '../../components/sections/discover-doon/FinalCTA';

export default async function DiscoverDoon() {
  const discoverData = await getDiscoverDoonData();

  return (
    <main className="relative text-sm sm:text-base">
      {/* Subtle background accent elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Light circular shapes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#002B6B]/5 rounded-full blur-sm" />
        <div className="absolute top-3/4 right-1/6 w-24 h-24 bg-[#FFD700]/8 rounded-full blur-sm" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-[#002B6B]/5 rounded-full blur-sm" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-[#FFD700]/5 rounded-full blur-sm animate-pulse" />

        {/* Diagonal gradient accents */}
        <div className="absolute top-1/6 left-1/3 w-48 h-2 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent transform rotate-12" />
        <div className="absolute bottom-1/6 right-1/3 w-32 h-2 bg-gradient-to-r from-transparent via-[#002B6B]/8 to-transparent transform -rotate-12" />
      </div>
      {/* Breadcrumb */}
      <nav className="px-4 py-3 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto text-sm">
          <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Discover Doon</span>
        </div>
      </nav>

      <Hero
        heading={discoverData.hero.heading}
        subheading={discoverData.hero.subheading}
        videos={discoverData.hero.videos}
        primaryCta={discoverData.hero.primaryCta}
        secondaryCta={discoverData.hero.secondaryCta}
      />

      <div className="section-spacing">
        <MainHeading title={discoverData.mainHeading} />

        <PillarSection pillars={discoverData.pillars} />

        <AlternatingPillar pillars={discoverData.pillars} />

        <PillarGrid pillars={discoverData.pillars} />

        <PillarHighlight pillar={discoverData.pillars[9]} />

        <FinalCTA
          heading={discoverData.finalCta.heading}
          primaryCta={discoverData.finalCta.primaryCta}
          secondaryCta={discoverData.finalCta.secondaryCta}
        />
      </div>
    </main>
  );
}
