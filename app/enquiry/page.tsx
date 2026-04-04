/**
 * @fileoverview Enquiry page for Doon International School
 * @description Renders the modern admission enquiry form
 */

'use client';

import ModernAdmissionForm from '@/components/admission/ModernAdmissionForm';

export default function EnquiryPage() {
  return (
    <div className="bg-slate-50">
      <ModernAdmissionForm />
    </div>
  );
}
