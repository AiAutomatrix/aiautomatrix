import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden">
             <Image
                src="https://placehold.co/600x400.png"
                alt="Our Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="team workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ai Automatrix was founded on a simple principle: to empower businesses with the AI tools they need to thrive in a competitive landscape. We're a passionate team of developers, and strategists dedicated to crafting unique automation solutions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span className="font-medium">Client-Centric Approach</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span className="font-medium">Innovation and Technology</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 text-primary mr-3" />
                <span className="font-medium">Commitment to Quality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
