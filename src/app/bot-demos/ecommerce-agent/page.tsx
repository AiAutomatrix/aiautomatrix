import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that assists with product discovery, order tracking, and online purchases.',
};

const chatScripts = `
  <html>
    <head>
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>
      <style>
        html, body, #webchat, #webchat .bpWebchat {
          position: unset !important;
          width: 100% !important;
          height: 100% !important;
          max-height: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        #webchat .bp-widget-widget {
            display: none !important;
        }
      </style>
    </head>
    <body>
      <script src="https://files.bpcontent.cloud/2025/08/30/16/20250830162418-UY2C9Y08.js" defer><\/script>
      <script>
        const initBotpress = () => {
          if (window.botpress) {
            window.botpress.on("webchat:ready", () => {
              window.botpress.open();
            });
          } else {
            setTimeout(initBotpress, 200);
          }
        };
        initBotpress();
      <\/script>
    </body>
  </html>
`;

export default function EcommerceAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>E-commerce <span className="text-gradient">Agent</span></>}
        subtitle="Assists with product discovery, order tracking, and purchases."
        description="This AI-powered shopping assistant helps customers find products, check their order status, and even complete purchases directly within the chat. It can integrate with your inventory system to provide real-time availability and recommendations, boosting sales and customer satisfaction."
        examplePrompts={["Do you have any blue t-shirts?", "Where is my order?"]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
