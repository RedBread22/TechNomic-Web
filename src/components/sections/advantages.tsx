import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Rocket,
  ShieldCheck,
  Scaling,
  Bot,
  MapPin,
  Server,
} from 'lucide-react';

const advantages = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Schnelle Umsetzung',
    description: 'Kurze Time-to-Market durch automatisierte Pipelines.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Sicher & DSGVO-konform',
    description: 'EU-Hosting, Backups und sichere Rollen- & Rechtesysteme.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Skalierbar & Modern',
    description: 'Von der Landingpage bis zur komplexen Applikation.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'KI-Automatisiert',
    description: 'Workflows mit Google Kalender, Gmail, Bots und mehr.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Lokal & Nah',
    description: 'Persönliche Betreuung im Ausseerland und Umgebung.',
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Performantes Hosting',
    description: 'Schnelle Ladezeiten dank moderner Cloud-Infrastruktur.',
  },
];

export function AdvantagesSection() {
  return (
    <section id="vorteile" className="relative bg-transparent py-24 sm:py-32">
       <div className="section-glow-pink" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ihre Vorteile mit TechNomic
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Wir kombinieren modernste Technologie mit persönlichem Service.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map(advantage => (
            <Card
              key={advantage.title}
              className="transform-gpu border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardHeader className="flex flex-col items-start gap-4">
                {advantage.icon}
                <div className="space-y-1">
                  <CardTitle>{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
