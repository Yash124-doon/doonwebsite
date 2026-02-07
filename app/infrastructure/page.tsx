import { getData } from '../../lib/getData';
import NewsHighlightsSection from '../../components/sections/infrastructure/NewsHighlightsSection';
import FacilityIconGrid from '../../components/sections/infrastructure/FacilityIconGrid';
import InfrastructureFacilitiesSection from '../../components/sections/infrastructure/FacilitiesSection';

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
