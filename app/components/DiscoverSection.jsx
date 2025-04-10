import Link from 'next/link';

const DiscoverSection = () => {
  return (
    <section className="py-16 bg-[#f5faf6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 font-serif">
            Discover The Beauty of Handmade
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2 leading-relaxed max-w-3xl mx-auto">
            Elevate your living space with our exquisite handmade carpets from Afghanistan. 
            Crafted with meticulous attention to detail, each piece is a work of art that will add warmth and 
            elegance to any room. Explore our collection and find the perfect addition to your home
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection; 