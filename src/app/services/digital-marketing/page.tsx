import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing | Ai Automatrix',
  description: 'Comprehensive marketing campaigns to grow your online presence and connect with your customers.',
};

const features = [
  {
    title: 'Social Media Marketing',
    description: 'We create and manage social media campaigns to build a community around your brand and engage with your customers.',
  },
  {
    title: 'Content Marketing',
    description: 'We develop valuable content, such as blog posts and articles, to establish you as an authority in your industry.',
  },
  {
    title: 'Email Marketing',
    description: 'We design and execute email campaigns to nurture leads and foster long-term relationships with your customers.',
  },
  {
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'We manage targeted ad campaigns on platforms like Google Ads to generate immediate traffic and leads.',
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>Targeted <span className="text-gradient">Digital Marketing</span></>}
        subtitle="Comprehensive marketing campaigns to grow your online presence and connect with your customers."
        features={features}
        imageUrl="https://placehold.co/600x400.png"
        imageHint="marketing chart growth"
      />
      <Footer />
    </>
  );
}