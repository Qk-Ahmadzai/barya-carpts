"use client"
import { useState } from 'react';
import Image from 'next/image';
import ProductModal from './ProductModal';

const products = [
  {
    id: 1,
    name: 'Vintage Persian Carpet',
    price: 499.99,
    description: 'Hand-knotted vintage Persian carpet with intricate floral patterns',
    image: '/images/img-02.png',
    colors: ['Burgundy', 'Navy Blue', 'Forest Green'],
    sizes: ['6x9', '8x10', '9x12'],
    material: 'Wool',
    inStock: true
  },
  {
    id: 2,
    name: 'Modern Abstract Carpet',
    price: 599.99,
    description: 'Contemporary abstract design with geometric patterns',
    image: '/images/img-03.png',
    colors: ['Gray', 'Beige', 'Blue'],
    sizes: ['5x8', '8x10', '10x12'],
    material: 'Wool & Silk Blend',
    inStock: true
  },
  {
    id: 3,
    name: 'Vintage Persian Carpet',
    price: 499.99,
    description: 'Hand-knotted vintage Persian carpet with intricate floral patterns',
    image: '/images/img-02.png',
    colors: ['Gray', 'Beige', 'Blue'],
    sizes: ['5x8', '8x10', '10x12'],
    material: 'Wool & Silk Blend',
    inStock: true
  }
  
];

export default function ShopProductListing() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const addToCart = (product) => {
    if (!selectedColor || !selectedSize) {
      alert('Please select color and size');
      return;
    }
    
    const itemToAdd = {
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1
    };
    
    setCart([...cart, itemToAdd]);
    setSelectedProduct(null);
    setSelectedColor('');
    setSelectedSize('');
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedColor('');
    setSelectedSize('');
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${selectedProduct ? 'overflow-hidden' : ''}`}>
      <div className="container mx-auto px-4 py-8 pt-27 md:pt-30 text-gray-600">
        <div className="mb-8">
          <div className="flex flex-col gap-4">

            <div className="flex flex-wrap gap-4 items-center bg-[#ebd1bc] w-full rounded-md p-2">
              {/* Price Filter */}
                <div className="flex w-100">
                  <input
                    type="text"
                    placeholder="Search carpets..."
                    className="w-full px-4 py-2 border border-r-0 rounded-l-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#985938] border-[#c79064]"
                  />
                  <button className="px-4 py-2 bg-white border border-l-0 rounded-r-lg border-[#c79064] hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#985938" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </div>
              
              
              <select 
                className="px-4 py-2 w-45 border rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#985938] border-[#c79064] hover:border-[#985938] transition-colors duration-200"
                defaultValue=""
              >
                <option value="" disabled>Price Range</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000+">Over $1000</option>
              </select>

              {/* Color Filter */}
              <select
                className="px-4 py-2  w-45 border rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#985938] border-[#c79064] hover:border-[#985938] transition-colors duration-200"
                defaultValue=""
              >
                <option value="" disabled>Color</option>
                <option value="Gray">Gray</option>
                <option value="Beige">Beige</option>
                <option value="Blue">Blue</option>
              </select>

              {/* Size Filter */}
              <select
                className="px-4 py-2 w-45 border rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#985938] border-[#c79064] hover:border-[#985938] transition-colors duration-200"
                defaultValue=""
              >
                <option value="" disabled>Size</option>
                <option value="5x8">5x8</option>
                <option value="8x10">8x10</option>
                <option value="10x12">10x12</option>
              </select>

              {/* Material Filter */}
              <select
                className="px-4 py-2 w-45 border rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#985938] border-[#c79064] hover:border-[#985938] transition-colors duration-200"
                defaultValue=""
              >
                <option value="" disabled>Material</option>
                <option value="Wool & Silk Blend">Wool & Silk Blend</option>
              </select>

              {/* Availability Filter */}
              <select
                className="px-4 py-2 w-45 border rounded-lg bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#985938] border-[#c79064] hover:border-[#985938] transition-colors duration-200"
                defaultValue=""
              >
                <option value="" disabled>Availability</option>
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-103"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-600">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#E76F51]">${product.price}</span>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-[#E76F51] text-white px-4 py-2 rounded-full hover:bg-[#E76F51]/90 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAddToCart={addToCart}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
        />
      )}
    </div>
  );
}
