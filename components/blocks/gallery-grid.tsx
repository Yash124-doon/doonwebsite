import React from 'react';
import Image from 'next/image';

interface GalleryGridProps {
  images: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-48 overflow-hidden">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={192}
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
