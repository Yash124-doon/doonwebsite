import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Annual Function in Jabalpur',
  description: 'Explore the school annual function in Jabalpur. Cultural performances, student talent, and memorable celebrations showcasing creativity and confidence.',
  keywords: ['school annual function in jabalpur', 'cultural performances school', 'student talent school function', 'creativity and confidence school'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/updates/annual-function/',
  },
};

export default function AnnualFunctionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
