'use client';

import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { motion } from 'framer-motion';
import { FileText, Download, BarChart3, PieChart } from 'lucide-react';

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

const reports = [
  { year: "2023-24", title: "Comprehensive Quality Review", status: "New", size: "4.2 MB" },
  { year: "2022-23", title: "Global Citizenship & Learning", status: "Archive", size: "3.8 MB" },
  { year: "2021-22", title: "Resilience in Education", status: "Archive", size: "3.5 MB" }
];

export default function AnnualReportPage() {
  return (
    <>
      <PageHero
        title="Annual Report"
        subtitle="Transparency and growth: A detailed review of our academic and institutional milestones."
        backgroundImage="https://images.unsplash.com/photo-1454165833762-04020c02c67b?q=80&w=1170&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Updates', href: '/updates' },
          { label: 'Annual Report' }
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
              <h2 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">Institutional Progress</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                The Annual Report of Doon International School Jabalpur provides a holistic 
                perspective on the school's journey over the past year. It encompasses 
                academic results, infrastructure developments, financial statements, 
                and various student-centric initiatives.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                 <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl flex items-start gap-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                       <BarChart3 className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                       <h4 className="text-xl font-black text-primary uppercase mb-2">Quality Audit</h4>
                       <p className="text-gray-500 leading-relaxed italic">
                         Extensive review of teaching methodologies and learning outcomes conducted 
                         by external educational auditors.
                       </p>
                    </div>
                 </div>
                 <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl flex items-start gap-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                       <PieChart className="w-7 h-7 text-orange-600" />
                    </div>
                    <div>
                       <h4 className="text-xl font-black text-primary uppercase mb-2">Resource Allocation</h4>
                       <p className="text-gray-500 leading-relaxed italic">
                         Insights into the school's investments in cutting-edge lab equipment, 
                         Science Park maintenance, and faculty training.
                       </p>
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black text-primary mb-10 uppercase">Download Reports</h3>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="bg-muted p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between group hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all">
                     <div className="flex items-center gap-6 mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                           <FileText className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="text-lg font-black text-primary uppercase leading-tight">{report.title}</h4>
                           <div className="flex items-center gap-4 mt-1">
                              <span className="text-xs text-accent font-bold uppercase">{report.year}</span>
                              <div className="h-1 w-1 bg-gray-300 rounded-full" />
                              <span className="text-xs text-gray-400 font-bold uppercase">{report.size}</span>
                           </div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${report.status === 'New' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                           {report.status}
                        </span>
                        <button className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors shadow-lg">
                           <Download className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[3rem] p-12 md:p-20 text-center text-primary relative overflow-hidden"
            >
               <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Committed to Transparency</h3>
               <p className="text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-6">
                 We believe in being accountable to our stakeholders. These reports offer 
                 a factual account of our performance and our vision for the future years.
               </p>
               <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </motion.div>
          </div>
        </SubPageLayout>
      </PageContainer>
    </>
  );
}
