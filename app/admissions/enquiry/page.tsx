'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const sidebarItems = [
  { name: "Admissions Overview", href: "/admissions" },
  { name: "How To Apply", href: "/admissions/how-to-apply" },
  { name: "Fee Structure", href: "/admissions/fees" },
  { name: "Admission Enquiry", href: "/admissions/enquiry" },
  { name: "Withdrawal Policy", href: "/admissions#withdrawal" },
];

export default function AdmissionEnquiryPage() {
  return (
    <>
      <PageHero
        title="Admission Enquiry"
        subtitle="Take the first step towards a bright future. We'd love to hear from you."
        backgroundImage="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Admission Enquiry' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Admissions">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Express Your Interest</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Please fill out the form below, and our admissions team will get back to you 
                with the relevant information and a schedule for a campus visit.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2">
                  <motion.form 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl"
                  >
                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Student Name</label>
                           <input type="text" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Enter student name" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Proposed Grade</label>
                           <select className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all">
                              <option>Select Grade</option>
                              <option>Pre-Primary</option>
                              <option>Grade 1-5</option>
                              <option>Grade 6-10</option>
                              <option>Grade 11-12</option>
                           </select>
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Parent Name</label>
                           <input type="text" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Enter parent name" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                           <input type="tel" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Enter mobile number" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                        <input type="email" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Enter your email" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Your Message / Queries</label>
                        <textarea rows={4} className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="How can we help you?"></textarea>
                     </div>
                     <button type="submit" className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl hover:bg-black hover:-translate-y-1 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                        Submit Enquiry <Send className="w-4 h-4" />
                     </button>
                  </motion.form>
               </div>

               <div className="space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100"
                  >
                     <h4 className="text-xl font-bold text-primary mb-6">Contact Admission Office</h4>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-white rounded-xl shadow-sm text-accent"><Phone className="w-5 h-5" /></div>
                           <div>
                              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Call Us</div>
                              <div className="text-sm font-bold text-primary">+91 74711 25154</div>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-white rounded-xl shadow-sm text-accent"><Mail className="w-5 h-5" /></div>
                           <div>
                              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email Us</div>
                              <div className="text-sm font-bold text-primary">info@disjabalpur.edu.in</div>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-white rounded-xl shadow-sm text-accent"><MapPin className="w-5 h-5" /></div>
                           <div>
                              <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Visit Us</div>
                              <div className="text-sm font-bold text-primary">N.H. 07, Gram Imlai, Jabalpur</div>
                           </div>
                        </div>
                     </div>
                  </motion.div>

                  <div className="p-8 bg-accent/20 rounded-[2rem] border border-accent/10">
                     <h4 className="text-lg font-black text-primary mb-4 italic uppercase">Visit During Office Hours</h4>
                     <p className="text-sm text-primary/70 mb-4 leading-relaxed font-semibold">
                        Monday - Saturday<br />
                        9:00 AM to 3:30 PM
                     </p>
                     <p className="text-xs text-primary/50 font-bold">Closed on Sundays & Public Holidays</p>
                  </div>
               </div>
            </div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
