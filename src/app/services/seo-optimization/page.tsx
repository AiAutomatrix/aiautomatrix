import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Optimization | Ai Automatrix',
  description: 'Boost your visibility on search engines and attract more organic traffic with our expert SEO strategies.',
};

const features = [
  {
    title: 'Keyword Research & Strategy',
    description: 'We identify the most valuable keywords your potential customers are searching for.',
  },
  {
    title: 'On-Page SEO',
    description: 'We optimize your website\'s content, meta tags, and structure to align with search engine best practices.',
  },
  {
    title: 'Technical SEO',
    description: 'We ensure your site is technically sound, addressing things like site speed, mobile-friendliness, and crawlability.',
  },
  {
    title: 'Local SEO',
    description: 'We optimize your online presence to attract customers in your specific geographic area, a crucial factor for local businesses.',
  },
];

export default function SeoOptimizationPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>Expert <span className="text-gradient">SEO Optimization</span></>}
        subtitle="Boost your visibility on search engines and attract more organic traffic with our expert SEO strategies."
        features={features}
        imageUrl="https://placehold.co/600x400.png"
        imageHint="search engine results"
      />
      <Footer />
    </>
  );
}