import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'National Festivals Celebration in Jabalpur School',
  description: 'Celebrate national festivals in Jabalpur school. Patriotic events, cultural activities, and student participation in meaningful celebrations.',
  keywords: ['national festivals celebration in jabalpur school', 'patriotic events school', 'cultural activities school jabalpur', 'student participation festivals'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/national-festivals/',
  },
};

export default function NationalFestivalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
