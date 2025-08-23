import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fingerprint, Lock, ShieldCheck, DatabaseBackup, Files, MonitorDot } from 'lucide-react';
import Image from 'next/image';

const securityFeatures = [
    { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Hosting in der EU", description: "Alle Daten werden ausschließlich auf Servern in Deutschland oder der EU nach höchsten Sicherheitsstandards gehostet." },
    { icon: <Lock className="h-6 w-6 text-primary" />, title: "Verschlüsselte Übertragung", description: "Sämtlicher Datenverkehr wird konsequent per SSL/TLS (HTTPS) verschlüsselt, um Ihre Daten zu schützen." },
    { icon: <DatabaseBackup className="h-6 w-6 text-primary" />, title: "Regelmäßige Backups", description: "Automatische, tägliche Backups Ihrer Website und Datenbanken zur schnellen Wiederherstellung im Notfall." },
    { icon: <Fingerprint className="h-6 w-6 text-primary" />, title: "Rollen- & Rechtesysteme", description: "Feingranulare Zugriffskontrollen stellen sicher, dass jeder Nutzer nur die für ihn relevanten Bereiche sieht und bearbeiten kann." },
    { icon: <Files className="h-6 w-6 text-primary" />, title: "AV-Vertrag (Auftragsverarbeitung)", description: "Auf Wunsch schließen wir einen DSGVO-konformen AV-Vertrag zur rechtlichen Absicherung der Datenverarbeitung ab." },
    { icon: <MonitorDot className="h-6 w-6 text-primary" />, title: "Security Monitoring & Logging", description: "Kontinuierliche Überwachung der Systeme auf verdächtige Aktivitäten und detaillierte Protokollierung sicherheitsrelevanter Events." },
];

export function SecuritySection() {
  return (
    <section id="sicherheit" className="relative bg-black py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="lg:pr-8">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Sicherheit & DSGVO
                </h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Ihre Daten sind Ihr wertvollstes Gut. Deshalb haben Sicherheit, Datenschutz und die Einhaltung der DSGVO bei mir oberste Priorität.
                </p>
                <ul className="mt-8 space-y-6">
                    {securityFeatures.map(feature => (
                        <li key={feature.title} className="flex items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold">{feature.title}</h3>
                                <p className="mt-1 text-foreground/70">{feature.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative flex h-full min-h-[400px] items-center justify-center">
                 <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 scale-90 rounded-full bg-[radial-gradient(circle,rgba(255,45,146,0.25)_0%,transparent_60%)] opacity-70 blur-3xl"
                ></div>
                <Card className="w-full max-w-md transform-gpu border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10">
                    <CardHeader className="items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                            <ShieldCheck className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="mt-4 text-2xl">DSGVO-Konformität</CardTitle>
                        <CardDescription className="mt-2">
                            Alle Lösungen werden unter strikter Beachtung der europäischen Datenschutz-Grundverordnung entwickelt und betrieben.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
