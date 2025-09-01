import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Evaluation Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that researches vehicle reviews, common problems, and provides price estimates.',
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
      <script src="https://files.bpcontent.cloud/2025/05/19/19/20250519194829-K5A5X1D2.js" defer><\/script>
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

export default function VehicleEvaluationAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Vehicle Evaluation <span className="text-gradient">Agent</span></>}
        subtitle="Researches vehicle reviews, common problems, and provides price estimates."
        description="This agent acts as your personal automotive researcher. Get detailed information on vehicle reviews, find common reported issues for specific models, and receive a price evaluation based on various factors. It's the perfect tool for car shoppers and enthusiasts."
        examplePrompts={["What are the common problems with a 2018 Honda Civic?", "Give me reviews for a Toyota Rav4.", "What's the estimated price of a 2020 Ford F-150?"]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
