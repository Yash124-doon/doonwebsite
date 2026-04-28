import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Assemblies & Celebrations in Jabalpur School',
  description: 'Discover special assemblies and celebrations in Jabalpur school. Themed events, awareness programs, and student-led activities.',
  keywords: ['special assemblies and celebrations in jabalpur school', 'themed events school jabalpur', 'awareness programs school', 'student-led activities school'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/special-assemblies/',
  },
};

export default function SpecialAssembliesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
