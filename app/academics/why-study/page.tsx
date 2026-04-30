'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Globe, Users, Compass, Target } from 'lucide-react';

const sidebarItems = [
  { name: "Academics Overview", href: "/academics" },
  { name: "Why Study at DISJ", href: "/academics/why-study" },
  { name: "Methodology", href: "/academics/methodology" },
  { name: "Curriculum Framework", href: "/academics/curriculum" },
  { name: "Academic Infrastructure", href: "/academics/infrastructure" },
];

const reasons = [
  {
    title: "Global Standards",
    description: "Our curriculum is aligned with international educational standards, ensuring our students are competitive on a global scale.",
    icon: <Globe className="w-8 h-8 text-primary" />
  },
  {
    title: "Holistic Development",
    description: "We focus on the overall growth of a child—intellectual, physical, emotional, and social—through a balanced mix of academics and co-curriculars.",
    icon: <GraduationCap className="w-8 h-8 text-primary" />
  },
  {
    title: "Expert Faculty",
    description: "Our teachers are highly qualified and undergo regular professional development to stay ahead of modern teaching trends.",
    icon: <Users className="w-8 h-8 text-primary" />
  },
  {
    title: "Values-Based Education",
    description: "We instill core Indian values and ethics in our students, helping them grow into responsible and empathetic citizens.",
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />
  },
  {
    title: "Experiential Learning Activities",
    description: "Learning extends beyond textbooks with STEM projects, Vedic Maths, spiritual classes, and personality development workshops.",
    icon: <Compass className="w-8 h-8 text-primary" />
  },
  {
    title: "Student Development Programs",
    description: "Leadership training, debate clubs, public speaking, and community service groom well-rounded individuals ready for tomorrow.",
    icon: <Target className="w-8 h-8 text-primary" />
  }
];

export default function WhyStudyPage() {
  return (
    <>
      <PageHero
        title="Why Study at DISJ"
        subtitle="Discover the unique advantages of a Doon International School education."
        backgroundImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Why Study at DISJ' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Academics">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The DISJ Advantage</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Choosing the right school for your child is one of the most important decisions 
                you will make. At Doon International School, Jabalpur, we offer more than just 
                an education—we offer a foundation for life.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-6 p-4 bg-primary/5 rounded-2xl inline-block">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2.5rem] p-10 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Empowering the Future</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl">
                  Our alumni are proof of our excellence. They are currently studying in top-tier 
                  universities and leading in various professional fields worldwide.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">100% Board Results</div>
                  <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Global Citizen Mentorship</div>
                </div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
