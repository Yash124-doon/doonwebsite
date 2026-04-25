'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { CreditCard, Download, ShieldCheck, HelpCircle } from 'lucide-react';

const sidebarItems = [
  { name: "Admissions Overview", href: "/admissions" },
  { name: "How To Apply", href: "/admissions/how-to-apply" },
  { name: "Fee Structure", href: "/admissions/fees" },
  { name: "Admission Enquiry", href: "/admissions/enquiry" },
  { name: "Withdrawal Policy", href: "/admissions#withdrawal" },
];

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Transparent information on our educational investment and payment procedures."
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1211&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Investment in Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-10 text-justify">
                At DISJ, we are committed to providing world-class infrastructure and faculty 
                at a competitive price point. Our fee structure is comprehensive and includes 
                access to most on-campus facilities and co-curricular programs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl"
               >
                  <CreditCard className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-black text-primary mb-4">Pay Online</h3>
                  <p className="text-gray-600 mb-8 text-sm">
                    Conveniently pay school fees through our secure payment gateway using 
                    Credit/Debit cards, Net Banking, or UPI.
                  </p>
                  <button className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    Proceed to Payment Portal <Download className="w-4 h-4 hidden" />
                  </button>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-muted p-10 rounded-[2.5rem] flex flex-col justify-between"
               >
                  <div>
                    <h3 className="text-2xl font-black text-primary mb-4">Fee Policy Download</h3>
                    <p className="text-gray-600 text-sm mb-8">
                      Download the detailed category-wise fee structure for the Academic Year 2024-25.
                    </p>
                  </div>
                  <button className="w-full bg-white text-primary border-2 border-primary font-black py-4 rounded-2xl shadow-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" /> Download Fee Schedule
                  </button>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-10">
               {[
                 {
                   title: "Tuition Fees",
                   description: "Charged quarterly, covering the core academic and instructional costs.",
                   icon: <ShieldCheck className="w-6 h-6 text-primary" />
                 },
                 {
                   title: "Facility Charges",
                   description: "Includes access to Science Park, smart classes, and digital resources.",
                   icon: <ShieldCheck className="w-6 h-6 text-primary" />
                 },
                 {
                   title: "No Hidden Costs",
                   description: "Clear breakdown of all applicable charges provided at the start of the year.",
                   icon: <HelpCircle className="w-6 h-6 text-primary" />
                 }
               ].map((item, index) => (
                 <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-50 flex flex-col items-center">
                    <div className="bg-accent/20 p-3 rounded-full mb-4">{item.icon}</div>
                    <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                 </div>
               ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 text-center text-white shadow-2xl"
            >
               <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em] text-accent">Financial Support</h3>
               <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                 DISJ offers merit-based scholarships and support for families with multiple children 
                 enrolled. For confidential queries regarding financial aid, please reach 
                 out to the school's billing office.
               </p>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
