import { MessageSquareQuote, Waypoints, Users, CheckCircle2 } from 'lucide-react';

const timelineSteps = [
  { icon: <MessageSquareQuote className="h-8 w-8 text-primary" />, title: "1. Kennenlernen & Analyse", description: "Wir starten mit einem kostenlosen Erstgespräch, in dem wir Ihre Ziele, Anforderungen und Wünsche genau besprechen." },
  { icon: <Waypoints className="h-8 w-8 text-primary" />, title: "2. Konzept & Angebot", description: "Basierend auf der Analyse entwickle ich eine maßgeschneiderte Strategie und erstelle ein transparentes, unverbindliches Angebot." },
  { icon: <Users className="h-8 w-8 text-primary" />, title: "3. Umsetzung & Abstimmung", description: "In agilen Sprints setze ich Ihr Projekt um. Regelmäßige Updates und Abstimmungsrunden sorgen für volle Transparenz." },
  { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, title: "4. Go-Live & Betreuung", description: "Nach finaler Abnahme geht Ihr Projekt online. Auch danach stehe ich für Support, Wartung und Weiterentwicklung zur Verfügung." },
];

export function ProcessSection() {
  return (
    <section id="ablauf" className="relative scroll-mt-24 bg-transparent py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ablauf der Zusammenarbeit
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
                In 4 Schritten zu Ihrer digitalen Lösung – transparent und effizient.
            </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-4 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" aria-hidden="true"></div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {timelineSteps.map((step, stepIdx) => (
              <div key={step.title} className="flex items-start gap-6 lg:[&_div]:even:ml-auto lg:[&_div]:even:text-right">
                <div className="hidden lg:block">
                  {stepIdx % 2 === 0 && <div className="w-16"></div>}
                </div>
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10 backdrop-blur-sm lg:order-1 lg:mx-auto">
                    {step.icon}
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-base text-foreground/70">{step.description}</p>
                </div>
                 <div className="hidden lg:block">
                  {stepIdx % 2 !== 0 && <div className="w-16"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
