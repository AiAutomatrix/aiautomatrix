import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BotDemoPageLayout from "@/components/layout/bot-demo-page-layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mental Health Tracker Demo | Ai Automatrix',
  description: 'Live demo of a supportive Botpress companion for logging moods and providing mental health resources.',
};

export default function MentalHealthTrackerPage() {
  return (
    <>
      <Header />
      <BotDemoPageLayout
        title={<>Mental Health <span className="text-gradient">Tracker</span></>}
        subtitle="A supportive companion for logging moods and providing resources."
        description="This empathetic agent provides a safe and non-judgmental space for users to track their daily mood, journal their thoughts, and access helpful resources. It's designed to promote mindfulness and emotional well-being through gentle, guided conversation."
        examplePrompts={["I'm feeling anxious today.", "Log my mood as happy."]}
        iframeSrc="https://mediafiles.botpress.cloud/ac967e8a-8105-4c62-8a94-73d74c838a1a/webchat/bot.html"
      />
      <Footer />
    </>
  );
}
