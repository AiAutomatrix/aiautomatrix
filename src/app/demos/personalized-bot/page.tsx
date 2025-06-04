'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2, User, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { PageTitle } from "@/components/shared/PageTitle";

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "Prompt must be at least 2 characters.",
  }),
});

interface PersonalizedBotDemoInput {
  prompt: string;
}

interface PersonalizedBotDemoOutput {
  response: string;
}

export default function PersonalizedBotDemo() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const form = useForm<PersonalizedBotDemoInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values: PersonalizedBotDemoInput) {
    setIsGenerating(true);
    // try {
    //   const response = await generatePersonalizedBotDemo(values.prompt);
    //   toast({
    //     title: "Generated!",
    //     description: response.response,
    //   });
    // } catch (error: any) {
    //   toast({
    //     title: "Something went wrong.",
    //     description: error.message,
    //     variant: "destructive",
    //   });
    // } finally {
      setIsGenerating(false);
    // }
  }

  return (
    <>
      <PageTitle
        title="Personalized Bot Demo"
        description="Generate a personalized bot demo with a custom prompt."
      />
      <Section className="pb-16">
        <div className="container max-w-2xl">
          <Card className="bg-card shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="p-6 border-b">
              <CardTitle className="text-2xl font-headline font-semibold text-foreground mb-2">
                Generate a Personalized Bot Demo
              </CardTitle>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="prompt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prompt</FormLabel>
                          <FormControl>
                            <Input placeholder="What can you do?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full font-headline" disabled={isGenerating}>
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="mr-2 h-4 w-4" />
                          Generate
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </Section>
    </>
  );
}
