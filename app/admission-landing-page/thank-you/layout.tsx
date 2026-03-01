import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Doon International School Jabalpur',
  description: 'Thank you for your admission inquiry at Doon International School, Jabalpur. Our team will contact you soon.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
