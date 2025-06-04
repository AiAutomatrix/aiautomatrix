// use server'
'use server';

/**
 * @fileOverview A backend system that uses generative AI to fulfill requests for websites, bots, and custom AI solutions.
 *
 * - aiSolutionBackend - A function that handles the AI solution backend process.
 * - AiSolutionBackendInput - The input type for the aiSolutionBackend function.
 * - AiSolutionBackendOutput - The return type for the aiSolutionBackend function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSolutionBackendInputSchema = z.object({
  requestType: z.enum(['website', 'bot', 'customAI']).describe('The type of AI solution requested.'),
  details: z.string().describe('Detailed specifications and requirements for the requested AI solution.'),
  clientName: z.string().describe('The name of the client making the request.'),
});
export type AiSolutionBackendInput = z.infer<typeof AiSolutionBackendInputSchema>;

const AiSolutionBackendOutputSchema = z.object({
  solutionProposal: z.string().describe('A detailed proposal for the requested AI solution, including features, technologies, and estimated cost.'),
  timeline: z.string().describe('An estimated timeline for the development and deployment of the AI solution.'),
  costEstimate: z.string().describe('An estimated cost for the development and deployment of the AI solution.'),
});
export type AiSolutionBackendOutput = z.infer<typeof AiSolutionBackendOutputSchema>;

export async function aiSolutionBackend(input: AiSolutionBackendInput): Promise<AiSolutionBackendOutput> {
  return aiSolutionBackendFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSolutionBackendPrompt',
  input: {schema: AiSolutionBackendInputSchema},
  output: {schema: AiSolutionBackendOutputSchema},
  prompt: `You are an AI solution architect. A client, {{{clientName}}}, has requested a solution of type {{{requestType}}}. Here are the details of the request: {{{details}}}.

  Create a solution proposal, timeline, and cost estimate for the client. Be as detailed as possible in the solution proposal, including specific technologies, features, and design considerations.  Provide an estimate in weeks for the timeline, and an estimated cost in US dollars.

  Solution Proposal:
  Timeline:
  Cost Estimate:`,
});

const aiSolutionBackendFlow = ai.defineFlow(
  {
    name: 'aiSolutionBackendFlow',
    inputSchema: AiSolutionBackendInputSchema,
    outputSchema: AiSolutionBackendOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
