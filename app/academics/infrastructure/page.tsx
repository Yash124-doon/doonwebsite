'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Microscope, Library, Monitor, BookOpenCheck } from 'lucide-react';

const sidebarItems = [
  { name: "Academics Overview", href: "/academics" },
  { name: "Why Study at DISJ", href: "/academics/why-study" },
  { name: "Methodology", href: "/academics/methodology" },
  { name: "Curriculum Framework", href: "/academics/curriculum" },
  { name: "Academic Infrastructure", href: "/academics/infrastructure" },
];

const facilities = [
  {
    title: "Science Laboratories",
    description: "Fully equipped Physics, Chemistry, and Biology labs that provide students with the opportunity to explore scientific concepts through practical experimentation.",
    icon: <Microscope className="w-8 h-8" />,
    items: ["Advanced apparatus", "Safety-first design", "Dedicated prep areas", "Expert lab assistants"]
  },
  {
    title: "Digital Library",
    description: "A vast collection of over 10,000 books, journals, and digital resources, providing a perfect haven for research and quiet reading.",
    icon: <Library className="w-8 h-8" />,
    items: ["E-book access", "Comfortable study zones", "Reference section", "Digital archiving"]
  },
  {
    title: "Computer Lab",
    description: "State-of-the-art computer centers with high-speed internet and the latest software to foster digital literacy and coding skills.",
    icon: <Monitor className="w-8 h-8" />,
    items: ["1:1 Student-PC ratio", "Fiber optic internet", "Coding bootcamp software", "Network security"]
  },
  {
    title: "Smart Classrooms",
    description: "Every classroom is a digital learning hub equipped with interactive smart boards and high-definition projection systems.",
    icon: <BookOpenCheck className="w-8 h-8" />,
    items: ["Interactive whiteboards", "Visual learning tools", "Eco-friendly lighting", "Climate control"]
  }
];

export default function AcademicInfrastructurePage() {
  return (
    <>
      <PageHero
        title="Academic Infrastructure"
        subtitle="Modern facilities designed to stimulate curiosity and foster a love for learning."
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1098&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Infrastructure' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Spaces for Discovery</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Learning at DISJ extends beyond the written word. We have invested in world-class 
                infrastructure that provides our students with the tools they need to experiment, 
                innovate, and excel in their academic pursuits.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 border-t border-gray-100 pt-6">
                    {facility.items.map((item, i) => (
                      <li key={i} className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden h-[400px] shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb28f74b0cc?q=80&w=1170&auto=format&fit=crop" 
                alt="Interactive Classroom Session" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-12">
                <div className="text-white">
                  <h4 className="text-3xl font-black mb-2 uppercase italic">Smart Learning</h4>
                  <p className="max-w-xl text-white/80">Every classroom is digitally enabled, turning abstract lessons into interactive experiences.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
