import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Website Scraper & FAQ Bot Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that scrapes any website URL to instantly create a knowledgeable customer service FAQ chatbot.',
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
      <script src="https://files.bpcontent.cloud/2025/08/26/22/20250826221413-HL4C5ZIZ.js" defer><\/script>
    </body>
  </html>
`;

export default function CustomerServiceAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>AI Website <span className="text-gradient">Scraper Bot</span></>}
        subtitle="Instantly create a customer service agent from your website URL."
        description="This powerful agent demonstrates how AI can scrape an entire website to build a knowledge base automatically. Just provide a URL, and the agent will learn the content to answer customer questions, acting as a 24/7 support expert for that business."
        examplePrompts={["Scrape aiautomatrix.com", "What services does the website offer?", "When is the business open?"]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
