import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ServicePageLayoutProps {
  title: React.ReactNode;
  subtitle: string;
  features: {
    title: string;
    description: string;
  }[];
  imageUrl: string;
  imageHint: string;
  secondaryAction?: {
    href: string;
    label: string;
  }
}

export default function ServicePageLayout({ title, subtitle, features, imageUrl, imageHint, secondaryAction }: ServicePageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                {title}
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                {subtitle}
              </p>
            </div>

            <div className="mt-20">
              <div className="flex justify-center mb-12">
                <img
                    src={imageUrl}
                    alt={imageHint}
                    className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
                    data-ai-hint={imageHint}
                />
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center">
                  Key <span className="text-gradient">Features</span>
                </h2>
                <ul className="space-y-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-20 flex justify-center gap-4">
                <Link href="/#contact">
                    <Button size="lg" className="btn-gradient">
                        Get a Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
                {secondaryAction && (
                  <Link href={secondaryAction.href}>
                      <Button size="lg" variant="outline">
                          {secondaryAction.label}
                          <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                  </Link>
                )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
