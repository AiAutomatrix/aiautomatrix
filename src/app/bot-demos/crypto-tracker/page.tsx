import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Tracker Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that fetches and displays real-time cryptocurrency prices and data.',
};

const chatScripts = `
  <html>
    <head>
      <style>
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>
      <script src="https://files.bpcontent.cloud/2025/06/25/16/20250625163528-WAZ2CJ43.js" defer><\/script>
    </body>
  </html>
`;

export default function CryptoTrackerPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Crypto <span className="text-gradient">Tracker</span></>}
        subtitle="Fetches and displays real-time cryptocurrency prices and data."
        description="This agent connects to a live crypto API to provide up-to-the-minute price information for various cryptocurrencies. It demonstrates the power of integrating external data sources into a conversational AI to provide instant, accurate information to users."
        examplePrompts={["What's the price of Bitcoin?", "Show me the price of Ethereum."]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
