import Image from 'next/image';

export default function PrincipalVision() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#f8f6f0] py-16 md:py-24 overflow-hidden">

      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #0a2240 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 md:px-8">

        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a84c] mb-2">
            Leadership & Vision
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2240] font-heading">
            Principal's Message
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Image Column ── */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative">

              {/* Gold border frame */}
              <div
                className="absolute -inset-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 50%, #c9a84c 100%)',
                  padding: '2px',
                  borderRadius: '1.25rem',
                }}
                aria-hidden="true"
              />

              {/* White inner frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: 400 }}>
                <Image
                  src="/assets/P 1.png"
                  alt="Dr. Rajiv Kumar Singh — Principal of Doon International School"
                  width={400}
                  height={500}
                  className="object-cover object-top w-full h-[420px] md:h-[500px]"
                  priority
                />

                {/* Name badge at bottom of image */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,34,64,0.95) 0%, rgba(10,34,64,0.7) 80%, transparent 100%)',
                  }}
                >
                  <p className="text-white font-bold text-lg leading-tight">Dr. Rajiv Kumar Singh</p>
                  <p className="text-[#c9a84c] text-sm font-medium mt-0.5">Principal</p>
                  <p className="text-white/70 text-xs mt-0.5">Doon International School, Jabalpur</p>
                </div>
              </div>

              {/* Decorative badge */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #0a2240 0%, #1a3a6a 100%)' }}
              >
                <p className="text-[#c9a84c] font-bold text-lg leading-none">25+</p>
                <p className="text-white text-[9px] leading-tight text-center font-medium mt-0.5 px-1">Yrs<br />Experience</p>
              </div>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-none">

            {/* Opening quote */}
            <div className="relative pl-5 border-l-4 border-[#c9a84c]">
              <span
                className="absolute -top-4 -left-2 text-6xl font-serif leading-none text-[#c9a84c]"
                aria-hidden="true"
                style={{ fontFamily: 'Georgia, serif', opacity: 0.35 }}
              >
                &ldquo;
              </span>
              <p className="text-[#0a2240] text-lg md:text-xl font-semibold font-heading leading-relaxed italic">
                Nurturing global leaders who embody excellence, compassion, and innovation.
              </p>
            </div>

            {/* Body paragraphs */}
            <div className="text-gray-600 font-body text-[15px] leading-relaxed space-y-3">
              <p>
                At Doon International School, we strive to create an educational environment where every
                student discovers their unique potential and develops the skills necessary to thrive in an
                interconnected world. Our holistic approach combines rigorous academics with rich
                co-curricular experiences in arts, sports, and community service.
              </p>
              <p>
                We believe in fostering critical thinking, creativity, and ethical decision-making.
                Our students emerge as confident individuals ready to contribute positively to society,
                bridging diverse cultures and advancing human progress.
              </p>
              <p>
                Through personalized learning and unwavering support, we ensure that each child grows
                academically, emotionally, and socially — developing well-rounded global citizens who
                will lead with integrity and vision.
              </p>
              <p>
                Together, we build a future where education transcends boundaries and empowers the
                next generation.
              </p>
            </div>

            {/* Credentials row */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(10,34,64,0.04)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #0a2240, #1a3a6a)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0a2240] font-semibold text-sm leading-tight">Ed.D.</p>
                  <p className="text-gray-500 text-xs mt-0.5">Educational Leadership</p>
                </div>
              </div>

              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(10,34,64,0.04)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #0a2240, #1a3a6a)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0a2240] font-semibold text-sm leading-tight">25+ Years</p>
                  <p className="text-gray-500 text-xs mt-0.5">Educational Excellence</p>
                </div>
              </div>
            </div>

            {/* Signature line */}
            <div
              className="flex items-center gap-4 pt-5 mt-2"
              style={{ borderTop: '1px solid rgba(201,168,76,0.3)' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[#c9a84c] font-bold text-xl"
                style={{ background: 'linear-gradient(135deg, #0a2240, #1a3a6a)' }}
              >
                R
              </div>
              <div>
                <p className="text-[#0a2240] font-bold text-base">Dr. Rajiv Kumar Singh</p>
                <p className="text-[#c9a84c] text-sm font-medium">Principal, Doon International School</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
