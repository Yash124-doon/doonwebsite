'use client';

import PrincipalVision from '../../components/blocks/principal-vision';

export default function PrincipalVisionPage() {
  return (
    <div className="mt-24">
      <PrincipalVision />

      {/* Principal's Educational Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Educational Philosophy
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Guiding principles that shape our approach to holistic education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Vision for Tomorrow</h3>
              <p className="text-gray-700 font-body leading-relaxed">
                Our commitment extends beyond academic excellence. We foster critical thinking, ethical decision-making,
                and a deep appreciation for cultural diversity. Students develop the confidence to navigate an
                interconnected world with compassion and purpose.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Leadership Through Example</h3>
              <p className="text-gray-700 font-body leading-relaxed">
                As educational leaders, we demonstrate the values we teach. Integrity, dedication, and innovation
                guide our daily commitment to nurturing young minds. Our leadership creates an environment where
                potential is recognized and excellence is celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Director's Message
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Our vision for transformative education and holistic development
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-xl leading-relaxed text-primary mb-8 italic font-medium">
              "Education, at its essence, is the art of shaping human potential."
            </p>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                At Doon International School, we believe that every child arrives with an inner brilliance — and the role of a school is to nurture that brilliance with wisdom, care, and purposeful guidance.
              </p>

              <p>
                Our philosophy, "Cultural Roots, Global Growth," reflects our conviction that true progress begins with grounding. A child anchored in values can navigate any horizon with clarity.
              </p>

              <p>
                Here, learning is more than academics. It is the cultivation of thought, empathy, expression, and inner strength. We strive to create an environment where curiosity thrives, integrity becomes natural, and children learn to stand tall in a world that is constantly evolving.
              </p>

              <p>
                Education for us is a journey of becoming — becoming aware, becoming capable, and becoming individuals who bring purpose and grace into whatever they choose to pursue.
              </p>

              <p>
                As we move ahead, our commitment remains unwavering: to shape learners who are rooted in character, elevated in vision, and ready to contribute meaningfully to a global future. We step forward with hope, with responsibility, and with the belief that every child's journey at Doon will lead them towards a life of substance and significance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Background & Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Leadership Journey
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
              A dedicated career in education, committed to excellence since 1985
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Doctorate in Education and extensive research in child development psychology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Global Perspective</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                International educational collaborations and exposure to diverse teaching methodologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pioneering modern educational approaches while honoring traditional values
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Commitments */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Commitments to Our Community
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed">
              Guiding principles that define our promise to parents and students
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: "🤝",
                title: "Transparency & Communication",
                description: "Open dialogue with parents and the community, regular progress updates, and transparent decision-making processes."
              },
              {
                icon: "🚀",
                title: "Continuous Improvement",
                description: "Regular evaluation and enhancement of teaching methodologies, facilities, and student support systems."
              },
              {
                icon: "💎",
                title: "Value-Based Education",
                description: "Instilling moral values, ethical principles, and social responsibility alongside academic excellence."
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Partnership",
                description: "Working collaboratively with parents as equal partners in the educational journey of every child."
              }
            ].map((commitment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{commitment.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{commitment.title}</h3>
                  <p className="text-gray-700 font-body leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
