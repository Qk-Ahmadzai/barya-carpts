'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="sm:px-6 lg:px-8">
        <Link href="/" className="text-indigo-600 hover:text-indigo-500">
          ← Back to home
        </Link>
      </div>
      {/* <div className="flex items-center justify-center">
        <Image src="/images/logo.png" alt="logo" width={130} height={130} className="mt-12"/>
      </div> */}

      {children}
    </div>
  );
} 