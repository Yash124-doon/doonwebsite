'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Trophy, Dumbbell, Target, Users } from 'lucide-react';
import Link from 'next/link';

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

const sportsFeatures = [
  {
    title: "Olympic-Standard Infrastructure",
    description: "Our campus features professional-grade courts for tennis, basketball, and badminton, along with a full-sized football field.",
    icon: <Trophy className="w-8 h-8 text-primary" />
  },
  {
    title: "Expert Coaching",
    description: "Certified coaches provide specialized training sessions, focusing on skill development, strategy, and mental toughness.",
    icon: <Users className="w-8 h-8 text-primary" />
  },
  {
    title: "Fitness & Nutrition",
    description: "We don't just train; we educate students on the importance of physical fitness, proper nutrition, and recovery.",
    icon: <Dumbbell className="w-8 h-8 text-primary" />
  },
  {
    title: "Competitive Edge",
    description: "Our students regularly represent DISJ at national and state-level CBSE sports competitions, consistently bringing home medals.",
    icon: <Target className="w-8 h-8 text-primary" />
  }
];

export default function HMGSportsPage() {
  return (
    <>
      <PageHero
        title="HMG Sports Excellence"
        subtitle="Nurturing champions and fostering a spirit of sportsmanship."
        backgroundImage="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Beyond Classroom', href: '/beyond-classroom' },
          { label: 'HMG Sports Excellence' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">HMG Centre for Sports Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The HMG Centre for Sports Excellence at DISJ is more than just a training ground.
                It is a dedicated facility aimed at identifying and nurturing raw athletic talent
                and transforming it into professional excellence.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {sportsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="mb-6 p-4 bg-primary/5 rounded-2xl inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <h3 className="text-3xl font-black text-primary mb-6">Elite Sports Hub</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From specialized tennis academies to inter-house football leagues, DISJ
                  provides an environment where athletes can thrive. Our partnership with
                  professional sporting bodies ensures that our students have access to
                  the best training methodologies in the country.
                </p>
                <Link href="/infrastructure#sports" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  View Sports Infrastructure <span>&rarr;</span>
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1170&auto=format&fit=crop" className="rounded-2xl shadow-lg" alt="Sports Action" />
                  <img src="https://images.unsplash.com/photo-1519766304817-4f37bdeca0a2?q=80&w=1170&auto=format&fit=crop" className="rounded-2xl shadow-lg mt-8" alt="Tennis Court" />
                </div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
