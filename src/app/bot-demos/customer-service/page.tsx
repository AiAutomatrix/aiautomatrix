import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Service Agent Demo | Ai Automatrix',
  description: 'Live demo of a Botpress agent that answers FAQs, books appointments, and simplifies customer support.',
};

export default function CustomerServiceAgentPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title="Customer Service Agent"
        subtitle="Answers FAQs, books appointments, and makes support simple."
        description="This agent is designed to be the first point of contact for your customers. It can handle frequently asked questions, schedule appointments directly into a calendar, and escalate complex issues to a human agent, all while providing a seamless and friendly user experience."
        examplePrompts={["When are you open?", "Book me an appointment for Thursday."]}
        iframeSrc="https://mediafiles.botpress.cloud/16662b80-8299-4a48-b0a7-18a7a5f27c3f/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
