import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Medical Facility in Jabalpur School | Doon International',
  description: 'Learn about student medical care and health support services at Doon International School Jabalpur for a safe learning environment.',
  keywords: ['student medical facility in jabalpur school', 'student medical care health support', 'safe learning environment school', 'doon school medical facility'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/support-services/medical/',
  },
};

export default function MedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
