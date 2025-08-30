import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Capture Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that engages website visitors and intelligently captures qualified leads.',
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
      <script src="https://files.bpcontent.cloud/2025/08/30/15/20250830153232-V1RNL0TE.js" defer><\/script>
    </body>
  </html>
`;

export default function LeadCaptureAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Lead Capture <span className="text-gradient">Agent</span></>}
        subtitle="Engages visitors and intelligently captures qualified leads for your sales team."
        description="Turn more website visitors into valuable leads. This agent proactively engages users, asks qualifying questions, and collects contact information in a natural, conversational way. It can integrate directly with your CRM to streamline your sales pipeline."
        examplePrompts={["I'd like to get a quote.", "Can someone contact me?"]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
