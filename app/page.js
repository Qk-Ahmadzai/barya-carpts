import Hero from './components/Hero';
import DiscoverSection from './components/DiscoverSection';
import CarpetShowcase from './components/CarpetShowcase';
import CuratedGallery from './components/CuratedGallery';
import FeaturedProducts from './components/FeaturedProducts';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <DiscoverSection />
      <FeaturedProducts />
      <CarpetShowcase />
      <CuratedGallery />
      
      {/* Featured Section */}
      
    </main>
  );
}
