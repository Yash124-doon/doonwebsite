'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Smartphone, Bell, CreditCard, BarChart2 } from 'lucide-react';

const sidebarItems = [
  { name: "Support Services Overview", href: "/support-services" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Bus Facility", href: "/support-services/bus" },
  { name: "Medical Facility", href: "/support-services/medical" },
  { name: "Boarding House", href: "/support-services/boarding" },
  { name: "School ERP", href: "/support-services/erp" },
  { name: "School Facilities", href: "/about#facilities" },
];

export default function SchoolERPPage() {
  return (
    <>
      <PageHero
        title="School ERP & Digital Portal"
        subtitle="A seamless digital connection between home and school: Tracking progress in real-time."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Support Services', href: '/support-services' },
          { label: 'School ERP' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Support Services">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Connected Campus</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The DISJ digital portal (ERP) is a comprehensive school management system that 
                brings all aspects of your child's education to your fingertips. From daily 
                attendance to academic performance and fee management, everything is 
                accessible via our secure mobile app and web portal.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Academic Tracking",
                  description: "Real-time access to grades, report cards, class performance, and teacher remarks.",
                  icon: <BarChart2 className="w-8 h-8 text-primary" />
                },
                {
                  title: "Smart Notifications",
                  description: "Instant alerts for school announcements, emergency news, and event reminders.",
                  icon: <Bell className="w-8 h-8 text-primary" />
                },
                {
                  title: "Fee Management",
                  description: "Secure online payment gateway for hassle-free fee deposits and automated receipt generation.",
                  icon: <CreditCard className="w-8 h-8 text-primary" />
                },
                {
                  title: "Mobile App Access",
                  description: "Custom-built mobile application for both iOS and Android for on-the-go school connection.",
                  icon: <Smartphone className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 p-10 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:border-primary/20 transition-all duration-300">
                  <div className="shrink-0 w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 bg-muted rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Parent-Teacher Bridge</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Our ERP system is not just about data; it is about communication. It provides a 
                transparent channel for parents to communicate with teachers and stay 
                actively involved in their child's developmental journey.
              </p>
              <div className="flex justify-center gap-6">
                 <button className="bg-[#111827] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-black transition-all">
                   <img src="/assets/icons/app-store.svg" alt="" className="w-5 h-5 hidden" />
                   Google Play
                 </button>
                 <button className="bg-[#111827] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-black transition-all">
                   <img src="/assets/icons/google-play.svg" alt="" className="w-5 h-5 hidden" />
                   App Store
                 </button>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
