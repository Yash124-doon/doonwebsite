'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Palette, Scissors, Layers, Star } from 'lucide-react';

const sidebarItems = [
  { name: "Achievements Overview", href: "/achievements" },
  { name: "Academic Achievements", href: "/achievements/academic" },
  { name: "Sports Achievements", href: "/achievements/sports" },
  { name: "Music & Dance", href: "/achievements/music-dance" },
  { name: "Art & Craft", href: "/achievements/art-craft" },
  { name: "Literary Achievements", href: "/achievements/literary" },
];

export default function ArtCraftAchievementsPage() {
  return (
    <>
      <PageHero
        title="Art & Craft"
        subtitle="Celebrating creativity, imagination, and the masterpieces of our young artists."
        backgroundImage="https://images.unsplash.com/photo-1460661419201-fd4cecea8f82?q=80&w=880&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: 'Art & Craft' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Creative Laurels</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                The walls of DISJ are a gallery of our students' imagination. Our young 
                artists regularly win accolades in inter-school painting competitions, 
                craft exhibitions, and national-level art contests.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "State Level Painting Champ",
                  description: "Aman Preet won the first prize in the State Level Open Painting Competition organized by the Lalit Kala Academy.",
                  icon: <Palette className="w-8 h-8 text-primary" />,
                  award: "1st Position"
                },
                {
                  title: "National Craft Expo",
                  description: "Our Middle School team won the 'Best Innovative Craft Award' at the National Science & Craft Expo.",
                  icon: <Scissors className="w-8 h-8 text-primary" />,
                  award: "Innovator Award"
                },
                {
                  title: "Digital Art Distinction",
                  description: "Five students received high distinctions in the All-India Digital Illustration Challenge 2023.",
                  icon: <Layers className="w-8 h-8 text-primary" />,
                  award: "High Distinction"
                },
                {
                  title: "Eco-Friendly Art Winner",
                  description: "Winner of the 'Best-out-of-Waste' inter-school challenge for designing a solar-powered kinetic sculpture.",
                  icon: <Star className="w-8 h-8 text-primary" />,
                  award: "Winner"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:border-primary/20 transition-all duration-300">
                  <div className="shrink-0 w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-accent font-black text-xs uppercase tracking-widest mb-1">{item.award}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
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
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Transforming Vision</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Art at DISJ is not just about drawing lines; it's about seeing the world 
                differently. We provide our students with professional-grade materials and 
                guidance to ensure their vision finds its most powerful form.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <div className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-primary shadow-sm hover:scale-105 transition-transform">Clay Modelling Studio</div>
                 <div className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-primary shadow-sm hover:scale-105 transition-transform">Digital Art Suite</div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
