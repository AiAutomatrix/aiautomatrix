import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Tracker Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that fetches and displays real-time cryptocurrency prices and data.',
};

export default function CryptoTrackerPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title="Crypto Tracker"
        subtitle="Fetches and displays real-time cryptocurrency prices and data."
        description="This agent connects to a live crypto API to provide up-to-the-minute price information for various cryptocurrencies. It demonstrates the power of integrating external data sources into a conversational AI to provide instant, accurate information to users."
        examplePrompts={["What's the price of Bitcoin?", "Show me the price of Ethereum."]}
        iframeSrc="https://mediafiles.botpress.cloud/a86f9e3d-240a-4296-857c-b358a901e1df/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
