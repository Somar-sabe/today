'use client';
import { useState } from 'react';
import Image from 'next/image';

const GallerySection = () => {
  const images = [
    '/img/original (5).webp',
    '/img/original (1).webp',
    '/img/original (2).webp',
    '/img/original (3).webp',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="gallery-section p-8" style={{flexDirection: 'column',alignItems:'center',display:'flex',marginBottom:'50px',marginTop:'50px'}}>
      <h2 style={{alignItems:'center'}}>Project Gallery</h2>
      <div className="main-image mb-4">
        <Image
          src={selectedImage}
          alt="Main"
          width={1000}
          height={600}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>

      <div style={{display:'flex'}} className="thumbnail-row flex gap-4 overflow-x-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer border-2 rounded-lg transition ${
              selectedImage === img ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={120}
              height={80}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .thumbnail-row::-webkit-scrollbar {
          height: 8px;
        }

        .thumbnail-row::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 8px;
        }

        .thumbnail-row::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
