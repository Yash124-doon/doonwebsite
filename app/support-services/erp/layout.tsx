import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School ERP System for Parents & Students | Doon International',
  description: 'Discover the smart school ERP system at Doon International School Jabalpur for communication, academic updates and student management.',
  keywords: ['school erp system for parents and students', 'smart school erp system', 'academic updates student management', 'doon school erp jabalpur'],
  alternates: {
    canonical: 'https://www.dooninternationaljabalpur.com/support-services/erp/',
  },
};

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
