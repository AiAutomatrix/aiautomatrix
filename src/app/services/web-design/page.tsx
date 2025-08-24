import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design | Ai Automatrix',
  description: 'Stunning, custom designs that capture your brand and engage your audience from the first click.',
};

const features = [
  {
    title: 'Custom UI/UX Design',
    description: 'We craft intuitive user interfaces (UI) and memorable user experiences (UX) tailored to your target audience.',
  },
  {
    title: 'Responsive Design',
    description: 'Every design is fully responsive, ensuring a flawless experience on desktops, tablets, and mobile devices.',
  },
  {
    title: 'Branding & Identity',
    description: 'We help translate your brand\'s values and personality into a compelling visual design system for your website.',
  },
  {
    title: 'Wireframing & Prototyping',
    description: 'We create detailed blueprints and interactive prototypes to visualize the user journey and refine the design before development begins.',
  },
];

export default function WebDesignPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>Stunning <span className="text-gradient">Web Design</span></>}
        subtitle="Stunning, custom designs that capture your brand and engage your audience from the first click."
        features={features}
        imageUrl="https://placehold.co/600x400.png"
        imageHint="modern website design"
      />
      <Footer />
    </>
  );
}