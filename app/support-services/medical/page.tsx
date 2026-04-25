'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Ambulance, Heart } from 'lucide-react';

const sidebarItems = [
  { name: "Support Services Overview", href: "/support-services" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Bus Facility", href: "/support-services/bus" },
  { name: "Medical Facility", href: "/support-services/medical" },
  { name: "Boarding House", href: "/support-services/boarding" },
  { name: "School ERP", href: "/support-services/erp" },
  { name: "School Facilities", href: "/about#facilities" },
];

export default function MedicalFacilityPage() {
  return (
    <>
      <PageHero
        title="Medical Facility"
        subtitle="Ensuring the health and well-being of our students through on-campus medical care."
        backgroundImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Support Services', href: '/support-services' },
          { label: 'Medical Facility' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">On-Campus Health Center</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The health and safety of our students is of paramount importance. 
                Doon International School maintains a well-equipped on-campus infirmary 
                staffed by qualified medical professionals ready to handle everything 
                from routine health checks to emergencies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Qualified Nursing",
                  description: "Trained full-time nurses available during school hours to provide immediate care.",
                  icon: <Stethoscope className="w-8 h-8 text-primary" />
                },
                {
                  title: "Emergency Response",
                  description: "Dedicated protocols and rapid response training for all medical emergencies.",
                  icon: <Ambulance className="w-8 h-8 text-primary" />
                },
                {
                  title: "Health Records",
                  description: "Meticulous documentation of every student's medical history and current health status.",
                  icon: <Activity className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg text-center">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/3 -translate-y-1/3" />
               <div className="md:w-1/2">
                 <h3 className="text-3xl font-black mb-6 uppercase italic">Wellness & Prevention</h3>
                 <p className="text-white/80 text-lg leading-relaxed mb-8">
                   We believe in prevention as much as cure. Regular health awareness 
                   workshops, dental check-ups, and eye examinations are conducted 
                   to ensure our students stay healthy and resilient.
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
                      <Heart className="fill-current w-6 h-6" />
                    </div>
                    <span className="font-bold text-accent uppercase tracking-widest text-sm">Caring for the Whole Child</span>
                 </div>
               </div>
               <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                 <img 
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Medical Care" 
                  className="w-full h-full object-cover"
                 />
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
