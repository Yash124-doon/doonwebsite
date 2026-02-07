import { getAcademicsData } from '../../lib/getData';
import InfrastructureFacilitiesSection from '../../components/sections/infrastructure/FacilitiesSection';

export default async function Academics() {
  const academicsData = await getAcademicsData();

  return (
    <main>
      <InfrastructureFacilitiesSection
        facilities={academicsData.facilities}
        facilityNav={academicsData.facilityNav}
        title="Academic Programs"
      />
    </main>
  );
}
