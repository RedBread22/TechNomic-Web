import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="absolute left-[65%] top-[20%] z-[-1] h-[70vw] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.25)_0%,transparent_60%)] opacity-70 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-[-20%] left-[50%] z-[-1] h-[50vw] w-[50vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,149,0,0.15)_0%,transparent_70%)] opacity-70 blur-3xl"
      ></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Innovative IT, Websites & KI-Automatisierung.
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Moderne Weblösungen, Cloud-Hosting und smarte Automationen –
              DSGVO-konform und lokal betreut.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button asChild size="lg" className="rounded-full relative overflow-hidden">
                <Link href="#konfigurator">
                  <>
                    <span className="absolute inset-[-100%] z-0 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF9500_0%,#FF2D92_50%,#FF9500_100%)]"></span>
                    <span className="relative z-10">Konfigurator starten</span>
                  </>
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full">
                <Link href="#kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
