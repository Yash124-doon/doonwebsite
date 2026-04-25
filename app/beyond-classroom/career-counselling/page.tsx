'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Landmark, Compass, GraduationCap, Briefcase } from 'lucide-react';

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

export default function CareerCounsellingPage() {
  return (
    <>
      <PageHero
        title="Career Counselling"
        subtitle="Bridging the gap between dreams and reality through expert career guidance."
        backgroundImage="https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Career Counselling' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Charting the Future</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The choice of a career is one of the most critical decisions in a student's life. 
                At DISJ, our Career Counselling cell provides comprehensive support to help 
                students identify their strengths, explore diverse career paths, and 
                successfully navigate the path to higher education.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Psychometric Testing",
                  description: "Scientific evaluation of interests, aptitude, and personality to suggest aligned career paths.",
                  icon: <Compass className="w-8 h-8 text-primary" />
                },
                {
                  title: "University Planning",
                  description: "Expert guidance on choosing the right universities and courses, both in India and abroad.",
                  icon: <Landmark className="w-8 h-8 text-primary" />
                },
                {
                  title: "Application Support",
                  description: "Detailed assistance with college applications, statement of purpose (SOP) writing, and interviews.",
                  icon: <GraduationCap className="w-8 h-8 text-primary" />
                },
                {
                  title: "Industry Exposure",
                  description: "Regular interactions with professionals from various industries to understand real-world requirements.",
                  icon: <Briefcase className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:translate-y-[-5px] transition-all">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-10"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black text-primary mb-4 uppercase">University Fair</h3>
                <p className="text-gray-600 leading-relaxed">
                  We annually host international and domestic university fairs, giving our 
                  students direct access to admission officers from world-renowned institutions. 
                  This direct interaction helps students understand eligibility, scholarships, 
                  and campus life.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=1170&auto=format&fit=crop" 
                  alt="University Fair" 
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
