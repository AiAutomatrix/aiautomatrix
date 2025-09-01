import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Bot } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Custom Botpress Agents',
    description: 'Develop intelligent chatbots with advanced NLU, seamless CRM and API integrations, and fully customized workflows.',
    link: '/services/custom-botpress-agent'
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: 'AI-Powered Websites',
    description: 'Create sites with personalized user experiences, dynamic content generation, and intelligent analytics.',
    link: '/services/ai-powered-website-building'
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We build specialized solutions that drive efficiency, engagement, and growth for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-gradient-to-br from-primary to-accent p-0.5 rounded-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/40">
              <Link href={service.link} className="flex h-full">
                <Card className="card-glass text-center p-6 flex flex-col w-full h-full bg-card/95">
                  <CardHeader className="flex-shrink-0 flex justify-center items-center">
                    {service.icon}
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow items-center">
                    <h3 className="font-headline text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
