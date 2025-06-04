import Link from 'next/link';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Bot, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "AI-Powered Website Building",
    description: "We design and develop visually stunning, highly interactive websites powered by AI to deliver personalized user experiences and drive engagement. From simple landing pages to complex e-commerce platforms, our AI integration ensures your site is not just a presence, but a powerful tool.",
    icon: Globe,
    href: "/services/website-building",
    features: ["Personalized content delivery", "AI-driven UX optimization", "Intelligent analytics", "SEO enhancement"]
  },
  {
    title: "Custom Botpress Agent Development",
    description: "Leverage the power of conversational AI with custom Botpress agents. We build intelligent chatbots for customer service, lead generation, internal process automation, and more, seamlessly integrated into your existing workflows and platforms.",
    icon: Bot,
    href: "/services/botpress-agents",
    features: ["Natural Language Understanding (NLU)", "Multi-platform integration", "Scalable architecture", "Analytics and reporting"]
  },
  {
    title: "AI Backend Development",
    description: "Our team specializes in creating robust, scalable AI-driven backend systems. Whether you need machine learning model deployment, data processing pipelines, or custom AI APIs, we provide the foundational technology to power your intelligent applications.",
    icon: Cpu,
    href: "/services/backend-development",
    features: ["ML model integration & deployment", "Custom API development", "Data processing & analysis", "Cloud-native solutions"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageTitle
        title="Our AI Solutions & Services"
        description="Discover how Ai-Automatrix can empower your business with cutting-edge artificial intelligence technologies. We offer a range of services designed to automate processes, enhance user experiences, and drive growth."
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                  {service.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full font-headline">
                  <Link href={service.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
