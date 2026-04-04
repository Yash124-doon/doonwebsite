import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel | Doon International School',
  description: 'Admin panel for Doon International School website management.',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
