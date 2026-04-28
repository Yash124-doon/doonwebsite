import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best English Medium Residential School in Jabalpur, Madhya Pradesh',
  description: 'Find the best English medium residential school in Jabalpur, Madhya Pradesh. Quality education, safe hostel facilities, and holistic student development.',
  keywords: ['best english medium residential school in jabalpur', 'residential school in madhya pradesh', 'english medium school jabalpur', 'hostel facilities school', 'quality education jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/academics/why-study/',
  },
};

export default function WhyStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
