'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/img-silde-01.png',
      alt: 'Modern living room with elegant carpet art'
    },
    {
      image: '/images/img-silde-02.png',
      alt: 'Stylish interior with framed carpet art'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F5DC]">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                className="brightness-95"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/20">
        <div className="container mx-auto h-full flex items-center justify-center px-8">
          <div className="text-center max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight pt-120">
              Handcrafted Wall Carpets - Art for Your Walls!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-2">
              Transform your space with our exquisite collection of handcrafted wall carpets
            </p>
            <Link 
              href="/shop"
              className="inline-block bg-[#E76F51] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#E76F51]/90 transition-all duration-300 hover:scale-105"
            >
              Gift It To Your Love One
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 