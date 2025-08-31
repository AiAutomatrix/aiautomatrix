import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Price Estimate Tool Demo | Ai Automatrix',
  description: 'Live demo of a Botpress tool that provides instant, dynamic quotes for services based on user input.',
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
      <script src="https://files.bpcontent.cloud/2025/07/20/15/20250720153535-VDNUSBCH.js" defer><\/script>
      <script>
        window.addEventListener('load', function() {
            if(window.botpress){
                window.botpress.on("webchat:ready", () => {
                  window.botpress.open();
                });
            }
        });
      <\/script>
    </body>
  </html>
`;

export default function PriceEstimateToolPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Price Estimate <span className="text-gradient">Tool</span></>}
        subtitle="Provides instant, dynamic quotes for services based on user input."
        description="Empower your customers with self-service price estimation. This agent guides users through a series of questions to understand their needs and provides an instant, customized quote for your services, reducing friction and accelerating the sales cycle."
        examplePrompts={["I need a quote for a new website.", "How much does SEO cost?"]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
