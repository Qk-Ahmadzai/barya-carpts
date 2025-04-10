'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/solid';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; // Simulate login state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-[#985938]">
      <button onClick={toggleMenu} className="flex items-center justify-center w-10 h-10 bg-[#a09f9f] text-amber-50 rounded-full cursor-pointer">
        <UserIcon className="w-6 h-6" />
      </button>
      {isOpen && (  
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-2">
            {isLoggedIn ? (
              <>
                <div className="flex items-center p-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JO</span>
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">john@email.com</p>
                  </div>
                </div>
                <hr className="my-1" />
                <div className="flex flex-col hover:bg-gray-100">
                  <Link href="/auth/account-settings" className="w-full text-left p-2">Account settings</Link>
                </div>
                <div className="flex flex-col hover:bg-gray-100">
                  <Link href="/auth/dark-theme" className="w-full text-left p-2 hover:bg-gray-100">Dark theme</Link>
                </div>
                <div className="flex flex-col hover:bg-gray-100">
                  <Link href="/auth/signout" className="w-full text-left p-2 hover:bg-gray-100">Sign out</Link>
                </div>
              </>
            ) : (
              <div className="flex flex-col hover:bg-gray-100">
                <Link href="/auth/signin" className="w-full text-left p-2">Sign in</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 