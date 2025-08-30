import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ArrowRight, Bot, HeartHandshake, ShoppingCart, FileText, Calculator, Pencil, AreaChart, Home, Car } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Botpress Demo Gallery | Ai Automatrix',
  description: 'Explore a showcase of intelligent Botpress agents designed for various business needs, from customer service to lead capture.',
};

const demoAgents = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Customer Service Agent',
    description: 'Answers FAQs, books appointments, and makes support simple.',
    link: '/bot-demos/customer-service',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Real Estate Agent',
    description: 'Finds property listings, schedules viewings, and answers real estate questions.',
    link: '/bot-demos/real-estate-agent',
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: 'E-commerce Agent',
    description: 'Assists with product discovery, order tracking, and purchases.',
    link: '/bot-demos/ecommerce-agent',
  },
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: 'Lead Capture Agent',
    description: 'Engages visitors and intelligently captures qualified leads for your sales team.',
    link: '/bot-demos/lead-capture-agent',
  },
  {
    icon: <Calculator className="h-10 w-10 text-accent" />,
    title: 'Price Estimate Tool',
    description: 'Provides instant, dynamic quotes for services based on user input.',
    link: '/bot-demos/price-estimate-tool',
  },
  {
    icon: <AreaChart className="h-10 w-10 text-accent" />,
    title: 'Crypto Tracker',
    description: 'Fetches and displays real-time cryptocurrency prices and data.',
    link: '/bot-demos/crypto-tracker',
  },
  {
    icon: <Pencil className="h-10 w-10 text-primary" />,
    title: 'Blog Creator Agent',
    description: 'Helps brainstorm, outline, and generate drafts for blog content.',
    link: '/bot-demos/blog-creator-agent',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent" />,
    title: 'Mental Health Tracker',
    description: 'A supportive companion for logging moods and providing resources.',
    link: '/bot-demos/mental-health-tracker',
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: 'Vehicle Evaluation Agent',
    description: 'Researches vehicle reviews, common problems, and provides price estimates.',
    link: '/bot-demos/vehicle-evaluation-agent',
  },
];

export default function BotDemosHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                Botpress <span className="text-gradient">Demo Gallery</span>
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Welcome to our showroom. Explore our collection of intelligent, custom-built Botpress agents designed to solve real-world business challenges. Interact with each demo to see what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoAgents.map((agent) => (
                <Card key={agent.title} className="card-glass text-center p-6 transform transition-transform duration-300 hover:-translate-y-2 flex flex-col w-full">
                  <CardHeader className="flex-shrink-0 flex justify-center items-center">
                    {agent.icon}
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow items-center">
                    <h3 className="font-headline text-2xl font-bold mb-2">{agent.title}</h3>
                    <p className="text-muted-foreground flex-grow mb-6">{agent.description}</p>
                    <Link href={agent.link} className="w-full mt-auto">
                      <Button variant="outline" className="w-full group">
                        View Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-20">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                Let's build a custom AI solution that fits your unique needs.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="btn-gradient">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
