'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Heart, Globe, UserCheck, Handshake } from 'lucide-react';

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

const initiatives = [
  { title: "Eco-Doon Drive", goal: "Environmental Sustainability", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=1174&auto=format&fit=crop" },
  { title: "Hope Academy Visit", goal: "Empowering Underprivileged", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop" },
  { title: "Clean Jabalpur Drive", goal: "Social Responsibility", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1170&auto=format&fit=crop" }
];

export default function CommunityServicesPage() {
  return (
    <>
      <PageHero
        title="Community Services"
        subtitle="Learning through service: Cultivating empathy and social responsibility beyond the classroom."
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Community Services' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">The Doon Spirit of Giving</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                At Doon International School Jabalpur, we believe that true education 
                leads to the desire to serve. Our 'Social Outreach Program' encourages 
                students to engage with the community, understand societal challenges, 
                and contribute actively to social welfare and environmental preservation.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {[
                   { label: "Community", icon: Handshake, color: "text-blue-500" },
                   { label: "Empathy", icon: Heart, color: "text-pink-500" },
                   { label: "Global Goal", icon: Globe, color: "text-green-500" },
                   { label: "Volunteers", icon: UserCheck, color: "text-orange-500" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg text-center hover:bg-muted transition-all">
                      <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
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
              <h3 className="text-2xl font-black text-primary mb-12 uppercase">Our Initiatives</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {initiatives.map((item, index) => (
                  <div key={index} className="group overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-gray-50 flex flex-col">
                    <div className="h-56 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="p-8">
                       <h4 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">{item.title}</h4>
                       <p className="text-accent font-bold text-xs uppercase tracking-widest leading-relaxed">
                         Major Focus: {item.goal}
                       </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
               <Heart className="w-16 h-16 text-accent mx-auto mb-8" />
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Make a Difference</h3>
               <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                 "None of us, including me, ever do great things. But we can all do small 
                 things, with great love, and together we can do something wonderful." 
                 Our students take these words of Mother Teresa to heart.
               </p>
               <button className="bg-accent text-primary font-black px-10 py-4 rounded-full shadow-lg hover:bg-white transition-all">
                  Support Our Projects
               </button>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
