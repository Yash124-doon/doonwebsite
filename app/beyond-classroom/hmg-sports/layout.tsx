import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Excellence Program in Jabalpur | Doon International School',
  description: 'Discover professional sports training and athlete development at Doon International School, one of the best schools with sports facilities in Jabalpur.',
  keywords: ['sports excellence program in jabalpur', 'professional sports training school', 'athlete development doon school', 'best schools with sports facilities jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/hmg-sports/',
  },
};

export default function HMGSportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
