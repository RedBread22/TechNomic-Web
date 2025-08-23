import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Was kostet eine Website oder eine individuelle Lösung?",
    answer: "Die Kosten sind stark vom Umfang abhängig. Eine einfache Landingpage beginnt bei ca. 1.500€. Der Konfigurator gibt Ihnen eine erste, unverbindliche Schätzung. Für ein genaues Angebot besprechen wir Ihre Anforderungen in einem kostenlosen Erstgespräch."
  },
  {
    question: "Wie lange dauert die Umsetzung eines Projekts?",
    answer: "Eine einfache Website kann oft innerhalb von 2-4 Wochen live gehen. Bei komplexeren Projekten wie individuellen Web-Apps oder KI-Integrationen hängt die Dauer von den spezifischen Anforderungen ab. Ein genauer Zeitplan wird Teil meines Angebots sein."
  },
  {
    question: "Muss ich mich selbst um Hosting und Domain kümmern?",
    answer: "Nein, das übernehme ich gerne für Sie. Ich biete performante und sichere Cloud-Hosting-Pakete an, die auf EU-Servern laufen. So haben Sie alles aus einer Hand und müssen sich um die technischen Details keine Sorgen machen."
  },
  {
    question: "Bieten Sie auch Wartung und Support nach dem Go-Live an?",
    answer: "Ja, absolut. Ich biete optionale Wartungsverträge an, die regelmäßige Updates, Sicherheits-Checks und Backups beinhalten. Auch für Support bei Fragen oder kleineren Anpassungen stehe ich Ihnen jederzeit zur Verfügung."
  },
  {
    question: "Wie funktioniert die KI-Automatisierung genau?",
    answer: "Ich analysiere Ihre wiederkehrenden Arbeitsabläufe (z.B. E-Mail-Beantwortung, Dateneingabe, Terminkoordination) und entwickle KI-gestützte Bots oder Skripte, die diese Aufgaben für Sie übernehmen. Das spart Zeit, reduziert Fehler und steigert die Effizienz."
  },
  {
    question: "Arbeiten Sie nur vor Ort im Salzkammergut?",
    answer: "Mein Servicegebiet für persönliche Termine umfasst das steirische Salzkammergut und Umgebung. Die meisten Projekte können jedoch problemlos remote umgesetzt werden, sodass ich Kunden in ganz Österreich und Deutschland betreuen kann."
  }
]


export function FaqSection() {
  return (
    <section id="faq" className="relative bg-transparent py-24 sm:py-32">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Antworten auf die wichtigsten Fragen rund um meine Services.
          </p>
        </div>
        <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                    <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-foreground/80">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
