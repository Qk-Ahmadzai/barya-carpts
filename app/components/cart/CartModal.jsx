"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Sample cart items for demonstration
const _cartItems = [
  {
    id: 1,
    name: 'Vintage Persian Carpet',
    price: 499.99,
    image: '/images/img-02.png',
    selectedColor: 'Burgundy',
    selectedSize: '6x9',
    quantity: 1
  },
  {
    id: 2,
    name: 'Modern Abstract Carpet',
    price: 599.99,
    image: '/images/img-03.png',
    selectedColor: 'Gray',
    selectedSize: '8x10',
    quantity: 1
  },
  {
    id: 3,
    name: 'Traditional Oriental Rug',
    price: 799.99,
    image: '/images/img-04.png',
    selectedColor: 'Navy Blue',
    selectedSize: '9x12',
    quantity: 1
  }
];

export default function CartModal({ isOpen, onClose, cartItems = _cartItems, removeFromCart }) {
  const router = useRouter();
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    router.push('/shop/checkout/success');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 backdrop-blur-sm bg-black/30 transition-all duration-300"
        onClick={onClose}
      />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-[#FDF5F1]">
            <h2 className="text-xl font-bold text-gray-800">Your Cart ({_cartItems.length} items)</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {_cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {_cartItems.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.selectedColor} - {item.selectedSize}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-[#E76F51] font-bold">${item.price}</span>
                        <div className="ml-4 flex items-center space-x-2">
                          <button className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="text-gray-600">{item.quantity}</span>
                          <button className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with total and checkout */}
          <div className="border-t p-4 bg-[#FDF5F1]">
            <div className="space-y-2 mb-4 ">
              <div className="flex justify-between items-center text-gray-600">
                <span className="">Subtotal</span>
                <span className="font-semibold">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="">Shipping</span>
                <span className="font-semibold">$9.99</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-[#E76F51]">
                  ${(parseFloat(calculateTotal()) + 9.99).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={_cartItems.length === 0}
              className={`w-full py-3 rounded-full text-white text-lg font-semibold transition-all duration-300 ${
                _cartItems.length === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#E76F51] hover:bg-[#E76F51]/90 transform hover:scale-105'
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 