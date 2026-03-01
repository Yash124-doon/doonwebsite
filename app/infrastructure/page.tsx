import type { Metadata } from 'next';
import { getData } from '../../lib/getData';
import NewsHighlightsSection from '../../components/sections/infrastructure/NewsHighlightsSection';
import FacilityIconGrid from '../../components/sections/infrastructure/FacilityIconGrid';
import InfrastructureFacilitiesSection from '../../components/sections/infrastructure/FacilitiesSection';

export const metadata: Metadata = {
  title: 'Best School with Sports & World-Class Facilities in Jabalpur, Madhya Pradesh',
  description: 'Doon International School Jabalpur offers best-in-class sports facilities, smart classrooms, science park, swimming pool & more. Discover why we\'re the top school in Jabalpur, MP',
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/infrastructure',
  },
};

export default async function Infrastructure() {
  const infrastructureData = await getData();

  return (
    <main>
      <FacilityIconGrid items={infrastructureData.facilityNav} />

      <InfrastructureFacilitiesSection facilities={infrastructureData.facilities} facilityNav={infrastructureData.facilityNav} />

      <NewsHighlightsSection updates={infrastructureData.updates} />
    </main>
  );
}
