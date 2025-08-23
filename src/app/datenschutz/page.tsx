import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | TechNomic',
  robots: 'noindex, follow',
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p className="text-muted-foreground">Stand: {'{{EFFECTIVE_DATE}}'}</p>
      <div className="mt-8 space-y-6">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
        </p>
        <section>
          <h2 className="text-xl font-semibold">1. Verantwortlicher für die Datenverarbeitung</h2>
          <p className="mt-2">
            Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:
            <br />
            {'{{COMPANY_NAME}}'}
            <br />
            {'{{ADDRESS_STREET}}'}, {'{{ADDRESS_POSTCODE}}'} {'{{ADDRESS_CITY}}'}
            <br />
            E-Mail: {'{{EMAIL}}'}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">2. Hosting und Server-Logfiles</h2>
          <p className="mt-2">
            Um den sicheren und effizienten Betrieb dieser Website zu gewährleisten, nehmen wir Hosting-Leistungen von einem professionellen Anbieter in Anspruch.
            <br />
            <br />
            Anbieter: {'{{HOSTER_NAME}}'}, {'{{HOSTER_ADDRESS}}'}
            <br />
            Der Hoster erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und dessen Version</li>
            <li>Verwendetes Betriebssystem</li>
          </ul>
          <p className="mt-2">
            Diese Daten werden temporär gespeichert, um die Systemsicherheit zu gewährleisten, die Website technisch zu administrieren und Angriffe abwehren zu können. Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) am sicheren Betrieb unserer Website. Mit unserem Hoster haben wir einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">3. TLS/SSL-Verschlüsselung</h2>
          <p className="mt-2">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine TLS/SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">4. Kontaktaufnahme</h2>
          <p className="mt-2">
            Wenn Sie per Kontaktformular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Ihre Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen. Wir geben diese Daten nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">5. Cookies</h2>
          <p className="mt-2">
            Unsere Website verwendet ausschließlich technisch notwendige Cookies. Dies sind kleine Textdateien, die mithilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <p className="mt-2">
            Da wir keine analyse- oder marketingrelevanten Cookies einsetzen, ist keine gesonderte Cookie-Einwilligung (Banner) erforderlich.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">6. Optionaler KI-Chatbot</h2>
          <p className="mt-2">
            Sofern Sie unseren optionalen Chatbot nutzen, werden Ihre Eingaben zur Beantwortung Ihrer Anfrage an externe KI-Dienstleister (z.B. Google oder OpenAI, USA) übermittelt. Bitte geben Sie keine sensiblen oder personenbezogenen Daten in den Chat ein. Die Datenübermittlung in die USA erfolgt auf Basis von EU-Standardvertragsklauseln (Art. 46 DSGVO), um ein angemessenes Datenschutzniveau zu gewährleisten. Die Nutzung des Chatbots ist freiwillig und erfolgt auf Basis Ihrer konkludenten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) durch die aktive Nutzung.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">7. Ihre Rechte als betroffene Person</h2>
          <p className="mt-2">
            Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
          </p>
          <p className="mt-2">
            Wenn Sie eines dieser Rechte geltend machen möchten, kontaktieren Sie uns bitte unter: {'{{SUPPORT_EMAIL}}'}.
          </p>
          <p className="mt-2">
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die:
          </p>
          <p className="mt-2">
            Österreichische Datenschutzbehörde
            <br />
            Barichgasse 40–42, 1030 Wien
            <br />
            www.dsb.gv.at
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">8. Datenschutzbeauftragter (DSB)</h2>
          <p className="mt-2">{'{{DPO_CONTACT}}'}</p>
        </section>
      </div>
    </LegalLayout>
  );
}
