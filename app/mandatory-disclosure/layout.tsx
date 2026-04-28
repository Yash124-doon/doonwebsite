import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mandatory Disclosure | Doon International School Jabalpur',
  description: 'View mandatory disclosure details of Doon International School Jabalpur including affiliations, compliance and academic information.',
  keywords: ['mandatory disclosure doon international school', 'school affiliations compliance', 'academic information jabalpur school', 'mandatory disclosure cbse jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/mandatory-disclosure/',
  },
};

export default function MandatoryDisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
