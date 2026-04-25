'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Microscope, Zap, Rocket, Atom } from 'lucide-react';

const sidebarItems = [
  { name: "Infrastructure Overview", href: "/infrastructure" },
  { name: "Campus & Surroundings", href: "/infrastructure/campus" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Science Park", href: "/infrastructure/science-park" },
  { name: "Science Labs", href: "/infrastructure/science-labs" },
  { name: "Smart Classrooms", href: "/infrastructure/smart-class" },
  { name: "Computer Lab", href: "/infrastructure/computer-lab" },
  { name: "Activity Rooms", href: "/infrastructure/activity-rooms" },
  { name: "Health Center", href: "/support-services/medical" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
];

export default function ScienceParkPage() {
  return (
    <>
      <PageHero
        title="Eco-Friendly Science Park"
        subtitle="Where abstract concepts become interactive experiences: Learning through play."
        backgroundImage="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1332&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Science Park' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Infrastructure">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">An Outdoor Discovery Lab</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                The Science Park at DISJ is an innovative outdoor facility featuring life-size, 
                interactive models that demonstrate fundamental principles of physics, biology, 
                and environmental science. It is designed to turn curiosity into 
                experiential knowledge.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Interactive Exhibits",
                  description: "Large-scale models like the parabolic dish, periscope, and pulley systems that students can operate.",
                  icon: <Zap className="w-8 h-8 text-primary" />
                },
                {
                  title: "Renewable Energy Hub",
                  description: "Solar panels and wind turbine models explaining the transition to sustainable power.",
                  icon: <Rocket className="w-8 h-8 text-primary" />
                },
                {
                  title: "Botanical Section",
                  description: "A labeled garden of medicinal plants and self-sustaining ecosystem models for biology students.",
                  icon: <Atom className="w-8 h-8 text-primary" />
                },
                {
                  title: "Experimental Zones",
                  description: "Dedicated spaces where students can conduct open-air experiments under teacher supervision.",
                  icon: <Microscope className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-10 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:border-primary/20 transition-all duration-300">
                  <div className="shrink-0 w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/3 -translate-y-1/3" />
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                 <div className="md:w-1/2">
                    <h3 className="text-3xl font-black mb-6 uppercase italic">Science Beyond Books</h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-6">
                      The Science Park is a favorite among students of all ages. 
                      Whether it's the youngest learners exploring sensory exhibits 
                      or secondary students testing mechanical advantage, it makes 
                      science both fun and accessible.
                    </p>
                    <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-widest text-sm">
                       Award-Winning Facility <span>&rarr;</span>
                    </div>
                 </div>
                 <div className="md:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                    <img 
                      src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1332&auto=format&fit=crop" 
                      alt="Science Park Exhibits" 
                      className="w-full h-full object-cover"
                    />
                 </div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
