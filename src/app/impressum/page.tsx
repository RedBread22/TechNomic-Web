import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Impressum | TechNomic',
  robots: 'noindex, follow',
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <div className="space-y-6">
        <p>
          Angaben gemäße § 5 E-Commerce-Gesetz (ECG), § 25 Mediengesetz (MedienG) und § 14 Unternehmensgesetzbuch (UGB).
        </p>

        <section>
          <h2 className="text-xl font-semibold">Medieninhaber und Herausgeber</h2>
          <p className="mt-2">
            {'{{COMPANY_NAME}}'}
            <br />
            {'{{ADDRESS_STREET}}'},<br />
            {'{{ADDRESS_POSTCODE}}'} {'{{ADDRESS_CITY}}'},
            <br />
            {'{{ADDRESS_COUNTRY}}'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p className="mt-2">
            Telefon: {'{{PHONE}}'}
            <br />
            E-Mail: {'{{EMAIL}}'}
            <br />
            Website: {'{{WEBSITE}}'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Unternehmensgegenstand</h2>
          <p className="mt-2">Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Umsatzsteuer-ID (UID)</h2>
          <p className="mt-2">{'{{UID}}'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Zuständige Aufsichtsbehörde</h2>
          <p className="mt-2">{'{{SUPERVISORY_AUTHORITY}}'}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kammerzugehörigkeit</h2>
          <p className="mt-2">{'{{CHAMBER_MEMBERSHIP}}'}</p>
          <p className="mt-2">
            Anwendbare berufsrechtliche Vorschriften sind insbesondere die Gewerbeordnung (GewO), abrufbar unter www.ris.bka.gv.at.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Online-Streitbeilegung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter ec.europa.eu/consumers/odr finden.
          </p>
          <p className="mt-2">
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit. Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
          <p className="mt-2">
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p className="mt-2">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
