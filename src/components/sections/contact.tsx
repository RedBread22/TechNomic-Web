'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { submitContactForm } from '@/app/actions';
import { useAppContext } from '@/context/app-context';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name muss mindestens 2 Zeichen lang sein.' }),
  email: z.string().email({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Nachricht muss mindestens 10 Zeichen lang sein.' }),
  consent: z.boolean().refine(val => val === true, {
    message: 'Sie müssen der Datenverarbeitung zustimmen.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { contactMessage, setContactMessage } = useAppContext();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResponseDialog, setShowResponseDialog] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      consent: false,
    },
  });

  useEffect(() => {
    if (contactMessage) {
      form.setValue('message', contactMessage);
      // Clear context message after using it
      setContactMessage('');
    }
  }, [contactMessage, form, setContactMessage]);

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      if (result.success && result.suggestedResponse) {
        form.reset();
        setAiResponse(result.suggestedResponse);
        setShowResponseDialog(true);
      } else {
        toast({
          variant: "destructive",
          title: "Fehler beim Senden",
          description: result.error || "Ein unbekannter Fehler ist aufgetreten.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      })
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section id="kontakt" className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Kontaktieren Sie uns
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Wir freuen uns auf Ihre Nachricht und melden uns umgehend bei Ihnen.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihr Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ihre@email.de" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firma (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihre Firma" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+49 123 456789" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ihre Nachricht</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Wie können wir Ihnen helfen?" rows={6} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <Label>
                          Ich stimme der Verarbeitung meiner Daten gemäß Datenschutz zu.
                        </Label>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
                  <Button type="button" variant="ghost" className="rounded-full">
                    <a href="tel:+49123456789">Direkt anrufen</a>
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="rounded-full">
                    {isSubmitting ? 'Wird gesendet...' : 'Senden'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
      <AlertDialog open={showResponseDialog} onOpenChange={setShowResponseDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Vielen Dank für Ihre Nachricht!</AlertDialogTitle>
            <AlertDialogDescription>
              Wir haben Ihre Anfrage erhalten. Basierend auf Ihrer Nachricht lautet eine mögliche Antwort:
              <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-foreground">
                {aiResponse}
              </blockquote>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowResponseDialog(false)}>Schließen</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
