import Link from 'next/link';
import { RedCrossIcon } from '@/components/icons';

export default function FooterDefault() {
  return (
    <footer
      className="text-center py-10 mt-8 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <div
        className="text-sm font-bold uppercase tracking-widest mb-2"
        style={{ color: 'var(--drk)' }}
      >
        Deutsches Rotes Kreuz
      </div>
      <div className="text-sm mb-3" style={{ color: 'var(--text-light)' }}>
        Kreisverband StädteRegion Aachen e.V.
      </div>
      <div className="text-xs mb-3" style={{ color: 'var(--text-light)' }}>
        <Link href="/impressum" className="hover:underline" style={{ color: 'inherit' }}>
          Impressum
        </Link>
        {' · '}
        <Link href="/datenschutz" className="hover:underline" style={{ color: 'inherit' }}>
          Datenschutz
        </Link>
        {' · '}
        <Link href="/hilfe" className="hover:underline" style={{ color: 'inherit' }}>
          Hilfe
        </Link>
        {' · '}
        <Link href="/spenden" className="hover:underline" style={{ color: 'inherit' }}>
          Unterstützen
        </Link>
      </div>
      <div
        className="text-xs flex items-center justify-center gap-1"
        style={{ color: 'var(--text-light)' }}
      >
        made with{' '}
        <span style={{ color: 'var(--drk)' }}>❤</span>{' '}
        for{' '}
        <RedCrossIcon />
      </div>
    </footer>
  );
}
