interface HeroProps {
  heading: string;
  subheading: string;
  videos: { url: string }[];
  primaryCta: string;
  secondaryCta: string;
}

export default function Hero({ heading, subheading, videos, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT COLUMN */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Discover Doon,<br/>Jabalpur
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Holistic growth rooted in values, powered by modern learning.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a className="px-6 py-4 bg-[#003366] text-white rounded-lg shadow-lg hover:bg-[#002244]">
              Book a Campus Tour
            </a>
            <a className="font-semibold text-[#003366] underline hover:text-[#002244]">
              Watch Student Stories
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN - VIDEOS */}
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <div className="flex-1 aspect-video bg-black rounded-xl shadow-xl min-h-[260px] flex items-center justify-center">
            <svg width="60" height="60" fill="#FF0033">
              <circle cx="30" cy="30" r="30" />
            </svg>
          </div>

          <div className="flex-1 aspect-video bg-black rounded-xl shadow-xl min-h-[260px] flex items-center justify-center">
            <svg width="60" height="60" fill="#FF0033">
              <circle cx="30" cy="30" r="30" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
