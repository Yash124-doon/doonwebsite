'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, GraduationCap, Trophy, Music, Palette, BookOpen } from 'lucide-react';

const sidebarItems = [
  { name: "Achievements Overview", href: "/achievements" },
  { name: "Academic Achievements", href: "/achievements/academic" },
  { name: "Sports Achievements", href: "/achievements/sports" },
  { name: "Music & Dance", href: "/achievements/music-dance" },
  { name: "Art & Craft", href: "/achievements/art-craft" },
  { name: "Literary Achievements", href: "/achievements/literary" },
];

const categories = [
  {
    title: "Academic Excellence",
    description: "Celebrating our board toppers and winners of various national olympiads.",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    href: "/achievements/academic",
    color: "bg-blue-500"
  },
  {
    title: "Sports Champions",
    description: "Honoring our athletes who have excelled at state, national, and international levels.",
    icon: <Trophy className="w-8 h-8 text-primary" />,
    href: "/achievements/sports",
    color: "bg-orange-500"
  },
  {
    title: "Music & Performing Arts",
    description: "Recognizing the melodic and rhythmic talents that have brought glory to the school.",
    icon: <Music className="w-8 h-8 text-primary" />,
    href: "/achievements/music-dance",
    color: "bg-pink-500"
  },
  {
    title: "Visual Arts & Craft",
    description: "Celebrating the creativity and imagination of our student artists.",
    icon: <Palette className="w-8 h-8 text-primary" />,
    href: "/achievements/art-craft",
    color: "bg-emerald-500"
  },
  {
    title: "Literary & Debate",
    description: "Honoring our wordsmiths, debaters, and young poets.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    href: "/achievements/literary",
    color: "bg-purple-500"
  }
];

export default function AchievementsOverviewPage() {
  return (
    <>
      <PageHero
        title="Our Achievements"
        subtitle="Celebrating the milestones of excellence, hard work, and talent."
        backgroundImage="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Achievements' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Achievements">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">A Legacy of Success</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At Doon International School, Jabalpur, we believe in recognizing and 
                rewarding excellence in all its forms. Our students consistently push the 
                boundaries of their potential, achieving remarkable feats across academics, 
                sports, and the arts.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, index) => (
                <Link key={index} href={cat.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 ${cat.color} opacity-5 rounded-bl-[4rem] group-hover:opacity-10 transition-opacity`} />
                    <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{cat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {cat.description}
                    </p>
                    <div className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      View Laurels <span>&rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10 max-w-4xl mx-auto">
                 <h3 className="text-4xl font-black mb-8 italic uppercase tracking-wider text-accent">Defining Greatness</h3>
                 <p className="text-white/80 text-xl leading-relaxed mb-10">
                   "Success is not a destination, it's a constant journey of improvement." 
                   Every award on our walls represents hundreds of hours of dedication by our 
                   students and mentors alike.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-black text-accent mb-1">500+</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">Sports Medals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-accent mb-1">100%</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">Board Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-accent mb-1">50+</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">National Awards</div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
