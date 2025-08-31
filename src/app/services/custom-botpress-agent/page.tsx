import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Metadata } from 'next';
import { ArrowRight, CheckCircle, Bot, ShoppingCart, HeartHandshake, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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

const useCases = [
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Lead Generation",
        description: "Engage website visitors proactively, qualify leads with targeted questions, and schedule appointments automatically."
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "Customer Support",
        description: "Provide 24/7 instant answers to frequently asked questions, track support tickets, and escalate complex issues to human agents."
    },
    {
        icon: <ShoppingCart className="h-8 w-8 text-primary" />,
        title: "E-commerce Assistant",
        description: "Help customers find products, track orders, process returns, and offer personalized recommendations."
    },
    {
        icon: <HeartHandshake className="h-8 w-8 text-primary" />,
        title: "HR & Internal Support",
        description: "Automate employee onboarding, answer policy questions, and manage internal IT support requests."
    }
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

              <div className="mt-20">
                <div className="flex justify-center mb-12">
                  <img
                      src={imageUrl}
                      alt={imageHint}
                      className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
                      data-ai-hint={imageHint}
                  />
                </div>

                <div className="max-w-3xl mx-auto">
                  <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center">
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

              <div className="mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center">
                        Common <span className="text-gradient">Use Cases</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <Card key={index} className="card-glass p-6 flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    {useCase.icon}
                                </div>
                                <div>
                                    <h3 className="font-headline text-xl font-bold mb-2">{useCase.title}</h3>
                                    <p className="text-muted-foreground">{useCase.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
              </div>

              <div className="text-center mt-20 flex justify-center gap-4">
                  <Link href="/#contact">
                      <Button size="lg" className="btn-gradient">
                          Get this for my website
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
