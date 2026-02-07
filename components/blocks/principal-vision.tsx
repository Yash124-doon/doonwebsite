import Image from 'next/image';

export default function PrincipalVision() {
  return (
    <section className="relative w-full bg-white py-6 pt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text column */}
        <div className="flex flex-col gap-4 px-6">
          <h2 className="text-xl font-heading font-bold text-primary text-center md:text-left">
            Principal's Message
          </h2>
          <p className="text-center md:text-left font-body text-[15px] leading-relaxed">
            Doon International School, Jabalpur
          </p>

          <div className="text-gray-700 font-body text-[15px] leading-relaxed space-y-4">
            <p>At Doon International School, our vision is to nurture global leaders who embody excellence, compassion, and innovation.</p>
            <p>We strive to create an educational environment where every student discovers their unique potential and develops the skills necessary to thrive in an interconnected world. Our holistic approach combines rigorous academics with rich co-curricular experiences in arts, sports, and community service.</p>
            <p>We believe in fostering critical thinking, creativity, and ethical decision-making. Our students emerge as confident individuals ready to contribute positively to society, bridging diverse cultures and advancing human progress.</p>
            <p>Through personalized learning and unwavering support, we ensure that each child grows academically, emotionally, and socially. We are committed to developing well-rounded global citizens who will lead with integrity and vision.</p>
            <p>Together, we build a future where education transcends boundaries and empowers the next generation.</p>

            <div className="pt-6 border-t border-gray-200 mt-6">
              <p className="text-primary font-medium">
                — Dr. Rajiv Kumar Singh, Principal
              </p>
              <p className="text-primary/80 mt-1 text-sm">
                Ed.D. in Educational Leadership, 25+ years of educational excellence
              </p>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/principal.webp"
            alt="Principal of Doon International School"
            width={450}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
