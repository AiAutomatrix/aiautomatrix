import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that helps find property listings, schedule viewings, and answer real estate questions.',
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
      <script src="https://mediafiles.botpress.cloud/your-placeholder-real-estate-bot/webchat/bot.html" defer><\/script>
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

export default function RealEstateAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Real Estate <span className="text-gradient">Agent</span></>}
        subtitle="Helps find property listings, schedule viewings, and answer real estate questions."
        description="This AI assistant for real estate professionals and agencies automates lead qualification, property searches, and appointment scheduling. It can answer common questions about listings 24/7, ensuring you never miss a potential client."
        examplePrompts={["Show me 3-bedroom houses in downtown.", "Can I book a viewing for 123 Maple St?", "What is the average price for condos in this area?"]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
