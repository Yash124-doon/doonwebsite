'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';

const enquirySchema = z.object({
  parentName: z.string().min(2, 'Parent/Guardian name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  studentName: z.string().optional(),
  currentGrade: z.string().optional(),
  interestedGrade: z.string().min(1, 'Please select the grade you are interested in'),
  enquiryType: z.string().min(1, 'Please select the type of enquiry'),
  preferredContact: z.string().min(1, 'Please select your preferred contact method'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      parentName: '',
      email: '',
      phone: '',
      studentName: '',
      currentGrade: '',
      interestedGrade: '',
      enquiryType: '',
      preferredContact: '',
      message: '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const gradeOptions = [
    'Pre-Nursery',
    'Nursery',
    'LKG',
    'UKG',
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ];

  const enquiryTypes = [
    'Admission Inquiry',
    'School Tour Request',
    'Fee Structure Information',
    'Curriculum Details',
    'Facilities Information',
    'General Information',
    'Other'
  ];

  const contactMethods = [
    'Phone',
    'Email',
    'WhatsApp',
    'Any'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Parent/Guardian Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Parent/Guardian Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Parent/Guardian full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 9201591900 / +91 9201591892" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

              <FormField
                control={form.control}
                name="preferredContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Contact Method *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select preferred contact method</option>
                        {contactMethods.map((method) => (
                          <option key={method} value={method}>{method}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Student Information */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Name (if applicable)</FormLabel>
                    <FormControl>
                      <Input placeholder="Student's full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentGrade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Grade/Class (if applicable)</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select current grade</option>
                        {gradeOptions.map((grade) => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <FormField
                control={form.control}
                name="interestedGrade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade Interested In *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select grade of interest</option>
                        {gradeOptions.map((grade) => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Enquiry *</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select enquiry type</option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message/Details *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please provide any additional information or specific questions you have about Doon International School..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 font-medium">
                Thank you for your enquiry! We'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 font-medium">
                Sorry, there was an error sending your enquiry. Please try again or contact us directly.
              </p>
            </div>
          )}

          <Link
            href="https://disjabalpur.schoolpad.in/enquiryManager/onlineOpenAdmissionForm/8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#002B6B] text-white hover:bg-[#002B6B]/90 transition-colors px-6 py-3 rounded-md font-medium text-center block"
          >
            Submit Enquiry
          </Link>
        </form>
      </Form>
    </div>
  );
}
