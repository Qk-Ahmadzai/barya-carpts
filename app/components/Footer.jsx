import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#eee2dd] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
          <p className="text-sm text-gray-600">© 2025 Carpex, Inc. All rights reserved.</p>
        </div>
        <div className="flex space-x-8">
          <div>
            <h3 className="font-bold mb-2 text-gray-600">Quick Links</h3>
            <ul className="text-sm text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Gallery</Link></li>
              <li><Link href="/">Shop</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-gray-600">Explore More</h3>
            <ul className="text-sm text-gray-600">
              <li><Link href="/">About</Link> Us</li>
              <li><Link href="/">Designs</Link></li>
              <li><Link href="/">Testimonials</Link></li>
              <li><Link href="/">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-gray-600">Connect With Us</h3>
            <ul className="text-sm text-gray-600">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 