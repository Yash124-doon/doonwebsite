'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Microscope, PenTool } from 'lucide-react';

const sidebarItems = [
  { name: "Academics Overview", href: "/academics" },
  { name: "Why Study at DISJ", href: "/academics/why-study" },
  { name: "Methodology", href: "/academics/methodology" },
  { name: "Curriculum Framework", href: "/academics/curriculum" },
  { name: "Academic Infrastructure", href: "/academics/infrastructure" },
];

const academicCards = [
  {
    title: "Methodology",
    description: "Our innovative teaching approach focuses on inquiry-based and experiential learning.",
    icon: <PenTool className="w-6 h-6" />,
    href: "/academics/methodology"
  },
  {
    title: "Curriculum",
    description: "A robust CBSE-based framework that scales with the student's growth from Pre-Primary to Secondary.",
    icon: <BookOpen className="w-6 h-6" />,
    href: "/academics/curriculum"
  },
  {
    title: "Infrastructure",
    description: "State-of-the-art labs and digital classrooms that make learning an immersive experience.",
    icon: <Microscope className="w-6 h-6" />,
    href: "/academics/infrastructure"
  }
];

export default function AcademicsOverviewPage() {
  return (
    <>
      <PageHero
        title="Academic Excellence"
        subtitle="Empowering learners through high standards and holistic development."
        backgroundImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Academics' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Academics">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Academic Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                At Doon International School, Jabalpur, academics is the core of our student experience. 
                We combine the rigorous CBSE curriculum with modern pedagogical techniques to 
                nurture intellectual curiosity and critical thinking.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {academicCards.map((card, index) => (
                <Link key={index} href={card.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex items-center text-accent font-bold text-sm uppercase tracking-wider gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                  Nurturing Leaders
                </div>
                <h3 className="text-3xl font-black text-primary mb-6">Holistic Educational Philosophy</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We don't just aim for board results; we aim for life-readiness. Our philosophy 
                  integrates physical education, arts, and character building into the 
                  scholastic day, ensuring that every DISJ student is a well-rounded global citizen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <GraduationCap className="w-5 h-5 text-accent" /> Expert Mentorship
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop" 
                  alt="Student Excellence" 
                  className="rounded-3xl shadow-xl border-4 border-white"
                />
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
