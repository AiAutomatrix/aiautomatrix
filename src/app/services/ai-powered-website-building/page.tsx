import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Website Building | Ai Automatrix',
  description: 'Leverage AI for personalized user experiences, dynamic content generation, intelligent analytics, and enhanced SEO.',
};

const features = [
  {
    title: 'Personalized User Experiences',
    description: 'AI algorithms analyze user behavior to deliver tailored content, product recommendations, and UI adjustments in real-time, increasing engagement and conversion rates.',
  },
  {
    title: 'Dynamic Content Generation',
    description: 'Leverage generative AI to create or suggest website copy, product descriptions, and blog posts, keeping your content fresh, relevant, and optimized for your audience.',
  },
  {
    title: 'Intelligent Analytics & Insights',
    description: 'Go beyond standard analytics. Our AI-powered websites provide deeper insights into user journeys, predict trends, and offer actionable recommendations for continuous improvement.',
  },
  {
    title: 'AI-Enhanced SEO & Accessibility',
    description: 'Utilize AI tools to optimize your website for search engines, improve content discoverability, and ensure your site meets accessibility standards for all users.',
  },
];

export default function AiPoweredWebsiteBuildingPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>AI-Powered <span className="text-gradient">Website Building</span></>}
        subtitle="We create next-generation websites that use artificial intelligence to deliver dynamic, personalized, and highly optimized user experiences from the ground up."
        features={features}
        imageUrl="/website.png"
        imageHint="website design user"
      />
      <Footer />
    </>
  );
}
