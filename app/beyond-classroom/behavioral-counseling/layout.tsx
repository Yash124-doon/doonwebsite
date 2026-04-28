import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Behavioral Counseling School in Jabalpur | Doon International',
  description: 'Support student well-being through behavioral counseling at Doon International School, a leading co-educational school in Jabalpur.',
  keywords: ['student behavioral counseling school in jabalpur', 'support student well-being', 'behavioral counseling doon school', 'leading co-educational school jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/beyond-classroom/behavioral-counseling/',
  },
};

export default function BehavioralCounselingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
