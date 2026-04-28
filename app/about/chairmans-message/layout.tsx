import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chairman’s Message | Doon International School Jabalpur',
  description: 'Read the Chairman’s message and vision behind Doon International School Jabalpur and its commitment to quality education.',
  keywords: ['chairman message doon school', 'doon international school chairman', 'vision behind quality education jabalpur', 'school chairman message jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/about/chairmans-message/',
  },
};

export default function ChairmansMessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
