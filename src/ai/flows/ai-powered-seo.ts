'use server';

/**
 * @fileOverview An AI-powered SEO tool that suggests relevant keywords for business descriptions.
 *
 * - aiPoweredSeo - A function that handles the SEO optimization process.
 * - AiPoweredSeoInput - The input type for the aiPoweredSeo function.
 * - AiPoweredSeoOutput - The return type for the aiPoweredSeo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredSeoInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A description of the business for SEO keyword analysis.'),
});
export type AiPoweredSeoInput = z.infer<typeof AiPoweredSeoInputSchema>;

const AiPoweredSeoOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('An array of relevant keywords for SEO optimization.'),
  metaDescription: z
    .string()
    .describe('A meta description optimized for search engines.'),
});
export type AiPoweredSeoOutput = z.infer<typeof AiPoweredSeoOutputSchema>;

export async function aiPoweredSeo(input: AiPoweredSeoInput): Promise<AiPoweredSeoOutput> {
  return aiPoweredSeoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredSeoPrompt',
  input: {schema: AiPoweredSeoInputSchema},
  output: {schema: AiPoweredSeoOutputSchema},
  prompt: `You are an SEO expert. Analyze the following business description and suggest relevant keywords and a meta description for SEO optimization.

Business Description: {{{businessDescription}}}

Keywords:`, // Add meta description
});

const aiPoweredSeoFlow = ai.defineFlow(
  {
    name: 'aiPoweredSeoFlow',
    inputSchema: AiPoweredSeoInputSchema,
    outputSchema: AiPoweredSeoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
