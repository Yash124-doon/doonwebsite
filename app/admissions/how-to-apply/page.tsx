'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { ClipboardCheck, UserPlus, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const sidebarItems = [
  { name: "Admissions Overview", href: "/admissions" },
  { name: "How To Apply", href: "/admissions/how-to-apply" },
  { name: "Fee Structure", href: "/admissions/fees" },
  { name: "Admission Enquiry", href: "/admissions/enquiry" },
  { name: "Withdrawal Policy", href: "/admissions#withdrawal" },
];

const steps = [
  {
    title: "Registration",
    description: "Fill out the online enquiry form or visit the school office to register for admission. A registration fee is applicable.",
    icon: <ClipboardCheck className="w-8 h-8 text-primary" />
  },
  {
    title: "Interaction / Assessment",
    description: "A diagnostic assessment for the student followed by an interaction with the parents to discuss the child's developmental needs.",
    icon: <UserPlus className="w-8 h-8 text-primary" />
  },
  {
    title: "Documentation",
    description: "Submit required documents including Birth Certificate, Transfer Certificate (if applicable), and previous academic records.",
    icon: <FileText className="w-8 h-8 text-primary" />
  },
  {
    title: "Confirmation",
    description: "Upon successful assessment and document verification, admission is confirmed after the payment of necessary fees.",
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />
  }
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHero
        title="Application Process"
        subtitle="A step-by-step guide to joining the Doon International School community."
        backgroundImage="https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'How to Apply' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Path to Enrollment</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                We have designed our admission process to be transparent, efficient, and welcoming.
                Our goal is to understand every prospective student's unique potential
                and ensure that DISJ is the right fit for their educational journey.
              </p>
            </motion.div>

            <div className="relative">
              {/* Process Line */}
              <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2 hidden md:block" />

              <div className="space-y-12 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse text-right' : ''}`}
                  >
                    <div className="md:w-1/2 flex flex-col items-center md:block">
                      <div className={`p-8 bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all ${index % 2 === 1 ? 'md:items-end' : ''}`}>
                        <div className="flex items-center gap-4 mb-4">
                          {!(index % 2 === 1) && <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">{step.icon}</div>}
                          <h3 className="text-xl font-bold text-primary">0{index + 1}. {step.title}</h3>
                          {index % 2 === 1 && <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">{step.icon}</div>}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                    </div>
                    <div className="md:w-1/2 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-muted rounded-[3rem] p-10 md:p-16 text-center"
            >
              <h3 className="text-2xl font-black text-primary mb-6 uppercase">Ready to Begin?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                You can start the process today by filling out our online enquiry form.
                Our admission office will contact you within 24 working hours.
              </p>
              <Link href="/admissions/enquiry" className="bg-primary text-white font-black px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
                Apply Online Now
              </Link>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
