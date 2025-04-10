"use client"
import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/img-02.png', title: 'this is Image 1', description: 'Beautiful carpet', material: 'Wool', dimensions: '200x300 cm' },
  { src: '/images/img-03.png', title: 'Image 2', description: 'Elegant design', material: 'Silk', dimensions: '250x350 cm' },
  // Add more images here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Gallery</h2>
      <div className="columns-1 md:columns-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative mb-4 break-inside-avoid cursor-pointer group" onClick={() => setSelectedImage(image)}>
            <Image src={image.src} alt={image.title} width={300} height={200} className="rounded-lg w-full transition-transform duration-300 group-hover:blur-sm group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-orange-500/5 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold mb-2">{image.title}</h3>
              <p className="text-white mb-2">{image.description}</p>
              <p className="text-white mb-2">Material: {image.material}</p>
              <p className="text-white mb-2">Dimensions: {image.dimensions}</p>
              <button className="bg-[#E76F51] text-white px-4 py-2 rounded-full">Shop</button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg max-w-3xl">
            <Image src={selectedImage.src} alt={selectedImage.title} width={800} height={600} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
            <p className="mb-2">{selectedImage.description}</p>
            <p className="mb-2">Material: {selectedImage.material}</p>
            <p>Dimensions: {selectedImage.dimensions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;