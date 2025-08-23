import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle2, MessageSquareQuote, Waypoints, Users } from 'lucide-react';

const timelineSteps = [
  { icon: <MessageSquareQuote className="h-6 w-6 text-primary" />, title: "Kennenlernen", description: "Wir besprechen Ihre Ziele und Anforderungen." },
  { icon: <Waypoints className="h-6 w-6 text-primary" />, title: "Konzept", description: "Entwicklung einer maßgeschneiderten Strategie." },
  { icon: <Users className="h-6 w-6 text-primary" />, title: "Umsetzung", description: "Agile Entwicklung und regelmäßige Abstimmung." },
  { icon: <CheckCircle2 className="h-6 w-6 text-primary" />, title: "Betreuung", description: "Langfristiger Support und Weiterentwicklung." },
];

export function AboutSection() {
  return (
    <section id="ueber-uns" className="relative bg-transparent py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ihr digitaler Partner aus dem Salzkammergut
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Mit Standort in Bad Mitterndorf (AT) sind wir Ihr lokaler Experte für Webentwicklung, Cloud-Lösungen, KI-Integration und IT-Support. Wir schaffen digitale Erlebnisse, die begeistern und nachhaltig zum Erfolg führen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Badge variant="secondary" className="border-transparent bg-white/5 px-4 py-2 text-base text-white/80 backdrop-blur-sm">Schnelle Reaktion</Badge>
              <Badge variant="secondary" className="border-transparent bg-white/5 px-4 py-2 text-base text-white/80 backdrop-blur-sm">Transparente Preise</Badge>
              <Badge variant="secondary" className="border-transparent bg-white/5 px-4 py-2 text-base text-white/80 backdrop-blur-sm">EU-Hosting</Badge>
            </div>
          </div>
          <div className="flow-root">
            <div className="-my-8 divide-y divide-white/10">
              {timelineSteps.map((step, stepIdx) => (
                <div key={step.title} className="py-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 backdrop-blur-sm">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-1 text-base text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
