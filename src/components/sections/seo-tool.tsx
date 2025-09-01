
"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getSeoSuggestions } from '@/app/actions';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import type { AiPoweredSeoOutput } from '@/ai/flows/ai-powered-seo';

const formSchema = z.object({
  businessDescription: z.string().min(50, { message: 'Please provide a description of at least 50 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SeoToolSection() {
  const [seoResult, setSeoResult] = useState<AiPoweredSeoOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSeoResult(null);
    try {
      const result = await getSeoSuggestions(data);
      setSeoResult(result);
    } catch (error) {
      console.error('Error fetching SEO suggestions:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate SEO suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="seo-tool" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            AI-Powered <span className="text-gradient">SEO Boost</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enter your business description to get AI-generated keywords and a meta description to improve your search ranking.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent p-0.5 rounded-lg shadow-2xl shadow-primary/20">
            <Card className="card-glass bg-card/95">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Textarea
                    {...register('businessDescription')}
                    placeholder="e.g., 'We are a family-owned bakery in San Francisco specializing in artisanal sourdough bread and custom cakes...'"
                    className="bg-background/50 min-h-[150px] text-base"
                  />
                  {errors.businessDescription && (
                    <p className="text-sm text-destructive">{errors.businessDescription.message}</p>
                  )}
                  <Button type="submit" disabled={isLoading} className="w-full btn-gradient">
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate Suggestions
                  </Button>
                </form>

                {seoResult && (
                  <div className="mt-8 space-y-6 animate-in fade-in-50 duration-500">
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-3">Suggested Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {seoResult.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-3">Optimized Meta Description</h3>
                      <Card className="bg-background/50 p-4">
                        <p className="text-muted-foreground italic">{seoResult.metaDescription}</p>
                      </Card>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
