import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | TechNomic',
  robots: 'noindex, follow',
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <p className="text-muted-foreground">Stand: {'{{EFFECTIVE_DATE}}'}</p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">1. Geltungsbereich</h2>
          <p className="mt-2">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über IT-Dienstleistungen, insbesondere Website-Erstellung, Hosting, Wartung und IT-Support, zwischen {'{{COMPANY_NAME}}'} (nachfolgend „Auftragnehmer“) und seinen Kunden (nachfolgend „Auftraggeber“). Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. Angebot und Vertragsabschluss</h2>
          <p className="mt-2">
            Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch den Beginn der Leistungserbringung zustande. Der genaue Leistungsumfang wird im jeweiligen Angebot bzw. im Pflichtenheft (Statement of Work) detailliert beschrieben.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. Pflichten des Auftraggebers (Mitwirkungspflichten)</h2>
          <p className="mt-2">
            Der Auftraggeber ist verpflichtet, alle für die Leistungserbringung notwendigen Informationen, Daten und Unterlagen (z.B. Texte, Bilder, Zugangsdaten) rechtzeitig und in geeigneter Form zur Verfügung zu stellen. Er ist für die Sicherung seiner eigenen Daten vor Beginn der Arbeiten verantwortlich.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">4. Preise und Zahlungsbedingungen</h2>
          <p className="mt-2">
            Alle Preise verstehen sich in Euro, sofern nicht anders angegeben, und exklusive der gesetzlichen Umsatzsteuer. Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu verrechnen und die Leistungserbringung bis zur vollständigen Bezahlung auszusetzen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">5. Nutzungsrechte (IP) und Eigentumsvorbehalt</h2>
          <p className="mt-2">
            Bis zur vollständigen Bezahlung der vereinbarten Vergütung bleiben alle erbrachten Leistungen und Werke (z.B. Designs, Code) Eigentum des Auftragnehmers. Die für die Nutzung der erstellten Website erforderlichen Nutzungsrechte gehen erst mit vollständiger Bezahlung auf den Auftraggeber über. Der Auftragnehmer ist berechtigt, einen dezenten Hinweis auf seine Urheberschaft im Footer der Website zu platzieren.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">6. Haftung</h2>
          <p className="mt-2">
            Der Auftragnehmer haftet nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen. Die Haftung für leichte Fahrlässigkeit, entgangenen Gewinn, Folgeschäden sowie für Datenverlust ist ausgeschlossen. Für die Inhalte (Texte, Bilder, etc.), die der Auftraggeber bereitstellt, ist ausschließlich dieser verantwortlich. Der Auftragnehmer übernimmt keine Haftung für Rechtsverletzungen, die aus diesen Inhalten resultieren.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">7. Datenschutz und Vertraulichkeit</h2>
          <p className="mt-2">
            Der Auftragnehmer verarbeitet personenbezogene Daten im Einklang mit der DSGVO. Details dazu finden Sie in unserer Datenschutzerklärung. Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten Geschäfts- und Betriebsgeheimnisse vertraulich zu behandeln.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">8. Widerrufsrecht für Verbraucher (Fernabsatz)</h2>
          <p className="mt-2">
            Sofern der Auftraggeber Verbraucher im Sinne des KSchG ist, steht ihm bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht von 14 Tagen ab Vertragsabschluss zu. Der Auftraggeber wird darüber gesondert belehrt und erhält ein Muster-Widerrufsformular. Verlangt der Auftraggeber, dass der Auftragnehmer vor Ablauf der Widerrufsfrist mit der Dienstleistung beginnt, und wird die Dienstleistung vollständig erbracht, verliert der Auftraggeber sein Widerrufsrecht.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">9. Gerichtsstand und anwendbares Recht</h2>
          <p className="mt-2">
            Es gilt ausschließlich österreichisches Recht unter Ausschluss des UN-Kaufrechts. Als Gerichtsstand für alle Streitigkeiten wird das für {'{{ADDRESS_CITY}}'} sachlich zuständige Gericht vereinbart.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">10. Schlussbestimmungen</h2>
          <p className="mt-2">
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die dem wirtschaftlichen Zweck der ursprünglichen Bestimmung am nächsten kommt.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
