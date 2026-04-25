'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Handshake, Lightbulb } from 'lucide-react';

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

const skills = [
  {
    title: "Communication & Public Speaking",
    description: "Workshops and debate clubs that build confidence in expression and articulate thought processing.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Leadership & Teamwork",
    description: "Opportunities to lead house teams and organize events, fostering responsible leadership and collaborative skills.",
    icon: <Handshake className="w-6 h-6" />
  },
  {
    title: "Critical Thinking",
    description: "Encouraging students to analyze information, solve problems creatively, and make informed decisions.",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Etiquette & Soft Skills",
    description: "Training in social manners, professional grooming, and emotional intelligence for a polished personality.",
    icon: <Sparkles className="w-6 h-6" />
  }
];

export default function PersonalityDevelopmentPage() {
  return (
    <>
      <PageHero
        title="Personality Development"
        subtitle="Beyond academics: Nurturing confidence, character, and charismatic leadership."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Personality Development' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Shaping Future Leaders</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At DISJ, we believe that education is incomplete without strong character and 
                charismatic interpersonal skills. Our Personality Development program is 
                integrated into our weekly schedule to ensure every student grows into a 
                confident and articulate individual.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-6"
                >
                  <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{skill.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The finishing school approach</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                We follow a holistic 'finishing school' ethos where we focus on grooming 
                and social intelligence. Our workshops include dining etiquette, global 
                sensitivities, and digital citizenship, preparing students for any 
                social or professional environment worldwide.
              </p>
              <div className="inline-flex items-center gap-4 text-primary font-bold">
                <span className="w-10 h-px bg-primary opacity-20" />
                Empowering the Individual
                <span className="w-10 h-px bg-primary opacity-20" />
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
