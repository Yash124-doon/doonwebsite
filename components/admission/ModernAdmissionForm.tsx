/**
 * @fileoverview Compact, Single-Screen Admission Enquiry Form
 * @description Features a wide, horizontal layout to fit all fields within one view
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AdmissionFormData {
  childFirstName: string;
  classId: string;
  studentGender: string;
  childDateOfBirth: string;
  fatherFirstName: string;
  motherFirstName: string;
  category: string;
  mobileNumber: string;
  address: string;
  email: string;
  captcha_code: string;
}

const CLASS_OPTIONS = [
  'NURSERY', 'Jr. KG', 'Sr. KG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
];

const GENDER_OPTIONS = ['Male', 'Female', 'Others'];

const CATEGORY_OPTIONS = ['Boarder', 'Day Boarder', 'Day School'];

const ModernAdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    childFirstName: '',
    classId: '',
    studentGender: '',
    childDateOfBirth: '',
    fatherFirstName: '',
    motherFirstName: '',
    category: '',
    mobileNumber: '',
    address: '',
    email: '',
    captcha_code: '',
  });

  const [captchaText, setCaptchaText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const generateCaptcha = useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: onlyNums }));
      }
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (formData.captcha_code.toUpperCase() !== captchaText) {
      setFormError('Invalid captcha code.');
      generateCaptcha();
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      setFormError('Mobile number must be 10 digits.');
      return;
    }

    setIsSubmitting(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/enquiry/admission-enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // GTM dataLayer push for conversion tracking
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: "enquiry_form_submit",
            form_name: "enquiry_form",
            email: formData.email,
            phone: formData.mobileNumber
          });
        }

        setIsSuccess(true);
        setFormData({
          childFirstName: '',
          classId: '',
          studentGender: '',
          childDateOfBirth: '',
          fatherFirstName: '',
          motherFirstName: '',
          category: '',
          mobileNumber: '',
          address: '',
          email: '',
          captcha_code: '',
        });
      } else {
        const errorData = await response.json();
        setFormError(errorData.message || 'Submission failed.');
      }
    } catch (error) {
      setFormError('Connection error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] bg-slate-50 py-6 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[1400px] w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row"
      >
        {/* Sidebar Info */}
        <div className="bg-[#002B6B] md:w-80 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <div className="bg-white p-3 rounded-2xl shadow-lg w-fit mb-8">
              <Image
                src="/assets/doonlogo.png"
                alt="DIS Logo"
                width={100}
                height={40}
                className="h-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-white leading-tight mb-4">
              Admission<br />Enquiry 2026-27
            </h1>
            <p className="text-blue-100/70 text-sm font-medium leading-relaxed">
              Join the most prestigious educational community in Jabalpur. Fill out the form to start your journey.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {[
              { l: 'Expert Faculty', i: '✦' },
              { l: 'Pristine Campus', i: '✦' },
              { l: 'Holistic Growth', i: '✦' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-blue-200">
                <span className="text-[#F2B33D]">{item.i}</span> {item.l}
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Form Content */}
        <div className="flex-1 p-6 md:p-10">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Enquiry Received!</h2>
              <p className="text-slate-600 mb-8 max-w-sm">Our admissions counselor will reach out to you within 24 hours.</p>
              <button onClick={() => setIsSuccess(false)} className="bg-[#002B6B] text-white px-10 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Submit New Enquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Field 1 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Student Name</label>
                  <input
                    type="text"
                    name="childFirstName"
                    placeholder="Full Name"
                    required
                    value={formData.childFirstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>

                {/* Field 2 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Class</label>
                  <select
                    name="classId"
                    required
                    value={formData.classId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium appearance-none cursor-pointer transition-all"
                  >
                    <option value="" disabled>Select Class</option>
                    {CLASS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Field 3 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Gender</label>
                  <select
                    name="studentGender"
                    required
                    value={formData.studentGender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  >
                    <option value="" disabled>Select Gender</option>
                    {GENDER_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Field 4 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Date of Birth</label>
                  <input
                    type="date"
                    name="childDateOfBirth"
                    required
                    value={formData.childDateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>

                {/* Field 5 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Father Name</label>
                  <input
                    type="text"
                    name="fatherFirstName"
                    placeholder="Father's Name"
                    required
                    value={formData.fatherFirstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>

                {/* Field 6 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Mother Name</label>
                  <input
                    type="text"
                    name="motherFirstName"
                    placeholder="Mother's Name"
                    required
                    value={formData.motherFirstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>

                {/* Field 7 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Category</label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  >
                    <option value="" disabled>Select Category</option>
                    {CATEGORY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Field 8 */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Mobile No.</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="10 Digits"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>

                {/* Field 9 - Spans 2 */}
                <div className="lg:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>

                {/* Field 10 - Spans 2 */}
                <div className="lg:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold text-[#002B6B] uppercase tracking-wider ml-1">Current Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Full Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#002B6B] outline-none text-sm font-medium transition-all"
                  />
                </div>
              </div>

              {/* Bottom Row: Captcha & Submit */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-6 pt-4 border-t border-slate-100">
                <div className="flex-1 flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <span className="bg-white px-5 py-2.5 rounded-lg border border-slate-200 font-mono font-black tracking-widest text-[#002B6B] text-lg select-none">
                    {captchaText}
                  </span>
                  <button type="button" onClick={generateCaptcha} className="p-2 text-[#002B6B] hover:scale-110 transition-all">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  </button>
                  <input
                    type="text"
                    name="captcha_code"
                    placeholder="Verify Code"
                    required
                    value={formData.captcha_code}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-[#002B6B] outline-none text-sm transition-all"
                  />
                </div>

                <div className="lg:w-72">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-[#002B6B]/20 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-slate-300' : 'bg-[#002B6B] hover:bg-[#003d99] text-white'
                      }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit enquiry'}
                    {!isSubmitting && <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>}
                  </button>
                </div>
              </div>

              {formError && (
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  {formError}
                </div>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ModernAdmissionForm;
