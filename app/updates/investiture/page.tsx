'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, ScrollText, Flag } from 'lucide-react';

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

const studentCouncil = [
  { role: "School Captain (Boy)", name: "Vikram Rathore", image: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=688&auto=format&fit=crop" },
  { role: "School Captain (Girl)", name: "Isha Malhotra", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop" },
  { role: "Sports Captain", name: "Kabir Singh", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop" },
  { role: "Cultural Captain", name: "Ananya Dixit", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop" },
];

export default function InvestiturePage() {
  return (
    <>
      <PageHero
        title="Investiture Ceremony"
        subtitle="Empowering our student leaders with responsibility and vision for a brighter DISJ."
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Investiture' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Leadership Induction 2024</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                The Investiture Ceremony at Doon International School Jabalpur is not just a formal event, 
                but a solemn occasion where we entrust the torch of leadership to our students. 
                This year, the ceremony was graced by high-ranking officials who inspired 
                our young leaders to serve with integrity.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-muted p-10 rounded-[2.5rem]">
                   <Flag className="w-12 h-12 text-accent mb-6" />
                   <h3 className="text-2xl font-black text-primary mb-4 uppercase">The Oath Taking</h3>
                   <p className="text-gray-600 leading-relaxed italic">
                     "I solemnly pledge that I will faithfully and conscientiously discharge my duties as 
                     a member of the Student Council. I will uphold the values of Doon International School 
                     and lead by example in all endeavors."
                   </p>
                </div>
                <div className="bg-primary p-10 rounded-[2.5rem] text-white">
                   <ShieldCheck className="w-12 h-12 text-accent mb-6" />
                   <h3 className="text-2xl font-black mb-4 uppercase">Badging & Sashing</h3>
                   <p className="text-white/70 leading-relaxed">
                     The newly elected council members were conferred with their sashes and badges by 
                     the Principal. This symbolic ritual marks the beginning of their journey as 
                     ambassadors of discipline and excellence.
                   </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-primary mb-12 uppercase">Student Council 2024-25</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {studentCouncil.map((leader, index) => (
                  <div key={index} className="group">
                    <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-lg border-2 border-gray-100">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="text-md font-black text-primary uppercase text-center leading-tight">{leader.name}</h4>
                    <p className="text-xs text-accent font-bold text-center mt-1 uppercase tracking-widest">{leader.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-16 flex flex-col items-center text-center"
            >
               <ScrollText className="w-14 h-14 text-primary mb-8" />
               <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Message from the Principal</h3>
               <p className="text-lg text-gray-600 max-w-3xl leading-relaxed italic">
                 "Leadership is not a title; it is a responsibility to inspire others to dream more, 
                 learn more, and become more. I congratulate our new leaders and expect 
                 them to maintain the highest standards of the DISJ legacy."
               </p>
               <div className="mt-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-accent" />
                  <span className="font-bold text-primary uppercase tracking-widest text-sm">DIS Jabalpur Leadership</span>
                  <div className="h-px w-12 bg-accent" />
               </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
