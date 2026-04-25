'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { PenTool, MessageSquare, Quote, BookOpen } from 'lucide-react';

const sidebarItems = [
  { name: "Achievements Overview", href: "/achievements" },
  { name: "Academic Achievements", href: "/achievements/academic" },
  { name: "Sports Achievements", href: "/achievements/sports" },
  { name: "Music & Dance", href: "/achievements/music-dance" },
  { name: "Art & Craft", href: "/achievements/art-craft" },
  { name: "Literary Achievements", href: "/achievements/literary" },
];

export default function LiteraryAchievementsPage() {
  return (
    <>
      <PageHero
        title="Literary Laurels"
        subtitle="Honoring the wordsmiths, debaters, and young poets of DISJ."
        backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1073&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: 'Literary Achievements' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Achievements">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Power of Words</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                At DISJ, we celebrate the articulating mind. Our students have consistently 
                shined in inter-school debates, poetry slams, and creative writing 
                competitions, demonstrating a deep command of language and thought.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Inter-School Debate Champions",
                  description: "Our senior debate team won the prestigious 'Battle of Wits' Inter-School Debate competition for two consecutive years.",
                  icon: <MessageSquare className="w-8 h-8 text-primary" />,
                  award: "Overall Winners"
                },
                {
                  title: "National Creative Writing",
                  description: "Ishani Singh's short story was featured in the All-India School Anthology of Young Writers 2023.",
                  icon: <PenTool className="w-8 h-8 text-primary" />,
                  award: "Featured Writer"
                },
                {
                  title: "Regional Poetry Slam",
                  description: "Winner of the 'Voices of Tomorrow' poetry slam competition across 20 participating schools.",
                  icon: <Quote className="w-8 h-8 text-primary" />,
                  award: "1st Position"
                },
                {
                  title: "Literary Fest Laurels",
                  description: "The DISJ literary club won the 'Best Enthusiastic Participation' award at the City Lit-Fest.",
                  icon: <BookOpen className="w-8 h-8 text-primary" />,
                  award: "Best Club"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 px-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-accent font-black text-xs uppercase tracking-widest mb-1">{item.award}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden text-center shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10 max-w-3xl mx-auto">
                 <h3 className="text-3xl font-black mb-6 uppercase italic text-accent">Expressing the Future</h3>
                 <p className="text-white/80 text-lg leading-relaxed mb-8">
                   We provide our students with platforms like the annual school magazine 'The Doonite' 
                   and regular assembly presentations to showcase their literary talents. 
                   Our library's extensive collection serves as the fuel for their imagination.
                 </p>
                 <div className="inline-flex items-center gap-4 py-2 px-6 bg-white/10 rounded-full font-bold">
                    Celebrating 50+ Young Authors
                 </div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
