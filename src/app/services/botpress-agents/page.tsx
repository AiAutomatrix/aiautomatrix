import Image from 'next/image';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageSquare, Zap, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: MessageSquare,
    name: "Advanced NLU/NLP Capabilities",
    description: "Our Botpress agents understand user intent with high accuracy, enabling natural and effective conversations.",
  },
  {
    icon: Zap,
    name: "Seamless Integrations",
    description: "Integrate your AI chatbot with CRMs, ERPs, messaging platforms (WhatsApp, Slack, Messenger), and custom APIs.",
  },
  {
    icon: SlidersHorizontal,
    name: "Highly Customizable Workflows",
    description: "We design and implement complex conversational flows tailored to your specific business processes and use cases.",
  },
  {
    icon: ShieldCheck,
    name: "Secure & Scalable Solutions",
    description: "Built with security and scalability in mind, our Botpress solutions can handle growing demands while protecting user data.",
  },
];

export default function BotpressAgentsPage() {
  return (
    <>
      <PageTitle
        title="Custom Botpress Agent Development"
        description="Empower your business with intelligent, conversational AI. We build sophisticated Botpress agents that automate tasks, enhance customer support, and drive engagement 24/7."
        className="pt-12 pb-8"
      />

      <Section title="Why Botpress for Your AI Chatbots?" className="pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/images/services/webchat.jpg" 
              alt="Botpress Logo" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
              data-ai-hint="chatbot interface" 
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Botpress is a leading open-source platform for building powerful conversational AI. Ai-Automatrix leverages Botpress to create:
            </p>
            <ul className="space-y-3">
              {features.slice(0,2).map(feature => (
                 <li key={feature.name} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.name}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      
      <Section title="Key Features of Our Botpress Solutions" angledTop backgroundColor="bg-muted/30" className="py-16">
         <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-6 bg-card rounded-lg shadow-md">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Use Cases for AI Chatbots" className="py-16" angledTop>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Customer Support Automation", "Lead Generation & Qualification", "E-commerce Assistance", "Internal Helpdesks", "FAQ Answering", "Appointment Booking"].map(useCase => (
            <div key={useCase} className="p-4 bg-card rounded-lg shadow text-center">
              <p className="font-medium text-foreground">{useCase}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-violet-900 via-purple-700 to-fuchsia-500 text-primary-foreground py-16 sm:py-24" angledTop>
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold sm:text-4xl">Automate Conversations, Elevate Experiences.</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Discover how a custom Botpress agent can transform your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-headline">
            <Link href="/contact">Discuss Your Chatbot Project</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
