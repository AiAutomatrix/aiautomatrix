import Link from 'next/link';
import Image from 'next/image';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioData, PortfolioItem } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function PortfolioPage() {
  return (
    <>
      <PageTitle
        title="Our Portfolio & Case Studies"
        description="Explore a selection of our successful AI solution implementations. See how we've helped businesses like yours achieve their goals through innovative technology."
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item: PortfolioItem) => (
            <Card key={item.id} className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint={item.imageAiHint}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <item.Icon className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <CardTitle className="font-headline text-xl mt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{item.summary}</CardDescription>
                 <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                    {item.technologies.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full font-headline">
                  <Link href={`/portfolio/${item.id}`}>View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
