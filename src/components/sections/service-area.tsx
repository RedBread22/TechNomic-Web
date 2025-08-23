import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Link from "next/link";


export function ServiceAreaSection() {
  return (
    <section id="servicegebiet" className="relative bg-background overflow-hidden py-24 sm:py-32">
        <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-[-1] h-[80vh] w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-transparent"
        ></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Lokal verwurzelt, digital vernetzt
                </h2>
                <p className="mt-6 text-lg text-foreground/80">
                    Mein Haupt-Einsatzgebiet für persönliche Vor-Ort-Termine ist das steirische Salzkammergut und die umliegenden Regionen. Ich schätze den direkten Kontakt und komme für Workshops oder wichtige Besprechungen gerne bei Ihnen vorbei.
                    <br/><br/>
                    Dank digitaler Tools ist eine effiziente Zusammenarbeit aber auch überregional problemlos möglich. Ich betreue erfolgreich Kunden in ganz Österreich und Deutschland komplett remote.
                </p>
                <div className="mt-10">
                    <Button asChild size="lg" variant="ghost" className="rounded-full">
                        <Link href="#kontakt">Vor-Ort & Remote verfügbar</Link>
                    </Button>
                </div>
            </div>
            <div className="relative">
                 <Card className="border-white/10 bg-black/30 backdrop-blur-lg">
                    <CardContent className="p-8">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-8 w-8 text-primary" />
                            <h3 className="text-2xl font-bold">Servicegebiet</h3>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-foreground/80">
                            <ul className="space-y-2">
                                <li>Bad Mitterndorf</li>
                                <li>Bad Aussee</li>
                                <li>Grundlsee</li>
                                <li>Altaussee</li>
                                <li>Gröbming</li>
                            </ul>
                            <ul className="space-y-2">
                                <li>Liezen</li>
                                <li>Schladming</li>
                                <li>Bad Ischl</li>
                                <li>Gmunden</li>
                                <li>... und auf Anfrage</li>
                            </ul>
                        </div>
                    </CardContent>
                 </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
