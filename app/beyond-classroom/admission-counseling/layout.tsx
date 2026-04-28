import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Admission Counseling in Jabalpur | Doon International',
  description: 'Get expert admission guidance at Doon International School Jabalpur for CBSE, day boarding and residential education options.',
  keywords: ['school admission counseling in jabalpur', 'expert admission guidance', 'cbse school admission options', 'day boarding residential education jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/admission-counseling/',
  },
};

export default function AdmissionCounselingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
