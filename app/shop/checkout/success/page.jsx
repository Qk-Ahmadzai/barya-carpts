import Link from "next/link";
  
export default function SuccessPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order is being processed.
          </p>
          <Link
            href="/shop"
            className="bg-[#E76F51] text-white px-4 py-2 rounded-full hover:bg-[#E76F51]/90 transition-colors duration-300"
          >


            Back to Gallery
          </Link>

        </div>
      </div>
    );
  }