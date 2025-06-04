// Implemented personalized bot demo flow.

'use server';

/**
 * @fileOverview Generates a personalized demo of an AI bot's response to a user prompt.
 *
 * - generatePersonalizedBotDemo - A function that generates a personalized demo of how an AI bot could respond to a user prompt.
 * - PersonalizedBotDemoInput - The input type for the generatePersonalizedBotDemo function.
 * - PersonalizedBotDemoOutput - The return type for the generatePersonalizedBotDemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedBotDemoInputSchema = z.object({
  userPrompt: z
    .string()
    .describe('The prompt from the user for the AI bot to respond to.'),
});
export type PersonalizedBotDemoInput = z.infer<typeof PersonalizedBotDemoInputSchema>;

const PersonalizedBotDemoOutputSchema = z.object({
  botResponse: z
    .string()
    .describe('The AI bot response to the user prompt, demonstrating a personalized demo.'),
});
export type PersonalizedBotDemoOutput = z.infer<typeof PersonalizedBotDemoOutputSchema>;

export async function generatePersonalizedBotDemo(
  input: PersonalizedBotDemoInput
): Promise<PersonalizedBotDemoOutput> {
  return personalizedBotDemoFlow(input);
}

const personalizedBotDemoPrompt = ai.definePrompt({
  name: 'personalizedBotDemoPrompt',
  input: {schema: PersonalizedBotDemoInputSchema},
  output: {schema: PersonalizedBotDemoOutputSchema},
  prompt: `You are an AI bot demo generator.  A user will provide a prompt, and you will respond with an example of how an AI bot would respond to that prompt.  The goal is to provide a personalized demo of the AI bot to the user so that they can evaluate the potential of AI chatbot integrations for their business.  The user's prompt is: {{{userPrompt}}}`,
});

const personalizedBotDemoFlow = ai.defineFlow(
  {
    name: 'personalizedBotDemoFlow',
    inputSchema: PersonalizedBotDemoInputSchema,
    outputSchema: PersonalizedBotDemoOutputSchema,
  },
  async input => {
    const {output} = await personalizedBotDemoPrompt(input);
    return output!;
  }
);
