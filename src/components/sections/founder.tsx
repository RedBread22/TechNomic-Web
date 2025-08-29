import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, MapPin, Rocket, Users } from 'lucide-react';

export function FounderSection() {
  return (
    <section id="ueber-mich" className="relative scroll-mt-24 bg-transparent py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="relative flex justify-center">
            <div className="aspect-[3/4] w-full max-w-sm rounded-2xl bg-white/5 p-2 shadow-2xl shadow-primary/10 ring-1 ring-white/10 backdrop-blur-lg">
              <Image
                src="https://placehold.co/600x800.png"
                data-ai-hint="portrait"
                alt="Klemens Gassner – IT & Automatisierung"
                width={600}
                height={800}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ich bin Klemens – Ihr Partner für Websites & KI-Automatisierung.
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Als Ihr persönlicher Ansprechpartner verbinde ich technisches Know-how mit lokaler Verbundenheit. Mein Ziel ist es, für Sie nicht nur eine Website zu erstellen, sondern eine digitale Lösung, die exakt auf Ihre Bedürfnisse zugeschnitten ist, reibungslos funktioniert und nachhaltig zum Erfolg Ihres Unternehmens beiträgt. Transparenz, Verlässlichkeit und eine partnerschaftliche Zusammenarbeit auf Augenhöhe sind für mich selbstverständlich.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="secondary" className="border-transparent bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm"><MapPin className="mr-1.5 h-4 w-4" />Standort Bad Mitterndorf</Badge>
              <Badge variant="secondary" className="border-transparent bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm"><Rocket className="mr-1.5 h-4 w-4" />Einsatzradius 60 km</Badge>
              <Badge variant="secondary" className="border-transparent bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm"><Users className="mr-1.5 h-4 w-4" />Schwerpunkte Web/Cloud/KI</Badge>
              <Badge variant="secondary" className="border-transparent bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm"><Check className="mr-1.5 h-4 w-4" />Ab sofort verfügbar</Badge>
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#kontakt">Kostenloses Erstgespräch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
