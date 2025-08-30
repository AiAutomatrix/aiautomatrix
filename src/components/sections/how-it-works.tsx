import { ScanSearch, Bot, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const steps = [
  {
    icon: <ScanSearch className="h-10 w-10 text-primary" />,
    title: '1. We Scrape Your Website',
    description: "We analyze your website's content, sitemap, and structure to understand your business, services, and brand voice.",
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: '2. We Build Your Custom Agent',
    description: 'Using the scraped data, we build and train a custom AI agent that can answer customer questions and capture leads accurately.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: '3. We Put It Live',
    description: 'We provide you with a single line of code to embed the AI agent on your website. No technical hassle, just results.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Live on Your Site in <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            From your existing website to a fully functional AI agent, our process is designed to be fast, simple, and seamless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="card-glass p-6 text-center">
              <CardHeader className="flex flex-col items-center">
                {step.icon}
                <CardTitle className="font-headline text-2xl font-bold mt-4">{step.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground">
                {step.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
