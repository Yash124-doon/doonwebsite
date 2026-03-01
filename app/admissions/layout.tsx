import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions Open | Best CBSE School in Jabalpur, MP | Doon International',
  description: 'Admissions open at Doon International School Jabalpur – Best CBSE residential & day boarding school in MP. English medium, co-ed. Limited seats. Apply Now!',
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/admissions',
  },
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
