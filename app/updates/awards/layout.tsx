import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Awards & Achievements in Jabalpur',
  description: 'Explore school awards and achievements in Jabalpur. Recognising academic excellence, sports success, and student accomplishments across all levels.',
  keywords: ['school awards and achievements in jabalpur', 'academic excellence jabalpur', 'sports success school jabalpur', 'student accomplishments jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/awards/',
  },
};

export default function AwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
