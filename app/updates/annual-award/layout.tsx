import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Award Ceremony in Jabalpur School',
  description: 'Highlights of the annual award ceremony in Jabalpur school. Honouring student excellence in academics, sports, and extracurricular activities.',
  keywords: ['annual award ceremony in jabalpur school', 'honouring student excellence', 'school annual awards', 'extracurricular activities awards jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/annual-award/',
  },
};

export default function AnnualAwardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
