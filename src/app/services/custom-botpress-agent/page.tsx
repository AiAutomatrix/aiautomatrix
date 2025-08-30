import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServicePageLayout from "@/components/layout/service-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Botpress Agent Development | Ai Automatrix',
  description: 'Create intelligent, conversational AI chatbots with advanced NLU/NLP, seamless integrations, and highly customizable workflows.',
};

const features = [
  {
    title: 'Advanced NLU/NLP Capabilities',
    description: 'Our Botpress agents understand user intent with high accuracy, enabling natural and effective conversations.',
  },
  {
    title: 'Seamless Integrations',
    description: 'Integrate your AI chatbot with CRMs, ERPs, messaging platforms (WhatsApp, Slack, Messenger), and custom APIs.',
  },
  {
    title: 'Highly Customizable Workflows',
    description: 'We design and implement complex conversational flows tailored to your specific business processes and use cases.',
  },
  {
    title: 'Secure & Scalable Solutions',
    description: 'Built with security and scalability in mind, our Botpress solutions can handle growing demands while protecting user data.',
  },
];

export default function CustomBotpressAgentPage() {
  return (
    <>
      <Header />
      <ServicePageLayout
        title={<>Custom <span className="text-gradient">Botpress Agents</span></>}
        subtitle="We design and build sophisticated AI-powered chatbots that deliver personalized customer experiences, automate support, and streamline operations."
        features={features}
        imageUrl="/support.png"
        imageHint="customer support agent"
        secondaryAction={{ href: "/bot-demos", label: "View Demos" }}
      />
      <Footer />
    </>
  );
}
