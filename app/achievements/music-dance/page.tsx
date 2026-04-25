'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Music, Star, Award, Mic2 } from 'lucide-react';

const sidebarItems = [
  { name: "Achievements Overview", href: "/achievements" },
  { name: "Academic Achievements", href: "/achievements/academic" },
  { name: "Sports Achievements", href: "/achievements/sports" },
  { name: "Music & Dance", href: "/achievements/music-dance" },
  { name: "Art & Craft", href: "/achievements/art-craft" },
  { name: "Literary Achievements", href: "/achievements/literary" },
];

export default function MusicDanceAchievementsPage() {
  return (
    <>
      <PageHero
        title="Music & Dance"
        subtitle="Celebrating melodic triumphs and rhythmic excellence on the big stage."
        backgroundImage="https://images.unsplash.com/photo-1514525253361-b414683d7895?q=80&w=1035&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: 'Music & Dance' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Melodic Laurels</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                The performing arts have always been a cornerstone of DISJ's cultural identity. 
                Our school band, solo musicians, and dance ensembles have consistently 
                performed at prestigious venues and won inter-school competitions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Inter-School Band Championship",
                  description: "Our school band 'Rising Notes' secured the 1st position in the Inter-School Rock Band Competition 2023.",
                  icon: <Music className="w-8 h-8 text-primary" />,
                  award: "Gold Medal"
                },
                {
                  title: "National Classical Dance",
                  description: "Sanya Roy representing DISJ won the 2nd position in the National Youth Cultural Fest for Kathak.",
                  icon: <Star className="w-8 h-8 text-primary" />,
                  award: "Silver Trophy"
                },
                {
                  title: "Regional Choir Contest",
                  description: "The DISJ Junior Choir was recognized as the 'Most Harmonious Ensemble' at the Regional Choir Contest.",
                  icon: <Mic2 className="w-8 h-8 text-primary" />,
                  award: "Special Mention"
                },
                {
                  title: "Instrumental Excellence",
                  description: "Multiple students awarded merit certificates in Trinity College London grade examinations.",
                  icon: <Award className="w-8 h-8 text-primary" />,
                  award: "Merit Certs"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-lg group hover:bg-primary transition-all duration-500">
                  <div className="shrink-0 w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-accent font-black text-xs uppercase tracking-widest mb-1 group-hover:text-accent transition-colors">{item.award}</div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Stage is Set</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Participation in cultural events helps our students build confidence and 
                charismatic stage presence. We continue to invest in professional-grade 
                sound systems and dedicated rehearsal studios for our budding performers.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1514525253361-b414683d7895?q=80&w=1035&auto=format&fit=crop" 
                alt="Dance Performance" 
                className="w-full h-[350px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
