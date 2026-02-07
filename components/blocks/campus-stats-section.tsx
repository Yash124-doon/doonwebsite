import CampusStats from './campus-stats';

const statsData = [
  { title: '15 Acres', subtitle: 'Green Campus', icon: 'Building' },
  { title: '3,000+', subtitle: 'No. of Students', icon: 'Users' },
  { title: '80+', subtitle: 'CLASSROOM', icon: 'GraduationCap' },
  { title: '20+', subtitle: 'LABS', icon: 'Grid' },
];

export default function CampusStatsSection() {
  return (
    <section className="w-full bg-[#F8F9FB] py-0.500 md:py-0.500 mt-0 mb-0 border-t border-gray-200">
      <CampusStats stats={statsData} />
    </section>
  );
}
