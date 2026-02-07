'use client';

import { motion } from 'framer-motion';
import AdmissionProcessSection from '../../components/sections/admissions/AdmissionProcessSection';
import RequiredDocumentsSection from '../../components/sections/admissions/RequiredDocumentsSection';
import AdmissionsCTA from '../../components/sections/admissions/AdmissionsCTA';

export default function AdmissionsPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-90">
          <div className="absolute inset-0 bg-brand-secondary opacity-20 animate-pulse" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full"
            animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute bottom-32 left-16 w-8 h-8 bg-brand-primary/20 rounded-full"
            animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-8 text-white leading-tight">
                Join Our
                <span className="block text-white">Community</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Begin an extraordinary educational journey at Doon International School.
              We're excited to welcome new students and families to our vibrant community.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://disjabalpur.schoolpad.in/enquiryManager/onlineAdmission/8"
                className="btn-mobile bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg hover:shadow-xl w-full sm:w-auto inline-block"
              >
                Start Application
              </a>
              <a
                href="/enquiry"
                className="btn-mobile bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg hover:shadow-xl w-full sm:w-auto inline-block"
              >
                Schedule Visit
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <AdmissionProcessSection />

      <RequiredDocumentsSection />

      <AdmissionsCTA />
    </>
  );
}
