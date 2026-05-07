'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Info, Lightbulb, AlertTriangle, X } from 'lucide-react';
import { HenryGlyph } from '@/components/icons';

export type InlineHintVariant = 'info' | 'tip' | 'warning' | 'henry';

interface InlineHintProps {
  variant?: InlineHintVariant;
  title?: string;
  icon?: ReactNode;
  dismissible?: boolean;
  id?: string;
  cta?: { href: string; label: string };
  children: ReactNode;
}

interface VariantStyle {
  bg: string;
  accent: string;
  text: string;
  title: string;
}

const VARIANT_STYLES: Record<InlineHintVariant, VariantStyle> = {
  info: {
    bg: 'var(--info-bg)',
    accent: 'var(--info-border)',
    text: 'var(--info-text)',
    title: 'var(--info-text)',
  },
  tip: {
    bg: 'var(--success-bg)',
    accent: 'var(--success)',
    text: 'var(--text)',
    title: 'var(--success)',
  },
  warning: {
    bg: 'var(--warning-bg)',
    accent: 'var(--warning-border)',
    text: 'var(--warning-text)',
    title: 'var(--warning-text)',
  },
  henry: {
    bg: 'var(--henry-bg, var(--info-bg))',
    accent: 'var(--henry, var(--info-border))',
    text: 'var(--text)',
    title: 'var(--henry, var(--info-text))',
  },
};

function defaultIcon(variant: InlineHintVariant): ReactNode {
  switch (variant) {
    case 'info':
      return <Info size={18} strokeWidth={1.75} aria-hidden="true" />;
    case 'tip':
      return <Lightbulb size={18} strokeWidth={1.75} aria-hidden="true" />;
    case 'warning':
      return <AlertTriangle size={18} strokeWidth={1.75} aria-hidden="true" />;
    case 'henry':
      return <HenryGlyph size={18} />;
  }
}

function storageKey(id: string): string {
  return `hint-dismissed:${id}`;
}

export default function InlineHint({
  variant = 'info',
  title,
  icon,
  dismissible = false,
  id,
  cta,
  children,
}: InlineHintProps) {
  const [hidden, setHidden] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const styles = VARIANT_STYLES[variant];
  const role = variant === 'warning' ? 'alert' : 'note';

  useEffect(() => {
    setHydrated(true);
    if (dismissible && id && typeof window !== 'undefined') {
      try {
        if (window.localStorage.getItem(storageKey(id)) === '1') {
          setHidden(true);
        }
      } catch {
        // localStorage may be disabled — ignore
      }
    }
  }, [dismissible, id]);

  function handleDismiss() {
    setHidden(true);
    if (id && typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(storageKey(id), '1');
      } catch {
        // ignore
      }
    }
  }

  if (dismissible && id && !hydrated) return null;
  if (hidden) return null;

  return (
    <div
      role={role}
      className="flex items-start gap-3 rounded-md p-3 sm:p-4 text-sm"
      style={{
        background: styles.bg,
        borderLeft: `4px solid ${styles.accent}`,
        color: styles.text,
        minHeight: 44,
      }}
    >
      <span
        className="shrink-0 flex items-center justify-center mt-0.5"
        style={{ color: styles.accent }}
      >
        {icon ?? defaultIcon(variant)}
      </span>
      <div className="flex-1 min-w-0 space-y-1">
        {title ? (
          <p className="font-semibold leading-snug" style={{ color: styles.title }}>
            {title}
          </p>
        ) : null}
        <div
          className="leading-relaxed"
          style={{ color: variant === 'warning' || variant === 'info' ? styles.text : 'var(--text-light)' }}
        >
          {children}
        </div>
        {cta ? (
          <p className="pt-1">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-1 font-medium hover:underline"
              style={{ color: styles.accent }}
            >
              {cta.label} →
            </Link>
          </p>
        ) : null}
      </div>
      {dismissible ? (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Hinweis ausblenden"
          className="shrink-0 rounded-md p-1 hover:opacity-70 transition-opacity"
          style={{ color: styles.accent, minWidth: 32, minHeight: 32 }}
        >
          <X size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}

interface HintDetailsProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function HintDetails({ title, children, defaultOpen = false }: HintDetailsProps) {
  return (
    <details
      className="drk-card"
      style={{ padding: '0.75rem 1rem' }}
      open={defaultOpen}
    >
      <summary className="drk-summary text-sm">{title}</summary>
      <div className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-light)' }}>
        {children}
      </div>
    </details>
  );
}
