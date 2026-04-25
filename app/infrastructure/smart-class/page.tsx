'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Tablet, Tv, Wifi, Database } from 'lucide-react';

const sidebarItems = [
  { name: "Infrastructure Overview", href: "/infrastructure" },
  { name: "Campus & Surroundings", href: "/infrastructure/campus" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Science Park", href: "/infrastructure/science-park" },
  { name: "Science Labs", href: "/infrastructure/science-labs" },
  { name: "Smart Classrooms", href: "/infrastructure/smart-class" },
  { name: "Computer Lab", href: "/infrastructure/computer-lab" },
  { name: "Activity Rooms", href: "/infrastructure/activity-rooms" },
  { name: "Health Center", href: "/support-services/medical" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
];

export default function SmartClassroomsPage() {
  return (
    <>
      <PageHero
        title="Smart Classrooms"
        subtitle="Digitally transformed learning spaces: Making education interactive and immersive."
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Smart Classrooms' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Infrastructure">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Learning in the Digital Age</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                At DISJ, we have replaced traditional chalkboards with high-definition interactive 
                smart boards. Our classrooms are designed to be dynamic learning hubs where 
                visual content brings abstract textbook concepts to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Interactive Smart Boards",
                  description: "Touch-sensitive boards that allow teachers to use multimedia content, 3D models, and educational software.",
                  icon: <Tablet className="w-8 h-8 text-primary" />
                },
                {
                  title: "Visual Learning Tools",
                  description: "High-definition projection systems and audio equipment that ensure an immersive sensory learning experience.",
                  icon: <Tv className="w-8 h-8 text-primary" />
                },
                {
                  title: "Seamless Connectivity",
                  description: "High-speed Wi-Fi across all classrooms enabling real-time access to global educational resources.",
                  icon: <Wifi className="w-8 h-8 text-primary" />
                },
                {
                  title: "Digital Archiving",
                  description: " Lessons can be recorded and archived, allowing students to revisit topics and catch up on missed sessions.",
                  icon: <Database className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <h3 className="text-3xl font-black mb-6 uppercase italic">The Future of Pedagogy</h3>
               <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto">
                 Smart classrooms don't just add technology; they transform the way students 
                 interact with knowledge. They foster curiosity, encourage participation, 
                 and prepare our students for a digitally integrated world.
               </p>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
