"use client"
import Image from 'next/image';

export default function ProductModal({ product, onClose, onAddToCart, selectedColor, selectedSize, setSelectedColor, setSelectedSize }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 backdrop-blur-sm bg-black/30 transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-modal-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="relative aspect-square group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-600">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="mb-6">
                <h3 className="font-bold mb-2 text-gray-600">Select Color:</h3>
                <div className="flex flex-wrap gap-2 text-gray-600">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-[#E76F51] text-[#E76F51] bg-[#E76F51]/10'
                          : 'border-gray-300 hover:border-[#E76F51]/50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6 text-gray-600">
                <h3 className="font-bold mb-2">Select Size:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-[#E76F51] text-[#E76F51] bg-[#E76F51]/10'
                          : 'border-gray-300 hover:border-[#E76F51]/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-[#E76F51]">
                  ${product.price}
                </span>
                <button
                  onClick={() => onAddToCart(product)}
                  className="bg-[#E76F51] text-white px-6 py-3 rounded-full hover:bg-[#E76F51]/90 transition-all duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 