'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { aiSolutionBackend, AiSolutionBackendInput, AiSolutionBackendOutput } from '@/ai/flows/ai-solution-backend';
import { Loader2, FileText, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const requestTypes = ['website', 'bot', 'customAI'] as const;

const formSchema = z.object({
  clientName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  requestType: z.enum(requestTypes, { errorMap: () => ({ message: 'Please select a solution type.'}) }),
  details: z.string().min(20, { message: 'Details must be at least 20 characters.' }).max(2000),
});

type FormValues = z.infer<typeof formSchema>;

export default function RequestSolutionPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [solutionProposal, setSolutionProposal] = useState<AiSolutionBackendOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: '',
      requestType: undefined,
      details: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setSolutionProposal(null);
    try {
      const input: AiSolutionBackendInput = data;
      const result = await aiSolutionBackend(input);
      setSolutionProposal(result);
      toast({
        title: 'Proposal Generated!',
        description: 'Your AI-generated solution proposal is ready below.',
      });
    } catch (error) {
      console.error('Error generating solution proposal:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate proposal. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PageTitle
        title="Request Your Custom AI Solution"
        description="Tell us about your project, and our AI will generate an initial proposal, including features, timeline, and estimated cost. Let's build something amazing together!"
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-primary" />
                Describe Your Needs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="clientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name / Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., John Doe or Acme Corp" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="requestType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of AI Solution</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select solution type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="website">AI-Powered Website</SelectItem>
                            <SelectItem value="bot">Custom AI Bot/Agent</SelectItem>
                            <SelectItem value="customAI">Other Custom AI Solution</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details & Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project, goals, key features, target audience, etc."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The more details you provide, the better the AI-generated proposal.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full font-headline" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Proposal...
                      </>
                    ) : (
                      'Generate AI Proposal'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-8 lg:mt-0">
             <h2 className="text-2xl font-headline font-semibold mb-4 text-foreground flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                AI-Generated Solution Proposal
            </h2>
            {isLoading && !solutionProposal && (
              <Card className="min-h-[300px] flex items-center justify-center bg-muted/50">
                <div className="text-center text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                  <p>Our AI is architecting your solution... This may take a moment.</p>
                </div>
              </Card>
            )}

            {!isLoading && !solutionProposal && (
                <Card className="min-h-[300px] flex items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground text-center p-4">Your generated proposal will appear here once you submit the form.</p>
                </Card>
            )}

            {solutionProposal && (
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-headline font-semibold text-primary mb-2">Solution Proposal:</h3>
                    <p className="text-sm text-foreground whitespace-pre-wrap bg-muted/30 p-3 rounded-md">{solutionProposal.solutionProposal}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-headline font-semibold text-primary mb-2">Estimated Timeline:</h3>
                    <p className="text-sm text-foreground bg-muted/30 p-3 rounded-md">{solutionProposal.timeline}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-headline font-semibold text-primary mb-2">Estimated Cost:</h3>
                    <p className="text-sm text-foreground bg-muted/30 p-3 rounded-md">{solutionProposal.costEstimate}</p>
                  </div>
                  <CardDescription className="text-xs pt-4 border-t">
                    Note: This is an AI-generated preliminary proposal. For a detailed consultation and finalized quote, please <Link href="/contact" className="underline text-primary">contact us</Link>.
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
