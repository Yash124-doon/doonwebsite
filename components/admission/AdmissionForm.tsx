'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import './admission.css';

interface FormData {
  student_name: string;
  parent_name: string;
  phone: string;
  class_applied: string;
  message: string;
}

interface FormErrors {
  student_name?: string;
  phone?: string;
  parent_name?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const CLASS_OPTIONS = [
  '',
  'Nursery',
  'LKG',
  'UKG',
  'Class I',
  'Class II',
  'Class III',
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
];

export default function AdmissionForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    student_name: '',
    parent_name: '',
    phone: '',
    class_applied: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Validate form
  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    // Student name
    if (!formData.student_name.trim()) {
      newErrors.student_name = 'Student name is required';
    } else if (formData.student_name.trim().length < 2) {
      newErrors.student_name = 'Name must be at least 2 characters';
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-() ]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError('');
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/admission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_name: formData.student_name.trim(),
          parent_name: formData.parent_name.trim() || undefined,
          phone: formData.phone.trim(),
          class_applied: formData.class_applied || undefined,
          message: formData.message.trim() || undefined,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Redirect to Thank You page for conversion tracking
        router.push('/admission-landing-page/thank-you');
        return;
      } else {
        // Handle validation errors from backend
        if (result.errors && Array.isArray(result.errors)) {
          const backendErrors: FormErrors = {};
          result.errors.forEach((err: { field: string; message: string }) => {
            if (err.field === 'student_name') backendErrors.student_name = err.message;
            if (err.field === 'phone') backendErrors.phone = err.message;
            if (err.field === 'parent_name') backendErrors.parent_name = err.message;
          });
          setErrors(backendErrors);
        } else {
          setSubmitError(result.message || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset to show form again
  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError('');
  };

  return (
    <section className="adm-section adm-form-section" id="admission-form">
      <div className="adm-section-inner">
        {/* Section Header */}
        <div className="adm-section-header">
          <div className="adm-section-label">Apply Now</div>
          <h2 className="adm-section-title">
            Start Your Child&apos;s <span className="gold">Journey Today</span>
          </h2>
          <p className="adm-section-desc">
            Fill out the quick form below and our admission team will contact you
            within 24 hours for free counseling.
          </p>
        </div>

        {/* Form Card */}
        <div className="adm-form-wrapper">
          {isSuccess ? (
            /* ───── Success State ───── */
            <div className="adm-form-success">
              <div className="adm-form-success-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3>Application Submitted!</h3>
              <p>
                Thank you for your interest in Doon International School. Our admission
                counselor will contact you within 24 hours. We look forward to welcoming
                your child to the Doon family!
              </p>
              <button onClick={handleReset} id="form-submit-another">
                Submit Another Application
              </button>
            </div>
          ) : (
            /* ───── Form ───── */
            <>
              <div className="adm-form-header">
                <h2>Admission Inquiry Form</h2>
                <p>All fields marked with * are required</p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="adm-form-grid">
                  {/* Student Name */}
                  <div className="adm-form-group">
                    <label htmlFor="student_name">
                      Student Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="student_name"
                      name="student_name"
                      className={`adm-form-input ${errors.student_name ? 'error' : ''}`}
                      placeholder="Enter student's full name"
                      value={formData.student_name}
                      onChange={handleChange}
                      maxLength={100}
                      autoComplete="name"
                    />
                    {errors.student_name && (
                      <span className="adm-form-error">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        {errors.student_name}
                      </span>
                    )}
                  </div>

                  {/* Parent Name */}
                  <div className="adm-form-group">
                    <label htmlFor="parent_name">Parent / Guardian Name</label>
                    <input
                      type="text"
                      id="parent_name"
                      name="parent_name"
                      className="adm-form-input"
                      placeholder="Enter parent's name"
                      value={formData.parent_name}
                      onChange={handleChange}
                      maxLength={100}
                      autoComplete="name"
                    />
                  </div>

                  {/* Phone */}
                  <div className="adm-form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`adm-form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={20}
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <span className="adm-form-error">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Class Applying For */}
                  <div className="adm-form-group">
                    <label htmlFor="class_applied">Class Applying For</label>
                    <select
                      id="class_applied"
                      name="class_applied"
                      className="adm-form-select"
                      value={formData.class_applied}
                      onChange={handleChange}
                    >
                      <option value="">Select Class</option>
                      {CLASS_OPTIONS.filter(Boolean).map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="adm-form-group full-width">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      className="adm-form-textarea"
                      placeholder="Any specific queries or information you'd like to share..."
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={1000}
                      rows={3}
                    />
                  </div>

                  {/* Submit Error */}
                  {submitError && (
                    <div className="adm-form-group full-width">
                      <div className="adm-form-error" style={{ fontSize: '0.88rem', justifyContent: 'center', padding: '0.6rem', background: '#fef5f5', borderRadius: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        {submitError}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="adm-form-submit">
                    <button type="submit" disabled={isSubmitting} id="form-submit-btn">
                      {isSubmitting ? (
                        <>
                          <div className="spinner" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Privacy Note */}
              <div className="adm-form-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Your information is secure and will only be used for admission purposes.
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
