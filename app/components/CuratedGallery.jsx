'use client';
import Image from 'next/image';

const CuratedGallery = () => {
  const carpets = [
    {
      id: 1,
      src: '/images/img-02.png',
      alt: 'Traditional Afghan carpet with intricate geometric patterns in green and terracotta',
      bgColor: 'bg-[#E8EFE9]'
    },
    {
      id: 2,
      src: '/images/img-03.png',
      alt: 'Elegant Afghan carpet with medallion design in terracotta and black',
      bgColor: 'bg-[#F5E6DC]'
    }
  ];

  return (
    <section className="py-24 bg-[#FDF5F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-600">
          Curated Carpet Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carpets.map((carpet) => (
            <div key={carpet.id}>
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={carpet.src}
                  alt={carpet.alt}
                  fill
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  className="transition-transform duration-300 hover:scale-105 border-4"
                />
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-[#E76F51] text-white px-8 py-4 rounded-md hover:bg-[#E76F51]/90 transition-all duration-300 hover:scale-105">
            View All Collections
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .shadow-soft {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </section>
  );
};

export default CuratedGallery; 