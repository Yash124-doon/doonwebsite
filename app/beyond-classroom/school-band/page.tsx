'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Music, Drum, Waves, Disc } from 'lucide-react';

const sidebarItems = [
  { name: "Beyond Classroom Overview", href: "/beyond-classroom" },
  { name: "Creative Convergence", href: "/beyond-classroom/creative-convergence" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
  { name: "HMG Sports Excellence", href: "/beyond-classroom/hmg-sports" },
  { name: "Personality Development", href: "/beyond-classroom/personality-development" },
  { name: "Counseling Services", href: "/beyond-classroom/behavioral-counseling" },
  { name: "School Band", href: "/beyond-classroom/school-band" },
  { name: "Student Council", href: "/beyond-classroom/student-council" },
];

export default function SchoolBandPage() {
  return (
    <>
      <PageHero
        title="The DISJ School Band"
        subtitle="Creating harmony and rhythm: The heartbeat of our school spirit."
        backgroundImage="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'School Band' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Beyond Classroom">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Musical Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Doon International School Band is a prestigious ensemble that represents 
                the musical heartbeat of our institution. Comprising talented students from 
                various grades, the band is a symbol of discipline, synchronization, and 
                artistic brilliance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Orchestral Harmony",
                  description: "A blend of brass, woodwind, and percussion instruments playing classical and contemporary pieces.",
                  icon: <Music className="w-8 h-8 text-primary" />
                },
                {
                  title: "Precision Drills",
                  description: "Expertly choreographed marching drills that showcase teamwork and discipline during school events.",
                  icon: <Drum className="w-8 h-8 text-primary" />
                },
                {
                  title: "Performance Tours",
                  description: " Opportunities to perform at prestigious national events and inter-school competitions.",
                  icon: <Waves className="w-8 h-8 text-primary" />
                },
                {
                  title: "Professional Training",
                  description: "Periodic workshops with visiting conductors and professional musicians.",
                  icon: <Disc className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:bg-primary transition-all duration-500">
                  <div className="shrink-0 w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1460039230329-eb0f8a447115?q=80&w=1076&auto=format&fit=crop" 
                alt="School Band in Action" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-10 md:p-16">
                <div className="text-white max-w-2xl">
                  <h4 className="text-3xl font-black mb-4 uppercase italic tracking-wider text-accent">Marching with Pride</h4>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Whether it's the Independence Day parade or the Annual Sports Meet, 
                    the school band leads the way, setting the rhythm for our school pride.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
