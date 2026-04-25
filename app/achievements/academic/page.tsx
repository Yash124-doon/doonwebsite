'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Star, Medal } from 'lucide-react';

const sidebarItems = [
  { name: "Achievements Overview", href: "/achievements" },
  { name: "Academic Achievements", href: "/achievements/academic" },
  { name: "Sports Achievements", href: "/achievements/sports" },
  { name: "Music & Dance", href: "/achievements/music-dance" },
  { name: "Art & Craft", href: "/achievements/art-craft" },
  { name: "Literary Achievements", href: "/achievements/literary" },
];

const boardToppers = [
  { name: "Ananya Sharma", score: "98.8%", year: "Class X - 2023", rank: "District Topper" },
  { name: "Rahul Verma", score: "97.5%", year: "Class X - 2023", rank: "School Topper" },
  { name: "Sanya Gupta", score: "96.4%", year: "Class X - 2022", rank: "Merit Holder" }
];

export default function AcademicAchievementsPage() {
  return (
    <>
      <PageHero
        title="Academic Achievements"
        subtitle="Celebrating scholastic brilliance and the pursuit of intellectual excellence."
        backgroundImage="https://images.unsplash.com/photo-1523050335102-c67440e1b12d?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Achievements', href: '/achievements' },
          { label: 'Academic Achievements' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Scholastic Laurels</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Academic excellence is a hallmark of Doon International School. Our students 
                consistently secure top honors in CBSE board examinations and national-level 
                competitions, reflecting the high standards of teaching and learning at our institution.
              </p>
            </motion.div>

            {/* Board Toppers Section */}
            <section>
              <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                <GraduationCap className="text-accent w-8 h-8" /> Board Toppers
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {boardToppers.map((topper, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-center relative group"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                      <Star className="fill-current w-6 h-6" />
                    </div>
                    <div className="text-4xl font-black text-primary mb-2">{topper.score}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{topper.name}</h4>
                    <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4">{topper.rank}</p>
                    <div className="text-gray-400 text-sm font-medium">{topper.year}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Olympiads & Competitions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                   <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Olympiads & Beyond</h3>
                   <div className="space-y-6">
                      {[
                        "Winner of SOF International Mathematics Olympiad (City Rank 1)",
                        "Merit in National Science Olympiad (NSO)",
                        "Top 1% in Discovery School Super League",
                        "Distinction in Australian National Chemistry Quiz"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-gray-700 font-semibold">
                          <Medal className="text-accent w-6 h-6 shrink-0" /> {item}
                        </div>
                      ))}
                   </div>
                </div>
                <div className="md:w-1/2">
                   <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop" 
                    alt="Students with medals" 
                    className="rounded-3xl shadow-xl border-8 border-white"
                   />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 text-center text-white shadow-2xl overflow-hidden relative"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full translate-x-1/2 -translate-y-1/2" />
               <h3 className="text-2xl font-bold mb-4 italic">Fostering a Culture of Excellence</h3>
               <p className="max-w-3xl mx-auto text-white/80 leading-relaxed font-medium">
                 We take immense pride in every certificate, medal, and trophy won by our students. 
                 It is a testament to their unwavering focus and the expert guidance provided 
                 by our dedicated faculty.
               </p>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
