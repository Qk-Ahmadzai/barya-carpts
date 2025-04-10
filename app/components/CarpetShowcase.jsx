import Image from 'next/image';

const CarpetShowcase = () => {
  return (
    <section className="bg-[#f5faf6]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="">
            <div className="relative aspect-[4/4] w-full  overflow-hidden">
              <Image
                src="/images/img-07.png"
                alt="Traditional Afghan carpet with geometric patterns"
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-300 hover:scale-105 border-4"

              />
            </div>
            <div className="max-w-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">About Our Carpets</h3>
              <p className="text-gray-600">
                Our handmade carpets are created by skilled artisans in Afghanistan
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="">
            <div className="relative aspect-[4/4] w-full">
              <Image
                src="/images/img-08.png"
                alt="Elegant carpet design with floral patterns"
                fill
                style={{ objectFit: 'contain' }}
                className="transition-transform duration-300 hover:scale-105 border-4"
              />
            </div>
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Explore Our Designs</h3>
              <p className="text-gray-600">
                From classic floral patterns to bold geometric designs, our collection of handmade carpets offers a wide range of styles to suit any decor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpetShowcase; 