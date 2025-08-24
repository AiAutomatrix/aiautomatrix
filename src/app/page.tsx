import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import SeoToolSection from '@/components/sections/seo-tool';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <SeoToolSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
