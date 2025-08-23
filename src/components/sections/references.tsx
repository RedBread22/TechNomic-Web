import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const references = [
  {
    customer: 'Ferienhaus Salzkammergut',
    branch: 'Tourismus',
    goal: 'Direktbuchungen erhöhen und die Sichtbarkeit der Ferienwohnungen steigern.',
    measure: 'Entwicklung einer modernen Website mit Buchungssystem, SEO-Optimierung und Anbindung an soziale Medien.',
    result: 'Steigerung der Direktbuchungen um 40% in der ersten Saison, Top-Rankings bei Google für relevante Suchbegriffe.',
    tech: ['Next.js', 'Firebase', 'Stripe']
  },
  {
    customer: 'Handwerksbetrieb Müller',
    branch: 'Handwerk',
    goal: 'Effizientere Angebots- und Rechnungsstellung sowie zentrale Kundenverwaltung.',
    measure: 'Implementierung eines cloud-basierten Tools zur Automatisierung der Dokumentenerstellung und Kundendatenpflege.',
    result: 'Zeitersparnis von ca. 5 Stunden pro Woche, 90% schnellere Angebotserstellung.',
    tech: ['Genkit', 'Google Cloud', 'React']
  },
  {
    customer: 'Lokaler Onlineshop',
    branch: 'E-Commerce',
    goal: 'Reduzierung des manuellen Aufwands bei der Bearbeitung von Kundenanfragen.',
    measure: 'Einrichtung eines KI-Chatbots, der wiederkehrende Fragen zu Produkten, Versand und Rückgabe automatisch beantwortet.',
    result: 'Senkung des Support-Volumens via E-Mail um 60%, höhere Kundenzufriedenheit durch Sofort-Antworten.',
    tech: ['Genkit', 'Cloud Run', 'Dialogflow']
  }
];

export function ReferencesSection() {
  return (
    <section id="referenzen" className="relative bg-background py-24 sm:py-32">
       <div className="section-glow-orange" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projekte & Referenzen
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Ein Auszug meiner Arbeit – von der Website bis zur KI-Automatisierung.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {references.map(ref => (
            <Card key={ref.customer} className="flex flex-col border-white/10 bg-white/[.02] backdrop-blur-lg">
              <CardHeader>
                <CardTitle>{ref.customer}</CardTitle>
                <p className="text-sm text-primary">{ref.branch}</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                    <p className="font-semibold">Ziel:</p>
                    <p className="text-foreground/80">{ref.goal}</p>
                </div>
                <div>
                    <p className="font-semibold">Maßnahme:</p>
                    <p className="text-foreground/80">{ref.measure}</p>
                </div>
                 <div>
                    <p className="font-semibold">Ergebnis:</p>
                    <p className="text-foreground/80">{ref.result}</p>
                </div>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                {ref.tech.map(t => <Badge key={t} variant="secondary" className="border-transparent bg-white/5 text-white/70">{t}</Badge>)}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild variant="ghost" className="rounded-full">
                <Link href="#kontakt">Weitere Referenzen anfragen</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
