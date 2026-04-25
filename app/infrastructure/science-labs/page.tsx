'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, Beaker, ShieldCheck } from 'lucide-react';

const sidebarItems = [
  { name: "Infrastructure Overview", href: "/infrastructure" },
  { name: "Campus & Surroundings", href: "/infrastructure/campus" },
  { name: "Library", href: "/infrastructure/library" },
  { name: "Science Park", href: "/infrastructure/science-park" },
  { name: "Science Labs", href: "/infrastructure/science-labs" },
  { name: "Smart Classrooms", href: "/infrastructure/smart-class" },
  { name: "Computer Lab", href: "/infrastructure/computer-lab" },
  { name: "Activity Rooms", href: "/infrastructure/activity-rooms" },
  { name: "Health Center", href: "/support-services/medical" },
  { name: "Mess Facility", href: "/support-services/mess" },
  { name: "Sports Infrastructure", href: "/infrastructure#sports" },
];

export default function ScienceLabsPage() {
  return (
    <>
      <PageHero
        title="Science Laboratories"
        subtitle="Cultivating precision and discovery: Fully equipped Physics, Chemistry, and Biology labs."
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1098&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Science Labs' }
        ]}
      />

      <PageContainer>
        <SubPageLayout sidebarItems={sidebarItems} sectionTitle="Infrastructure">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Crucible of Innovation</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Our science laboratories are designed to meet the highest standards of academic 
                precision. They provide students with a space to test hypotheses, observe 
                phenomena, and develop the analytical skills required for future scientific pursuits.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Physics Lab",
                  description: "Dedicated to the study of optics, mechanics, and electronics with advanced instrumentation and measurement tools.",
                  icon: <FlaskConical className="w-8 h-8 text-primary" />
                },
                {
                  title: "Chemistry Lab",
                  description: "Features specialized workstations with proper gas connections, safety vents, and a wide array of chemical reagents.",
                  icon: <Beaker className="w-8 h-8 text-primary" />
                },
                {
                  title: "Biology Lab",
                  description: "Equipped with high-definition microscopes, anatomical models, and specimens for deep biological exploration.",
                  icon: <Microscope className="w-8 h-8 text-primary" />
                }
              ].map((lab, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-center group hover:bg-primary transition-all duration-500">
                  <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors">
                    {lab.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">{lab.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{lab.description}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 text-accent font-black text-xs uppercase tracking-widest mb-4">
                  <ShieldCheck className="w-5 h-5" /> Safety First
                </div>
                <h3 className="text-2xl font-black text-primary mb-6 uppercase">Modern Lab Standards</h3>
                <p className="text-gray-600 leading-relaxed max-w-lg">
                  Safety is our top priority. Our labs are equipped with eye-wash stations, 
                  fire extinguishers, and first-aid kits. Students are strictly trained in 
                  laboratory protocols and wear protective gear during all practical sessions.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                   {["Advanced Apparatus", "Prep Rooms", "Lab Assistants", "Ventilation Systems"].map((item, i) => (
                     <div key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500">
                       {item}
                     </div>
                   ))}
                </div>
              </div>
              <div className="md:w-1/2">
                 <img 
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1170&auto=format&fit=crop" 
                    alt="Lab Equipment" 
                    className="rounded-3xl shadow-xl border-8 border-white"
                 />
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
