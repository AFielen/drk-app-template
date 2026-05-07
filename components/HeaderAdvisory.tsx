'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HelpIcon } from '@/components/icons';
import ThemeToggle from '@/components/ThemeToggle';

export default function HeaderAdvisory() {
  return (
    <header
      className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 py-3"
      style={{ background: '#e30613', color: '#fff' }}
    >
      <Link href="/" className="flex items-center gap-3 min-w-0" aria-label="Zur Startseite">
        <Image src="/logo.png" alt="DRK Logo" width={38} height={38} priority className="flex-shrink-0" />
        <div className="min-w-0">
          <h1 className="font-serif text-[1.15rem] sm:text-[1.35rem] font-semibold leading-tight truncate">
            APP_TITEL
          </h1>
          <div className="text-[0.7rem] opacity-80 hidden sm:block tracking-wide">
            APP_UNTERTITEL
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <Link
          href="/hilfe"
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors"
          title="Hilfe"
          aria-label="Hilfe"
        >
          <HelpIcon />
        </Link>
      </div>
    </header>
  );
}
