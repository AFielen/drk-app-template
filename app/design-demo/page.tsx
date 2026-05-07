import InlineHint, { HintDetails } from '@/components/ui/InlineHint';
import Stamp from '@/components/ui/Stamp';
import { DESIGN } from '@/lib/design';

export const metadata = {
  title: 'Design-Demo · DRK App Template',
};

export default function DesignDemoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <section className="drk-card drk-fade-in">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text)' }}>
              Design-Demo
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--text-light)' }}>
              Diese Seite rendert die Komponenten in der aktiven Design-Variante.
            </p>
          </div>
          <span className="drk-badge-success" aria-label="Aktive Design-Variante">
            Aktiv: {DESIGN}
          </span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
          InlineHint-Varianten
        </h2>

        <InlineHint variant="info" title="Information">
          Sachliche Information für den Anwender. Nutzbar für Hinweise auf Pflichtfelder,
          Fristen oder relevante Regelwerke.
        </InlineHint>

        <InlineHint variant="tip" title="Tipp">
          Empfehlung oder Best Practice — typischerweise optional, aber hilfreich.
        </InlineHint>

        <InlineHint variant="warning" title="Achtung">
          Warnt vor möglichen Folgen einer Aktion. Wird mit <code>role=&quot;alert&quot;</code>{' '}
          ausgespielt.
        </InlineHint>

        <InlineHint
          variant="henry"
          title="Berater-Hinweis"
          cta={{ href: '/hilfe', label: 'Mehr erfahren' }}
        >
          Sienna-Akzent für KI- oder Berater-Inhalte. In der Default-Variante fällt diese
          Variante auf Info-Tokens zurück.
        </InlineHint>

        <InlineHint
          variant="info"
          title="Dismissible"
          dismissible
          id="demo-dismissible"
        >
          Dieser Hinweis lässt sich ausblenden — die Wahl wird in <code>localStorage</code>{' '}
          gespeichert (Key: <code>hint-dismissed:demo-dismissible</code>).
        </InlineHint>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
          HintDetails (collapsible Card)
        </h2>
        <HintDetails title="Häufige Frage zu NIS-2">
          Antwort öffnet sich beim Klick auf den Titel. Die Zusammenfassung erfüllt 44 px
          Touch-Target-Anforderung und nutzt die DRK-Focus-Ring-Stile.
        </HintDetails>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
          Stamp
        </h2>
        <div className="flex flex-wrap gap-8 items-center">
          <Stamp label="Genehmigt" meta="07.05.2026" variant="drk" />
          <Stamp label="Entwurf" meta="V0.3" variant="henry" rotation={3} />
        </div>
      </section>

      <section className="drk-advisory-callout">
        <p className="text-sm">
          <strong>Hinweis-Block via <code>.drk-advisory-callout</code></strong> — eine
          weiche Sienna-Akzent-Box. In der Default-Variante neutralisiert sich der Block
          durch fehlende Henry-Tokens (kein visueller Bruch, aber auch keine besondere
          Hervorhebung).
        </p>
      </section>
    </div>
  );
}
