interface MainHeadingProps {
  title: string;
}

export default function MainHeading({ title }: MainHeadingProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h2>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-[#FFD700] mx-auto" />
      </div>
    </section>
  );
}
