import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best International School in Jabalpur | Discover Doon International',
  description: 'Discover Doon International School Jabalpur, a leading CBSE and co-educational school focused on academics, infrastructure and holistic growth.',
  keywords: ['best international school in jabalpur', 'discover doon international', 'leading cbse school jabalpur', 'co-educational school infrastructure holistic growth'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/infrastructure/',
  },
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
