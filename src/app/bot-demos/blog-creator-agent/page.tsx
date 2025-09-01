import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Creator Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that helps brainstorm, outline, and generate drafts for blog content.',
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
      <script src="https://files.bpcontent.cloud/2025/08/30/16/20250830161104-Z9HVOH4J.js" defer><\/script>
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

export default function BlogCreatorAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Blog Creator <span className="text-gradient">Agent</span></>}
        subtitle="Helps brainstorm, outline, and generate drafts for blog content."
        description="Beat writer's block and supercharge your content marketing. This creative assistant helps you brainstorm topics, structure your articles, and even write entire sections of a blog post. It's the perfect tool for busy marketing teams and solo creators."
        examplePrompts={["Give me 5 blog ideas about AI in marketing.", "Write an intro for a post about chatbots."]}
        iframeSrcDoc={chatScripts}
      />
      <Footer />
    </>
  );
}
