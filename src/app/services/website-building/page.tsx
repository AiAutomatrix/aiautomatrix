import Image from 'next/image';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Zap, BarChart3, SearchCode } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Users,
    name: "Personalized User Experiences",
    description: "AI algorithms analyze user behavior to deliver tailored content, product recommendations, and UI adjustments in real-time, increasing engagement and conversion rates.",
  },
  {
    icon: Zap,
    name: "Dynamic Content Generation",
    description: "Leverage generative AI to create or suggest website copy, product descriptions, and blog posts, keeping your content fresh, relevant, and optimized for your audience.",
  },
  {
    icon: BarChart3,
    name: "Intelligent Analytics & Insights",
    description: "Go beyond standard analytics. Our AI-powered websites provide deeper insights into user journeys, predict trends, and offer actionable recommendations for continuous improvement.",
  },
  {
    icon: SearchCode,
    name: "AI-Enhanced SEO & Accessibility",
    description: "Utilize AI tools to optimize your website for search engines, improve content discoverability, and ensure your site meets accessibility standards for all users.",
  },
];

export default function WebsiteBuildingPage() {
  return (
    <>
      <PageTitle
        title="AI-Powered Website Building"
        description="Transform your online presence with intelligent websites that learn, adapt, and deliver unparalleled user experiences. We combine cutting-edge AI with modern design to create digital platforms that drive results."
        className="pt-12 pb-8"
      />

      <Section title="Why Choose an AI-Powered Website?" className="pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/images/services/website.jpg" 
              alt="AI Website Interface" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
              data-ai-hint="futuristic website" 
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              In today's digital landscape, a static website is no longer enough. Ai-Automatrix builds dynamic, AI-driven websites that offer:
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
      
      <Section title="Our AI Website Features" angledTop backgroundColor="bg-muted/30" className="py-16">
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

      <Section title="Our Process" className="py-16" angledTop>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground font-bold text-2xl">1</div>
            <h3 className="text-xl font-headline font-semibold mb-2">Discovery & Strategy</h3>
            <p className="text-muted-foreground">Understanding your goals and how AI can achieve them.</p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground font-bold text-2xl">2</div>
            <h3 className="text-xl font-headline font-semibold mb-2">AI-Infused Design & Dev</h3>
            <p className="text-muted-foreground">Integrating AI from the ground up for optimal performance.</p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground font-bold text-2xl">3</div>
            <h3 className="text-xl font-headline font-semibold mb-2">Launch & Optimization</h3>
            <p className="text-muted-foreground">Continuous monitoring and AI-driven improvements post-launch.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-indigo-900 via-sky-700 to-emerald-500 text-primary-foreground py-16 sm:py-24" angledTop>
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold sm:text-4xl">Ready for an Intelligent Website?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let's build a website that works smarter for you.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-headline">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
