'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, ShieldCheck, Footprints } from 'lucide-react';

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

export default function BehavioralCounselingPage() {
  return (
    <>
      <PageHero
        title="Behavioral Counseling"
        subtitle="Supporting emotional well-being and social development through expert guidance."
        backgroundImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Behavioral Counseling' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Emotional Wellness</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At DISJ, we recognize that academic success is deeply connected to emotional well-being. 
                Our on-campus behavioral counselor provides a safe, confidential, and supportive 
                environment for students to navigate the complexities of growing up.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Safe Space",
                  description: "A non-judgmental environment where students can freely express their thoughts and feelings.",
                  icon: <MessageCircle className="w-8 h-8 text-primary" />
                },
                {
                  title: "Individual Support",
                  description: "One-on-one sessions tailored to address specific emotional or behavioral challenges.",
                  icon: <UserCheck className="w-8 h-8 text-primary" />
                },
                {
                  title: "Workshops",
                  description: "Regular group sessions on stress management, self-esteem, and social skills.",
                  icon: <Users className="w-8 h-8 text-primary" />
                },
                {
                  title: "Confidentiality",
                  description: "A strict ethical code ensures that every student's privacy is respected and protected.",
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />
                }
              ].map((service, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-lg">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
               <div className="relative z-10 max-w-3xl">
                 <h3 className="text-3xl font-black mb-6 italic">Holistic Care</h3>
                 <p className="text-white/80 text-lg leading-relaxed mb-6">
                   Our counseling services extend beyond problem-solving. we focus on proactive 
                   development, helping students build resilience, empathy, and the emotional 
                   intelligence required to succeed in all aspects of life.
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary">
                     <Heart className="fill-current" />
                   </div>
                   <span className="font-bold text-accent uppercase tracking-widest">Nurturing the Inner Self</span>
                 </div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}

import { UserCheck, Users } from 'lucide-react';
