import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Annual Report in Jabalpur',
  description: 'View the school annual report in Jabalpur. Detailed overview of academic progress, events, achievements, and institutional growth.',
  keywords: ['school annual report in jabalpur', 'academic progress school', 'events achievements overview', 'institutional growth school'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/annual-report/',
  },
};

export default function AnnualReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
