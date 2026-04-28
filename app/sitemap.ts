import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dooninternationaljabalpur.com';
  const lastModified = new Date();

  const routes = [
    // Main Pages
    { url: `${baseUrl}`, lastModified, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/admissions`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/academics`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/infrastructure`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/sports`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/discover-doon`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/enquiry`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/career`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },

    // About Section
    { url: `${baseUrl}/about/board-directors`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about/chairmans-message`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about/founder`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about/mission-vision`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/principal-vision`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },

    // Academics Section
    { url: `${baseUrl}/academics/curriculum`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/academics/infrastructure`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/academics/methodology`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/academics/why-study`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },

    // Achievements Section
    { url: `${baseUrl}/achievements`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/achievements/academic`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/achievements/art-craft`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/achievements/literary`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/achievements/music-dance`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/achievements/sports`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },

    // Admissions Section
    { url: `${baseUrl}/admission-landing-page`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/admissions/enquiry`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/admissions/fees`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/admissions/how-to-apply`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/mandatory-disclosure`, lastModified, changeFrequency: 'yearly' as const, priority: 0.6 },

    // Beyond Classroom Section
    { url: `${baseUrl}/beyond-classroom`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/beyond-classroom/admission-counseling`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/behavioral-counseling`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/career-counselling`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/creative-convergence`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/hmg-sports`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/personality-development`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/school-band`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/beyond-classroom/student-council`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },

    // Infrastructure Section
    { url: `${baseUrl}/infrastructure/activity-rooms`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/infrastructure/campus`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/infrastructure/computer-lab`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/infrastructure/library`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/infrastructure/science-labs`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/infrastructure/science-park`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/infrastructure/smart-class`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },

    // Support Services Section
    { url: `${baseUrl}/support-services`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/support-services/boarding`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/support-services/bus`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/support-services/erp`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/support-services/medical`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/support-services/mess`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },

    // Updates Section
    { url: `${baseUrl}/updates`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/updates/annual-award`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/annual-function`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/annual-report`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/awards`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/community-services`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/events`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/investiture`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/magazine`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/national-festivals`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/news`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/results`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/special-assemblies`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/updates/sports-day`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return routes;
}
