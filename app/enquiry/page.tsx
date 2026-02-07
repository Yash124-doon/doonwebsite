'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function EnquiryPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null; // Prevent rendering the enquiry page
}
