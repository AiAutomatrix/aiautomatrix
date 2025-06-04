import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section } from '@/components/shared/Section';
import { PageTitle } from '@/components/shared/PageTitle';
import { ArrowRight, Bot, Cpu, Globe, MessageCircle, Users } from 'lucide-react';
import ThreeScene from '@/components/home/ThreeScene'; // Placeholder for Three.js

const services = [
  {
    icon: Globe,
    title: 'AI-Powered Websites',
    description: 'Stunning, intelligent websites that adapt to your users and drive results.',
    href: '/services/website-building',
  },
  {
    icon: Bot,
    title: 'Custom Botpress Agents',
    description: 'Engaging and efficient AI chatbots tailored to your business needs.',
    href: '/services/botpress-agents',
  },
  {
    icon: Cpu,
    title: 'AI Backend Development',
    description: 'Robust and scalable AI-driven backends to power your applications.',
    href: '/services/backend-development',
  },
];

const testimonials = [
  {
    quote: "Ai-Automatrix revolutionized our customer engagement with a custom AI bot. Highly recommended!",
    name: "Jane Doe",
    company: "Tech Solutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait"
  },
  {
    quote: "The AI-powered website they built for us is not only beautiful but also incredibly smart. Our conversions are up!",
    name: "John Smith",
    company: "E-commerce Giants",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait"
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section 
        className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-32" // Removed pb-40, will be handled by angledBottom's dynamic padding
        angledBottom
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-headline font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Automate & Elevate with <span className="block">Intelligent AI Solutions</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto md:mx-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Ai-Automatrix crafts bespoke AI-powered websites, advanced Botpress agents, and robust backend systems to transform your business operations.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="font-headline">
                <Link href="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-headline">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            {/* Placeholder for 3D animation / Three.js scene */}
            {/* <ThreeScene /> */}
             <Image
                src="https://placehold.co/600x400.png"
                alt="AI Abstract Art"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                data-ai-hint="abstract technology"
              />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Our Core Offerings" subtitle="What We Do Best" angledTop angledBottom backgroundColor="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
                <Button variant="link" asChild className="mt-4 px-0 text-primary">
                  <Link href={service.href}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" title="What Our Clients Say" subtitle="Success Stories" angledTop>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card animate-fadeInUp" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64} 
                    height={64} 
                    className="rounded-full"
                    data-ai-hint={testimonial.aiHint}
                  />
                  <div>
                    <blockquote className="text-foreground/90 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="mt-4 font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-primary text-primary-foreground py-16 sm:py-24" angledTop>
         <div className="text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
              Let's discuss how Ai-Automatrix can build your next intelligent solution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary" className="font-headline">
                <Link href="/request-solution">Request a Custom Solution</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-headline border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/demos/personalized-bot">Try Our Bot Demo</Link>
              </Button>
            </div>
          </div>
      </Section>
    </div>
  );
}
