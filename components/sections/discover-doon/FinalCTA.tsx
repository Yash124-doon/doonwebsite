interface FinalCTAProps {
  heading: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function FinalCTA({ heading, primaryCta, secondaryCta }: FinalCTAProps) {
  return (
    <section className="py-32 px-4 bg-gray-900 relative">
      {/* Divider Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FFD700]"></div>

      <div className="max-w-4xl mx-auto text-center">
        <div
          className="animate-fade-in"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {heading}
          </h2>

          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Take the next step towards discovering the perfect educational environment for your child.
            We invite you to explore and make connections that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="px-12 py-5 bg-[#FFD700] text-[#003366] font-bold text-lg rounded-lg hover:bg-[#FFE55C] transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-2xl transform active:scale-95">
              {primaryCta}
            </button>

            <button className="px-12 py-5 border-3 border-[#FFD700] text-[#FFD700] font-bold text-lg rounded-lg hover:bg-[#FFD700] hover:text-[#003366] transition-all duration-300 hover:scale-105 transform active:scale-95 shadow-lg hover:shadow-xl">
              {secondaryCta}
            </button>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-[#FFD700]/20 rounded-full animate-spin" />
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FFD700]/20 rounded-full animate-pulse" />
            <div className="absolute top-40 right-40 w-16 h-16 border border-[#FFD700]/30 rounded-full animate-ping animation-delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
