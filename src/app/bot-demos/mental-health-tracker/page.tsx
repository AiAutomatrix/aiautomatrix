import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mental Health Tracker Demo | Ai Automatrix',
  description: 'Live demo of a supportive Botpress companion for logging moods and providing mental health resources.',
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
      <script src="https://files.bpcontent.cloud/2025/05/06/17/20250506170901-U7AZYG8R.js" defer><\/script>
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

export default function MentalHealthTrackerPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Mental Health <span className="text-gradient">Tracker</span></>}
        subtitle="A supportive companion for logging moods and providing resources."
        description="This empathetic agent provides a safe and non-judgmental space for users to track their daily mood, journal their thoughts, and access helpful resources. It's designed to promote mindfulness and emotional well-being through gentle, guided conversation."
        examplePrompts={["I'm feeling anxious today.", "Log my mood as happy."]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
