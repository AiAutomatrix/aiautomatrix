'use server';

import { aiPoweredSeo, AiPoweredSeoInput, AiPoweredSeoOutput } from '@/ai/flows/ai-powered-seo';
import { z } from 'zod';

const AiPoweredSeoInputSchema = z.object({
  businessDescription: z.string(),
});

export async function getSeoSuggestions(input: AiPoweredSeoInput): Promise<AiPoweredSeoOutput> {
  const parsedInput = AiPoweredSeoInputSchema.parse(input);
  try {
    const result = await aiPoweredSeo(parsedInput);
    return result;
  } catch (error) {
    console.error("AI SEO generation failed:", error);
    throw new Error("Failed to get SEO suggestions from AI.");
  }
}
