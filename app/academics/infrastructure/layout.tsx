import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Infrastructure in Jabalpur School | Doon International',
  description: 'Explore modern academic infrastructure at Doon International School Jabalpur including labs, classrooms and learning resources.',
  keywords: ['academic infrastructure in jabalpur school', 'modern academic infrastructure', 'school labs classrooms learning resources', 'doon international infrastructure'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/academics/infrastructure/',
  },
};

export default function InfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
