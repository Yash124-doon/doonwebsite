import React from 'react';
import Image from 'next/image';

interface InfoSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  reverseOrder?: boolean; // To alternate image/text order
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  reverseOrder = false,
}) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div
        className={`flex flex-col md:flex-row items-center gap-8 ${
          reverseOrder ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">{title}</h2>
          <p className="font-body text-lg text-text-DEFAULT">{description}</p>
        </div>
        {imageUrl && imageAlt && (
          <div className="md:w-1/2 relative h-64 w-full md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <picture>
              <source srcSet={imageUrl} type="image/avif" />
              <Image
                src={imageUrl.replace('.avif', '.webp')}
                alt={imageAlt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </picture>
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoSection;
