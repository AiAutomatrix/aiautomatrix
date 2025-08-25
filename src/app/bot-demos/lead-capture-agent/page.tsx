import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Capture Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that engages website visitors and intelligently captures qualified leads.',
};

export default function LeadCaptureAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title="Lead Capture Agent"
        subtitle="Engages visitors and intelligently captures qualified leads for your sales team."
        description="Turn more website visitors into valuable leads. This agent proactively engages users, asks qualifying questions, and collects contact information in a natural, conversational way. It can integrate directly with your CRM to streamline your sales pipeline."
        examplePrompts={["I'd like to get a quote.", "Can someone contact me?"]}
        iframeSrc="https://mediafiles.botpress.cloud/795856cd-a6b1-4475-b6d4-d3080e77e231/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
