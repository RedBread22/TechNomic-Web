import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Innovative IT, Websites & KI-Automatisierung.
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Moderne Weblösungen, Cloud-Hosting und smarte Automationen –
              DSGVO-konform und lokal betreut.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#konfigurator">Konfigurator starten</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <Link href="#kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="rounded-xl bg-card/60 p-2 backdrop-blur-sm">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Illustration von Charts und Code"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="charts code dark"
                  priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
