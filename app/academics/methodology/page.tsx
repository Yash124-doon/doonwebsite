'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { BookOpen, Lightbulb, Puzzle, Rocket } from 'lucide-react';

const sidebarItems = [
  { name: "Academics Overview", href: "/academics" },
  { name: "Why Study at DISJ", href: "/academics/why-study" },
  { name: "Methodology", href: "/academics/methodology" },
  { name: "Curriculum Framework", href: "/academics/curriculum" },
  { name: "Academic Infrastructure", href: "/academics/infrastructure" },
];

const pillars = [
  {
    title: "Inquiry-Based Learning",
    description: "We encourage students to ask questions, explore topics deeply, and develop critical thinking skills through active investigation.",
    icon: <Lightbulb className="w-10 h-10" />,
    color: "bg-blue-500"
  },
  {
    title: "Experiential Approach",
    description: "Learning is not limited to books. Our students engage in hands-on projects, field trips, and laboratory experiments to see concepts in action.",
    icon: <Puzzle className="w-10 h-10" />,
    color: "bg-emerald-500"
  },
  {
    title: "Digital Integration",
    description: "Smart boards, educational software, and digital resources are seamlessly integrated into daily lessons to enhance engagement.",
    icon: <Rocket className="w-10 h-10" />,
    color: "bg-purple-500"
  },
  {
    title: "Personalized Attention",
    description: "With an optimal teacher-student ratio, we identify the unique learning styles and needs of every child, providing tailored support.",
    icon: <BookOpen className="w-10 h-10" />,
    color: "bg-orange-500"
  }
];

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        title="Teaching Methodology"
        subtitle="Empowering students through innovative and student-centric learning approaches."
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Methodology' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">How We Teach</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At Doon International School, we believe that the 'how' of learning is just as important 
                as the 'what'. Our pedagogy is designed to move beyond rote memorization towards 
                true understanding and application of knowledge.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`shrink-0 w-20 h-20 md:w-24 md:h-24 ${pillar.color} text-white rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 text-[17px] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-muted rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-primary/20" />
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Collaborative Environment</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We foster a classroom environment where communication and collaboration are key. 
                Students learn more when they work together, share ideas, and challenge each 
                other's perspectives in a respectful and supportive setting.
              </p>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
