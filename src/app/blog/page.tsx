import Link from 'next/link';
import Image from 'next/image';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogData, BlogPost } from '@/data/blog';
import { ArrowRight, CalendarDays, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  return (
    <>
      <PageTitle
        title="Insights & Articles from Ai-Automatrix"
        description="Stay updated with the latest trends in AI, company news, and in-depth case studies from our team of experts. Explore our thoughts on the future of technology."
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post: BlogPost) => (
            <Card key={post.slug} className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative w-full h-48 mb-4 cursor-pointer">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                      data-ai-hint={post.imageAiHint}
                    />
                  </div>
                </Link>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="px-1">|</span>
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <CardTitle className="font-headline text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-3">{post.summary}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full font-headline">
                  <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
