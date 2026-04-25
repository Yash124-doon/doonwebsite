'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Users } from 'lucide-react';

const sidebarItems = [
  { name: "Achievements Overview", href: "/achievements" },
  { name: "Academic Achievements", href: "/achievements/academic" },
  { name: "Sports Achievements", href: "/achievements/sports" },
  { name: "Music & Dance", href: "/achievements/music-dance" },
  { name: "Art & Craft", href: "/achievements/art-craft" },
  { name: "Literary Achievements", href: "/achievements/literary" },
];

const sportsHighlights = [
  {
    sport: "Tennis",
    title: "CBSE National Champions",
    description: "Our under-17 tennis team secured the gold medal in the CBSE National Tennis Championship 2023.",
    year: "2023",
    icon: <Target className="w-8 h-8" />
  },
  {
    sport: "Athletics",
    title: "State Level Athletics Meet",
    description: "Secured over 15 gold medals across various track and field events at the State Level Athletics Meet.",
    year: "2023",
    icon: <Medal className="w-8 h-8" />
  },
  {
    sport: "Football",
    title: "Regional Winners",
    description: "The DISJ football team won the Regional CBSE Football Cluster, qualifying for the nationals.",
    year: "2022",
    icon: <Users className="w-8 h-8" />
  }
];

export default function SportsAchievementsPage() {
  return (
    <>
      <PageHero
        title="Sports Highlights"
        subtitle="Celebrating athletic prowess and the champions of the field."
        backgroundImage="https://images.unsplash.com/photo-1541252260733-5433d3e74efc?q=80&w=1218&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: 'Sports Achievements' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Champions of the Field</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At DISJ, sports is not just an activity; it's an arena for building character and 
                achieving excellence. Our students regularly dominate at the district, state, 
                and national levels, bringing home trophies that symbolize their perseverance.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {sportsHighlights.map((hl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 hover:shadow-2xl transition-all group"
                >
                  <div className="shrink-0 w-20 h-20 bg-primary/5 text-primary rounded-3xl flex items-center justify-center mb-6 md:mb-0 md:mr-10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {hl.icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-accent font-black text-xs uppercase tracking-widest mb-2">{hl.sport} • {hl.year}</div>
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{hl.title}</h3>
                    <p className="text-gray-600 text-[17px] leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                  <div className="shrink-0 mt-6 md:mt-0 md:ml-10">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <Trophy className="text-primary w-8 h-8" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center"
            >
              <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Winning Spirit</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                Behind every win is a team of dedicated coaches and a school that provides 
                nothing but the best infrastructure. Our HMG Centre for Sports Excellence 
                continues to be a breeding ground for future athletes of Jabalpur.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <div className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-primary shadow-sm">10+ Regional Championships</div>
                 <div className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-primary shadow-sm">CBSE National Silver Medal (Table Tennis)</div>
                 <div className="px-6 py-3 bg-white border border-gray-200 rounded-full font-bold text-primary shadow-sm">Inter-School Cricket Trophy Winner</div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
