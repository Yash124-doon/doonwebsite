import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mission and Vision of Doon International School Jabalpur',
  description: 'Explore the mission and vision of Doon International School Jabalpur focused on values, academic excellence and holistic development.',
  keywords: ['mission and vision doon international school jabalpur', 'school core values', 'academic excellence mission', 'holistic development vision school'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/about/mission-vision/',
  },
};

export default function MissionVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
