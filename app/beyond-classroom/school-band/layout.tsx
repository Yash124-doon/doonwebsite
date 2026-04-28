import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Band & Music Activities in Jabalpur | Doon International',
  description: 'Discover music and band activities at Doon International School Jabalpur that nurture creativity, discipline and teamwork.',
  keywords: ['school band and music activities in jabalpur', 'music band activities school', 'nurture creativity discipline teamwork', 'school band jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/school-band/',
  },
};

export default function SchoolBandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
