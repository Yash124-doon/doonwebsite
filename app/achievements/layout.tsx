import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Achievements & Awards in Jabalpur, Madhya Pradesh',
  description: 'Explore school achievements and awards in Jabalpur, Madhya Pradesh. Recognising academic excellence, sports success, and student accomplishments across all areas.',
  keywords: ['school achievements and awards in jabalpur', 'academic excellence jabalpur', 'sports success school jabalpur', 'student accomplishments across areas'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/achievements/',
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
