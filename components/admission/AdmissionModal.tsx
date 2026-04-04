'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
}

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const CLASS_OPTIONS = [
  'Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III',
  'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX'
];

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
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
  const [submitError, setSubmitError] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.student_name.trim()) newErrors.student_name = 'Student name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9+\-() ]{7,20}$/.test(formData.phone.trim())) newErrors.phone = 'Invalid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${API_URL}/api/admission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        onClose();
        router.push('/admission-landing-page/thank-you');
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="adm-modal-overlay">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="adm-modal-backdrop"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="adm-modal-container"
          >
            {/* Close Button */}
            <button className="adm-modal-close" onClick={onClose} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>

            {/* Modal Header */}
            <div className="adm-modal-header">
              <div className="adm-modal-badge">Admission 2026-27</div>
              <h2>Admission Enquiry</h2>
              <p className="adm-modal-subtext">Fill the form below & we'll call you back.</p>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="adm-modal-form">
              <div className="adm-modal-grid">
                <div className="adm-modal-field">
                  <label>Student Name *</label>
                  <input
                    name="student_name"
                    placeholder="Enter student's full name"
                    value={formData.student_name}
                    onChange={handleChange}
                    className={errors.student_name ? 'error' : ''}
                    required
                  />
                  {errors.student_name && <span className="error-text">{errors.student_name}</span>}
                </div>

                <div className="adm-modal-field">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    required
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="adm-modal-field">
                  <label>Parent / Guardian Name</label>
                  <input
                    name="parent_name"
                    placeholder="Enter parent's name"
                    value={formData.parent_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="adm-modal-field">
                  <label>Class Applying For</label>
                  <select name="class_applied" value={formData.class_applied} onChange={handleChange}>
                    <option value="">Select Class</option>
                    {CLASS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div className="adm-modal-field full">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Any specific queries..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {submitError && <div className="adm-modal-error">{submitError}</div>}

              <button type="submit" className="adm-modal-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <span className="spinner-sm" /> Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    Submit Inquiry <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </span>
                )}
              </button>

              <div className="adm-modal-note">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Your data is safe & private.
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
