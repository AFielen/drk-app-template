import type { Metadata } from 'next';
import HeaderDefault from '@/components/Header';
import HeaderAdvisory from '@/components/HeaderAdvisory';
import FooterDefault from '@/components/FooterDefault';
import FooterAdvisory from '@/components/FooterAdvisory';
import { DESIGN } from '@/lib/design';
import './globals.css';

export const metadata: Metadata = {
  title: 'DRK APP_TITEL',
  description: 'APP_BESCHREIBUNG – DRK Kreisverband StädteRegion Aachen e.V.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const Header = DESIGN === 'advisory' ? HeaderAdvisory : HeaderDefault;
  const Footer = DESIGN === 'advisory' ? FooterAdvisory : FooterDefault;

  return (
    <html lang="de" data-design={DESIGN} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('drk-theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* ── Skip-to-Content (Barrierefreiheit) ── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded"
          style={{ background: 'var(--bg-card)', color: 'var(--drk)' }}
        >
          Zum Inhalt springen
        </a>

        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
