import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Creator Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that helps brainstorm, outline, and generate drafts for blog content.',
};

export default function BlogCreatorAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Blog Creator <span className="text-gradient">Agent</span></>}
        subtitle="Helps brainstorm, outline, and generate drafts for blog content."
        description="Beat writer's block and supercharge your content marketing. This creative assistant helps you brainstorm topics, structure your articles, and even write entire sections of a blog post. It's the perfect tool for busy marketing teams and solo creators."
        examplePrompts={["Give me 5 blog ideas about AI in marketing.", "Write an intro for a post about chatbots."]}
        iframeSrc="https://mediafiles.botpress.cloud/3505c282-3b0b-4835-a131-7b0f793b8c3e/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
