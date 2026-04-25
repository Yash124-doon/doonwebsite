'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const sidebarItems = [
  { name: "Academics Overview", href: "/academics" },
  { name: "Why Study at DISJ", href: "/academics/why-study" },
  { name: "Methodology", href: "/academics/methodology" },
  { name: "Curriculum Framework", href: "/academics/curriculum" },
  { name: "Academic Infrastructure", href: "/academics/infrastructure" },
];

const levels = [
  {
    title: "Pre-Primary (Play-Group to KG)",
    description: "A nurturing environment where little ones explore the world through play, storytelling, and creative activities. Focus is on sensory development and social skills.",
    points: ["Theme-based learning", "Phonics and language development", "Motor skill activities", "Value-based storytelling"]
  },
  {
    title: "Primary (Classes I to V)",
    description: "Building the foundation for formal education. We emphasize literacy, numeracy, and environmental awareness while encouraging curiosity.",
    points: ["Communicative English", "Conceptual Mathematics", "Global Awareness", "Co-curricular integration"]
  },
  {
    title: "Middle School (Classes VI to VIII)",
    description: "A transition towards deep academic exploration. Students engage with specialized subjects and develop independent research skills.",
    points: ["Interdisciplinary projects", "Scientific inquiry", "Third language options", "Leadership through house systems"]
  },
  {
    title: "Secondary (Classes IX to X)",
    description: "Preparing students for global challenges and board examinations. Focus on analytical thinking and academic precision within the CBSE framework.",
    points: ["Rigorous CBSE preparation", "Career guidance mapping", "Laboratory-based practicals", "Advanced digital literacy"]
  }
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        title="Curriculum Framework"
        subtitle="A comprehensive and balanced educational journey from early years to secondary excellence."
        backgroundImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Curriculum' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Academics">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">CBSE Integrated Framework</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Our curriculum follows the Central Board of Secondary Education (CBSE) guidelines, 
                enhanced with our unique 'Beyond Books' initiatives to ensure that learners are 
                life-ready, not just exam-ready.
              </p>
            </motion.div>

            <div className="space-y-8">
              {levels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden relative group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                  <div className="relative z-10 flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                      <span className="text-accent font-black text-lg mb-2 block tracking-widest uppercase">Level 0{index + 1}</span>
                      <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{level.title}</h3>
                      <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
                        {level.description}
                      </p>
                    </div>
                    <div className="md:w-1/2 bg-muted/50 p-8 rounded-3xl border border-dashed border-primary/20">
                      <h4 className="font-bold text-primary mb-4">Key Focus Areas:</h4>
                      <ul className="space-y-3">
                        {level.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                            <div className="shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 bg-accent rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8 justify-between"
            >
              <div className="max-w-xl">
                <h3 className="text-2xl font-black text-primary mb-2 uppercase">Balanced Evaluation</h3>
                <p className="text-primary/80 font-medium">
                  We follow a Continuous and Comprehensive Evaluation (CCE) approach that assesses 
                  students through projects, presentations, and interactive assessments alongside 
                  periodical tests.
                </p>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shrink-0">
                View Evaluation Policy
              </button>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
