'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Megaphone, Users, Sun, Heart } from 'lucide-react';

const sidebarItems = [
  { name: "Latest Updates", href: "/updates" },
  { name: "Awards & Recognitions", href: "/updates/awards" },
  { name: "Academic Results", href: "/updates/results" },
  { name: "Annual Function", href: "/updates/annual-function" },
  { name: "Sports Day", href: "/updates/sports-day" },
  { name: "Annual Award Ceremony", href: "/updates/annual-award" },
  { name: "Investiture Ceremony", href: "/updates/investiture" },
  { name: "National Festivals", href: "/updates/national-festivals" },
  { name: "Special Assemblies", href: "/updates/special-assemblies" },
  { name: "Community Services", href: "/updates/community-services" },
  { name: "Annual Report", href: "/updates/annual-report" },
  { name: "News & Media", href: "/updates/news" },
  { name: "School Magazine", href: "/updates/magazine" },
  { name: "Recent Events", href: "/updates/events" },
];

const assemblies = [
  { title: "Teachers' Day", focus: "Honoring our Mentors", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1170&auto=format&fit=crop" },
  { title: "Children's Day", focus: "Celebrating Childhood", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop" },
  { title: "International Yoga Day", focus: "Mind & Body Balance", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1220&auto=format&fit=crop" }
];

export default function SpecialAssembliesPage() {
  return (
    <>
      <PageHero
        title="Special Assemblies"
        subtitle="Where every morning begins with inspiration, reflection, and community spirit."
        backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Special Assemblies' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Happenings">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Heart of DISJ Mornings</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Our assemblies are more than just announcements. They are a daily ritual of 
                knowledge sharing, talent display, and moral guidance. From student-led 
                presentations to faculty talks, every assembly is designed to set a 
                positive tone for the academic day.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {[
                   { label: "Public Speaking", icon: Megaphone, color: "text-blue-600" },
                   { label: "Community", icon: Users, color: "text-orange-600" },
                   { label: "Mindfulness", icon: Sun, color: "text-yellow-600" },
                   { label: "Values", icon: Heart, color: "text-red-600" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center group hover:bg-muted transition-all">
                      <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                      <div className="text-xl font-black text-primary uppercase tracking-tight">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-primary mb-12 uppercase text-center md:text-left">Thematic Celebrations</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {assemblies.map((assembly, index) => (
                  <div key={index} className="group relative">
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-6">
                      <img src={assembly.image} alt={assembly.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                         <h4 className="text-xl font-black text-white uppercase mb-2 tracking-tight">{assembly.title}</h4>
                         <p className="text-accent font-bold text-xs uppercase tracking-widest leading-none">{assembly.focus}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
            >
               <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Student-Led Initatives</h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                 We encourage our students to take ownership of the morning assemblies. 
                 Each house is responsible for planning and executing assemblies for a week, 
                 addressing global issues, scientific discoveries, or historical milestones.
               </p>
               <div className="inline-block bg-primary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg">
                  Empowering Young Voices
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
