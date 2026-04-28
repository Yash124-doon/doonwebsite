import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Results & Academic Performance in Jabalpur',
  description: 'Check school results and academic performance in Jabalpur. Consistent board results, merit achievements, and student success records.',
  keywords: ['school results and academic performance in jabalpur', 'cbse board results jabalpur', 'merit achievements school jabalpur', 'student success records'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/results/',
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
