import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      src: '/images/img-02.png',
      title: 'Vibrant',
      description: 'Handcrafted with Passion',
      price: {
        original: '$480',
        discounted: '$400'
      }
    },
    {
      id: 2,
      src: '/images/img-11.png',
      title: 'Elegant',
      description: 'Crafted with Care',
      price: {
        original: '$480',
        discounted: '$400'
      }
    },
    {
      id: 3,
      src: '/images/img-16.png',
      title: 'Timeless',
      description: 'Captivating Creations',
      price: {
        original: '$480',
        discounted: '$400'
      }
    },
    {
      id: 4,
      src: '/images/img-17.png',
      title: 'Masterful',
      description: 'Exceptional Artistry',
      price: {
        original: '$480',
        discounted: '$400'
      }
    }
  ];

  return (
    <section className="py-20 bg-[#FDF5F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-600">
          Discover Our Artistry
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-600 mb-4">
                  <span className="line-through mr-2">{product.price.original}</span>
                  <span className="text-[#E76F51] font-bold">{product.price.discounted}</span>
                </p>
                <button className="bg-[#E76F51] text-white px-6 py-2 rounded-full hover:bg-[#E76F51]/90 transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 