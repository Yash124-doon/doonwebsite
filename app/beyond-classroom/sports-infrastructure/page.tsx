'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Activity, Target, Waves, Dumbbell, Trophy } from 'lucide-react';

const sidebarItems = [
  { name: "Beyond Classroom Overview", href: "/beyond-classroom" },
  { name: "Creative Convergence", href: "/beyond-classroom/creative-convergence" },
  { name: "Sports Infrastructure", href: "/beyond-classroom/sports-infrastructure" },
  { name: "HMG Sports Excellence", href: "/beyond-classroom/hmg-sports" },
  { name: "Personality Development", href: "/beyond-classroom/personality-development" },
  { name: "Counseling Services", href: "/beyond-classroom/behavioral-counseling" },
  { name: "School Band", href: "/beyond-classroom/school-band" },
  { name: "Student Council", href: "/beyond-classroom/student-council" },
];

const sportsFacilities = [
  {
    title: "Olympic-Sized Swimming Pool",
    description: "A professional-grade pool with dedicated lanes for training, beginner zones, and certified lifeguards on duty.",
    icon: <Waves className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Indoor Sports Complex",
    description: "A multi-purpose indoor stadium featuring wooden flooring for badminton, basketball, and table tennis.",
    icon: <Activity className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1546519156-d81a3ae9729d?q=80&w=1176&auto=format&fit=crop"
  },
  {
    title: "Football & Cricket Turf",
    description: "Lush green outdoor fields maintained to international standards for football matches and cricket practice.",
    icon: <Target className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1518605368461-1ee7e1631656?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Gymnasium & Fitness Area",
    description: "Fully equipped modern gymnasium focused on strength conditioning and physical fitness.",
    icon: <Dumbbell className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop"
  }
];

export default function SportsInfrastructurePage() {
  return (
    <>
      <PageHero
        title="Sports Infrastructure"
        subtitle="World-class sporting facilities to train the champions of tomorrow."
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'Sports Infrastructure' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Beyond Classroom">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Facilities Built for Champions</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Physical education is a fundamental pillar of the DISJ curriculum. Our state-of-the-art 
                sports infrastructure provides students with the perfect environment to discover their 
                athletic potential, develop teamwork, and build physical and mental resilience.
              </p>
            </motion.div>

            <div className="grid gap-12">
              {sportsFacilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2 aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl relative">
                    <img src={facility.image} alt={facility.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="md:w-1/2 p-4">
                    <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center mb-6">
                      {facility.icon}
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{facility.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl mt-12"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Trophy className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase italic">Join the HMG Sports Academy</h3>
                <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-10">
                  Ready to take your game to the next level? Our specialized HMG Centre for Sports Excellence provides elite coaching and advanced training programs.
                </p>
                <a href="/beyond-classroom/hmg-sports" className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors">
                  Explore Academy Programs
                </a>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
