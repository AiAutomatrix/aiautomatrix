import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that assists with product discovery, order tracking, and online purchases.',
};

export default function EcommerceAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title="E-commerce Agent"
        subtitle="Assists with product discovery, order tracking, and purchases."
        description="This AI-powered shopping assistant helps customers find products, check their order status, and even complete purchases directly within the chat. It can integrate with your inventory system to provide real-time availability and recommendations, boosting sales and customer satisfaction."
        examplePrompts={["Do you have any blue t-shirts?", "Where is my order?"]}
        iframeSrc="https://mediafiles.botpress.cloud/d864197d-69c7-434f-9a3b-a5d3f237190e/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
