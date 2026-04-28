import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best School with Sports & Activities in Jabalpur | Doon International',
  description: 'Explore Beyond Classroom at Doon International School Jabalpur with sports, arts, leadership and skill development for holistic student growth.',
  keywords: ['best school with sports and activities in jabalpur', 'beyond classroom doon international', 'leadership skill development school', 'holistic student growth jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/',
  },
};

export default function BeyondClassroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
