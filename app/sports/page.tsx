import { getSportsData } from '../../lib/getData';
import InfrastructureFacilitiesSection from '../../components/sections/infrastructure/FacilitiesSection';

export default async function Sports() {
  const sportsData = await getSportsData();

  return (
    <main>
      <InfrastructureFacilitiesSection
        facilities={sportsData.facilities}
        facilityNav={sportsData.facilityNav}
        title="Sports Programs"
      />
    </main>
  );
}
