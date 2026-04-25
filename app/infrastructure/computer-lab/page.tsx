'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Monitor, Code, ShieldCheck, Cpu } from 'lucide-react';

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

export default function ComputerLabPage() {
  return (
    <>
      <PageHero
        title="Computer Laboratories"
        subtitle="Empowering digital literacy and coding skills in a state-of-the-art tech environment."
        backgroundImage="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Computer Lab' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The IT Hub</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Our computer laboratories are centers of computational exploration. We provide 
                students with individual workstations equipped with the latest software and 
                high-speed connectivity to explore the worlds of coding, digital design, 
                and information technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "1:1 Student-PC Ratio",
                  description: "Every student has access to an individual desktop during their practical sessions for hands-on learning.",
                  icon: <Monitor className="w-8 h-8 text-primary" />
                },
                {
                  title: "Advanced Software",
                  description: "Pre-installed tools for coding (Python, Java), graphic design, and office productivity suites.",
                  icon: <Code className="w-8 h-8 text-primary" />
                },
                {
                  title: "High-Speed Network",
                  description: "Fiber optic internet connectivity with strict firewall protection for safe and educational browsing.",
                  icon: <ShieldCheck className="w-8 h-8 text-primary" />
                },
                {
                  title: "Latest Hardware",
                  description: "Systems are upgraded regularly to ensure they can handle modern educational applications and software.",
                  icon: <Cpu className="w-8 h-8 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-300">
                  <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black text-primary mb-6 uppercase">Coding Bootcamp</h3>
                <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
                  From basic digital literacy for juniors to complex programming for seniors, 
                  our computer labs host specialized workshops that prepare students for 
                  the technological requirements of the 21st-century workforce.
                </p>
                <div className="flex flex-wrap gap-2">
                   {["Python", "Scratch", "Robotics", "AI Literacy"].map((tech, i) => (
                     <div key={i} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-primary shadow-sm">
                       {tech}
                     </div>
                   ))}
                </div>
              </div>
              <div className="md:w-1/2">
                 <img 
                    src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1170&auto=format&fit=crop" 
                    alt="Computer Lab Session" 
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
