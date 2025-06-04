import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData, PortfolioItem } from '@/data/portfolio';
import { CheckCircle, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    projectId: item.id,
  }));
}

const getProjectData = (id: string): PortfolioItem | undefined => {
  return portfolioData.find((item) => item.id === id);
};

export default function PortfolioDetailPage(props: any) {
  const { params } = props;
  const project = getProjectData(params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="relative h-72 md:h-96">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          data-ai-hint={project.imageAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <PageTitle title={project.title} className="pt-12 pb-8 container mx-auto px-4" />
        </div>
      </div>
     

      <Section className="pb-16 -mt-12">
        <div className="max-w-4xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <div className="flex items-center space-x-3 mb-4">
            {project.Icon && <project.Icon className="h-8 w-8 text-primary" />}
            <Badge variant="default" className="text-sm">{project.category}</Badge>
            {project.client && <Badge variant="secondary" className="text-sm">Client: {project.client}</Badge>}
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-3">Key Results</h3>
              <ul className="space-y-2">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.liveLink && (
            <Button asChild variant="default" className="mr-4 font-headline">
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                View Live Project <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
           <Button asChild variant="outline" className="font-headline">
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
