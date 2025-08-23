'use server';

/**
 * @fileOverview An AI agent that analyzes contact form messages and suggests the most relevant response from a predefined set of example answers.
 *
 * - contactFormResponder - A function that handles the contact form message analysis and response suggestion process.
 * - ContactFormResponderInput - The input type for the contactFormResponder function.
 * - ContactFormResponderOutput - The return type for the contactFormResponder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormResponderInputSchema = z.object({
  message: z.string().describe('The message submitted through the contact form.'),
});
export type ContactFormResponderInput = z.infer<typeof ContactFormResponderInputSchema>;

const ContactFormResponderOutputSchema = z.object({
  suggestedResponse: z.string().describe('The most relevant response suggested by the AI.'),
});
export type ContactFormResponderOutput = z.infer<typeof ContactFormResponderOutputSchema>;

export async function contactFormResponder(input: ContactFormResponderInput): Promise<ContactFormResponderOutput> {
  return contactFormResponderFlow(input);
}

const exampleResponses = [
  'Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.',
  'Wir bieten derzeit keine Unterstützung für diese Anfrage.',
  'Bitte senden Sie uns weitere Informationen, damit wir Ihnen besser helfen können.',
  'Ein individuelles Angebot wird in Kürze erstellt und Ihnen zugesandt.',
  'Wir kümmern uns umgehend um Ihr Anliegen.',
];

const prompt = ai.definePrompt({
  name: 'contactFormResponderPrompt',
  input: {schema: ContactFormResponderInputSchema},
  output: {schema: ContactFormResponderOutputSchema},
  prompt: `You are an AI assistant designed to analyze customer messages from a contact form and suggest the most relevant response from a predefined set of example answers.

  Here are some example answers:
  ${exampleResponses.map((response, index) => `${index + 1}: ${response}`).join('\n')}

  Analyze the following customer message and determine the most appropriate response. Return only the selected answer. Respond in german.

  Customer Message: {{{message}}}
`,
});

const contactFormResponderFlow = ai.defineFlow(
  {
    name: 'contactFormResponderFlow',
    inputSchema: ContactFormResponderInputSchema,
    outputSchema: ContactFormResponderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
