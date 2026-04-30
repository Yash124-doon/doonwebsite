'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Bus, MapPin, Shield, Clock } from 'lucide-react';

const sidebarItems = [
  { name: "Support Services Overview", href: "/support-services" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Bus Facility", href: "/support-services/bus" },
  { name: "Medical Facility", href: "/support-services/medical" },
  { name: "Boarding House", href: "/support-services/boarding" },
  { name: "School ERP", href: "/support-services/erp" },
  { name: "School Facilities", href: "/about#facilities" },
];

export default function BusFacilityPage() {
  return (
    <>
      <PageHero
        title="Bus Facility"
        subtitle="Safe, comfortable, and reliable transport across Jabalpur."
        backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1169&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Support Services', href: '/support-services' },
          { label: 'Bus Facility' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Safe Journeys, Every Day</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Safety and reliability are paramount in our transport system. Our fleet of buses is equipped with GPS tracking, trained drivers, and attendants to ensure secure travel. Parents can rest assured that their children commute safely and comfortably to and from school.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "GPS Tracking",
                  description: "Real-time tracking of all school buses through our digital portal for enhanced parent peace of mind.",
                  icon: <MapPin className="w-8 h-8 text-primary" />
                },
                {
                  title: "Safety Escorts",
                  description: "Every bus is accompanied by a trained helper and a lady attendant to ensure the safety of students.",
                  icon: <Shield className="w-8 h-8 text-primary" />
                },
                {
                  title: "Strict Scheduling",
                  description: "Meticulously planned routes that ensure timely pick-ups and drop-offs with minimal travel time.",
                  icon: <Clock className="w-8 h-8 text-primary" />
                },
                {
                  title: "Fleet Modernization",
                  description: "Buses are equipped with first-aid kits, speed governors, and are regularly inspected.",
                  icon: <Bus className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:bg-primary transition-all duration-500">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black text-primary mb-6 uppercase">Fleet Management</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our drivers are professionally trained and undergo regular background 
                  verifications and health checks. We also maintain a strictly enforced 
                  code of conduct for students during transit to ensure a disciplined yet 
                  joyful travel experience.
                </p>
                <div className="flex gap-4">
                  <span className="px-4 py-2 bg-primary/10 rounded-full text-xs font-bold text-primary">CCTV in Buses</span>
                  <span className="px-4 py-2 bg-primary/10 rounded-full text-xs font-bold text-primary">Panic Buttons</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1171&auto=format&fit=crop" 
                  alt="School Bus Fleet" 
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
