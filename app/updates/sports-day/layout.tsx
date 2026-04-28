import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'National Sports Day Celebration in Jabalpur School',
  description: 'Celebrate National Sports Day in Jabalpur school. Promoting fitness, teamwork, and sportsmanship through exciting student activities.',
  keywords: ['national sports day celebration in jabalpur school', 'promoting fitness school', 'sportsmanship teamwork school', 'sports day student activities'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/sports-day/',
  },
};

export default function SportsDayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
