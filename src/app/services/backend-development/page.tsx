import Image from 'next/image';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { CheckCircle, Cog, DatabaseZap, BrainCircuit, CloudCog } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: BrainCircuit,
    name: "Machine Learning Model Integration",
    description: "Seamlessly integrate and deploy your custom or pre-trained ML models into scalable backend services.",
  },
  {
    icon: DatabaseZap,
    name: "AI-Powered Data Processing Pipelines",
    description: "Build efficient pipelines for data ingestion, transformation, analysis, and storage, optimized for AI applications.",
  },
  {
    icon: Cog,
    name: "Custom AI API Development",
    description: "Develop secure and high-performance APIs that expose your AI capabilities to web, mobile, or other third-party applications.",
  },
  {
    icon: CloudCog,
    name: "Scalable Cloud-Native Architecture",
    description: "Design and implement AI backends on cloud platforms (AWS, GCP, Azure) for maximum scalability, reliability, and cost-efficiency.",
  },
];

export default function BackendDevelopmentPage() {
  return (
    <>
      <PageTitle
        title="AI Backend Development"
        description="Power your intelligent applications with robust, scalable, and secure AI-driven backend systems. We build the foundational technology that brings your AI vision to life."
        className="pt-12 pb-8"
      />

      <Section title="The Engine Behind Intelligent Applications" className="pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/images/services/backend1.jpg" 
              alt="AI Backend Architecture" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
              data-ai-hint="server infrastructure" 
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              A powerful AI backend is crucial for delivering sophisticated AI experiences. Ai-Automatrix specializes in:
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
      
      <Section title="Our AI Backend Expertise" angledTop backgroundColor="bg-muted/30" className="py-16">
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

      <Section title="Technologies We Master" className="py-16" angledTop>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {["Python", "Node.js", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "AWS", "GCP", "Azure", "FastAPI"].map(tech => (
            <div key={tech} className="p-4 bg-card rounded-lg shadow">
              <p className="font-medium text-foreground">{tech}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-gray-900 via-green-800 to-lime-500 text-primary-foreground py-16 sm:py-24" angledTop>
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold sm:text-4xl">Build a Future-Proof AI Backend.</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Partner with us to create the backbone of your AI innovations.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-headline">
            <Link href="/contact">Plan Your AI Backend Project</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
