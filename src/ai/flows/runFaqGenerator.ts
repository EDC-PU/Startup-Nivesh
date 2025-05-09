'use server';
/**
 * @fileOverview An AI flow for generating Frequently Asked Questions (FAQs)
 * based on provided landing page content.
 *
 * - runFaqGenerator - A function that takes landing page content and returns generated FAQs.
 * - FaqGeneratorInput - The Zod schema for the input to the FAQ generator.
 * - FaqGeneratorOutput - The Zod schema for the output from the FAQ generator.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const FaqGeneratorInputSchema = z.string().describe('The full text content of the landing page.');
export type FaqGeneratorInput = z.infer<typeof FaqGeneratorInputSchema>;

const FAQItemSchema = z.object({
  question: z.string().describe('A frequently asked question.'),
  answer: z.string().describe('The answer to the question.'),
});
export type FAQItem = z.infer<typeof FAQItemSchema>;

const FaqGeneratorOutputSchema = z.array(FAQItemSchema).describe('An array of generated FAQ items.');
export type FaqGeneratorOutput = z.infer<typeof FaqGeneratorOutputSchema>;

export async function runFaqGenerator(landingPageContent: FaqGeneratorInput): Promise<FaqGeneratorOutput> {
  return faqGeneratorFlow(landingPageContent);
}

const faqGeneratorPrompt = ai.definePrompt({
  name: 'faqGeneratorPrompt',
  input: { schema: FaqGeneratorInputSchema },
  output: { schema: FaqGeneratorOutputSchema },
  prompt: `You are an expert copywriter tasked with creating a "Frequently Asked Questions" (FAQ) section for a landing page.
Based on the following landing page content, please generate a list of relevant questions and their answers.
Focus on questions that a potential user or customer might have after reading the content.
Ensure the questions are clear and the answers are concise and informative.
Aim for at least 5-7 FAQ items.

Landing Page Content:
{{{input}}}

Generate the FAQs in the specified JSON format.
`,
  config: {
    temperature: 0.5, // Lower temperature for more predictable, factual FAQs
     safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ],
  }
});

const faqGeneratorFlow = ai.defineFlow(
  {
    name: 'faqGeneratorFlow',
    inputSchema: FaqGeneratorInputSchema,
    outputSchema: FaqGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await faqGeneratorPrompt(input);
    return output || []; // Return empty array if output is null/undefined
  }
);
