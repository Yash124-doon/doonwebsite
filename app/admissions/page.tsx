'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClipboardCheck, CreditCard, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';

const sidebarItems = [
  { name: "Admissions Overview", href: "/admissions" },
  { name: "How To Apply", href: "/admissions/how-to-apply" },
  { name: "Fee Structure", href: "/admissions/fees" },
  { name: "Admission Enquiry", href: "/admissions/enquiry" },
  { name: "Withdrawal Policy", href: "/admissions#withdrawal" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join the legacy of excellence: Your journey towards a global education starts here."
        backgroundImage="https://images.unsplash.com/photo-1523050335102-c67440e1b12d?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Admissions">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Become a Doonite</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Choosing Doon International School, Jabalpur, means choosing a future 
                of unlimited possibilities. We welcome students from all backgrounds 
                who are eager to learn, grow, and contribute to a vibrant academic 
                and cultural community.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "How to Apply",
                  description: "A simple, step-by-step guide to our registration and diagnostic assessment process.",
                  icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
                  href: "/admissions/how-to-apply"
                },
                {
                  title: "Fee Structure",
                  description: "Transparent information regarding our annual fees, specialized charges, and payment schedules.",
                  icon: <CreditCard className="w-8 h-8 text-primary" />,
                  href: "/admissions/fees"
                },
                {
                  title: "Admission Enquiry",
                  description: "Fill out our digital enquiry form to receive a detailed prospectus and callback from our team.",
                  icon: <HelpCircle className="w-8 h-8 text-primary" />,
                  href: "/admissions/enquiry"
                },
                {
                  title: "Student Support",
                  description: "Expert guidance for prospective families on choosing the right academic level and subjects.",
                  icon: <PhoneCall className="w-8 h-8 text-primary" />,
                  href: "/beyond-classroom/admission-counseling"
                }
              ].map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.section 
              id="withdrawal" 
              className="scroll-mt-24 p-12 md:p-16 bg-muted rounded-[3rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h3 className="text-2xl font-black text-primary mb-6 uppercase">Withdrawal Policy</h3>
               <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
                  <p>Parents wishing to withdraw their child from the school must provide one month's notice in writing or pay one month's fees in lieu of notice.</p>
                  <p>Transfer Certificates (TC) will only be issued after all outstanding dues have been cleared and the office has completed necessary documentation.</p>
                  <p>Security deposits are refundable only upon production of the original receipt within six months of the date of withdrawal.</p>
               </div>
            </motion.section>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
