import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teaching Methodology at Top School in Jabalpur | Doon International',
  description: 'Explore innovative teaching methodology at Doon International School Jabalpur focused on conceptual learning and student success.',
  keywords: ['teaching methodology top school in jabalpur', 'innovative teaching methodology', 'conceptual learning student success', 'doon international teaching'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/academics/methodology/',
  },
};

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
