import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Price Estimate Tool Demo | Ai Automatrix',
  description: 'Live demo of a Botpress tool that provides instant, dynamic quotes for services based on user input.',
};

export default function PriceEstimateToolPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title="Price Estimate Tool"
        subtitle="Provides instant, dynamic quotes for services based on user input."
        description="Empower your customers with self-service price estimation. This agent guides users through a series of questions to understand their needs and provides an instant, customized quote for your services, reducing friction and accelerating the sales cycle."
        examplePrompts={["I need a quote for a new website.", "How much does SEO cost?"]}
        iframeSrc="https://mediafiles.botpress.cloud/f00a273b-a63b-419b-a113-a447c234b3e8/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
