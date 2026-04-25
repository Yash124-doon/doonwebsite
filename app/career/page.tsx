'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import PageContainer from '@/components/layout/PageContainer';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Loader2
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const staticBenefits = [
  {
    title: "Professional Growth",
    description: "Regular workshops, training sessions, and opportunities to attend national & international educational conferences.",
    icon: <GraduationCap className="w-8 h-8 text-accent" />
  },
  {
    title: "Collaborative Culture",
    description: "Work with a team of passionate educators in a supportive environment that values innovation and creativity.",
    icon: <Users className="w-8 h-8 text-accent" />
  },
  {
    title: "World-Class Infrastructure",
    description: "Teach in digitally-enabled smart classrooms with access to advanced labs, sports facilities, and a lush green campus.",
    icon: <Briefcase className="w-8 h-8 text-accent" />
  },
  {
    title: "Holistic Well-being",
    description: "We care about our staff's well-being with competitive compensation, health support, and a positive work-life balance.",
    icon: <Heart className="w-8 h-8 text-accent" />
  }
];

interface JobOpening {
  id: number;
  title: string;
  type: string;
  experience: string;
  qualification: string;
}

export default function CareerPage() {
  const [openings, setOpenings] = React.useState<JobOpening[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState<{ type: 'success' | 'error', message: string } | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  // Fetch jobs on mount
  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/api/career/jobs`);
        const data = await res.json();
        if (data.success) {
          setOpenings(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      } finally {
        setIsLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const res = await fetch(`${API_URL}/api/career/apply`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSubmissionStatus({ type: 'success', message: 'Your application has been submitted successfully!' });
        formRef.current?.reset();
      } else {
        setSubmissionStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setSubmissionStatus({ type: 'error', message: 'Failed to connect to the server. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        title="Careers at DISJ"
        subtitle="Join our mission to nurture global citizens and empower future leaders."
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <PageContainer>
        <div className="space-y-24 py-10">
          {/* Why Join Us Section */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-primary mb-6 uppercase tracking-tight italic">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Doon International School Jabalpur, we believe that exceptional education
                starts with exceptional educators. We provide a platform where your passion
                for teaching meets a world of opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {staticBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Current Openings Section */}
          <section id="openings">
            <div className="bg-muted p-12 md:p-20 rounded-[4rem] shadow-inner">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-primary mb-4 uppercase tracking-tight italic">Current Openings</h2>
                  <p className="text-gray-500 max-w-xl font-medium">
                    We are always looking for talented individuals who share our vision
                    of educational excellence. Explore our current opportunities below.
                  </p>
                </div>
                <div className="bg-white px-6 py-2 rounded-full border border-gray-200 text-sm font-bold text-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  {openings.length} Active Positions
                </div>
              </div>

              {isLoadingJobs ? (
                <div className="flex flex-col items-center py-20 text-gray-400">
                  <Loader2 className="w-10 h-10 animate-spin mb-4" />
                  <p className="font-bold uppercase tracking-widest text-sm">Loading Opportunities...</p>
                </div>
              ) : openings.length > 0 ? (
                <div className="grid gap-6">
                  {openings.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-accent transition-all"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <h3 className="text-2xl font-black text-primary">{job.title}</h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500 font-medium">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            Exp: {job.experience}
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-accent" />
                            {job.qualification}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white/50 p-12 rounded-3xl text-center border-2 border-dashed border-gray-200">
                  <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">No active openings right now</h3>
                  <p className="text-gray-500">You can still express your interest below!</p>
                </div>
              )}
            </div>
          </section>

          {/* Application Form Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-8 uppercase italic tracking-widest text-accent">Join Our Team</h2>
                <p className="text-xl text-white/80 leading-relaxed mb-12">
                  If you don't see a matching opening but believe you could contribute
                  to our community, please share your details. We maintain a database
                  for future requirements.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white/50 uppercase tracking-widest mb-1">Email Resume</div>
                      <div className="font-bold text-lg">careers@disjabalpur.edu.in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white/50 uppercase tracking-widest mb-1">HR Helpline</div>
                      <div className="font-bold text-lg">+91 92015 91900</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white/50 uppercase tracking-widest mb-1">Campus</div>
                      <div className="font-bold text-lg">Manegaon, Jabalpur (M.P.)</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-2xl"
            >
              <h3 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight">Express Interest</h3>
              
              {submissionStatus && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`mb-8 p-6 rounded-2xl font-bold flex items-center gap-4 ${
                    submissionStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                  }`}
                >
                  {submissionStatus.type === 'success' ? <CheckCircle2 className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
                  {submissionStatus.message}
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">First Name</label>
                    <input name="firstName" type="text" required className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Last Name</label>
                    <input name="lastName" type="text" required className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Last Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Position Interested In</label>
                  <select name="position" required className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all appearance-none cursor-pointer">
                    <option value="">Select a position</option>
                    {openings.map((job, idx) => (
                      <option key={idx} value={job.title}>{job.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Upload Resume (PDF/DOC)</label>
                  <div className="relative">
                    <input 
                      name="resume"
                      type="file" 
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Brief Summary / Note</label>
                  <textarea name="summary" rows={4} className="w-full bg-muted border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent transition-all" placeholder="Tell us about yourself..."></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-black py-5 rounded-2xl shadow-xl hover:bg-black hover:scale-[1.02] active:scale-95 transition-all text-lg uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Submitting...
                    </>
                  ) : 'Submit Interest'}
                </button>
              </form>
            </motion.div>
          </section>
        </div>
      </PageContainer>
    </>
  );
}
