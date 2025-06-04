import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogData, BlogPost } from '@/data/blog';
import { CalendarDays, User, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Basic markdown to HTML conversion (can be replaced with a proper library like 'marked' or 'react-markdown')
function BasicMarkdown({ content }: { content: string }) {
  // Replace ## headers
  let htmlContent = content.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">$1</h2>');
  // Replace ### headers
  htmlContent = htmlContent.replace(/^### (.*$)/gim, '<h3 class="text-xl font-headline font-semibold mt-4 mb-2">$1</h3>');
  // Replace paragraphs (simple version, assumes double newline separation)
  htmlContent = htmlContent.split(/\n\s*\n/).map(paragraph => {
    if (paragraph.startsWith('<h') || paragraph.startsWith('<ul') || paragraph.startsWith('<ol')) return paragraph; // Don't wrap headers/lists in <p>
    return `<p class="mb-4 text-foreground/90 leading-relaxed">${paragraph.replace(/\n/g, '<br/>')}</p>`; // Replace single newlines with <br/> within paragraphs
  }).join('');
  // Replace lists (simple unordered list)
  htmlContent = htmlContent.replace(/-\s+(.*)/g, '<li class="ml-4 mb-1">$1</li>');
  htmlContent = htmlContent.replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc list-outside pl-5 mb-4">$1</ul>');
  
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}


type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

const getPostData = (slug: string): BlogPost | undefined => {
  return blogData.find((post) => post.slug === slug);
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="relative h-72 md:h-96">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          data-ai-hint={post.imageAiHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
           <PageTitle title={post.title} className="pt-12 pb-8 container mx-auto px-4" />
        </div>
      </div>
     

      <Section className="pb-16 -mt-12">
        <article className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-xl">
          <div className="mb-6 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1.5" />
                Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1.5" />
                By {post.author}
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 mt-3">
              <Tag className="h-4 w-4 mr-1.5" />
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          <Separator className="my-6" />
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <BasicMarkdown content={post.content} />
          </div>

          <Separator className="my-8" />

          <div className="text-center">
            <Button asChild variant="outline" className="font-headline">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </article>
      </Section>
    </>
  );
}
