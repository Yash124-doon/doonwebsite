'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Star } from 'lucide-react';

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

const houses = [
  { name: "Nilgiri", color: "bg-blue-600", motto: "Strength & Integrity" },
  { name: "Himachal", color: "bg-red-600", motto: "Peak Excellence" },
  { name: "Vindhya", color: "bg-green-600", motto: "Evergreen Wisdom" },
  { name: "Aravalli", color: "bg-yellow-500", motto: "Sturdy & Radiant" }
];

export default function StudentCouncilPage() {
  return (
    <>
      <PageHero
        title="Student Council"
        subtitle="Empowering future leaders through service, responsibility, and representation."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Student Council' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Voice of the Students</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Student Council at DISJ is a democratic body that bridges the gap between the 
                student community and the school administration. It provides a platform for 
                students to develop leadership skills, organize events, and voice their 
                constructive feedback.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary rounded-[2.5rem] p-10 text-white shadow-2xl">
                <Shield className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 italic">Council Hierarchy</h3>
                <ul className="space-y-4">
                  {[
                    "Head Boy & Head Girl",
                    "Vice Head Boy & Head Girl",
                    "Sports Captains",
                    "Cultural Secretaries",
                    "House Captains & Prefects"
                  ].map((role, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                      <Star className="w-4 h-4 text-accent" /> {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {houses.map((house, index) => (
                   <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${house.color} p-8 rounded-3xl text-white shadow-lg flex flex-col items-center text-center justify-center group hover:scale-105 transition-transform`}
                   >
                     <h4 className="text-xl font-black uppercase mb-1">{house.name}</h4>
                     <p className="text-xs text-white/80 font-bold uppercase tracking-widest">{house.motto}</p>
                   </motion.div>
                 ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Investiture Ceremony</h3>
                <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
                  Every academic year begins with the solemn Investiture Ceremony, where the 
                  newly elected student leaders are conferred with their badges and sashes, 
                  taking an oath to uphold the values and dignity of Doon International School.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-primary uppercase tracking-widest text-sm">A Tradition of Honor</span>
                </div>
              </div>
              <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop" 
                  alt="Student Leadership" 
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
