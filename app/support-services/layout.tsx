import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Day Boarding & Student Support Services in Jabalpur | Doon International',
  description: 'Explore support services at Doon International School Jabalpur including boarding, transport, medical care and facilities for holistic student support.',
  keywords: ['day boarding student support services jabalpur', 'school transport medical care jabalpur', 'holistic student support doon school', 'support services doon international'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/support-services/',
  },
};

export default function SupportServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
