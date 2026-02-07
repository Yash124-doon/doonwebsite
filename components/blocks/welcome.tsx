interface WelcomeProps {
  welcome: {
    heading: string;
    subheading: string;
    paragraphs: string[];
  };
}

export default function Welcome({ welcome }: WelcomeProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[28px] font-bold text-primary uppercase">{welcome.heading}</h2>
        <div className="w-20 h-[4px] bg-accent mt-3 mb-6"></div>
        <p className="italic text-accent font-medium mb-4">{welcome.subheading}</p>
        <div className="text-[15px] text-foreground leading-relaxed max-w-3xl">
          {welcome.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
