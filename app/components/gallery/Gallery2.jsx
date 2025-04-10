'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/img-02.png', title: 'Image 1', description: 'Beautiful carpet', material: 'Wool', dimensions: '200x300 cm' },
  { src: '/images/img-03.png', title: 'Image 2', description: 'Elegant design', material: 'Silk', dimensions: '250x350 cm' },
  // Add more images here
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Carpet Collection</h2>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold">{image.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{images[selectedImage].title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>
              <p className="mt-2 text-gray-600">{images[selectedImage].description}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Material</h4>
                  <p>{images[selectedImage].material}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Dimensions</h4>
                  <p>{images[selectedImage].dimensions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}