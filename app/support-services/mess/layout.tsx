import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Mess Facility in Jabalpur | Doon International School',
  description: 'Explore hygienic and nutritious mess facilities at Doon International School Jabalpur designed to support student health and residential life.',
  keywords: ['school mess facility in jabalpur', 'hygienic nutritious mess facilities', 'support student health residential life', 'doon school mess jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/support-services/mess/',
  },
};

export default function MessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
