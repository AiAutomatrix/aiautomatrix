import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Backend Development | Ai Automatrix',
  description: 'Build scalable and robust AI backends with custom machine learning model integration, data processing pipelines, and high-performance APIs.',
};

const features = [
  {
    title: 'Machine Learning Model Integration',
    description: 'Seamlessly integrate and deploy your custom or pre-trained ML models into scalable backend services.',
  },
  {
    title: 'AI-Powered Data Processing Pipelines',
    description: 'Build efficient pipelines for data ingestion, transformation, analysis, and storage, optimized for AI applications.',
  },
  {
    title: 'Custom AI API Development',
    description: 'Develop secure and high-performance APIs that expose your AI capabilities to web, mobile, or other third-party applications.',
  },
  {
    title: 'Scalable Cloud-Native Architecture',
    description: 'Design and implement AI backends on cloud platforms (AWS, GCP, Azure) for maximum scalability, reliability, and cost-efficiency.',
  },
];

export default function AiBackendDevelopmentPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>AI <span className="text-gradient">Backend Development</span></>}
        subtitle="We build the robust, scalable server-side infrastructure required to power intelligent applications with custom machine learning models and data pipelines."
        features={features}
        imageUrl="https://placehold.co/600x400.png"
        imageHint="server database code"
      />
      <Footer />
    </>
  );
}
