import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative Learning & Arts Program in Jabalpur | Doon International',
  description: 'Discover creative learning through art, innovation and expression at Doon International, a top co-educational CBSE school in Jabalpur.',
  keywords: ['creative learning and arts program in jabalpur', 'art innovation expression school', 'co-educational cbse school jabalpur', 'doon international creative learning'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/creative-convergence/',
  },
};

export default function CreativeConvergenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
