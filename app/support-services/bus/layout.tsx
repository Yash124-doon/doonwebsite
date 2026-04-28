import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Transport & Bus Facility in Jabalpur | Doon International',
  description: 'Discover safe and reliable school transport facilities at Doon International School Jabalpur with secure and efficient student commuting.',
  keywords: ['school transport and bus facility in jabalpur', 'safe reliable school transport', 'secure efficient student commuting', 'doon school bus facility'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/support-services/bus/',
  },
};

export default function BusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
