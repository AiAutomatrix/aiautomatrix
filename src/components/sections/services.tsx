import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenTool, Code, Search, Megaphone, BrainCircuit, Bot } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'Web Design',
    description: 'Stunning, custom designs that capture your brand and engage your audience from the first click.',
    link: '/services/web-design'
  },
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Web Development',
    description: 'Fast, responsive, and scalable websites built with the latest technologies for optimal performance.',
    link: '/services/web-development'
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines and attract more organic traffic with our expert SEO strategies.',
    link: '/services/seo-optimization'
  },
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing campaigns to grow your online presence and connect with your customers.',
    link: '/services/digital-marketing'
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="flex">
                <Card className="card-glass text-center p-6 transform transition-transform duration-300 hover:-translate-y-2 flex flex-col w-full">
                  <CardHeader className="flex justify-center items-center">
                    {service.icon}
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <h3 className="font-headline text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}