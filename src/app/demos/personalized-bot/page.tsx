'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageTitle } from '@/components/shared/PageTitle';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generatePersonalizedBotDemo, PersonalizedBotDemoInput, PersonalizedBotDemoOutput } from '@/ai/flows/personalized-bot-demo';
import { Loader2, Wand2, User, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  userPrompt: z.string().min(10, { message: 'Prompt must be at least 10 characters.' }).max(500, { message: 'Prompt must be 500 characters or less.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function PersonalizedBotDemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [demoResult, setDemoResult] = useState<PersonalizedBotDemoOutput | null>(null);
  const [submittedPrompt, setSubmittedPrompt] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userPrompt: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setDemoResult(null);
    setSubmittedPrompt(data.userPrompt);
    try {
      const input: PersonalizedBotDemoInput = { userPrompt: data.userPrompt };
      const result = await generatePersonalizedBotDemo(input);
      setDemoResult(result);
    } catch (error) {
      console.error('Error generating bot demo:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate bot demo. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PageTitle
        title="Personalized AI Bot Demo"
        description="Experience the power of our AI chatbots firsthand. Enter a prompt below, and our AI will generate a personalized demo response, showcasing how it might interact in a real-world scenario."
        className="pt-12 pb-8"
      />
      <Section className="pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <Wand2 className="mr-2 h-6 w-6 text-primary" />
                Generate Your Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="userPrompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Prompt for the AI Bot</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'Tell me about your services for small businesses.' or 'How can AI help improve customer retention?'"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full font-headline" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Demo...
                      </>
                    ) : (
                      'Generate Demo'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-headline font-semibold mb-4 text-foreground">Demo Interaction</h2>
            {isLoading && !demoResult && (
              <Card className="min-h-[200px] flex items-center justify-center bg-muted/50">
                <div className="text-center text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                  <p>AI is thinking... please wait.</p>
                </div>
              </Card>
            )}
            
            {!isLoading && !demoResult && !submittedPrompt && (
                <Card className="min-h-[200px] flex items-center justify-center bg-muted/50">
                    <p className="text-muted-foreground text-center">Enter a prompt and click "Generate Demo" to see the AI in action.</p>
                </Card>
            )}

            {submittedPrompt && (demoResult || isLoading) && (
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-primary">You asked:</p>
                      <p className="text-muted-foreground italic">{submittedPrompt}</p>
                    </div>
                  </div>
                  
                  <div className="border-t my-4"></div>

                  {isLoading && !demoResult && (
                     <div className="flex items-start space-x-3">
                        <Bot className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 animate-pulse" />
                        <div>
                          <p className="font-semibold text-green-500">AI Bot is typing...</p>
                          <div className="space-y-2 mt-1">
                            <div className="h-3 bg-gray-300 rounded-full w-3/4 animate-pulse"></div>
                            <div className="h-3 bg-gray-300 rounded-full w-1/2 animate-pulse"></div>
                          </div>
                        </div>
                    </div>
                  )}

                  {demoResult && (
                    <div className="flex items-start space-x-3">
                      <Bot className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-green-500">AI Bot responded:</p>
                        <p className="text-foreground whitespace-pre-wrap">{demoResult.botResponse}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
