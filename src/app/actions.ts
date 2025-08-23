'use server';

import { z } from 'zod';
import { contactFormResponder } from '@/ai/flows/contact-form-responder';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, error: 'Ungültige Formulardaten.' };
  }

  try {
    const aiResponse = await contactFormResponder({
      message: parsedData.data.message,
    });

    // In a real app, you would now send an email, save to a database, etc.
    // For this demo, we just return the AI's suggestion.

    return {
      success: true,
      suggestedResponse: aiResponse.suggestedResponse,
    };
  } catch (error) {
    console.error('Error in contact form AI flow:', error);
    return {
      success: false,
      error: 'Fehler bei der Verarbeitung Ihrer Anfrage durch die KI.',
    };
  }
}
