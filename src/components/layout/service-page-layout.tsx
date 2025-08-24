import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ServicePageLayoutProps {
  title: React.ReactNode;
  subtitle: string;
  features: {
    title: string;
    description: string;
  }[];
  imageUrl: string;
  imageHint: string;
}

export default function ServicePageLayout({ title, subtitle, features, imageUrl, imageHint }: ServicePageLayoutProps) {
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

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <div className="relative w-full h-80 md:h-full min-h-[400px] rounded-lg overflow-hidden">
                <img
                    src={imageUrl}
                    alt={imageHint}
                    className="w-full h-full object-cover"
                    data-ai-hint={imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
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

            <div className="text-center mt-20">
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
    </div>
  );
}
