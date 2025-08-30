import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from 'next';
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: 'Custom Botpress Agent Development | Ai Automatrix',
  description: 'Create intelligent, conversational AI chatbots with advanced NLU/NLP, seamless integrations, and highly customizable workflows.',
};

const features = [
  {
    title: 'Advanced NLU/NLP Capabilities',
    description: 'Our Botpress agents understand user intent with high accuracy, enabling natural and effective conversations.',
  },
  {
    title: 'Seamless Integrations',
    description: 'Integrate your AI chatbot with CRMs, ERPs, messaging platforms (WhatsApp, Slack, Messenger), and custom APIs.',
  },
  {
    title: 'Highly Customizable Workflows',
    description: 'We design and implement complex conversational flows tailored to your specific business processes and use cases.',
  },
  {
    title: 'Secure & Scalable Solutions',
    description: 'Built with security and scalability in mind, our Botpress solutions can handle growing demands while protecting user data.',
  },
];

const title = <>Custom <span className="text-gradient">Botpress Agents</span></>;
const subtitle = "We design and build sophisticated AI-powered chatbots that deliver personalized customer experiences, automate support, and streamline operations.";
const imageUrl = "/support.png";
const imageHint = "customer support agent";
const secondaryAction = { href: "/bot-demos", label: "View Demos" };

export default function CustomBotpressAgentPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                  {title}
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                  {subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
                <div className="relative w-full h-96 md:h-full min-h-[450px] rounded-lg overflow-hidden bg-card/50 flex items-center justify-center p-4">
                  <img
                      src={imageUrl}
                      alt={imageHint}
                      className="w-full h-full object-contain"
                      data-ai-hint={imageHint}
                  />
                </div>
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                    Key <span className="text-gradient">Features</span>
                  </h2>
                  <ul className="space-y-6">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center mt-20 flex justify-center gap-4">
                  <Link href="/#contact">
                      <Button size="lg" className="btn-gradient">
                          Get a Custom Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                  </Link>
                  {secondaryAction && (
                    <Link href={secondaryAction.href}>
                        <Button size="lg" variant="outline">
                            {secondaryAction.label}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                  )}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
