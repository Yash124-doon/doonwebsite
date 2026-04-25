'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Music, Trophy, Heart, Users, Compass, BookOpen } from 'lucide-react';

const sidebarItems = [
  { name: "Beyond Classroom Overview", href: "/beyond-classroom" },
  { name: "Creative Convergence", href: "/beyond-classroom/creative-convergence" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
  { name: "HMG Sports Excellence", href: "/beyond-classroom/hmg-sports" },
  { name: "Personality Development", href: "/beyond-classroom/personality-development" },
  { name: "Counseling Services", href: "/beyond-classroom/behavioral-counseling" },
  { name: "School Band", href: "/beyond-classroom/school-band" },
  { name: "Student Council", href: "/beyond-classroom/student-council" },
];

const cards = [
  {
    title: "Creative Arts",
    description: "Nurturing expression through music, dance, and visual arts.",
    icon: <Music className="w-6 h-6" />,
    href: "/beyond-classroom/creative-convergence",
    color: "bg-pink-500"
  },
  {
    title: "Sports & Fitness",
    description: "Elite training facilities and competitive sports programs.",
    icon: <Trophy className="w-6 h-6" />,
    href: "/beyond-classroom/hmg-sports",
    color: "bg-orange-500"
  },
  {
    title: "Holistic Growth",
    description: "Developing character, confidence, and leadership skills.",
    icon: <Heart className="w-6 h-6" />,
    href: "/beyond-classroom/personality-development",
    color: "bg-red-500"
  },
  {
    title: "Guidance",
    description: "Expert career and behavioral counseling for every student.",
    icon: <Compass className="w-6 h-6" />,
    href: "/beyond-classroom/behavioral-counseling",
    color: "bg-blue-500"
  }
];

export default function BeyondClassroomOverviewPage() {
  return (
    <>
      <PageHero
        title="Beyond Classroom"
        subtitle="Exploring talents, building character, and achieving holistic excellence."
        backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Beyond Classroom' }]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Beyond Classroom">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Life at DISJ</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                At Doon International School, education is not confined to the four walls of a classroom. 
                Our 'Beyond Classroom' initiatives are designed to help students discover their 
                passions, hone their talents, and develop a well-rounded personality.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {cards.map((card, index) => (
                <Link key={index} href={card.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 ${card.color} opacity-5 rounded-bl-[5rem] group-hover:opacity-10 transition-opacity`} />
                    <div className={`w-14 h-14 ${card.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <span className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest ${card.color.replace('bg-', 'text-')} group-hover:gap-4 transition-all`}>
                      Explore More <div className="w-8 h-px bg-current" />
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Student Leadership</h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  We empower our students to lead. Through the Student Council and various 
                  on-campus clubs, DISJ students learn the values of responsibility, teamwork, 
                  and community service.
                </p>
                <Link href="/beyond-classroom/student-council" className="inline-block bg-accent text-primary font-black px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Meet the Council
                </Link>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
