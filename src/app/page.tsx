import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import HowItWorksSection from '@/components/sections/how-it-works';
import ServicesSection from '@/components/sections/services';
import AboutSection from '@/components/sections/about';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import SeoToolSection from '@/components/sections/seo-tool';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Website Agents | Turn Your Site into a Sales & Support Hero | Ai Automatrix',
  description: 'We build custom AI agents that capture leads, answer questions, and provide 24/7 support. We scrape your website, build your agent, and set it live. No code, no hassle.',
};


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
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
