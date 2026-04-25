'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { Bookmark, Share2, ExternalLink, Newspaper } from 'lucide-react';

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

const newsArticles = [
  {
    title: "Doon International School Jabalpur Ranks Top in State Quality Index",
    source: "The Times of India",
    date: "Dec 12, 2023",
    snippet: "The Jabalpur branch of Doon International School has been recognized for its holistic curriculum and infrastructure...",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop"
  },
  {
    title: "Eco-Friendly Science Park - A Hub of Experimental Learning",
    source: "Dainik Bhaskar",
    date: "Nov 05, 2023",
    snippet: "The newly inaugurated Science Park at DISJ becomes a sensation among educators for its interactive exhibits...",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1332&auto=format&fit=crop"
  },
  {
    title: "Local Excellence, Global Citizens: The DISJ Philosophy",
    source: "Hindustan Times",
    date: "Oct 20, 2023",
    snippet: "DISJ's approach to merging Indian values with international standards sets a new benchmark in MP...",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop"
  }
];

export default function NewsMediaPage() {
  return (
    <>
      <PageHero
        title="News & Media"
        subtitle="DISJ in the headlines: Capturing the buzz of our excellence."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'News & Media' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Mainstream Recognition</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                From local bulletins to national dailies, the achievements of our students 
                and the innovations of our faculty often find themselves in the limelight. 
                Explore how the media views the DISJ experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-2xl transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {article.source}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-gray-400 text-xs font-bold mb-3">{article.date}</div>
                    <h3 className="text-lg font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                      {article.snippet}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                      <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                        View Article <ExternalLink className="w-3 h-3" />
                      </button>
                      <div className="flex gap-3">
                        <Bookmark className="w-4 h-4 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                        <Share2 className="w-4 h-4 text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
              <div className="md:w-1/2">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-6 uppercase">Media Relations</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For press inquiries, media kits, or campus visit requests for journalism 
                  purposes, please contact our Public Relations office. We are always 
                  happy to share the inspiring stories of our students with the world.
                </p>
                <button className="text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-primary hover:text-accent hover:border-accent transition-all">
                  Contact PR Office
                </button>
              </div>
              <div className="md:w-1/2">
                 <div className="relative">
                    <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-2" />
                    <img 
                      src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop" 
                      alt="Press Conference" 
                      className="relative rounded-2xl shadow-xl"
                    />
                 </div>
              </div>
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
