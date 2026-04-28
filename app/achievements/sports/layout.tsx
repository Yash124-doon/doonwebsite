import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Achievements of School in Jabalpur',
  description: 'Discover sports achievements of our school in Jabalpur. Wins in inter-school competitions, championships, and outstanding student performance.',
  keywords: ['sports achievements of school in jabalpur', 'wins in inter-school competitions', 'championships school jabalpur', 'outstanding student performance sports'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/achievements/sports/',
  },
};

export default function SportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
