import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Investiture Ceremony in Jabalpur',
  description: 'Discover the school investiture ceremony in Jabalpur. Celebrating student leadership, responsibility, and discipline through official appointments.',
  keywords: ['school investiture ceremony in jabalpur', 'student leadership school', 'student council ceremony', 'official appointments school jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/investiture/',
  },
};

export default function InvestitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
