import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | Ai Automatrix',
  description: 'Fast, responsive, and scalable websites built with the latest technologies for optimal performance.',
};

const features = [
  {
    title: 'Front-End Development',
    description: 'We build pixel-perfect, interactive, and fast-loading websites using modern frameworks like React and Next.js.',
  },
  {
    title: 'Back-End Development',
    description: 'We develop secure and scalable server-side logic and databases to power complex functionalities.',
  },
  {
    title: 'E-commerce Solutions',
    description: 'We create custom online stores with secure payment gateways, inventory management, and a smooth checkout process.',
  },
  {
    title: 'Content Management Systems (CMS)',
    description: 'We integrate user-friendly CMS platforms that allow you to easily update your website\'s content.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>High-Performance <span className="text-gradient">Web Development</span></>}
        subtitle="Fast, responsive, and scalable websites built with the latest technologies for optimal performance."
        features={features}
        imageUrl="https://placehold.co/600x400.png"
        imageHint="coding programming screen"
      />
      <Footer />
    </>
  );
}